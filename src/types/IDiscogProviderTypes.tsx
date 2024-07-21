export interface Artist {
  id: number;
  name: string;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  uri: string;
}

export interface Pagination {
  page: number;
  pages: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface DiscogsContextType {
  results: Artist[];
  item: Artist | null;
  pagination: Pagination;
  loading: boolean;
  type: string;
  fetchData: (search: string, page?: number) => void;
  setResults: React.Dispatch<React.SetStateAction<Artist[]>>;
  setItem: React.Dispatch<React.SetStateAction<Artist | null>>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}
