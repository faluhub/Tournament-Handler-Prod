import dbConnect from "../../../lib/dbConnect";
import Tournament from "../../../models/Tournament";

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    if (req.method === "GET") {
        dbConnect();
        let tournaments = await Tournament.find({ public: true });
        res.status(200).json({ tournaments });
        return true;
    }

    res.end();
    return false;
}