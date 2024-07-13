import { useGetSingleProductQuery } from "../../redux/api/sportsHavenApi";
import { useParams } from "react-router-dom";
import { Card, CardActions, CardContent } from "@mui/material";
import { Button } from "antd";
import Spinner from "../../utils/Spinner/Spinner";
import toast from "react-hot-toast";
import { useAddToCartMutation } from "../../redux/api/cartApi";
import { TApiError } from "../../types/types";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const singleProduct = data?.data;
  const [addToCart, { error }] = useAddToCartMutation();
  console.log(error);
  

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const {
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = singleProduct;

  const handleCart = async () => {
    try {
      const res = await addToCart(singleProduct);
      if (res?.data?.success) {
        toast.success("Product is added successfully to your cart", {
          duration: 5000,
        });
      }
      if ((error as TApiError)?.status === 500) {
        toast.success("This product is already added to your cart", {
          duration: 5000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Card className="flex items-center gap-2 lg:max-w-[800px]">
        {/* <CardMedia sx={{ height: 200 }} image={image} title="green iguana" /> */}
        <div className="flex-1">
          <img className="w-full h-[400px]" src={image} alt="" />
        </div>
        <CardContent className="flex-1">
          <h1>Name:{name}</h1>
          <p>Category:{category}</p>
          <p>Brand: {brand}</p>
          <p>Quantity: {stockQuantity}</p>
          <p>Price: {price}</p>
          <p>{rating}</p>
          <p>{description}</p>
          <CardActions className="flex justify-center">
            <Button
              onClick={handleCart}
              className="bg-[#f45b5b] mt-3 rounded-full"
              size="middle"
            >
              Add To Cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleProduct;
