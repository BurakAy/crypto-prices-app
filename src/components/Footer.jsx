import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 mb-3 text-center text-sm">
      <Link
        className="text-blue-600"
        href="https://www.linkedin.com/in/aydemirburak/"
        target="_blank"
      >
        Burak Aydemir
      </Link>{" "}
      Development |&nbsp;
      <Link
        className="text-blue-600 text-xs"
        href="https://www.coingecko.com/en/api"
        target="_blank"
      >
        Data provided by CoinGecko API
      </Link>
    </footer>
  );
};

export default Footer;
