import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <Link to={'/'}>
                <Button className="bg-[#eb27da] px-4 py-1 rounded-lg text-white ml-5 mt-5" icon={<ArrowLeftOutlined />}>Home</Button>
            </Link>
            <div className="flex justify-center items-center my-16">
                <img className=" w-[600px] h-[600] rounded-2xl" src="https://i.ibb.co/9T8ykCT/222468-P1-PZG2-870.jpg" alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;