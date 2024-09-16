import { useState, useEffect } from "react";
import { TJobItem, TJobItemExtended } from "./types";
import { BASE_API_URL } from "./constants";

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<TJobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const numResults = jobItems.length;
  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    };
    fetchData();
  }, [searchText]);
  const jobItemsSlice = jobItems.slice(0, 7);

  return { jobItemsSlice, isLoading, numResults };
}

export const useActiveId = () => {
  const [ActiveId, setActiveId] = useState<number | null>(null);
  useEffect(() => {
    const handleChangeHash = () => {
      setActiveId(+window.location.hash.slice(1));
    };
    window.addEventListener("hashchange", handleChangeHash);
    return () => {
      window.removeEventListener("hashchange", handleChangeHash);
    };
  }, []);
  return ActiveId;
};

export const useJobItem = (activeId: number | null) => {
  const [jobItem, setJobItem] = useState<TJobItemExtended | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (!activeId) return null;
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}/${activeId}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItem(data.jobItem);
    };
    fetchData();
  }, [activeId]);
  return { jobItem, isLoading };
};
