import React from "react";
import { Item } from "./types";

export const Card: React.FC<Item> = ({ item }) => {
  const { title, imageLinks } = item.volumeInfo;
  const image = imageLinks.thumbnail;

  console.log("CARD rendering");

  return (
    <div>
      <h6>{title}</h6>
      <img src={image} alt={title} />
    </div>
  );
};
