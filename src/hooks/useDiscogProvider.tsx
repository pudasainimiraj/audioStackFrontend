import React, { useState, createContext, useEffect } from "react";

export const DiscogsListContext = createContext({});

export const DiscogsProvider = (props: any) => {
  const [item, setItem] = useState([]);
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("artist");

  useEffect(() => {
    fetchData("The Beatles"); 
  }, []);

  const fetchData = async (search: any, page = 1) => {  // Added `page` parameter with default value
    try {
      setLoading(true);

      console.log(search);
      // Adjusted URL to include `per_page` and `page` parameters
      const url = `https://api.discogs.com/database/search?q=${search}&type=${type}&key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}&per_page=5&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setLoading(false);

      // console.log("Pagination:", data.pagination);  // Debugging output
      // console.log("Results per page:", data.results);

      setResults(data.results);
      setPagination(data.pagination);
    } catch (err:any) {
      console.error("Fetching error:", err);
      alert("Failed to fetch data: " + err.message);
    }
  };

  const value = {
    results,
    setResults,
    item,
    setItem,
    pagination,
    setPagination,
    fetchData,
    loading,
    setLoading,
    type,
    setType,
  };

  return (
    <DiscogsListContext.Provider value={value}>
      {props.children}
    </DiscogsListContext.Provider>
  );
};
