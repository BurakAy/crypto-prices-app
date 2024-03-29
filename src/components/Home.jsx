import Link from "next/link";
import Image from "next/image";

const Home = ({ data }) => {
  const handleAddToWatchlist = async (coin) => {
    try {
      const response = await fetch("/api/watchlist-add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coin: coin }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-5">
        Top 20 Cryptocurrencies By Market Cap
      </h1>

      <div className="flex flex-wrap justify-center m-5 gap-5">
        {data.map((coin) => {
          const dateTime = new Date(coin.last_updated);
          const dateUpdated = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
            timeZone: "America/New_York",
            timeZoneName: "short",
          }).format(dateTime);
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
              <Link href={`/${coin.id}`} className="flex flex-col">
                <Image
                  className="self-center"
                  src={coin.image}
                  alt={coin.name}
                  width="100"
                  height="100"
                />
                <h2 className="self-center">{coin.name}</h2>
                <p>Symbol: {coin.symbol}</p>
                <p>Price: {coinPrice}</p>
                <p>24hr: {coinPriceChange}</p>
                <p>Updated: {dateUpdated}</p>
              </Link>
              <button
                data-coin={coin.id}
                onClick={() => handleAddToWatchlist(coin.id)}
                className="mt-2 p-1 border-2 rounded-md"
              >
                Add to watchlist
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
