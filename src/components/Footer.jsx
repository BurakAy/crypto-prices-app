import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 mb-3 text-center">
      Burak Aydemir Development | Data provided by{" "}
      <Link
        className="text-blue-600"
        href="https://www.coingecko.com/en/api"
        target="_blank"
      >
        CoinGecko API
      </Link>
    </footer>
  );
};

export default Footer;
