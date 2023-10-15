import "./Benner.css";
import image1 from "../../../public/Picture.png";
import image2 from "../../../public/Picture (1).png";
import image3 from "../../../public/Picture (2).png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Benner = () => {
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
    <div className="bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="md:flex bennerr py-20 w-[90%] mx-auto bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="px-6">
          <h1 className="text-4xl font-sans font-bold">
            Find <span className="text-blue-500">Partners</span> (CAs) <br />{" "}
            available online
          </h1>
          <p className="mt-4">
            <span className=" text-gray-400 font-semibold">CONNECT</span> with
            us where your services are listed and visible to a myriad <br /> of
            businesses seeking CA’s for compliance support
          </p>
          <div className="form-control mt-8">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="input input-bordered md:w-80 w-48"
              />
              <button className="px-4 py-1 search-btn text-xs font-semibold">
                Search
              </button>
            </div>
          </div>
          {searchItem.length > 0 && (
            <ul>
              {" "}
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
            <p className="text-red-500 mt-4">
              No results found for {searchItem}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <img className="mt-8 md:w-50 md:h-80 h-44 w-36" src={image1} alt="" />
          <img className="mb-8 md:w-50 md:h-80 h-44 w-36" src={image2} alt="" />
          <img className="mt-4 md:w-50 md:h-80 h-44 w-36" src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benner;
