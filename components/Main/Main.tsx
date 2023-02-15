import React from "react";
import Image from "next/image";

import Hero from "../Hero";
import ProductCard from "../ProductCard";
import Input from "../Input";
import MultiRangeSlider from "../RangeSlider/MultiRangeSlider";
import Button from "../Button";
import RelatedProduct from "../RelatedProduct";

import { data } from "../../data";

const Main = () => {
  return (
    <div className="w-full">
      <div className="pt-[120px]">
        <Hero text="SURFING" />
      </div>

      <div className="xs:flex-col lg:flex-row flex justify-between">
        <div className="xs:py-20 lg:py-52 xs:pl-0 md:pl-32 2xl:pl-60 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-20 xs:w-full lg:w-[78%] ">
          {data.products.map((item, i) => (
            <div className="flex" key={i}>
              <ProductCard
                productImage={item.productImage}
                isSaleItem={item.isSaleItem}
                name={item.name}
                description={item.description}
                totalPrice={item.totalPrice}
                discountPrice={item.discountPrice}
              />
            </div>
          ))}
        </div>
        <div className="pt-52 pr-6 xs:w-full lg:w-[20%]">
          <Input
            label="Search"
            placeholder="Search for a product"
            onChange={() => {}}
          />
          <div className="mt-14">
            <MultiRangeSlider
              label="Price"
              min={1}
              max={1000}
              onChange={({ min, max }: { min: number; max: number }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
          <div className="mt-14 flex flex-col">
            <label className="block text-lg font-normal">CATEGORIES</label>
            {[
              "Boards",
              "Canoenig",
              "Equipment",
              "Paddling",
              "Rental",
              "Scubadiving",
              "Surfing",
            ].map((item) => (
              <div className="mt-4" key={item}>
                <Button fontSize={18} textColor="#848484" type="link">
                  {item}
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-20 flex flex-col">
            <label className="block text-lg font-normal">
              RELATED PRODUCTS
            </label>
            {data.relatedProducts.map((item) => (
              <div className="mt-4" key={item.name}>
                <RelatedProduct
                  imgUrl={item.imgUrl}
                  name={item.name}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
          <Image
            src={data.sideImage}
            alt="image"
            width="320"
            height="245"
            className="mt-28 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

Main.defaultProps = {};
export default Main;
