import CryptoCoin from "@/components/CryptoCoin";

const Coin = ({ coinData, pdata }) => {
  return (
    <>
      <CryptoCoin coinData={coinData} pdata={pdata} />
    </>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const coinID = context?.params.id;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinID}?community_data=false&developer_data=false`
  );
  const data = await res.json();

  const coinData = {
    id: data.id,
    image: data.image,
    name: data.name,
    ticker: data.symbol,
    category: data.categories[1],
    price: data.market_data.current_price,
    rank: data.market_cap_rank,
    high: data.market_data.high_24h,
    low: data.market_data.low_24h,
    percentChange: data.market_data.price_change_percentage_24h,
  };

  const pres = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=7`
  );
  const pdata = await pres.json();

  return {
    props: {
      coinData,
      pdata,
    },
  };
}
