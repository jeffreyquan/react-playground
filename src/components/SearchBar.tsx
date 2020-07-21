import React from "react";

interface SearchBarProps {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  name,
  handleChange,
  query,
}) => {
  console.log("SEARCHBAR RENDERING");
  return <input name={name} onChange={handleChange} value={query} />;
};
