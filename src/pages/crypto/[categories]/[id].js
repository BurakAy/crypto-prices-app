import Image from "next/image";
import Link from "next/link";

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
  sparkLine,
}) => {
  return (
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
  const price = data.market_data.current_price;
  const rank = data.market_cap_rank;
  const high = data.market_data.high_24h;
  const low = data.market_data.low_24h;
  const percentChange = data.market_data.price_change_percentage_24h;
  const sparkLine = data.market_data.sparkline_7d;

  return {
    props: {
      id,
      image,
      name,
      ticker,
      price,
      rank,
      high,
      low,
      percentChange,
      sparkLine,
    },
  };
}
