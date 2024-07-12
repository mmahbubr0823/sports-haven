import { Flex, Spin } from "antd";

const Spinner = () => {
  return (
    <div>
      <Flex className="flex justify-center items-center mt-10">
        <Spin size="large" />
      </Flex>
    </div>
  );
};

export default Spinner;
