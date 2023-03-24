const DataTable = ({ coinData }) => {
  console.log(coinData.price.usd);

  const coinPrice = (coinVal) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 20,
    }).format(coinVal);
  };

  const coinPriceChange = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(coinData.percentChange / 100);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>24h high</th>
          <th>24h low</th>
          <th>% change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{coinData.ticker}</td>
          <td>{coinData.name}</td>
          <td>{coinData.category}</td>
          <td>{coinPrice(coinData.price.usd)}</td>
          <td>{coinPrice(coinData.high.usd)}</td>
          <td>{coinPrice(coinData.low.usd)}</td>
          <td>{coinPriceChange}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
