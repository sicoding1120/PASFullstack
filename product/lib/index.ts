import { useQuery } from '@tanstack/react-query'
import { axiosClient } from '../../lib/axiosClient'
import { ProductListResponse } from '../interface'

const useProductModule = () => {
  const getProductList = async (): Promise<ProductListResponse | any> => {
    return axiosClient.get('/product/list').then(res => res.data)
  }
  const useProductList = () => {
    const { data, isFetching, isLoading, isError } = useQuery({
      queryKey: ["product-list"],
      queryFn: getProductList,
    });

    return { data, isFetching, isLoading,isError }
  }
  

  return { useProductList }
}

export default useProductModule
