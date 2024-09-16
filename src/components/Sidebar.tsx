import React from "react";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

export default function Sidebar({
  children,
  numResults,
}: {
  children: React.ReactNode;
  numResults: number;
}) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount resultsCount={numResults} />
        <SortingControls />
      </div>
      {children}
      <PaginationControls />
    </div>
  );
}
