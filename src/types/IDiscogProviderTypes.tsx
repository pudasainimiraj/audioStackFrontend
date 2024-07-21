// Types for Artist and Pagination
export interface Artist {
  id: number;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
}

export interface Pagination {
  page: number;
  pages: number;
  itemsPerPage: number;
  totalItems: number;
}

// Update DiscogsContextType to include searchTerm and setSearchTerm
export interface DiscogsContextType {
  results: Artist[];
  item: Artist | null;
  pagination: Pagination;
  loading: boolean;
  type: string;
  fetchData: (search: string, page?: number) => Promise<void>;
  setResults: React.Dispatch<React.SetStateAction<Artist[]>>;
  setItem: React.Dispatch<React.SetStateAction<Artist | null>>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string; // Added this line to include searchTerm
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>; // Added this line to include setSearchTerm
}
