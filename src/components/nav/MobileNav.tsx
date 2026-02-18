import Image from 'next/image'
import Link from 'next/link'

export default function MobileNav() {
    return (
        <div>
            <nav className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-40">
                <Image src="/images/menu-01.svg" alt="Brand" width={24} height={24} className='cursor-pointer' />
                <div className="flex items-center gap-1.5">
                    <Link href='/'>
                        <Image src="/images/logo.png" alt="Logo" width={155} height={28} />
                    </Link>

                </div>
                <div className="flex items-center gap-5">
                    <Image src="/images/translate.svg" alt="Brand" width={24} height={24} className='cursor-pointer' />
                    <Image src="/images/search-01.svg" alt="Brand" width={24} height={24} className='cursor-pointer' />
                    <Image src="/images/shopping-cart-02.svg" alt="Brand" width={24} height={24} className='cursor-pointer' />
                    <Image src="/images/notification-02.svg" alt="Brand" width={24} height={24} className='cursor-pointer' />
                </div>
            </nav>
        </div>
    )
}
