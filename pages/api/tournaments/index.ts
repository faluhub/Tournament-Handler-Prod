import dbConnect from "../../../lib/dbConnect";
import Tournament from "../../../models/Tournament";

async function handleGet(req: any, res: any) {
    let tournaments = await Tournament.find({ public: true });
    res.status(200).json({
        success: true,
        tournaments
    });
    return true;
}

async function handlePost(req: any, res: any) {
    // TODO validate fields monkaLaugh
    let tournament = await Tournament.create(req.body.tournament);
    res.status(200).json({
        success: true,
        tournament
    });
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
            res.status(500).json({ success: false });
            return false;
        }
    }

    res.end();
    return false;
}