import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 800,   // animation speed
      once: true,      // animate only once
      easing: "ease-in-out",
    });
  }, []);

  return <Component {...pageProps} />;
}
