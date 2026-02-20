// components/RelatedProduct.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    image: string;
    isSale?: boolean;
}

const dummyProducts: Product[] = [
    {
        id: "1",
        title: "A Kids Book About Yoga",
        description:
            "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.60,
        image: "/images/book.png",
        isSale: true,
    },
    {
        id: "2",
        title: "A Kids Book About Yoga",
        description:
            "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.60,
        image: "/images/book.png",
        isSale: true,
    },
    {
        id: "3",
        title: "A Kids Book About Yoga",
        description:
            "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.60,
        image: "/images/book.png",
        isSale: true,
    },
    {
        id: "4",
        title: "A Kids Book About Yoga",
        description:
            "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.60,
        image: "/images/book.png",
        isSale: true,
    },
    {
        id: "5",
        title: "A Kids Book About Yoga",
        description:
            "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.60,
        image: "/images/book.png",
        isSale: true,
    },
];

export default function RelatedProduct() {
    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-lato font-bold">Related Product</h2>
                <Link
                    href="#"
                    className="flex gap-0.5 text-[16px] items-center text-black font-lato font-medium"
                >
                    View More
                    <ChevronRight width={12} height={16} color="#1E90FF" />
                </Link>
            </div>

            {/* Product List */}
            <div className="space-y-5">
                {dummyProducts.map((product) => (
                    <div
                        key={product.id}
                        className="flex gap-6 items-start pb-3"
                    >
                        {/* Image */}
                        <div className="relative w-20 h-24 flex-shrink-0">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="text-[16px] font-roboto font-medium">
                                    {product.title}
                                </h3>

                                {product.isSale && (
                                    <span className="bg-[#FF3C3C] font-roboto font-bold text-white text-xs px-2 py-0.5 rounded-full">
                                        SALE
                                    </span>
                                )}
                            </div>

                            <p className="text-xs text-[#727272] mt-2 font-roboto font-normal line-clamp-2">
                                {product.description}
                            </p>

                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-1">
                                    <span className="text-[#2F3485] font-bold text-[16px] font-roboto">
                                        ${product.price.toFixed(2)}
                                    </span>

                                    {product.oldPrice && (
                                        <span className="text-[#666] font-roboto font-normal line-through text-xs">
                                            ${product.oldPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>

                                <Link
                                    href="#"
                                    className="text-xs text-[#15A4EC] font-roboto font-medium hover:underline"
                                >
                                    Get 10 Coins
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
