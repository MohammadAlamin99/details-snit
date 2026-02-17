"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Product {
    id: number;
    title: string;
    titleBn: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    category: string;
    colors: string[];
    sizes: string[];
    material: string;
    brand: string;
    features: string[];
    modelNumber: string;
    origin: string;
    dimensions: string;
    weight: string;
    description: string;
}

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

const relatedProducts = [
    { id: 1, title: "A Kids Book About Yoga", price: 4.53, originalPrice: 5.0 },
    { id: 2, title: "A Kids Book About Yoga", price: 4.53, originalPrice: 5.0 },
    { id: 3, title: "A Kids Book About Yoga", price: 4.53, originalPrice: 5.0 },
    { id: 4, title: "A Kids Book About Yoga", price: 4.53, originalPrice: 5.0 },
    { id: 5, title: "A Kids Book About Yoga", price: 4.53, originalPrice: 5.0 },
    { id: 6, title: "A Kids Book About Yoga", price: 4.53, originalPrice: 5.0 },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);
const Stars = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= Math.round(rating)} />)}
    </div>
);
const CartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const ShareIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
);
const HomeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);
const UserIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
);
const SearchIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);
const ChatIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
const BellIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

// ─── Reusable Cards ───────────────────────────────────────────────────────────
const ProductCard = ({ p }: { p: (typeof relatedProducts)[0] }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="bg-gradient-to-br from-orange-100 to-pink-100 h-32 flex items-center justify-center text-xs text-gray-400 font-medium relative">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">SALE</span>
            Image
        </div>
        <div className="p-3">
            <p className="text-xs font-semibold text-gray-800 leading-tight line-clamp-2 mb-1">{p.title}</p>
            <div className="flex items-center gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= 4} />)}
                <span className="text-xs text-gray-400 ml-1">100+ Sold</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
                <span className="text-sm font-bold text-gray-900">${p.price}</span>
                <span className="text-xs text-gray-400 line-through">${p.originalPrice}</span>
            </div>
            <div className="flex gap-1">
                <button className="flex-1 bg-orange-50 text-orange-600 border border-orange-200 text-xs py-1.5 rounded-lg font-semibold hover:bg-orange-100 transition-colors">🛒 Cart</button>
                <button className="flex-1 bg-sky-500 text-white text-xs py-1.5 rounded-lg font-semibold hover:bg-sky-600 transition-colors">Buy Now</button>
            </div>
        </div>
    </div>
);

const SidebarRow = ({ p }: { p: (typeof relatedProducts)[0] }) => (
    <div className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex-shrink-0 relative overflow-hidden">
            <span className="absolute top-0 left-0 bg-red-500 text-white text-[8px] font-bold px-1">SALE</span>
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-800 leading-tight line-clamp-2 mb-0.5">{p.title}</p>
            <p className="text-[10px] text-gray-400 mb-1 line-clamp-1">Yoga is a way to discover ourselves…</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-gray-900">${p.price}</span>
                    <span className="text-[10px] text-gray-400 line-through">${p.originalPrice}</span>
                </div>
                <span className="text-[10px] text-sky-500 font-semibold">Get 10 Coins</span>
            </div>
        </div>
    </div>
);

// ─── Animated Bottom Tab Bar (below lg = below 1024px) ───────────────────────
const MobileTabBar = () => {
    const [open, setOpen] = useState(false);

    const items = [
        { icon: <SearchIcon />, delay: 0, pos: { x: 0, y: -72 } },
        { icon: <ChatIcon />, delay: 60, pos: { x: -62, y: -45 } },
        { icon: <BellIcon />, delay: 120, pos: { x: 62, y: -45 } },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            {/* Backdrop */}
            {open && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setOpen(false)} />
            )}
            {/* Fan icons */}
            <div className="relative z-50">
                {items.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setOpen(false)}
                        style={{
                            position: "fixed",
                            bottom: "38px",
                            left: "50%",
                            transform: open
                                ? `translate(calc(-50% + ${item.pos.x}px), ${item.pos.y}px) scale(1)`
                                : `translate(-50%, 0px) scale(0)`,
                            transition: open
                                ? `transform 0.35s cubic-bezier(0.34,1.56,0.64,1) ${item.delay}ms, opacity 0.3s ease ${item.delay}ms`
                                : `transform 0.25s cubic-bezier(0.55,0,1,0.45) ${(2 - i) * 50}ms, opacity 0.2s ease ${(2 - i) * 50}ms`,
                            opacity: open ? 1 : 0,
                            pointerEvents: open ? "auto" : "none",
                            zIndex: 51,
                        }}
                    >
                        <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center shadow-lg text-white hover:bg-sky-400 active:scale-95 transition-transform">
                            {item.icon}
                        </div>
                    </button>
                ))}
            </div>
            {/* Bar */}
            <div className="relative z-50 bg-white rounded-t-3xl shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
                <div className="flex items-end justify-around pb-4 pt-1">
                    {/* Home */}
                    <button className="flex flex-col items-center gap-1 pt-3 text-gray-400 hover:text-gray-600">
                        <HomeIcon /><span className="text-xs font-medium">Home</span>
                    </button>
                    {/* Center notch */}
                    <div className="relative -mt-6" style={{ width: 72 }}>
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-20 h-10 bg-white" style={{ borderRadius: "0 0 40px 40px" }} />
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className="relative z-10 w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(14,165,233,0.5)] hover:bg-sky-400 active:scale-95 transition-all duration-200 mx-auto"
                            style={{ marginTop: -20 }}
                        >
                            <span
                                className="text-3xl font-light leading-none transition-transform duration-300"
                                style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                            >+</span>
                        </button>
                    </div>
                    {/* Profile */}
                    <button className="flex flex-col items-center gap-1 pt-3 text-sky-500">
                        <UserIcon /><span className="text-xs font-semibold">Profile</span>
                    </button>
                </div>
                <div className="h-1 bg-white flex justify-center pb-1">
                    <div className="w-32 h-1 bg-gray-300 rounded-full" />
                </div>
                <div className="h-3 bg-white" />
            </div>
        </div>
    );
};

// ─── Navbars ──────────────────────────────────────────────────────────────────
const DesktopNav = () => (
    <nav className="hidden lg:flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">OP</div>
            <div>
                <div className="font-bold text-gray-900 text-sm leading-none">OVERSEAS</div>
                <div className="text-xs text-gray-400 tracking-widest">PRODUCTS</div>
            </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 flex-1 max-w-lg mx-8">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
            <input className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400" placeholder="Search in Cart and Get" />
            <button className="bg-sky-500 text-white text-xs px-4 py-1.5 rounded-lg font-semibold hover:bg-sky-600">Search</button>
        </div>
        <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700"><CartIcon /></button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Sign in
            </button>
        </div>
    </nav>
);

const MobileNav = () => (
    <nav className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-40">
        <button className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xs">OP</div>
            <div>
                <div className="font-bold text-gray-900 text-xs leading-none">OVERSEAS</div>
                <div className="text-[9px] text-gray-400 tracking-widest">PRODUCTS</div>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <button className="text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
            <button className="text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg></button>
            <button className="text-gray-600 relative">
                <CartIcon />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-sky-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">2</span>
            </button>
            <button className="text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg></button>
        </div>
    </nav>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductDetailsPage() {
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState("L");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("বিবরণ");
    const [selectedImage, setSelectedImage] = useState(0);
    const tabs = ["বিবরণ", "সবিস্তার বিবরণী", "ক্রেতার মতব্য"];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <DesktopNav />
            <MobileNav />

            {/* Banner */}
            <div className="bg-sky-500 text-white text-center py-2 text-xs font-medium px-4">
                সহজ রিটার্ন পলিসি এবং সম্পূর্ণ ক্যাশ অন ডেলিভারি, কেনাকাটার সহজতা!
            </div>

            {/* Desktop sub-nav */}
            <div className="hidden lg:flex items-center gap-6 px-8 py-3 bg-white border-b border-gray-100 text-sm">
                <button className="flex items-center gap-1.5 font-medium text-gray-700 hover:text-sky-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    Home
                </button>
                <button className="flex items-center gap-1.5 font-medium text-gray-700 hover:text-sky-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                    Categories
                </button>
                <button className="flex items-center gap-1.5 font-semibold text-orange-500">🔥 Flash Sale</button>
                <div className="ml-auto text-gray-500 text-xs">
                    সহজ রিটার্ন পলিসি এবং সম্পূর্ণ ক্যাশ অন ডেলিভারি, কেনাকাটার সহজতা!
                </div>
            </div>

            {/* ═══════════════════════════════════════════════
          BREAKPOINTS:
          < 1024px  → single column (mobile + tablet)
          ≥ 1024px  → product area + right sidebar
         ═══════════════════════════════════════════════ */}
            <main className="max-w-[1720px] mx-auto px-4 lg:px-8 py-4 lg:py-8 pb-36 lg:pb-8">
                <div className="lg:flex lg:gap-8">

                    {/* ── Main Product Column ── */}
                    <div className="flex-1 min-w-0">

                        {/* Product card: image + info */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 lg:p-6 mb-4">
                            {/* lg+: side by side | below lg: stacked */}
                            <div className="lg:flex lg:gap-8">

                                {/* Gallery */}
                                <div className="lg:w-80 xl:w-96 flex-shrink-0 mb-4 lg:mb-0">
                                    <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center text-gray-400 mb-3">
                                        <div className="text-center">
                                            <div className="text-5xl mb-2">📱</div>
                                            <div className="text-sm">Product Image {selectedImage + 1}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        {[0, 1, 2, 3].map((i) => (
                                            <button key={i} onClick={() => setSelectedImage(i)}
                                                className={`flex-1 aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400 border-2 transition-all ${selectedImage === i ? "border-sky-500 shadow-sm" : "border-transparent"}`}>
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-2">
                                        {product.titleBn}
                                        <span className="block text-base lg:text-lg text-gray-600 font-semibold mt-1">{product.title}</span>
                                    </h1>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-2 mb-3">
                                        <span className="text-2xl font-extrabold text-gray-900">৳{product.price}</span>
                                        <span className="text-base text-gray-400 line-through">৳{product.originalPrice}</span>
                                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{product.discount}% OFF</span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <Stars rating={product.rating} />
                                        <span className="text-sm text-gray-500">({product.reviewCount})</span>
                                    </div>

                                    {/* Category */}
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-sm">
                                        <span className="text-gray-500">Category:</span>
                                        <span className="font-semibold text-sky-500 cursor-pointer hover:underline">{product.category}</span>
                                        <span className="text-gray-300">|</span>
                                        <span className="text-gray-500">Ratings:</span>
                                        <Stars rating={product.rating} />
                                        <span className="text-gray-500">({product.reviewCount})</span>
                                    </div>

                                    {/* Specs */}
                                    <div className="text-sm text-gray-700 space-y-1 mb-4 bg-gray-50 rounded-xl p-3">
                                        <div><span className="text-gray-500">উপাদান:</span> {product.material}</div>
                                        <div><span className="text-gray-500">সামঞ্জস্যপূর্ণ ব্র্যান্ড:</span> {product.brand}</div>
                                        <div><span className="text-gray-500">ফিচার:</span> {product.features.join(", ")}</div>
                                        <div><span className="text-gray-500">মডেল নম্বর:</span> {product.modelNumber}</div>
                                        <div><span className="text-gray-500">উৎপত্তির স্থান:</span> {product.origin}</div>
                                    </div>

                                    {/* Qty */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-sm font-medium text-gray-700">Qty:</span>
                                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg">−</button>
                                            <span className="w-10 text-center font-semibold text-gray-900">{quantity}</span>
                                            <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg">+</button>
                                        </div>
                                    </div>

                                    {/* Colors */}
                                    <div className="mb-4">
                                        <span className="text-sm font-semibold text-gray-700 block mb-2">Colour</span>
                                        <div className="flex items-center gap-2">
                                            {product.colors.map((color, i) => (
                                                <button key={i} onClick={() => setSelectedColor(i)}
                                                    className={`w-9 h-9 rounded-full border-2 transition-all ${selectedColor === i ? "border-sky-500 scale-110 shadow-md" : "border-gray-200"}`}
                                                    style={{ backgroundColor: color }} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sizes */}
                                    <div className="mb-5">
                                        <span className="text-sm font-semibold text-gray-700 block mb-2">Size</span>
                                        <div className="flex items-center gap-2">
                                            {product.sizes.map((size) => (
                                                <button key={size} onClick={() => setSelectedSize(size)}
                                                    className={`w-10 h-10 rounded-full border-2 text-sm font-semibold transition-all ${selectedSize === size ? "bg-sky-500 border-sky-500 text-white shadow-md" : "border-gray-200 text-gray-600 hover:border-sky-300"}`}>
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTAs */}
                                    <div className="flex gap-3 mb-3">
                                        <button className="flex-1 bg-sky-500 text-white py-3.5 rounded-2xl font-bold text-sm lg:text-base flex items-center justify-center gap-2 hover:bg-sky-600 active:scale-[0.98] transition-all shadow-lg shadow-sky-200">
                                            <CartIcon /> কার্ট
                                        </button>
                                        <button className="flex-1 bg-orange-500 text-white py-3.5 rounded-2xl font-bold text-sm lg:text-base flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-[0.98] transition-all shadow-lg shadow-orange-200">
                                            🛍️ অর্ডার করুন
                                        </button>
                                    </div>

                                    {/* Call & Share */}
                                    <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-2 text-sky-500 border border-sky-200 rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-sky-50 transition-colors">
                                            <PhoneIcon /> কল অর্ডার : 01410-050041
                                        </button>
                                        <button className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                                            <ShareIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="mb-6">
                            <div className="flex border-b border-gray-200 gap-1 overflow-x-auto">
                                {tabs.map((tab) => (
                                    <button key={tab} onClick={() => setActiveTab(tab)}
                                        className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap flex-shrink-0 ${activeTab === tab ? "bg-white border border-b-white border-gray-200 -mb-px text-sky-600" : "text-gray-500 hover:text-gray-700"}`}>
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="bg-white rounded-b-2xl rounded-tr-2xl border border-t-0 border-gray-200 p-4 lg:p-5">
                                {activeTab === "বিবরণ" && (
                                    <div className="space-y-3 text-sm text-gray-700">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                            <div><span className="text-gray-500">Material:</span> {product.material}</div>
                                            <div><span className="text-gray-500">Brand:</span> {product.brand}</div>
                                            <div><span className="text-gray-500">Features:</span> {product.features.join(", ")}</div>
                                            <div><span className="text-gray-500">Model:</span> {product.modelNumber}</div>
                                            <div><span className="text-gray-500">Origin:</span> {product.origin}</div>
                                            <div><span className="text-gray-500">Dimensions:</span> {product.dimensions}</div>
                                            <div><span className="text-gray-500">Weight:</span> {product.weight}</div>
                                        </div>
                                        <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mt-4">
                                            <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                                        <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center text-gray-400 font-medium">Image</div>
                                        <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center text-gray-400 font-medium">Image</div>
                                    </div>
                                )}
                                {activeTab === "সবিস্তার বিবরণী" && <p className="text-sm text-gray-500">বিস্তারিত তথ্য এখানে দেখানো হবে।</p>}
                                {activeTab === "ক্রেতার মতব্য" && <p className="text-sm text-gray-500">ক্রেতাদের মন্তব্য এখানে দেখানো হবে।</p>}
                            </div>
                        </div>

                        {/* Related Products (content area) */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-gray-900">Related Product</h2>
                                <button className="text-sky-500 text-sm font-semibold hover:underline flex items-center gap-1">
                                    View More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {relatedProducts.slice(0, 6).map((p) => <ProductCard key={p.id} p={p} />)}
                            </div>
                        </div>

                        {/* Recent Products — tablet/mobile only (replaces sidebar) */}
                        <div className="lg:hidden mb-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Products</h2>
                            <div className="space-y-3">
                                {relatedProducts.slice(0, 4).map((p) => (
                                    <div key={p.id} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex-shrink-0 flex items-center justify-center text-xs text-gray-400">IMG</div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 line-clamp-2">{p.title}</p>
                                            <p className="text-xs text-gray-400 mb-1">Yoga is a way to discover…</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-gray-900">${p.price}</span>
                                                <span className="text-xs text-gray-400 line-through">${p.originalPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories — tablet/mobile only */}
                        <div className="lg:hidden mb-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-3">Categories</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {["Gadgets Item", "Gift Item", "Toy Corner", "Home Decor"].map((cat) => (
                                    <div key={cat} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 bg-gray-200 rounded-xl flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-700">{cat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ── Right Sidebar (lg+ only) ── */}
                    <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0 space-y-6">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-gray-900">Related Product</h3>
                                <button className="text-sky-500 text-xs font-semibold hover:underline">View More &gt;</button>
                            </div>
                            <div className="space-y-3">
                                {relatedProducts.map((p) => <SidebarRow key={p.id} p={p} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-3">Recent Products</h3>
                            <div className="space-y-3">
                                {relatedProducts.slice(0, 4).map((p) => (
                                    <div key={p.id} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex-shrink-0" />
                                        <div>
                                            <p className="text-xs font-semibold text-gray-800 line-clamp-2 mb-1">{p.title}</p>
                                            <p className="text-[10px] text-gray-400 mb-1">Yoga is a way to discover…</p>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-sm font-bold">${p.price}</span>
                                                <span className="text-[10px] text-gray-400 line-through">${p.originalPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Animated Bottom Tab (below lg) */}
            <MobileTabBar />

            {/* Footer (lg+) */}
            <footer className="hidden lg:block bg-white border-t border-gray-100 px-8 py-12 mt-8">
                <div className="max-w-[1720px] mx-auto grid grid-cols-5 gap-8">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">OP</div>
                            <div>
                                <div className="font-bold text-gray-900 text-sm leading-none">OVERSEAS</div>
                                <div className="text-xs text-gray-400 tracking-widest">PRODUCTS</div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">we create possibilities for the connected world.</p>
                        <div className="flex gap-2 mt-4">
                            {["fb", "ig", "tw", "web"].map((s) => (
                                <div key={s} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-500 font-bold cursor-pointer hover:bg-sky-100 hover:text-sky-500 transition-colors">{s}</div>
                            ))}
                        </div>
                    </div>
                    {[
                        { title: "VISIT", items: ["D-14/3, Bankcolony, Savar, Dhaka-1340"] },
                        { title: "QUICK LINK", items: ["Products", "Categories", "Campaigns"] },
                        { title: "USEFUL LINK", items: ["Facebook", "Instagram", "Twitter"] },
                        { title: "LEGAL", items: ["Terms & Condition", "Privacy Policy", "Return Policy"] },
                    ].map((col) => (
                        <div key={col.title}>
                            <h4 className="font-bold text-gray-900 text-sm mb-3">{col.title}</h4>
                            <ul className="space-y-2">
                                {col.items.map((item) => (
                                    <li key={item} className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-[1720px] mx-auto border-t border-gray-100 mt-8 pt-4 text-xs text-gray-400 flex items-center justify-between">
                    <span>©2026 System Next IT, All right reserved.</span>
                    <span>www.overseasproducts.shop</span>
                </div>
            </footer>
        </div>
    );
}