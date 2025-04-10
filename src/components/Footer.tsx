import Image from 'next/image';

import logo from '../../public/img/svg/logo.svg';
import { useTranslations } from 'next-intl';
import { faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[rgba(246,247,249,1)]">
      <div className="container pt-[4rem] pb-7">
        <div className="mx-[-15px] !mt-[-30px] flex flex-wrap lg:mx-0 xl:mx-0">
          <div className="!mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-4/12 lg:px-0 xl:w-4/12 xl:px-0">
            <div className="widget flex gap-10">
              <Image
                priority
                src={logo}
                width={50}
                height={50}
                alt="Logo MadNClap"
                className="!mb-4"
              />
              <p className="lead !mb-0 text-[0.9rem] !leading-[1.65] font-medium">{t('text')}</p>
            </div>
          </div>
          <div className="!mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:!ml-[16.66666667%] lg:w-3/12 lg:px-0 xl:!ml-[16.66666667%] xl:w-3/12 xl:px-0">
            <div className="widget">
              <div className="flex flex-row">
                <div>
                  <div className="icon !mt-[-0.25rem] !mr-4 !text-[calc(1.265rem_+_0.18vw)] !text-[#fab758] xl:!text-[1.4rem]">
                    <i className="uil uil-phone-volume before:content-['\ec50']"></i>
                  </div>
                </div>
                <div>
                  <h5 className="!mb-1">{t('phone')}</h5>
                  <p className="!mb-0">+33 6 86 12 32 51</p>
                </div>
              </div>
            </div>
          </div>
          <div className="!mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-3/12 lg:px-0 xl:w-3/12 xl:px-0">
            <div className="widget">
              <div className="flex flex-row">
                <div>
                  <div className="icon !mt-[-0.25rem] !mr-4 !text-[calc(1.265rem_+_0.18vw)] !text-[#fab758] xl:!text-[1.4rem]">
                    <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>
                  </div>
                </div>
                <div className="!justify-start !self-start">
                  <h5 className="!mb-1">{t('address')}</h5>
                  <address className="!mb-4 !leading-[inherit] not-italic">
                    Moonshine St. 14/05 Light City, London, United Kingdom
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="!mt-[3rem] !mb-7 md:!mt-[3.5rem] lg:!mt-[3.5rem] xl:!mt-[3.5rem]" />
        <div className="items-center justify-between md:!flex lg:!flex xl:!flex">
          <p className="!mb-2 lg:!mb-0 xl:!mb-0">
            © {new Date().getFullYear()} MadNClap. {t('rights')}
          </p>
          <nav className="nav social social-muted !mb-0 md:!text-right lg:!text-right xl:!text-right">
            <a
              className="m-[0_0_0_.7rem] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] max-md:m-[0_.7rem_0_0]"
              href="https://www.youtube.com/channel/UCPDzgHHZZ7VZ8T61GrLcrdA"
            >
              <i className="uil uil-youtube text-[1rem] !text-[#FF0033] before:content-['\edb5']"></i>
            </a>
            <a
              className="m-[0_0_0_.7rem] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] max-md:m-[0_.7rem_0_0]"
              href="https://www.facebook.com/Madnclap/"
            >
              <i className="uil uil-facebook-f text-[1rem] !text-[#4470cf] before:content-['\eae2']"></i>
            </a>
            <a
              className="m-[0_0_0_.7rem] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] max-md:m-[0_.7rem_0_0]"
              href="https://www.instagram.com/madnclap/"
            >
              <i className="uil uil-instagram text-[1rem] !text-[#d53581] before:content-['\eb9c']"></i>
            </a>
            <a
              className="m-[0_0_0_.7rem] translate-y-0 text-[1rem] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-0.15rem] max-md:m-[0_.7rem_0_0]"
              href="https://vimeo.com/user59126415"
            >
              <FontAwesomeIcon icon={faVimeoV} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
