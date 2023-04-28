import { ReactNode } from "react";

interface ResultsProps {
  title: string;
  value: string | number | ReactNode;
}
export const Results = ({ title, value }: ResultsProps) => {
  return (
    <p>
      <span className="text-red-400 md:text-xl xl:text-2xl">{title}:</span>
      <span className="pl-2 md:text-lg xl:text-xl">{value}</span>
    </p>
  );
};
