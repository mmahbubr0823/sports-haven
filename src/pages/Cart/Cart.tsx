import { Table } from "antd";
import { useGetAllCartsQuery } from "../../redux/api/cartApi";
const Cart = () => {
  const { data: cartData } = useGetAllCartsQuery(undefined);

//   table data 
  const data = cartData?.data;

//   table columns 
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default Cart;
