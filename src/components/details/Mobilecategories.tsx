// components/details/MobileCategories.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface Category {
    id: string;
    name: string;
    image: string;
}

const dummyCategories: Category[] = [
    { id: "1", name: "Gadgets Item", image: "/images/book.png" },
    { id: "2", name: "Gift Item", image: "/images/book.png" },
    { id: "3", name: "Toy Corner", image: "/images/book.png" },
    { id: "4", name: "Home Decor", image: "/images/book.png" },
];

export default function MobileCategories() {
    return (
        <div className="bg-white rounded-2xl px-4 py-6">
            <h2 className="text-xl font-lato font-bold mb-4">Categories</h2>
            <div className="space-y-3">
                {dummyCategories.map((cat) => (
                    <Link
                        key={cat.id}
                        href="#"
                        className="flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 transition"
                    >
                        <div className="relative w-14 h-14 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-[15px] font-roboto font-medium text-black">
                            {cat.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}