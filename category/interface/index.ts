import { BaseResponsePagination } from "../../lib/axiosClient";

interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  image: string;
  categoryName: string;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface CategoryListResponse extends BaseResponsePagination {
  data: Product[];
}
