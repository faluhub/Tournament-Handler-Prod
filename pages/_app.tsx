import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <div className="mount">
            <SessionProvider session={pageProps.session}>
                {
                    !router.route.includes("spectate/") ? (
                        // navbar here
                        ("")
                    ) : ("")
                }
                <Component {...pageProps} />
            </SessionProvider>
        </div>
    );
}

export default MyApp;
