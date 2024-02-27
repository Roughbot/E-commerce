import { useState } from "react";
import { useGetProductDataQuery } from "../../state/productSlice";
import ProductList from "../../components/ProductList/ProductList";
import { useGetSearchItemQuery } from "../../state/productSlice";

const Products = () => {
  const [searchData, setSearchData] = useState("");
  const [searchDataResult, setSearchDataResult] = useState([]);
  const { data = [], isLoading } = useGetProductDataQuery();
  const [dataLoading, setDataLoading] = useState(false);

  const searchResult = useGetSearchItemQuery(searchData);

  const handleSearch = () => {
    const { data: products } = searchResult || [];
    setSearchDataResult(products);
    setDataLoading(true);
  };

  return (
    <div>
      <div className="flex flex-row gap-6 items-center justify-center mx-12">
        <input
          className="flex  bg-slate-100 w-1/3 rounded-md p-2 text-black"
          type="text"
          placeholder="Search Products"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
            setDataLoading(false);
          }}
        />
        <button
          onClick={() => {
            handleSearch();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      {dataLoading && (
        <div>
          <h1 className="flex text-2xl font-bold justify-start mx-8 mt-12 max-w-full">
            Search Result
          </h1>
          <hr />
          <div>
            <ProductList mensShirt={searchDataResult} isLoading={isLoading} />
          </div>
        </div>
      )}
      <div>
        <h1 className="flex text-2xl font-bold justify-start mx-8 mt-12 max-w-full">
          All Collection of Products
        </h1>
        <hr />
        <div>
          <ProductList mensShirt={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Products;
