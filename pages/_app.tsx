import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <div className="mount">
            {
                !router.route.includes("spectate/") ? (
                    // navbar here
                    ("")
                ) : ("")
            }
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
