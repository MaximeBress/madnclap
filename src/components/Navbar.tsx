'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import {
    BiChevronDown,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoVimeo,
    BiLogoYoutube,
    BiMenu,
    BiX,
} from 'react-icons/bi';

import { routing } from '@/i18n/routing';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import logo from '../../public/img/svg/logo.svg';

export default function Navbar() {
    const t = useTranslations('Menu');
    const { locale } = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const [isMobileMenuOpen, setIsMobileMenuOpenVisible] = useState(false);

    const handleLocaleChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <nav className="fixed z-50 w-full transition-transform duration-300">
            <div className="flex flex-col items-end">
                <div className="mx-auto flex h-20 w-full justify-between bg-white px-4 shadow-md sm:px-6 lg:border-0 lg:px-8">
                    <Link href="/" className="cursor-pointer p-2">
                        <Image priority src={logo} width={50} height={50} alt="Logo MadNClap" />
                    </Link>
                    <div className="hidden items-center gap-8 lg:flex uppercase">
                        <Link
                            href="#home"
                            className={`text-md cursor-pointer rounded-md px-3 py-2 font-medium transition-colors duration-200 hover:underline ${pathname === '#home' ? 'underline' : 'text-gray-600'}`}
                        >
                            {t('home')}
                        </Link>
                        <Link
                            href="#about"
                            className={`text-md cursor-pointer rounded-md px-3 py-2 font-medium transition-colors duration-200 hover:underline ${pathname === '#about' ? 'underline' : 'text-gray-600'}`}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href="#achievements"
                            className={`text-md cursor-pointer rounded-md px-3 py-2 font-medium transition-colors duration-200 hover:underline ${pathname === '#achievements' ? 'underline' : 'text-gray-600'}`}
                        >
                            {t('achievements')}
                        </Link>
                        <Link
                            href="#contact"
                            className={`text-md cursor-pointer rounded-md px-3 py-2 font-medium transition-colors duration-200 hover:underline ${pathname === '#contact' ? 'underline' : 'text-gray-600'}`}
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="hidden items-center gap-4 lg:flex">
                        <Link
                            href="https://www.youtube.com/channel/UCPDzgHHZZ7VZ8T61GrLcrdA"
                            className="font-medium text-[#FF0033] uppercase hover:text-[#d7002b]"
                            target="_blank"
                        >
                            <BiLogoYoutube className="text-xl" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/Madnclap/"
                            className="font-medium text-[#4470cf] uppercase hover:text-[#76a7e4]"
                            target="_blank"
                        >
                            <BiLogoFacebook className="text-xl" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/madnclap/"
                            className="font-medium text-[#d53581] uppercase hover:text-[#b71f63]"
                            target="_blank"
                        >
                            <BiLogoInstagram className="text-xl" />
                        </Link>
                        <Link
                            href="https://vimeo.com/user59126415"
                            className="font-medium text-[#17d5ff] uppercase hover:text-[#00b7e5]"
                            target="_blank"
                        >
                            <BiLogoVimeo className="text-xl" />
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="cursor-pointer uppercase" disabled={isPending}>
                                    {locale}
                                    <BiChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup value={locale as string} onValueChange={handleLocaleChange}>
                                    {routing.locales.map((localeAvailable, index) => (
                                        <DropdownMenuRadioItem key={index} value={localeAvailable} className="uppercase cursor-pointer">
                                            {localeAvailable}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpenVisible(!isMobileMenuOpen)}
                            className="text-grey-400 hover:bg-grey-100 hover:text-grey-400 focus:ring-grey-300 inline-flex items-center justify-center rounded-md p-2"
                        >
                            {!isMobileMenuOpen ? <BiMenu className="text-3xl" /> : <BiX className="text-3xl" />}
                        </button>
                    </div>
                </div>

                <div
                    className={`flex w-1/2 flex-col gap-4 rounded-bl-md px-8 transition-all duration-300 ease-in-out lg:hidden ${
                        isMobileMenuOpen ? 'bg-white/80' : 'max-h-0 overflow-hidden opacity-0'
                    }`}
                >
                    <div className="flex flex-col items-end gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-fit cursor-pointer !p-0 uppercase" disabled={isPending}>
                                    {locale}
                                    <BiChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup value={locale as string} onValueChange={handleLocaleChange}>
                                    {routing.locales.map((localeAvailable, index) => (
                                        <DropdownMenuRadioItem key={index} value={localeAvailable} className="uppercase cursor-pointer">
                                            {localeAvailable}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link
                            href="#home"
                            className={`block rounded-md text-base font-medium ${
                                pathname === '#home'
                                    ? 'text-primary-400 bg-primary-50'
                                    : 'hover:bg-primary-50 text-gray-600 hover:text-gray-600'
                            }`}
                            onClick={() => setIsMobileMenuOpenVisible(false)}
                        >
                            {t('home')}
                        </Link>
                        <Link
                            href="#about"
                            className={`block rounded-md text-base font-medium ${
                                pathname === '#home'
                                    ? 'text-primary-400 bg-primary-50'
                                    : 'hover:bg-primary-50 text-gray-600 hover:text-gray-600'
                            }`}
                            onClick={() => setIsMobileMenuOpenVisible(false)}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href="#achievements"
                            className={`block rounded-md text-base font-medium ${
                                pathname === '#home'
                                    ? 'text-primary-400 bg-primary-50'
                                    : 'hover:bg-primary-50 text-gray-600 hover:text-gray-600'
                            }`}
                            onClick={() => setIsMobileMenuOpenVisible(false)}
                        >
                            {t('achievements')}
                        </Link>
                        <Link
                            href="#contact"
                            className={`block rounded-md text-base font-medium ${
                                pathname === '#home'
                                    ? 'text-primary-400 bg-primary-50'
                                    : 'hover:bg-primary-50 text-gray-600 hover:text-gray-600'
                            }`}
                            onClick={() => setIsMobileMenuOpenVisible(false)}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex justify-end gap-4 py-4">
                        <Link
                            href="https://www.youtube.com/channel/UCPDzgHHZZ7VZ8T61GrLcrdA"
                            className="font-medium text-[#FF0033] uppercase hover:text-[#d7002b]"
                            target="_blank"
                        >
                            <BiLogoYoutube className="text-xl" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/Madnclap/"
                            className="font-medium text-[#4470cf] uppercase hover:text-[#76a7e4]"
                            target="_blank"
                        >
                            <BiLogoFacebook className="text-xl" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/madnclap/"
                            className="font-medium text-[#d53581] uppercase hover:text-[#b71f63]"
                            target="_blank"
                        >
                            <BiLogoInstagram className="text-xl" />
                        </Link>
                        <Link
                            href="https://vimeo.com/user59126415"
                            className="font-medium text-[#17d5ff] uppercase hover:text-[#00b7e5]"
                            target="_blank"
                        >
                            <BiLogoVimeo className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
