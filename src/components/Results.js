import React from "react";
import { Card } from "./Card";

// React.memo prevents unneccessary re-render of Results when typing input
export const Results = React.memo(({ items }) => {
  console.log("RESULTS rendering");

  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
});
