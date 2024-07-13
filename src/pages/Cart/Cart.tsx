import { Button, Table } from "antd";
import { useGetAllCartsQuery } from "../../redux/api/cartApi";
import Spinner from "../../utils/Spinner/Spinner";
import { DeleteFilled } from "@ant-design/icons";
import { RootState } from "../../redux/features/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slice/counterSlice";
const Cart = () => {
  const { data: cartData, isLoading } = useGetAllCartsQuery(undefined);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  //   table data
  const tableData = cartData?.data;

  //   table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: () => (
        <div>
          <Button onClick={() => dispatch(increment())}>+</Button>
          <span className="mx-2">{count}</span>
          <Button
            className="disabled:bg-slate-200"
            onClick={() => dispatch(decrement())}
            disabled={count === 1 ? true : false}
          >
            -
          </Button>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div>
          <Button icon={<DeleteFilled />}></Button>
        </div>
      ),
    },
  ];

  // cart calculation
  const totalPrice = tableData?.reduce((acc, itm) => itm.price + acc, 0);
  const discount = 15;
  const subTotal = Math.ceil(totalPrice + (totalPrice * discount) / 100);

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8 border-2 shadow-md rounded-md">
        <Table columns={columns} dataSource={tableData} />
      </div>
      <div className="col-span-4 border-2 shadow-md text-center rounded-md p-5">
        {/* cart section  */}
        <h1 className="text-3xl font-semibold border-b-2">Purchase history</h1>
        <div>
          <p>Total price:{totalPrice}</p>
          <p>Vat: 15%</p>
          <p>SubTotal:{subTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
