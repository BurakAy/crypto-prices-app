import Image from "next/image";
import Link from "next/link";

const CategoryCoin = ({ data }) => {
  return <h1 className="text-center mt-3 mb-5">{data.id.toUpperCase()}</h1>;
};

export default CategoryCoin;

export async function getServerSideProps(context) {
  const coinID = context?.params.id;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinID}?sparkline=true`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
