import Nav from "@/components/Nav";
import "../../dist/output.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
