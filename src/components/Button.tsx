import React, { RefObject } from "react";

interface ButtonProps {
  reference: RefObject<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = React.memo(({ reference }) => {
  console.log("BUTTON RENDERING");
  return (
    <button type="submit" ref={reference}>
      Submit
    </button>
  );
});
