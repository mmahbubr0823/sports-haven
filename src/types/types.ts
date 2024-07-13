export type TSports = {
    _id: string;
    name: string;
    category: string;
    stockQuantity: number;
    brand: string;
    rating: number; // rating should be between 0 and 5
    description: string;
    price: number;
    image: string;
  };
  

  type TProduct = {
    _id: string;
    name: string;
    description: string;
    image: string;
  }
  
  export type ProductCardProps ={
    item: TProduct;
  }

  export type TApiError ={
    data: {
      error: {
        code: number;
        errorResponse: {
          code: number;
          errmsg: string;
          index: number;
          keyPattern: { _id: number };
          keyValue: { _id: string };
        };
        index: number;
        keyPattern: { _id: number };
        keyValue: { _id: string };
        message: string;
        success: boolean;
        status: number;
      };
    };
    status: number
  }
  