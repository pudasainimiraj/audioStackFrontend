import React, { useState, createContext, useEffect, useCallback } from "react";

export const DiscogsListContext = createContext(undefined);

export const DiscogsProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('The Beatles');
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 0,
    itemsPerPage: 5,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (search, page = 1) => {
    setLoading(true);
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(search)}&type=artist&key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}&per_page=5&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log("data from provider",data)
      setResults(data.results);
      setPagination({
        page: data.pagination.page,
        pages: data.pagination.pages,
        itemsPerPage: data.pagination.perPage,
        totalItems: data.pagination.totalItems,
      });
    } catch (err) {
      console.error("Fetching error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(searchTerm, pagination.page);
  }, [searchTerm, pagination.page, fetchData]);

  const value = {
    results,
    pagination,
    fetchData,
    loading,
    searchTerm,
    setSearchTerm,
  };

  return (
    <DiscogsListContext.Provider value={value}>
      {children}
    </DiscogsListContext.Provider>
  );
};
