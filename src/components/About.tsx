import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('Homepage');

  return (
    <section id="about">
      <div className="wrapper">
        <div className="container py-[4.5rem] md:!py-24 lg:!py-24 xl:!py-24">
          <div className="mx-[-15px] !mt-[-30px] flex flex-wrap items-center md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px]">
            <div className="!mx-auto !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-8/12 md:!px-[20px] lg:!order-2 lg:w-6/12 lg:!px-[20px] xl:!order-2 xl:w-6/12 xl:!px-[35px]">
              <img src="/img/ShutterFixed.png" alt="image" />
            </div>
            <div className="!mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
              <h2 className="!mb-3 !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold xl:!text-[1.7rem]">
                {t('about.title')}
              </h2>
              <p className="lead !text-[1.1rem] !leading-[1.55] font-medium">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wrapper image-wrapper bg-image bg-overlay relative z-0 bg-cover !bg-fixed bg-[center_center] bg-no-repeat !text-white before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.5)] before:content-['']"
        data-image-src="/img/camera_home.png"
      >
        <div className="container py-[6rem] !text-center md:!py-[9rem] lg:!py-[9rem] xl:!py-[9rem]">
          <h2 className="!mb-0 !text-[calc(1.375rem_+_1.5vw)] !leading-[1.15] font-semibold !text-white xl:!text-[2.5rem]">
            {t('accompanied')}
          </h2>
        </div>
      </div>
    </section>
  );
};
