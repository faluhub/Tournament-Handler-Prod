import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(req: any, res: any) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    try {
        if (req.method === "POST") {
            dbConnect();
            // TODO validate fields monkaLaugh
            let user = await User.create(req.body.user);
            res.status(200).json({
                success: true,
                user
            });
            return true;
        }
    } catch (err) {
        res.status(500).json({ success: false });
        return false;
    }

    res.end();
    return false;
}