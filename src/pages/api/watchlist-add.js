import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "watchlist.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { coin } = req.body;
  const filePath = buildPath();
  const data = extractData(filePath);

  // if (!data.coins) {
  //   return res.status(404).json({ status: 404, message: "No data" });
  // }

  if (req.method === "POST") {
    const newWatchlist = data.watchlist.map((acoin) => {
      if (acoin.coins.includes(coin)) {
        return acoin;
      } else {
        return {
          ...acoin,
          coins: [...acoin.coins, coin],
        };
      }
    });

    console.log(newWatchlist);

    fs.writeFileSync(filePath, JSON.stringify({ watchlist: newWatchlist }));

    res.status(200).json({ message: `watching coin ${coin}` });
  }
}
