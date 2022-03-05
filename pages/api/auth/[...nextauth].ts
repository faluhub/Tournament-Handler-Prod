import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";
import process from "process";
import axios from "axios";

import clientPromise from "../../../lib/mongodb";

const getCountryCode = async () => {
    const location = await axios.get("https://ipapi.co/json/") as any;
    return location.data.country_code;
}

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        TwitchProvider({
            clientId: String(process.env.TWITCH_CLIENT_ID),
            clientSecret: String(process.env.TWITCH_CLIENT_SECRET),
        })
    ],
    theme: {
        "brandColor": "#fff",
        "colorScheme": "dark",
        "logo": "/favicon.ico"
    },
    adapter: MongoDBAdapter(clientPromise, {
        collections: {
            Accounts: "authAccounts",
            Sessions: "authSessions",
            Users: "authUsers",
            VerificationTokens: "authVerificationTokens"
        }
    }),
    session: {
        strategy: "database",
        maxAge: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24
    },
    callbacks: {
         signIn: async (params) => {
            var url = "http://localhost:3000";
            if (process.env.NODE_ENV === "production") {
                url = String(process.env.DOMAIN);
            }

            var username = params.profile.preferred_username;
            if (!username) { username = params.user.name; }

            axios.post(url + "/api/user", {
                id: params.profile.sub,
                name: username,
                image: params.profile.picture,
                active: false,
                country: await getCountryCode(),
                spectating: "",
                participating: ""
            }).catch(e => { return; });

            return params;
         }
    }
});
