import React from 'react'
import CartIcon from '../svg/CartIcon'

export default function MobileNav() {
    return (
        <div>
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
        </div>
    )
}
