import axios from 'axios';

type Video = {
  name: string;
  description: string;
  link: string;
  privacy: {
    view: string;
  };
  pictures: {
    base_link: string;
  };
};

const fetchVideos = async (): Promise<{ data: Video[] }> => {
  const headers = {
    Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  };
  const response = await axios.get(
    `${process.env.VIMEO_API_URL ?? ''}me/videos?per_page=100&sort=date`,
    {
      headers,
    },
  );

  return response.data;
};

export const Achievements = async () => {
  // const t = useTranslations('Homepage');

  const { data: videos } = await fetchVideos();

  return (
    <section id="achievements">
      <div className="wrapper">
        <div className="container py-20 !text-center">
          <div className="mx-[-15px] flex flex-wrap">
            <div className="xxl:w-7/12 !mx-auto !mb-8 w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-10/12 xl:w-8/12">
              <h2 className="!mb-3 !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold xl:!text-[1.7rem]">
                Nos réalisations
              </h2>
              <p className="lead !text-[1.1rem] !leading-[1.55] font-medium">
                {/*{t('achievements.subtitle')}*/}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {videos
              .filter((video) => video.privacy.view === 'anybody')
              .map((video, index) => (
                <a href={video.link} data-glightbox key={index} className="flex flex-col gap-3">
                  <div
                    className="bg-image bg-overlay bg-overlay-500 relative z-0 flex h-[200px] bg-cover bg-scroll bg-[center_center] bg-no-repeat before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.5)] before:content-[''] hover:before:bg-[rgba(30,34,40,.4)]"
                    data-image-src={video.pictures.base_link}
                  >
                    <i className="icn-caret-right !relative z-[2] m-auto !ml-[0.15rem] w-full !text-[calc(1.355rem_+_1.26vw)] text-white before:content-['\\\\\\\\e900']"></i>
                  </div>
                  <h2 className="h6 !mb-5 uppercase">{video.name}</h2>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
