import dbConnect from "../../../lib/mongoose";
import User from "../../../models/User";

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    try {
        if (req.method === "GET") {
            dbConnect();
            const user = await User.find({ id: req.query.id});
            
            if (!user[0] === undefined) {
                res.status(200).json(user[0]);
                return true;
            } else {
                res.status(404).json({ message: "Not Found" });
                return false;
            }
        }
    } catch(e) {
        res.status(500).json({ message: "Internal Server Error" });
        return false;
    }

    res.end();
    return false;
}