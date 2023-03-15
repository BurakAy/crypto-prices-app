import CategoriesCrypto from "@/components/CryptoCategories";

const Crypto = ({ data }) => {
  return (
    <>
      <CategoriesCrypto data={data} />
    </>
  );
};

export default Crypto;

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/categories/list"
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
