import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../lib/axiosClient";
import { CategoryListResponse } from "../interface";

const useCategoryModule = () => {
  const getCategoryList = async (): Promise<CategoryListResponse | any> => {
    return axiosClient.get("/kategori/list").then((res) => res.data);
  };
  const useCategoryList = () => {
    const { data, isFetching, isLoading, isError } = useQuery({
      queryKey: ["category-list"],
      queryFn: getCategoryList,
    });

    return { datas: data, isFetching, isLoading, isError };
  };

  return { useCategoryList };
};

export default useCategoryModule;
