import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/features/store";
import { Button } from "antd";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/slice/counterSlice";
import { useGetAllProductsQuery } from "../../redux/api/getAllProducts";
import ProductCard from "./ProductCard";
import Spinner from "../../utils/Spinner/Spinner";

const AllProducts = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(incrementByAmount(4))}>amount</Button>

      <div className="grid grid-cols-3 gap-3 w-full mx-auto">
        {data?.data?.map((item: any, index: number) => (
          <ProductCard key={index} item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
