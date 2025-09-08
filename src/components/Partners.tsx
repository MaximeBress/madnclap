import Image from 'next/image';
import { useTranslations } from 'next-intl';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export const Partners = () => {
  const t = useTranslations('Homepage');

  return (
    <>
      <h2 className="!mb-3 text-center !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold xl:!text-[1.7rem]">
        {t('partners')}
      </h2>
      <div className="py-5">
        <Carousel
          className="w-full lg:max-w-xl lg:hidden"
          opts={{
            align: 'start',
            loop: true,
          }}
          autoPlay
          autoPlayInterval={2000}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/grt-gaz.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/rakuten.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/la-seine-musicale.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/wolbe.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/neotiss.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/my-jolie-candle2.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/streetpress.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/cnrs.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <figure className="px-4">
                <Image
                  src="/img/datastorm.png"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="mx-0 !mt-[-40px] hidden flex-wrap items-center md:mx-[-20px] lg:mx-[-20px] lg:flex xl:mx-[-35px]">
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/grt-gaz.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/rakuten.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/la-seine-musicale.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/wolbe.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/neotiss.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/my-jolie-candle2.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/streetpress.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/cnrs.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="!mt-[40px] w-3/9 max-w-full flex-[0_0_auto] px-[45px] lg:w-1/9 lg:!px-[20px] xl:w-1/9 xl:!px-[35px]">
            <figure className="xxl:!px-4 px-5 md:!px-0 lg:!px-2 xl:!px-3">
              <Image
                src="/img/datastorm.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
