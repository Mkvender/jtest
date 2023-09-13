import React from "react";
import { useInputContext } from "./context";

export const WordReverseOrder: React.FC = () => {
  const { word } = useInputContext();

  const reverseWord = word.split("").reduce((acc, char) => char + acc, "");

  return <h1>{reverseWord}</h1>;
};
