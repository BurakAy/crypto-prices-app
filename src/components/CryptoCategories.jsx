import Link from "next/link";

const CategoriesCrypto = ({ data }) => {
  return (
    <div>
      <h1 className="text-center mt-3 mb-5">Crypto Categories</h1>
      <div className="flex flex-wrap justify-center m-5 gap-5">
        {data.map((category) => {
          return (
            <div
              key={category.category_id}
              className="p-3 w-1/4 border-2 rounded-md shadow-sm hover:shadow-lg flex justify-center items-center"
            >
              <Link
                href={`/crypto/${category.category_id}`}
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-center">{category.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesCrypto;
