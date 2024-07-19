import React, { useState, KeyboardEvent, ChangeEvent, useEffect } from "react";
import {
  InputGroup,
  InputLeftElement,
  Textarea,
  Box,
  InputRightElement,
} from "@chakra-ui/react";
import { FiSearch, FiX } from "react-icons/fi";
import {
  CustomIconButton,
  CustomIconButtonWithTooltip,
} from "@/components/buttons/buttons";
// import { useSearch } from "@frontend/src/results/context/SearchProvider";

interface SearchBarProps {
  // isDisabled: boolean;
}

const SearchBar: React.FC<SearchBarProps> = () => {
  // const router = useRouter();
  // // const { searchQuery, setSearchQuery, setSearchTrigger, setError } =
  // //   useSearch();
  // const [, setErrorMsg] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("searchQuery");

  // // const updateSearchTokenCount = async () => {
  // //   try {
  // //     const response = await salamanderApi(
  // //       "PUT",
  // //       "/user/decrement-search-token-count",
  // //       // @ts-expect-error session was modified
  // //       session?.userId
  // //     );

  // //     setSearchTokenCount(response.data.searchTokenCount);
  // //   } catch (error: any) {
  // //     setErrorMsg(error.message);
  // //   }
  // // };

  // useEffect(() => {
  //   setInputValue("searchQuery");
  // }, []);

  // const handleSearch = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     if (!inputValue) {
  //       setErrorMsg("Please input something.");
  //       return;
  //     }
  //     const cleanQuery = inputValue.trim();

  //     if (cleanQuery === "") {
  //       setErrorMsg("Please input something.");
  //       return;
  //     }
  //     router.push(`/results?searchQuery=${cleanQuery}`);
  //   }
  // };

  // const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
  //   setInputValue(event.target.value); // Update local state
  //   setErrorMsg(null); // Clear error message on change
  // };

  // const clearSearch = (): void => {
  //   setInputValue("");
  //   setErrorMsg(null);
  // };

  // // useEffect(() => {
  // //   const getSearchTokenCount = async () => {
  // //     try {
  // //       const response = await salamanderApi(
  // //         "GET",
  // //         "/user/get-search-token-count",
  // //         // @ts-expect-error session was modified
  // //         session?.userId
  // //       );

  // //       setSearchTokenCount(response.data.searchTokenCount);
  // //     } catch (error: any) {
  // //       setErrorMsg(error.message);
  // //     }
  // //   };

  // //   getSearchTokenCount();
  // // });

  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Textarea
          rows={1}
          resize="none"
          placeholder="Type to search..."
          paddingLeft={10}
          width="100%"
          value={inputValue}
          // onChange={handleChange}
          // onKeyDown={handleSearch}
          aria-label="Search" // for accessibility
        />
        <InputRightElement width="4.5rem">
          {inputValue && (
            <CustomIconButton
              ariaLabel="Clear search"
              icon={<FiX />}
              // onClick={clearSearch}
            />
          )}
          {/* <CustomIconButtonWithTooltip
            ariaLabel={
              searchTokenCount > 0
                ? `Search tokens: ${searchTokenCount}`
                : `Search tokens: 0. Please contact help@zolaanalytics.com for more tokens, or wait until next month`
            }
            icon={<FiTarget />}
            placement={"bottom"}
          /> */}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
