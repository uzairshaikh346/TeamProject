import React from "react";

function AboutBanner() {
  return (
    <div>
      <section className="text-gray-900 body-font font-sans">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 tracking-widest">
              Welcome to SwiftBuy
              <br className="hidden lg:inline-block" />
              Your Trusted E-Commerce Destination
            </h1>
            <p className="mb-8 leading-relaxed font-medium md:mt-8">
              At SwiftBuy, we bring you a curated selection of the latest and
              most sought-after products at competitive prices. From
              cutting-edge smartphones, including iPhones, Android cellphones,
              and top-tier laptops from Lenovo, HP, Dell, MacBook, Acer, and
              Toshiba, we offer options spanning from 2nd to 12th generation.
              Our diverse range also includes luxury unisex watches, tablets,
              and jewelry, with more exciting additions coming soon!
            </p>
           
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/laptop.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBanner;
