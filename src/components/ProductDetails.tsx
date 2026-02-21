// "use client";

// import { useState } from "react";
// import MobileNav from "./nav/MobileNav";
// import DesktopNav from "./nav/DesktopNav";
// import { Product } from "@/@types/IProduct.type";
// import MobileTabBar from "./topbar/MobileTabBar";
// import AnnouncedBar from "./AnnouncedBar";
// import ProductMain from "./ProductMain";
// import RelatedProduct from "./details/RelatedProduct";
// import RecentProduct from "./details/RecentProduct";
// import Description from "./details/Description";
// import Footer from "./Footer";
// const product: Product = {
//     id: 1,
//     title: "Magnetic Suction Vacuum Tab/Phone Holder",
//     titleBn: "ম্যাগনেটিক সাকশন ভ্যাকুয়াম ট্যাব/ফোন হোল্ডার",
//     price: 650,
//     originalPrice: 950,
//     discount: 32,
//     rating: 4.5,
//     reviewCount: 26,
//     category: "Smart Gadgets",
//     images: [
//         "/images/product1.jpg",
//         "/images/product2.jpg",
//         "/images/product3.jpg",
//         "/images/product4.jpg",
//     ],
//     colors: ["#C0C0C0", "#1a1a1a", "#2563EB", "#e5e7eb"],
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     material: "ABS+Silicone",
//     brand: "Universal",
//     features: ["Portable", "Flexible", "Magnetic"],
//     modelNumber: "A2",
//     origin: "Guangdong, China",
//     dimensions: "21X15X4 cm",
//     weight: "0.150 kg",
//     description:
//         "This vacuum magnetic car mount is made of ABS+Silicone, ensuring durability and flexibility. Compatible with 3.5″–7″ mobile phones, features a magnetic fixing mode, portable and adjustable for universal use in cars, on desks, or in beds.",
// };


// // ─── Icons ────────────────────────────────────────────────────────────────────
// export const StarIcon = ({ filled }: { filled: boolean }) => (
//     <svg className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//     </svg>
// );
// export const Stars = ({ rating }: { rating: number }) => (
//     <div className="flex items-center gap-0.5">
//         {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= Math.round(rating)} />)}
//     </div>
// );

// export const PhoneIcon = () => (
//     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//     </svg>
// );
// export const ShareIcon = () => (
//     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//     </svg>
// );
// export const HomeIcon = () => (
//     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//     </svg>
// );
// export const UserIcon = () => (
//     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
//     </svg>
// );
// export const SearchIcon = () => (
//     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//     </svg>
// );
// export const ChatIcon = () => (
//     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//     </svg>
// );
// export const BellIcon = () => (
//     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//     </svg>
// );

// export default function ProductDetailsPage() {
//     return (
//         <div className="min-h-screen bg-gray-50 font-sans">
//             <DesktopNav />
//             <MobileNav />
//             <div className="bg-white">
//                 <AnnouncedBar />
//             </div>
//             <main className="max-w-[1720px] mx-auto px-4 lg:px-8 py-4 lg:py-8 pb-8 lg:pb-8">
//                 <div className="lg:flex lg:gap-6">
//                     <div className="flex-1 min-w-0">
//                         <ProductMain product={product} />
//                     </div>
//                     {/* related product */}
//                     <div className="hidden lg:block h-fit w-72 xl:w-80 bg-white px-4 py-6 rounded-2xl">
//                         <RelatedProduct />
//                     </div>
//                 </div>
//             </main>
//             {/* product description */}
//             <main className="max-w-[1720px] mx-auto px-4 lg:px-8 py-4 lg:py-8 pb-8 lg:pb-8">
//                 <div className="lg:flex lg:gap-6">
//                     {/* Description - full width on mobile, flex-1 on desktop */}
//                     <div className="w-full lg:flex-1 min-w-0">
//                         <Description />
//                     </div>

//                     {/* Recent product - hidden on mobile, visible on desktop */}
//                     <div className="hidden lg:block h-fit w-72 xl:w-80 bg-white px-4 py-6 rounded-2xl flex-shrink-0">
//                         <RecentProduct />
//                     </div>
//                 </div>
//             </main>

//             {/* mobile tab bar */}
//             <MobileTabBar />

//             {/* Footer (lg+) */}
//             <Footer />
//         </div>
//     );
// }


"use client";

import MobileNav from "./nav/MobileNav";
import DesktopNav from "./nav/DesktopNav";
import { Product } from "@/@types/IProduct.type";
import MobileTabBar from "./topbar/MobileTabBar";
import AnnouncedBar from "./AnnouncedBar";
import ProductMain from "./ProductMain";
import RelatedProduct from "./details/RelatedProduct";
import RecentProduct from "./details/RecentProduct";
import Description from "./details/Description";
import Footer from "./Footer";
import MobileCategories from "./details/Mobilecategories";

const product: Product = {
    id: 1,
    title: "Magnetic Suction Vacuum Tab/Phone Holder",
    titleBn: "ম্যাগনেটিক সাকশন ভ্যাকুয়াম ট্যাব/ফোন হোল্ডার",
    price: 650,
    originalPrice: 950,
    discount: 32,
    rating: 4.5,
    reviewCount: 26,
    category: "Smart Gadgets",
    images: [
        "/images/product1.jpg",
        "/images/product2.jpg",
        "/images/product3.jpg",
        "/images/product4.jpg",
    ],
    colors: ["#C0C0C0", "#1a1a1a", "#2563EB", "#e5e7eb"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "ABS+Silicone",
    brand: "Universal",
    features: ["Portable", "Flexible", "Magnetic"],
    modelNumber: "A2",
    origin: "Guangdong, China",
    dimensions: "21X15X4 cm",
    weight: "0.150 kg",
    description:
        "This vacuum magnetic car mount is made of ABS+Silicone, ensuring durability and flexibility. Compatible with 3.5″–7″ mobile phones, features a magnetic fixing mode, portable and adjustable for universal use in cars, on desks, or in beds.",
};

// ─── Icons ────────────────────────────────────────────────────────────────────
export const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);
export const Stars = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= Math.round(rating)} />)}
    </div>
);
export const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
export const ShareIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
);
export const HomeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);
export const UserIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
);
export const SearchIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);
export const ChatIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
export const BellIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

export default function ProductDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <DesktopNav />
            <MobileNav />
            <div className="bg-white">
                <AnnouncedBar />
            </div>

            {/* ── Section 1: ProductMain + RelatedProduct sidebar ── */}
            <main className="max-w-[1720px] mx-auto px-4 lg:px-8 py-4 lg:py-8">
                <div className="lg:flex lg:gap-6">
                    <div className="flex-1 min-w-0">
                        <ProductMain product={product} />
                    </div>
                    {/* Related product — desktop sidebar only */}
                    <div className="hidden lg:block h-fit w-72 xl:w-80 bg-white px-4 py-6 rounded-2xl flex-shrink-0">
                        <RelatedProduct />
                    </div>
                </div>
            </main>

            {/* ── Section 2: Description + RecentProduct sidebar ── */}
            <main className="max-w-[1720px] mx-auto px-4 lg:px-8 py-4 lg:py-8 pb-4 lg:pb-8">
                <div className="lg:flex lg:gap-6">
                    <div className="w-full lg:flex-1 min-w-0">
                        <Description />
                    </div>
                    {/* Recent product — desktop sidebar only */}
                    <div className="hidden lg:block h-fit w-72 xl:w-80 bg-white px-4 py-6 rounded-2xl flex-shrink-0">
                        <RecentProduct />
                    </div>
                </div>
            </main>

            {/* ── MOBILE ONLY: Related Product (2-col grid) ── */}
            <section className="lg:hidden max-w-[1720px] mx-auto px-4 py-4">
                <div className="rounded-2xl py-6">
                    <RelatedProduct />
                </div>
            </section>

            {/* ── MOBILE ONLY: Recent Products (list) ── */}
            <section className="lg:hidden max-w-[1720px] mx-auto px-4 py-4">
                <div className="rounded-2xl py-6">
                    <RecentProduct />
                </div>
            </section>

            {/* ── MOBILE ONLY: Categories ── */}
            <section className="lg:hidden max-w-[1720px] mx-auto py-4 pb-8">
                <MobileCategories />
            </section>

            {/* Mobile tab bar */}
            <MobileTabBar />

            {/* Footer */}
            <Footer />
        </div>
    );
}