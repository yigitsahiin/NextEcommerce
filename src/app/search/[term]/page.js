"use client";
import React from "react";
import SearchItem from "../../../components/SearchItem";

const SearchPage = ({ params }) => {
  const { term } = params;
  return <SearchItem term={term} />;
};

export default SearchPage;
