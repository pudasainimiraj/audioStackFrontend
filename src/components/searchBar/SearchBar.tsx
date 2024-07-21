import React, { useState, useContext, KeyboardEvent, ChangeEvent } from "react";
import {
  InputGroup,
  InputLeftElement,
  Textarea,
  Box,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import { FiSearch, FiX } from "react-icons/fi";
import { CustomIconButton } from "@/components/buttons/buttons";
import { DiscogsListContext } from "@/hooks/useDiscogProvider"; // Ensure the path is correct

const SearchBar: React.FC = () => {
  const { fetchData, setSearchTerm } = useContext(DiscogsListContext);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast(); // For showing feedback to the user

  const handleSearch = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const cleanQuery = inputValue.trim();
      if (cleanQuery) {
        setSearchTerm(cleanQuery); // Update the context with the new search term
        fetchData(cleanQuery, 1); // Fetch data using the search term and reset pagination to page 1
        setInputValue(""); // Clear the input after the search
      } else {
        toast({
          title: "Search Error",
          description: "Please enter a valid search term.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const clearSearch = () => {
    setInputValue("");
    setSearchTerm(""); // Reset the search term in the context
    fetchData("", 1); // Fetch initial data or default view
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
          placeholder="Type to search and press Enter..."
          paddingLeft={10}
          width="100%"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleSearch}
          aria-label="Search"
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
    </Box>
  );
};

export default SearchBar;
