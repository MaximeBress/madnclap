'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import logo from '../../public/img/svg/logo.svg';
import { useParams } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeoV } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const t = useTranslations('Menu');
  const { locale } = useParams();

  return (
    <header className="wrapper relative bg-[rgba(246,247,249,1)]">
      <nav className="navbar navbar-expand-lg extended extended-alt navbar-light !bg-[#ffffff]">
        <div className="container lg:!flex-col xl:!flex-col">
          <div className="topbar flex flex-row items-center lg:!justify-center xl:!justify-center">
            <div className="navbar-brand">
              <Link href="/">
                <Image priority src={logo} width={70} height={70} alt="Logo MadNClap" />
              </Link>
            </div>
          </div>
          <div className="navbar-collapse-wrapper flex flex-row items-center justify-between bg-[rgba(255,255,255)] opacity-100">
            <div className="navbar-other hidden w-full lg:block xl:block">
              <nav className="nav social social-muted">
                <a
                  className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                  href="https://www.youtube.com/channel/UCPDzgHHZZ7VZ8T61GrLcrdA"
                >
                  <i className="uil uil-youtube text-[1rem] !text-[#FF0033] before:content-['\edb5']"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                  href="https://www.facebook.com/Madnclap/"
                >
                  <i className="uil uil-facebook-f text-[1rem] !text-[#4470cf] before:content-['\eae2']"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                  href="https://www.instagram.com/madnclap/"
                >
                  <i className="uil uil-instagram text-[1rem] !text-[#d53581] before:content-['\eb9c']"></i>
                </a>
                <a
                  className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem]"
                  href="https://vimeo.com/user59126415"
                >
                  <FontAwesomeIcon icon={faVimeoV} />
                </a>
              </nav>
            </div>
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header flex flex-row items-center justify-between p-6 lg:!hidden xl:!hidden">
                <h3 className="!mb-0 !text-[calc(1.275rem_+_0.3vw)] !text-white xl:!text-[1.5rem]">
                  Mad’n’Clap
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white before:font-Unicons m-0 !mr-[-0.75rem] border-0 bg-inherit p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out before:m-0 before:!flex before:h-[1.8rem] before:w-[1.8rem] before:items-center before:justify-center before:rounded-[100%] before:bg-[rgba(255,255,255,.08)] before:p-0 before:text-[1.05rem] before:leading-[1.8rem] before:text-white before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:content-['\ed3b'] hover:no-underline hover:before:bg-[rgba(0,0,0,.11)] motion-reduce:transition-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body flex !h-full flex-col">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="#home" className="nav-link scroll active hover:!text-[#fab758]">
                      {t('home')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#about" className="nav-link scroll hover:!text-[#fab758]">
                      {t('about')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#achievements" className="nav-link scroll hover:!text-[#fab758]">
                      {t('achievements')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#contact" className="nav-link scroll hover:!text-[#fab758]">
                      {t('contact')}
                    </Link>
                  </li>
                </ul>
                <div className="offcanvas-footer lg:!hidden xl:!hidden">
                  <div>
                    <a href="mailto:first.last@email.com" className="link-inverse">
                      contact@madnclap.com
                    </a>
                    <br /> +33 6 86 12 32 51 <br />
                    <nav className="nav social social-white !mt-4">
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] !text-[#cacaca] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] motion-reduce:transition-none"
                        href="https://www.youtube.com/channel/UCPDzgHHZZ7VZ8T61GrLcrdA"
                      >
                        <i className="uil uil-youtube text-[1rem] !text-white before:content-['\edb5']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] !text-[#cacaca] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] motion-reduce:transition-none"
                        href="https://www.facebook.com/Madnclap/"
                      >
                        <i className="uil uil-facebook-f text-[1rem] !text-white before:content-['\eae2']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] !text-[#cacaca] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] motion-reduce:transition-none"
                        href="https://www.instagram.com/madnclap/"
                      >
                        <i className="uil uil-instagram text-[1rem] !text-white before:content-['\eb9c']"></i>
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] translate-y-0 text-[1rem] !text-[#cacaca] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] motion-reduce:transition-none"
                        href="https://vimeo.com/user59126415"
                      >
                        <FontAwesomeIcon icon={faVimeoV} />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-other flex w-full">
              <ul className="navbar-nav !ml-auto !flex-row !items-center">
                <li className="nav-item dropdown language-select group uppercase">
                  <a
                    className="nav-link dropdown-item dropdown-toggle hover:!text-[#fab758] focus:!text-[#fab758]"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {locale}
                  </a>
                  <ul className="dropdown-menu group-hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                    {routing.locales.map((localeAvailable) => (
                      <li key={localeAvailable} className="nav-item">
                        <Link
                          href={`/${localeAvailable}`}
                          className="dropdown-item hover:bg-[inherit] hover:!text-[#3f78e0]"
                        >
                          {localeAvailable}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item lg:!hidden xl:!hidden">
                  <button className="hamburger offcanvas-nav-btn">
                    <span></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
