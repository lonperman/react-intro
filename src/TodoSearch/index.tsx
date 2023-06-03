import React from "react";

export const TodoSearch = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};
