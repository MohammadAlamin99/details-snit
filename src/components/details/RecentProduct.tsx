// // components/RelatedProduct.tsx
// "use client";

// import { ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//     id: string;
//     title: string;
//     description: string;
//     price: number;
//     oldPrice?: number;
//     image: string;
//     isSale?: boolean;
// }

// const dummyProducts: Product[] = [
//     {
//         id: "1",
//         title: "A Kids Book About Yoga",
//         description:
//             "Yoga is a way to discover more about ourselves and our connection...",
//         price: 4.53,
//         oldPrice: 5.60,
//         image: "/images/book.png",
//         isSale: true,
//     },
//     {
//         id: "2",
//         title: "A Kids Book About Yoga",
//         description:
//             "Yoga is a way to discover more about ourselves and our connection...",
//         price: 4.53,
//         oldPrice: 5.60,
//         image: "/images/book.png",
//         isSale: true,
//     },
//     {
//         id: "3",
//         title: "A Kids Book About Yoga",
//         description:
//             "Yoga is a way to discover more about ourselves and our connection...",
//         price: 4.53,
//         oldPrice: 5.60,
//         image: "/images/book.png",
//         isSale: true,
//     },
//     {
//         id: "4",
//         title: "A Kids Book About Yoga",
//         description:
//             "Yoga is a way to discover more about ourselves and our connection...",
//         price: 4.53,
//         oldPrice: 5.60,
//         image: "/images/book.png",
//         isSale: true,
//     },
// ];

// export default function RecentProduct() {
//     return (
//         <div>
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-lato font-bold">Recent Product</h2>
//             </div>

//             {/* Product List */}
//             <div className="space-y-5">
//                 {dummyProducts.map((product) => (
//                     <div
//                         key={product.id}
//                         className="flex gap-6 items-start pb-3"
//                     >
//                         {/* Image */}
//                         <div className="relative w-20 h-24 flex-shrink-0">
//                             <Image
//                                 src={product.image}
//                                 alt={product.title}
//                                 fill
//                                 className="object-cover rounded-md"
//                             />
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1">
//                             <div className="flex justify-between items-start">
//                                 <h3 className="text-[16px] font-roboto font-medium">
//                                     {product.title}
//                                 </h3>

//                                 {product.isSale && (
//                                     <span className="bg-[#FF3C3C] font-roboto font-bold text-white text-xs px-2 py-0.5 rounded-full">
//                                         SALE
//                                     </span>
//                                 )}
//                             </div>

//                             <p className="text-xs text-[#727272] mt-2 font-roboto font-normal line-clamp-2">
//                                 {product.description}
//                             </p>

//                             <div className="flex justify-between items-center mt-2">
//                                 <div className="flex items-center gap-1">
//                                     <span className="text-[#2F3485] font-bold text-[16px] font-roboto">
//                                         ${product.price.toFixed(2)}
//                                     </span>

//                                     {product.oldPrice && (
//                                         <span className="text-[#666] font-roboto font-normal line-through text-xs">
//                                             ${product.oldPrice.toFixed(2)}
//                                         </span>
//                                     )}
//                                 </div>

//                                 <Link
//                                     href="#"
//                                     className="text-xs text-[#15A4EC] font-roboto font-medium hover:underline"
//                                 >
//                                     Get 10 Coins
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// components/details/RecentProduct.tsx
"use client";

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
        description: "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.00,
        image: "/images/book.png",
        isSale: true,
    },
    {
        id: "2",
        title: "A Kids Book About Yoga",
        description: "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.00,
        image: "/images/book.png",
        isSale: true,
    },
    {
        id: "3",
        title: "A Kids Book About Yoga",
        description: "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.00,
        image: "/images/book.png",
        isSale: true,
    },
    {
        id: "4",
        title: "A Kids Book About Yoga",
        description: "Yoga is a way to discover more about ourselves and our connection...",
        price: 4.53,
        oldPrice: 5.00,
        image: "/images/book.png",
        isSale: true,
    },
];

export default function RecentProduct() {
    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-4 lg:mb-6">
                <h2 className="text-xl lg:text-2xl font-lato font-bold">Recent Products</h2>
            </div>

            {/* Product List — same style for mobile & desktop */}
            <div className="space-y-4 lg:space-y-5">
                {dummyProducts.map((product) => (
                    <div key={product.id} className="flex gap-4 items-start pb-3 border-b border-gray-100 last:border-0">
                        {/* Image */}
                        <div className="relative w-16 h-20 lg:w-20 lg:h-24 flex-shrink-0">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-[14px] lg:text-[16px] font-roboto font-medium line-clamp-1">
                                {product.title}
                            </h3>
                            <p className="text-xs text-[#727272] mt-1 font-roboto font-normal line-clamp-2">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-1">
                                    <span className="text-[#2F3485] font-bold text-[14px] lg:text-[16px] font-roboto">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    {product.oldPrice && (
                                        <span className="text-[#666] font-roboto font-normal line-through text-xs">
                                            ${product.oldPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                <Link href="#" className="text-xs text-[#15A4EC] font-roboto font-medium hover:underline">
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