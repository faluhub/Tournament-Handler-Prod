import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === "GET") {
        dbConnect();
        let user = await User.findById(req.query.id);
        res.status(200).json(user);
        return true;
    }

    res.end();
    return false;
}