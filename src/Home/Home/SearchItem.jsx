import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchItem = () => {
  const [searchItem, setSearchItem] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("detailsdata.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchResults(results);
  }, [searchItem, data]);

  return (
    <div className="container mx-auto  mt-10">
      <h1 className="md:text-2xl font-bold text-center  text-3xl mb-4">
        <span className="text-blue-500">Chartered</span> Accountant Search
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Accountant Name..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className=" mx-auto md:w-[50%] w-full px-5 p-2 border rounded-lg shadow-md mb-4"
        />
      </div>
      {searchItem.length > 0 && (
        <ul>
          <h1 className="text-sm font-serif font-bold">
            Click the name go to details page
          </h1>
          {searchResults.map((result, index) => (
            <Link
              to={`/details/${result.id}`}
              key={index}
              className="text-xl text-sky-500 mb-2 block"
            >
              {result.name}
            </Link>
          ))}
        </ul>
      )}
      {searchItem.length > 0 && searchResults.length === 0 && (
        <p className="text-red-500 mt-4">No results found for {searchItem}</p>
      )}
    </div>
  );
};

export default SearchItem;
