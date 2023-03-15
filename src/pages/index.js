import styles from "@/styles/Home.module.css";
import Home from "@/components/Home";

export default function HomePage({ data }) {
  return (
    <>
      <main className={styles.main}>
        <Home data={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
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
