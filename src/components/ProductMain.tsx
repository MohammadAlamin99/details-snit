"use client";

import React from "react";
import CartIcon from "./svg/CartIcon";
import { PhoneIcon, ShareIcon, Stars } from "./ProductDetails";
import { Product } from "@/@types/IProduct.type";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import "swiper/css";

export default function ProductMain({ product }: { product: Product }) {
    const [quantity, setQuantity] = React.useState(1);
    const [selectedColor, setSelectedColor] = React.useState(0);
    const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 lg:p-6 mb-4">
            <div className="lg:flex lg:gap-8">
                {/* LEFT */}
                <div className="lg:basis-1/2 flex-shrink-0 mb-4 lg:mb-0 min-w-0">
                    {/* MAIN IMAGE */}
                    <div className="bg-gray-200 rounded-2xl aspect-square overflow-hidden mb-3 relative">
                        <Swiper
                            modules={[Thumbs]}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed
                                        ? thumbsSwiper
                                        : null,
                            }}
                            spaceBetween={10}
                            className="h-full w-full"
                            grabCursor
                        >
                            {product.images?.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* THUMBNAILS */}
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={8}
                        slidesPerView={4}
                        watchSlidesProgress
                        className="w-full"
                    >
                        {product.images?.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="w-full aspect-square rounded-xl overflow-hidden border border-gray-200">
                                    <img
                                        src={img}
                                        alt={`thumb-${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* RIGHT */}
                <div className="lg:basis-1/2 min-w-0">
                    <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-2">
                        {product.titleBn}
                        <span className="block text-base lg:text-lg text-gray-600 font-semibold mt-1">
                            {product.title}
                        </span>
                    </h1>

                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl font-extrabold text-gray-900">
                            ৳{product.price}
                        </span>
                        <span className="text-base text-gray-400 line-through">
                            ৳{product.originalPrice}
                        </span>
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {product.discount}% OFF
                        </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                        <Stars rating={product.rating} />
                        <span className="text-sm text-gray-500">
                            ({product.reviewCount})
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-sm">
                        <span className="text-gray-500">Category:</span>
                        <span className="font-semibold text-sky-500 cursor-pointer hover:underline">
                            {product.category}
                        </span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">Ratings:</span>
                        <Stars rating={product.rating} />
                        <span className="text-gray-500">
                            ({product.reviewCount})
                        </span>
                    </div>

                    <div className="text-sm text-gray-700 space-y-1 mb-4 bg-gray-50 rounded-xl p-3">
                        <div>
                            <span className="text-gray-500">উপাদান:</span> {product.material}
                        </div>
                        <div>
                            <span className="text-gray-500">সামঞ্জস্যপূর্ণ ব্র্যান্ড:</span>{" "}
                            {product.brand}
                        </div>
                        <div>
                            <span className="text-gray-500">ফিচার:</span>{" "}
                            {product.features.join(", ")}
                        </div>
                        <div>
                            <span className="text-gray-500">মডেল নম্বর:</span>{" "}
                            {product.modelNumber}
                        </div>
                        <div>
                            <span className="text-gray-500">উৎপত্তির স্থান:</span>{" "}
                            {product.origin}
                        </div>
                    </div>

                    {/* QTY */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium text-gray-700">Qty:</span>
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                            >
                                −
                            </button>
                            <span className="w-10 text-center font-semibold text-gray-900">
                                {quantity}
                            </span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* COLOR */}
                    <div className="mb-4">
                        <span className="text-sm font-semibold text-gray-700 block mb-2">
                            Colour
                        </span>
                        <div className="flex items-center gap-2">
                            {product.colors.map((color, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedColor(i)}
                                    className={`w-9 h-9 rounded-full border-2 ${selectedColor === i
                                        ? "border-sky-500 scale-110 shadow-md"
                                        : "border-gray-200"
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* SIZE */}
                    <div className="mb-5">
                        <span className="text-sm font-semibold text-gray-700 block mb-2">
                            Size
                        </span>
                        <div className="flex items-center gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 rounded-full border-2 text-sm font-semibold ${selectedSize === size
                                        ? "bg-sky-500 border-sky-500 text-white shadow-md"
                                        : "border-gray-200 text-gray-600 hover:border-sky-300"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-3 mb-3">
                        <button className="flex-1 bg-sky-500 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2">
                            <CartIcon /> কার্ট
                        </button>
                        <button className="flex-1 bg-orange-500 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2">
                            🛍️ অর্ডার করুন
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 text-sky-500 border border-sky-200 rounded-xl px-4 py-2.5 text-sm font-semibold">
                            <PhoneIcon /> কল অর্ডার : 01410-050041
                        </button>
                        <button className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                            <ShareIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
