import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/features/store";
import { Button } from "antd";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/slice/counterSlice";
import { useGetAllProductsQuery } from "../../redux/api/getAllProducts";

const AllProducts = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const { data } = useGetAllProductsQuery(undefined);
  //   console.log(data);

  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(incrementByAmount(4))}>amount</Button>

      <div>
        {data?.data?.map((item: any, index: number) => (
          <h1 key={index}>{item.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
