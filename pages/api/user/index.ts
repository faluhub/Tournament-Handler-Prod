import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import { RawUserSchema } from "../../../models/User";

async function handleGet(req: any, res: any) {
    res.status(404).json({ message: "Not Found" });
    return false;
}

async function handlePost(req: any, res: any) {
    let data = {};

    for (var i in req.body) {
        if (Object.keys(RawUserSchema).includes(i.toLowerCase())) {
            data[i.toLowerCase()] = req.body[i];
        } else {
            res.status(400).json({ message: "Bad Request" });
            return false;
        }
    }

    if (Object.keys(data).length < Object.keys(RawUserSchema).length) {
        res.status(400).json({ message: "Bad Request" });
        return false;
    }

    let user = await User.create(data);
    user = await User.find({ id: user.id }, {_id: 0, __v: 0});

    res.status(200).json(user);
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