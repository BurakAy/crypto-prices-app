import Image from "next/image";
import LineChart from "./LineChart";

const CryptoCoin = ({ coinData, pdata }) => {
  return (
    <div>
      <div className="flex justify-center items-center mt-3 mb-5">
        <Image
          className="mr-2"
          src={coinData.image.small}
          alt={coinData.name}
          width="35"
          height="35"
        />
        <h1>
          {coinData.id.toUpperCase()} ({coinData.ticker})
        </h1>
      </div>

      <LineChart coinPrices={pdata} />
    </div>
  );
};

export default CryptoCoin;
