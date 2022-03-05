import dbConnect from "../../../lib/mongoose";
import Tournament from "../../../models/Tournament";

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === "GET") {
        dbConnect();
        const tournament = await Tournament.find({ id: req.query.id });

        if (!tournament[0] === undefined) {
            res.status(200).json(tournament[0]);
            return true;
        } else {
            res.status(404).json({ message: "Not Found" });
            return false;
        }
    }

    res.end();
    return false;
}
