import Link from "next/link";
import Image from "next/image";

const CryptoCategories = ({ data, coinCategory }) => {
  return (
    <div>
      <h1 className="text-center mt-3 mb-5">{coinCategory.toUpperCase()}</h1>
      <div className="flex flex-wrap justify-center m-5 gap-5">
        {data.map((coin) => {
          const dateUpdated = new Date(coin.last_updated).toLocaleString();
          const coinPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 20,
          }).format(coin.current_price);

          const coinPriceChange = new Intl.NumberFormat("en-US", {
            style: "percent",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(coin.price_change_percentage_24h / 100);

          return (
            <div
              key={coin.id}
              className="p-3 w-1/4 border-2 rounded-md shadow-sm hover:shadow-lg"
            >
              <Link
                href={`/crypto/${coinCategory}/${coin.id}`}
                className="flex flex-col"
              >
                <Image
                  className="self-center"
                  src={coin.image}
                  alt={coin.name}
                  width="100"
                  height="100"
                />
                <h2 className="text-center">{coin.name}</h2>
                <p>Symbol: {coin.symbol}</p>
                <p>Price: {coinPrice}</p>
                <p>24hr: {coinPriceChange}</p>
                <p>Updated: {dateUpdated}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoCategories;

export async function getServerSideProps(context) {
  const coinCategory = context?.params.categories;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${coinCategory}&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  );
  const data = await res.json();

  return {
    props: { data, coinCategory },
  };
}
