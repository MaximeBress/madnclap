'use client';

import { use, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import { Video } from '@/typing';
import { clsx } from 'clsx';

export const Achievements = ({ videos }: { videos: Promise<{ data: Video[] }> }) => {
    const t = useTranslations('Homepage');
    const { locale } = useParams();
    const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lightbox: any;
    let mounted = true;

    const init = async () => {
      const { default: GLightbox } = await import('glightbox');
      if (!mounted) return;

      lightbox = GLightbox({
        selector: '#achievements [data-glightbox]',
        touchNavigation: true,
        loop: false,
        zoomable: false,
        autoplayVideos: true,
        moreLength: 0,
        plyr: {
          css: '',
          js: '',
          config: {
            ratio: '',
            fullscreen: {
              enabled: false,
              iosNative: false,
            },
            youtube: {
              noCookie: true,
              rel: 0,
              iv_load_policy: 3,
            },
            vimeo: {
              byline: false,
              portrait: false,
              title: false,
              transparent: false,
            },
          },
        },
      });
    };

    init();

    return () => {
      mounted = false;
      if (lightbox?.destroy) {
        lightbox.destroy();
      }
    };
  }, [locale]);


    const { data: allVideos } = use(videos);

    return (
        <section id="achievements">
            <div className="wrapper">
                <div className="container flex flex-col gap-4 py-20 !text-center">
                    <div className="mx-[-15px] flex flex-wrap">
                        <div className="xxl:w-7/12 !mx-auto !mb-8 w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-10/12 xl:w-8/12">
                            <h2 className="!mb-3 uppercase !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold xl:!text-[1.7rem]">
                                {t('achievements.title')}
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        {allVideos
                            .filter((video) => video.privacy.view === 'anybody')
                            .slice(0, 6)
                            .map((video, index) => (
                                <a
                                    href={video.link}
                                    data-glightbox
                                    key={index}
                                    className="relative aspect-video before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.5)] before:content-[''] hover:cursor-pointer hover:before:bg-[rgba(30,34,40,.4)]"
                                >
                                    <Image
                                        src={video.pictures.base_link}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={video.name}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <i className="icn-caret-right z-[2] !text-[calc(1.355rem_+_1.26vw)] text-white before:content-['\\\\\\\\e900']"></i>
                                    </div>
                                </a>
                            ))}

                        {allVideos
                            .filter((video) => video.privacy.view === 'anybody')
                            .slice(6, -1)
                            .map((video, index) => (
                                <a
                                    href={video.link}
                                    data-glightbox
                                    key={index}
                                    className={clsx(
                                        !showMore && 'hidden',
                                        "relative aspect-video before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.5)] before:content-[''] hover:cursor-pointer hover:before:bg-[rgba(30,34,40,.4)]",
                                    )}
                                >
                                    <Image
                                        src={video.pictures.base_link}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={video.name}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <i className="icn-caret-right z-[2] !text-[calc(1.355rem_+_1.26vw)] text-white before:content-['\\\\\\\\e900']"></i>
                                    </div>
                                </a>
                            ))}
                    </div>
                    <button
                        className="btn w-fit self-center !rounded-[50rem] border-[#FAA5A5] !bg-[#FAA5A5] !text-white hover:!border-[#FAA5A5] hover:bg-[#FAA5A5] hover:text-white active:border-[#FAA5A5] active:bg-[#FAA5A5] active:text-white disabled:border-[#FAA5A5] disabled:bg-[#FAA5A5] disabled:text-white"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? t('achievements.showLess') : t('achievements.showMore')}
                    </button>
                </div>
            </div>
        </section>
    );
};
