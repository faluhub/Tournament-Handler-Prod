import dbConnect from "../../../lib/dbConnect";
import Tournament from "../../../models/Tournament";
import { RawTournamentSchema } from "../../../models/Tournament";

async function handleGet(req: any, res: any) {
    let tournaments = await Tournament.find({ public: true }, {_id: 0, __v: 0});

    res.status(200).json(tournaments);
    return true;
}

async function handlePost(req: any, res: any) {
    let data = {};

    for (var i in req.body) {
        if (Object.keys(RawTournamentSchema).includes(i.toLowerCase())) {
            data[i.toLowerCase()] = req.body[i];
        } else {
            res.status(400).json({ message: "Bad Request" });
            return false;
        }
    }

    if (Object.keys(data).length < Object.keys(RawTournamentSchema).length) {
        res.status(400).json({ message: "Bad Request" });
        return false;
    }

    let tournament = await Tournament.create(data);

    res.status(200).json(tournament);
    return true;
}

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === "GET" || req.method === "POST") {
        try {
            dbConnect();
            return req.method === "GET" ? handleGet(req, res) : handlePost(req, res);
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
            return false;
        }
    }

    res.end();
    return false;
}