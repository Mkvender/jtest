import React from "react";
import { useInputContext } from "./context";

export const WordOrder: React.FC = () => {
  const { word } = useInputContext();
  return <h1>{word}</h1>;
};
