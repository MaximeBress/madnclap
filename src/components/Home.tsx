import { useTranslations } from 'next-intl';

export const Home = () => {
  const t = useTranslations('Homepage');

  return (
    <section
      id="home"
      className="section-frame br-fix overflow-hidden md:rounded-[1rem] lg:rounded-[1rem] xl:rounded-[1rem]"
    >
      <div
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-500 relative z-0 bg-cover bg-scroll bg-[center_center] bg-no-repeat before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.5)] before:content-['']"
        data-image-src="/img/cocon_showreel_image.png"
      >
        <div className="container pt-32 pb-28 !text-center lg:pt-[12.5rem] lg:pb-36 xl:pt-[12.5rem] xl:pb-36">
          <div className="mx-[-15px] flex flex-wrap">
            <div
              className="xxl:w-6/12 !mx-auto w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-9/12 lg:w-8/12 xl:w-7/12"
              data-cues="zoomIn"
              data-group="page-title"
              data-interval="-200"
              data-delay="500"
            >
              <h2 className="h6 !mb-5 !tracking-[0.05rem] !text-white uppercase">
                {t('subtitle')}
              </h2>
              <h3 className="!mb-7 !text-[calc(1.395rem_+_1.74vw)] !leading-[1.15] !text-white xl:!text-[2.7rem]">
                {t('title')}
              </h3>
              <a
                href="https://vimeo.com/428537090"
                className="btn btn-circle btn-white btn-play ripple !relative z-[2] !mx-auto inline-flex !h-[3.5rem] !w-[3.5rem] items-center justify-center !rounded-[100%] !p-0 !text-[calc(1.355rem_+_1.26vw)] leading-none before:absolute before:inset-0 before:z-[-1] before:block before:animate-[ripple-1_2s_infinite_ease-in-out] before:rounded-[50%] before:bg-[#ffffff] before:opacity-80 before:content-[''] after:absolute after:inset-0 after:z-[-1] after:block after:animate-[ripple-2_2s_infinite_ease-in-out] after:rounded-[50%] after:bg-[#ffffff] after:opacity-60 after:content-[''] after:[animation-delay:0.5s] hover:translate-y-0 xl:!text-[2.3rem]"
                data-glightbox
              >
                <i className="icn-caret-right !relative z-[2] !ml-[0.15rem] !text-[calc(1.355rem_+_1.26vw)] before:content-['\e900']"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="divider mx-[-0.5rem] !text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
              <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
