import React, { useState, createContext, useEffect, ReactNode } from "react";
import {
  DiscogsContextType,
  Artist,
  Pagination,
} from "@/types/IDiscogProviderTypes";

interface DiscogsProviderProps {
  children?: ReactNode;
}

export const DiscogsListContext = createContext<DiscogsContextType | undefined>(
  undefined
);

export const DiscogsProvider: React.FunctionComponent<DiscogsProviderProps> = (
  props
) => {
  const [item, setItem] = useState<Artist | null>(null);
  const [results, setResults] = useState<Artist[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pages: 0,
    itemsPerPage: 5,
    totalItems: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<string>("artist");

  useEffect(() => {
    fetchData("The Beatles");
  }, []);

  const fetchData = async (search: string, page = 1) => {
    try {
      setLoading(true);
      const url = `https://api.discogs.com/database/search?q=${search}&type=${type}&key=${process.env.REACT_APP_API_KEY}&secret=${process.env.REACT_APP_API_SECRET}&per_page=5&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();

      setResults(data.results);
      setPagination({
        page: data.pagination.page,
        pages: data.pagination.pages,
        itemsPerPage: data.pagination.itemsPerPage,
        totalItems: data.pagination.totalItems,
      });
      setLoading(false);
    } catch (err: any) {
      console.error("Fetching error:", err);
      alert("Failed to fetch data: " + err.message);
    }
  };

  const value: DiscogsContextType = {
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
      {/* @ts-except-error */}
      {props.children}
    </DiscogsListContext.Provider>
  );
};
