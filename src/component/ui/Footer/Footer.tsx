import { Space } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <footer className="mt-10 p-10 bg-[#ad8af4] text-white">
          <div className="md:flex items-center justify-center gap-5">
            <div>
              <div className="">
                <img
                  className="w-28 h-28 rounded-md"
                  src="https://i.ibb.co/1m6Kgjy/groom-putting-ring-bride-s-finger.jpg"
                  alt=""
                />
                <a className=" normal-case lg:text-xl xl:text-4xl font-semibold">
                  WEDDY <span className="text-[#f1aaaa]">HUB</span>
                </a>
              </div>
              <p>Embrace Love's Journey: Your Perfect Match Awaits</p>
              <p>Copyright © 2023 - All right reserved by weddy hub ltd.</p>
            </div>
            <div className="mr-5">
              <header className="text-xl font-bold my-5">Address</header>
              <p>
                Level-4, 34, Awal Centre, Banani, Dhaka <br />
                Support: web@xxxxx.com <br />
                Helpline: 01xxxxxxx <br />
                (Available : Sat - Thu, 10:00 AM to 7:00 PM)
              </p>
            </div>
            <div>
              <header className="text-xl font-bold my-5">Useful links</header>
              <ul>
                <li>Blog</li>
                <li>Success</li>
                <li>Donate</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <header className="text-xl font-bold my-5">Follow Us</header>
              <Space>
                <FacebookOutlined />
                <LinkedinOutlined />
                <TwitterOutlined />
              </Space>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
