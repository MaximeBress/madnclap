import { useTranslations } from 'next-intl';
import Link from 'next/link';

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
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
              <Link
                href="#contact"
                className="btn btn-yellow !mt-2 !rounded-[50rem] border-[#fab758] !bg-[#fab758] !text-white hover:translate-y-[-0.15rem] hover:!border-[#fab758] hover:bg-[#fab758] hover:text-white hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] active:border-[#fab758] active:bg-[#fab758] active:text-white disabled:border-[#fab758] disabled:bg-[#fab758] disabled:text-white"
              >
                {t('about.button')}
              </Link>
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
      <div className="wrapper bg-[rgba(246,247,249,1)]">
        <div className="container py-[4.5rem] md:!py-24 lg:!py-24 xl:!py-24">
          <div className="mx-[-15px] !mt-10 flex flex-wrap md:mx-[-20px] md:!mt-16 lg:mx-[-20px] lg:!mt-16 xl:mx-[-35px] xl:!mt-16">
            <div className="w-full max-w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:w-4/12 lg:!px-[20px] xl:w-4/12 xl:!px-[35px]">
              <h2 className="!mb-3 !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold xl:!text-[1.7rem]">
                {t('work.title')}
              </h2>
              <p>{t('work.text')}</p>
            </div>
            <div className="w-full max-w-full flex-[0_0_auto] !px-[15px] md:!px-[20px] lg:w-8/12 lg:!px-[20px] xl:w-8/12 xl:!px-[35px]">
              <div className="mx-[-15px] !mt-[-30px] flex flex-wrap md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px]">
                <div className="!mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 md:!px-[20px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-yellow pointer-events-none !mt-1 !mr-4 !inline-flex !h-[2.2rem] !w-[2.2rem] !items-center !justify-center !rounded-[100%] border-[#fab758] !bg-[#fab758] !p-0 !text-[1rem] !leading-none !text-white hover:!border-[#fab758] hover:bg-[#fab758] hover:text-white active:border-[#fab758] active:bg-[#fab758] active:text-white disabled:border-[#fab758] disabled:bg-[#fab758] disabled:text-white">
                        <span className="number mx-auto my-0 table-cell text-center align-middle text-[0.9rem] font-bold">
                          1
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1">{t('work.technicity.title')}</h4>
                      <p className="!mb-0">{t('work.technicity.text')}</p>
                    </div>
                  </div>
                </div>
                <div className="!mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 md:!px-[20px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-yellow pointer-events-none !mt-1 !mr-4 !inline-flex !h-[2.2rem] !w-[2.2rem] !items-center !justify-center !rounded-[100%] border-[#fab758] !bg-[#fab758] !p-0 !text-[1rem] !leading-none !text-white hover:!border-[#fab758] hover:bg-[#fab758] hover:text-white active:border-[#fab758] active:bg-[#fab758] active:text-white disabled:border-[#fab758] disabled:bg-[#fab758] disabled:text-white">
                        <span className="number mx-auto my-0 table-cell text-center align-middle text-[0.9rem] font-bold">
                          2
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1">{t('work.style.title')}</h4>
                      <p className="!mb-0">{t('work.style.text')}</p>
                    </div>
                  </div>
                </div>
                <div className="!mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 md:!px-[20px] lg:w-6/12 lg:!px-[20px] xl:w-6/12 xl:!px-[35px]">
                  <div className="flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-yellow pointer-events-none !mt-1 !mr-4 !inline-flex !h-[2.2rem] !w-[2.2rem] !items-center !justify-center !rounded-[100%] border-[#fab758] !bg-[#fab758] !p-0 !text-[1rem] !leading-none !text-white hover:!border-[#fab758] hover:bg-[#fab758] hover:text-white active:border-[#fab758] active:bg-[#fab758] active:text-white disabled:border-[#fab758] disabled:bg-[#fab758] disabled:text-white">
                        <span className="number mx-auto my-0 table-cell text-center align-middle text-[0.9rem] font-bold">
                          3
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="!mb-1">{t('work.leadership.title')}</h4>
                      <p className="!mb-0">{t('work.leadership.text')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
