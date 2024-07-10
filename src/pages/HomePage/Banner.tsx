import { Button } from "antd";
import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Banner = () => {
    return (
        <div>
            {/* <div className="flex justify-between items-center p-5 bg-slate-200 my-10 text-right">
            <div>
                <img className="max-h-[500px] w-[400px] bg-current" src="./player.jpg" alt="" />
            </div>
            <div className="">
                <h1>
                Let's Level Up Your <br /> Game</h1>
                <p className="my-6">Nam natoque in massa bibendum lacus, et arcu cursus nisl <br /> rutrum at tincidunt in sit in massa adipiscing lorem fusce.</p>
                <Button className="rounded-full">Shop Now</Button>
            </div>
            
        </div> */}
         <Carousel autoplay>
    <div style={contentStyle}>
    <div className="flex justify-between items-center p-5 bg-slate-200 my-10 text-right">
            <div>
                <img className="max-h-[500px] w-[400px] bg-current" src="./player.jpg" alt="" />
            </div>
            <div className="">
                <h1>
                Let's Level Up Your <br /> Game</h1>
                <p className="my-6">Nam natoque in massa bibendum lacus, et arcu cursus nisl <br /> rutrum at tincidunt in sit in massa adipiscing lorem fusce.</p>
                <Button className="rounded-full">Shop Now</Button>
            </div>
            
        </div>
    </div>
    <div>
    <div className="flex justify-between items-center p-5 bg-slate-200 my-10 text-right">
            <div>
                <img className="max-h-[500px] w-[400px] bg-current" src="./player.jpg" alt="" />
            </div>
            <div className="">
                <h1>
                Let's Level Up Your <br /> Game</h1>
                <p className="my-6">Nam natoque in massa bibendum lacus, et arcu cursus nisl <br /> rutrum at tincidunt in sit in massa adipiscing lorem fusce.</p>
                <Button className="rounded-full">Shop Now</Button>
            </div>
            
        </div>
    </div>
    <div>
    <div className="flex justify-between items-center p-5 bg-slate-200 my-10 text-right">
            <div>
                <img className="max-h-[500px] w-[400px] bg-current" src="./player.jpg" alt="" />
            </div>
            <div className="">
                <h1>
                Let's Level Up Your <br /> Game</h1>
                <p className="my-6">Nam natoque in massa bibendum lacus, et arcu cursus nisl <br /> rutrum at tincidunt in sit in massa adipiscing lorem fusce.</p>
                <Button className="rounded-full">Shop Now</Button>
            </div>
            
        </div>
    </div>
    <div>
    <div className="flex justify-between items-center p-5 bg-slate-200 my-10 text-right">
            <div>
                <img className="max-h-[500px] w-[400px] bg-current" src="./player.jpg" alt="" />
            </div>
            <div className="">
                <h1>
                Let's Level Up Your <br /> Game</h1>
                <p className="my-6">Nam natoque in massa bibendum lacus, et arcu cursus nisl <br /> rutrum at tincidunt in sit in massa adipiscing lorem fusce.</p>
                <Button className="rounded-full">Shop Now</Button>
            </div>
            
        </div>
    </div>
  </Carousel>
        </div>
    );
};

export default Banner;