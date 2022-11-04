import { useEffect, useState } from "react";
import Preloader from "../componet/Preloader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // using setTimeout in a preloader is a VERY VERY VERY VERY BAD ux practice cause the page might have load in less than the specified time but won't be displayed on the screen as the specified time hasn't been exhausted yet and you'll only be making the users wait for nothing but this was done to give a feel of an actual app like when you start your whatsapp or app instagram and it displays the logo before loading your messages/feed

    // this was done to give that feeling and should not be done on an actual website
    setTimeout(() => setLoading(true), 3000);
  });
  return <>{!loading ? <Preloader /> : <Component {...pageProps} />}</>;
}
export default MyApp;
