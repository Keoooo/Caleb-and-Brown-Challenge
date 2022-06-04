import "../styles/globals.css";
import NextNprogress from "next-progress";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress color="#B47382" height="5px" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
