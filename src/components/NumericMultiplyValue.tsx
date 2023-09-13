import React, { useContext } from "react";
import { inputNumberContext } from "./context";

type NumericMultiplyValueProps = {
  value: number;
};

export const NumericMultiplyValue: React.FC<NumericMultiplyValueProps> = ({
  value,
}) => {
  const { number } = useContext(inputNumberContext);

  return <h1>{number * value}</h1>;
};
