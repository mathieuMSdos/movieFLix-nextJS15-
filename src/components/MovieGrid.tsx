import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
};
const MovieGrid = ({ children }: CardGridProps) => {
  return <div className="flex flex-wrap justify-center w-full gap-4">{children}</div>;
};

export default MovieGrid;
