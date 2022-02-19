import dbConnect from "../../../lib/dbConnect";
import Tournament from "../../../models/Tournament";

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === "GET") {
        dbConnect();
        let tournament = await Tournament.findById(req.query.id);
        res.status(200).json(tournament);
        return true;
    }

    res.end();
    return false;
}