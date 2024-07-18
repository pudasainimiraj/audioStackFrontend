import React, { useState, createContext, useEffect } from "react";

export const DiscogsListContext = createContext({});

export const DiscogsProvider = (props: any) => {
  const [item, setItem] = useState([]);
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("artist");

    useEffect(() => {
        
    fetchData("LAX"); 
  }, []);

  const fetchData = async (search:any) => {
    try {
        setLoading(true);
        console.log(process.env.REACT_APP_API_KEY);
      const response = await fetch(
        `https://api.discogs.com//database/search?q=${search}&key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}`
      );
      const data = await response.json();
      setLoading(false);
      const pagination = data.pagination;
      console.log("p", pagination);
      const results = data.results;
      console.log("resultsperpage", results);

      setResults(results);
      setPagination(pagination);
      setItem(item);
    } catch (err) {
      alert(err);
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