import React from 'react'
import CartIcon from '../svg/CartIcon'

export default function DesktopNav() {
    return (
        <div>
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
        </div>
    )
}
