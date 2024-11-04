import React, { useState } from 'react'
import "./searchBar.scss";
//insted of doing this all thing for type i can do this go to end ....

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const SwitchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type) => (
          <button key={type}
            onClick={() => SwitchType(type)}
            className={query.type === type ? "active" : ""}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type='text' name='location' placeholder='City Location'
        />
        <input type='number' name='minPrice' min={0} max={100000000} placeholder='Min Price'
        />
        <input type='number' name='maxPrice' min={0} max={100000000} placeholder='Max Price'
        />
        <button>
          <img src='/search.png' alt='' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar;


// function SearchBar() {
//   const [type, setType] = useState("buy"); // Separate state just for type

//   return (
//     <div className='searchBar'>
//       {/* Toggle buttons for "buy" and "rent" */}
//       <div className="type">
//         <button
//           onClick={() => setType("buy")}
//           className={type === "buy" ? "active" : ""}
//         >
//           Buy
//         </button>
//         <button
//           onClick={() => setType("rent")}
//           className={type === "rent" ? "active" : ""}
//         >
//           Rent
//         </button>
//       </div>