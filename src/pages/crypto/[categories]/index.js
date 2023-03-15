import CategoriesCoins from "@/components/CategoriesCoins";

const CryptoCategories = ({ data, coinCategory }) => {
  return (
    <>
      <CategoriesCoins data={data} coinCategory={coinCategory} />
    </>
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
