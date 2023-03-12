import Image from "next/image";
import LineChart from "@/components/LineChart";

const CategoryCoin = ({
  id,
  image,
  name,
  ticker,
  price,
  rank,
  high,
  low,
  percentChange,
  pdata,
}) => {
  return (
    <div>
      <div className="flex justify-center items-center mt-3 mb-5">
        <Image
          className="mr-2"
          src={image.small}
          alt={name}
          width="35"
          height="35"
        />
        <h1>
          {id.toUpperCase()} ({ticker})
        </h1>
      </div>

      <LineChart coinPrices={pdata} />
    </div>
  );
};

export default CategoryCoin;

export async function getServerSideProps(context) {
  const coinID = context?.params.id;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinID}?community_data=false&developer_data=false&sparkline=true`
  );
  const data = await res.json();
  const id = data.id;
  const image = data.image;
  const name = data.name;
  const ticker = data.symbol;
  const category = data.categories[1];
  const price = data.market_data.current_price;
  const rank = data.market_cap_rank;
  const high = data.market_data.high_24h;
  const low = data.market_data.low_24h;
  const percentChange = data.market_data.price_change_percentage_24h;

  const pres = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=7`
  );
  const pdata = await pres.json();

  return {
    props: {
      id,
      image,
      name,
      ticker,
      category,
      price,
      rank,
      high,
      low,
      percentChange,
      pdata,
    },
  };
}
