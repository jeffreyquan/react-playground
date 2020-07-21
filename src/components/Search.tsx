import React, { useState } from "react";
import axios from "axios";
import { Results } from "./Results";
import { Item } from "./types";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Item[]>([]);

  console.log("SEARCH rendering");

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
      <form onSubmit={handleSubmit}>
        <input name="query" value={query} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <hr />
      {result.length > 0 && <Results items={result} />}
    </div>
  );
};
