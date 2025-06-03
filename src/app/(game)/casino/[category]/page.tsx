import React from "react";
import FilteredGames from "../filteredGames";

type Params = Promise<{ category: string }>;

const SlotsCategory = async ({ params }: { params: Params }) => {
  const { category } = await params;
  return (
    <div>
      <FilteredGames categoryParams={category} />
    </div>
  );
};

export default SlotsCategory;
