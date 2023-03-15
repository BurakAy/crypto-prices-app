import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../../dist/output.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
