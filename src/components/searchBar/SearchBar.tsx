import React, { useState, useContext, KeyboardEvent, ChangeEvent } from "react";
import {
  InputGroup,
  InputLeftElement,
  Textarea,
  Box,
  InputRightElement,
} from "@chakra-ui/react";
import { FiSearch, FiX } from "react-icons/fi";
import { CustomIconButton } from "@/components/buttons/buttons";
import { DiscogsListContext } from "@/hooks/useDiscogProvider"; // Adjust the import path as necessary

const SearchBar: React.FC = () => {
  const { fetchData, loading } = useContext(DiscogsListContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const cleanQuery = inputValue.trim();
      if (cleanQuery) {
        await fetchData(cleanQuery); // Await the async operation
        setInputValue(""); // Clear the input after the search is done
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(event.target.value); // Update local state
  };

  const clearSearch = (): void => {
    setInputValue("");
  };

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
          onChange={handleChange}
          onKeyDown={handleSearch}
          aria-label="Search" // for accessibility
        />
        <InputRightElement width="4.5rem">
          {inputValue && (
            <CustomIconButton
              ariaLabel="Clear search"
              icon={<FiX />}
              onClick={clearSearch}
            />
          )}
        </InputRightElement>
      </InputGroup>
      {loading && <div>Loading...</div>}
    </Box>
  );
};

export default SearchBar;
