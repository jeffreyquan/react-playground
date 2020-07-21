import React, { useState, useRef } from "react";
import axios from "axios";
import { Results } from "./Results";
import { SearchBar } from "./SearchBar";
import { Button } from "./Button";
import { Item } from "./types";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Item[]>([]);

  console.log("SEARCH RENDERING");

  // useRef used to reference the button element which allows access to the click method
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const fetchBook = async (bookTitle: string) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`
    );
    const data = response.data;
    setResult([...data.items]);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    fetchBook(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div>
      <div
        onClick={() => buttonRef.current?.click()}
        style={{
          backgroundColor: "salmon",
          cursor: "pointer",
        }}
      >
        Custom Search Button using ref (button)
      </div>
      <form onSubmit={handleSubmit}>
        <SearchBar name="query" handleChange={handleChange} query={query} />
        <Button reference={buttonRef} />
      </form>
      <hr />
      {result.length > 0 && <Results items={result} />}
    </div>
  );
};
