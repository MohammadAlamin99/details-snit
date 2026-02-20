"use client";
import React from "react";
import { Product } from "@/@types/IProduct.type";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import Reviwicon from "./details/Reviwicon";
import MetaData from "./details/MetaData";
import QTY from "./details/QTY";
import Price from "./details/Price";
import Color from "./details/Color";
import Size from "./details/Size";
import CallOrderBar from "./details/CallOrderBar";

export default function ProductMain({ product }: { product: Product }) {
    const [quantity, setQuantity] = React.useState(1);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
    const dummyImages = [
        "/images/img1.jpg",
        "/images/img2.png",
        "/images/img3.jpeg",
        "/images/img4.jpg",
        "/images/img5.jpg",
    ];
    const imagesToShow = dummyImages;

    return (
        <div className="bg-white rounded-[8px] p-4 lg:p-6 mb-4">
            <div className="lg:flex lg:gap-6">
                {/* LEFT */}
                <div className="lg:basis-1/2 flex-shrink-0 mb-4 lg:mb-0 min-w-0">
                    <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden mb-3 relative">
                        <Swiper
                            modules={[Thumbs]}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                            }}
                            spaceBetween={12}
                            className="h-full w-full"
                            grabCursor
                        >
                            {imagesToShow.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={img}
                                            alt={product.title}
                                            fill
                                            className="object-cover"
                                            priority={i === 0}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* THUMBNAILS */}
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={12}
                        slidesPerView={4}
                        watchSlidesProgress
                        className="w-full"
                    >
                        {imagesToShow.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full aspect-square rounded-[8px] overflow-hidden border border-gray-200">
                                    <Image
                                        src={img}
                                        alt={`thumb-${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* RIGHT */}
                <div className="lg:basis-1/2 min-w-0 font-inter">
                    <h1 className="text-xl lg:text-3xl font-bold font-lato text-black leading-tight mb-9">
                        {`${product.titleBn} | ${product.title}`}
                    </h1>

                    <div className="flex flex-wrap items-center justify-between gap-x-3 font-lato gap-y-1 mb-4 text-sm">
                        <div className="flex items-center gap-6">
                            <span className="text-black text-lg">Category :</span>
                            <span
                                className="font-lato
                                            text-[16px] font-bold leading-[125%] tracking-[0.32px]
                                            bg-gradient-to-b from-[#FF6A00] to-[#FF9F1C]
                                            bg-clip-text text-transparent
                                            cursor-pointer hover:underline">
                                {product.category}
                            </span>

                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-black text-lg">Ratings :</span>
                            <div className="flex items-center gap-1">
                                <Reviwicon />
                                <span className="text-black text-sm">({product.reviewCount})</span>
                            </div>
                        </div>
                    </div>
                    <MetaData />
                    <div className="flex items-center justify-between mb-9">
                        <Price product={product} />
                        {/* QTY */}
                        <QTY quantity={quantity} setQuantity={setQuantity} />
                    </div>
                    <div className="flex items-center justify-between flex-wrap">
                        {/* COLOR */}
                        <div className="pb-9">
                            <Color />
                        </div>
                        {/* SIZE */}
                        <div className="pb-9">
                            <Size />
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-2 mb-3 flex-wrap">
                        <button className="flex-1 font-lato text-white py-3 rounded-[8px] font-bold flex items-center justify-center gap-2 bg-[linear-gradient(0deg,#38BDF8_0%,#1E90FF_100%)] cursor-pointer">
                            <Image src="/images/shopping.svg" width={24} height={24} alt="shopping" />
                            কার্ট
                        </button>
                        <button className="flex-1 font-lato text-white py-3 rounded-[8px] font-bold flex items-center justify-center gap-2 bg-[linear-gradient(180deg,#FF6A00_0%,#FF9F1C_100%)] cursor-pointer">
                            <Image src="/images/atc.svg" width={24} height={24} alt="shopping" />
                            অর্ডার করুন
                        </button>
                    </div>

                    <CallOrderBar />
                </div>
            </div>
        </div>
    );
}
