import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white pb-[50px]">
      <div className="footer-content flex justify-between mx-[100px] pt-[50px]">
        <div className="brand items-center">
          <h1 className="text-4xl font-bold">Cammers</h1>
          <p className="text-[#B7B7B7]">For Everyone But Not Anyone</p>
        </div>

        <div className="product">
          <h1 className="text-lg font-medium pb-[25px]">PRODUCT</h1>
          <div className="desc text-[#B7B7B7]">
            <p>Table</p>
            <p>Chair</p>
            <p>Bed</p>
            <p>Lamp</p>
          </div>
        </div>

        <div className="buying">
          <h1 className="text-lg font-medium pb-[25px]">BUYING</h1>
          <div className="desc text-[#B7B7B7]">
            <p>Shop</p>
            <p>Term of Use</p>
            <p>Privacy</p>
            <p>How it works</p>
            <p>Customer Service</p>
          </div>
        </div>

        <div className="social">
          <h1 className="text-lg font-medium pb-[25px]">Social</h1>
          <div className="desc text-[#B7B7B7]">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twiter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
