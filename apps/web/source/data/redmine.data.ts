import { swrFetcher } from "../libs/axios-instance";
import useSWR from "swr";

export default function useProjects() {
  const { data, mutate, error, isLoading } = useSWR("projects", swrFetcher.get);

  return {
    data,
    mutate,
    error,
    isLoading,
  };
}
