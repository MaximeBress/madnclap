import { useTranslations } from 'next-intl';
import axios from 'axios';

const fetchVideos = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.vimeo.*+json;version=3.4',
  };

  const response = await axios.get(process.env.VIMEO_API_URL ?? '', { headers });

  return response.data;
};

export const Achievements = () => {
  const t = useTranslations('Homepage');

  return (
    <section id="achievements">
      <div className="wrapper">
        <div className="container py-20 !text-center md:!py-[7rem] lg:!py-[7rem] xl:!py-[7rem]">
          <div className="mx-[-15px] flex flex-wrap">
            <div className="xxl:w-7/12 !mx-auto !mb-8 w-full max-w-full flex-[0_0_auto] !px-[15px] lg:w-10/12 xl:w-8/12">
              <h2 className="!mb-3 !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold xl:!text-[1.7rem]">
                {t('achievements.title')}
              </h2>
              <p className="lead !text-[1.1rem] !leading-[1.55] font-medium">
                {t('achievements.subtitle')}
              </p>
            </div>
          </div>
          <div className="itemgrid grid-view projects-masonry">
            <div className="isotope mx-[-15px] !mt-[-30px] flex flex-wrap md:mx-[-15px]">
              <div className="project item drinks events !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                <figure className="overlay overlay-1 group relative rounded">
                  <a
                    className="relative inset-0 z-[3] block cursor-pointer"
                    href="./assets/img/photos/pf1-full.jpg"
                    data-glightbox
                    data-gallery="shots-group"
                  >
                    {' '}
                    <img src="./assets/img/photos/pf1.jpg" alt="image" />
                  </a>
                  <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                    <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                      Fringilla Nullam
                    </h5>
                  </figcaption>
                </figure>
              </div>
              <div className="project item events !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                <figure className="overlay overlay-1 group relative rounded">
                  <a
                    className="relative inset-0 z-[3] block cursor-pointer"
                    href="./assets/img/photos/pf2-full.jpg"
                    data-glightbox
                    data-gallery="shots-group"
                  >
                    {' '}
                    <img src="./assets/img/photos/pf2.jpg" alt="image" />
                  </a>
                  <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                    <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                      Ridiculus Parturient
                    </h5>
                  </figcaption>
                </figure>
              </div>
              <div className="project item drinks foods !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                <figure className="overlay overlay-1 group relative rounded">
                  <a
                    className="relative inset-0 z-[3] block cursor-pointer"
                    href="./assets/img/photos/pf3-full.jpg"
                    data-glightbox
                    data-gallery="shots-group"
                  >
                    {' '}
                    <img src="./assets/img/photos/pf3.jpg" alt="image" />
                  </a>
                  <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                    <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                      Ornare Ipsum
                    </h5>
                  </figcaption>
                </figure>
              </div>
              <div className="accordion accordion-wrapper" id="accordionExample">
                <div className="card plain accordion-item">
                  <div
                    className="card-header !mb-0 !border-0 !bg-inherit !p-[0_0_.8rem_0]"
                    id="headingOne"
                  >
                    <button
                      className="accordion-button !text-[.85rem] before:!text-[#3f78e0] hover:!text-[#3f78e0]"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {' '}
                      En voir plus
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse show collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body !p-[0_0_0_1.1rem]">
                      <div className="project item events !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf4-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf4.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Nullam Mollis
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item pastries events !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf5-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf5.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Euismod Risus
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item foods !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf6-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf6.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Ridiculus Tristique
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item foods drinks !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf7-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf7.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Sollicitudin Pharetra
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item pastries !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf8-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf8.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Tristique Venenatis
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item events !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf9-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf9.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Cursus Fusce
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item foods !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf10-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf10.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Consectetur Malesuada
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item drinks !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf11-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf11.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Ultricies Aenean
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item foods !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf12-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf12.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Pellentesque Commodo
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="project item drinks !mt-[30px] w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-4/12">
                        <figure className="overlay overlay-1 group relative rounded">
                          <a
                            className="relative inset-0 z-[3] block cursor-pointer"
                            href="./assets/img/photos/pf13-full.jpg"
                            data-glightbox
                            data-gallery="shots-group"
                          >
                            {' '}
                            <img src="./assets/img/photos/pf13.jpg" alt="image" />
                          </a>
                          <figcaption className="pointer-events-none absolute inset-0 z-[5] h-full w-full p-2 px-4 py-3 text-center opacity-0 group-hover:opacity-100">
                            <h5 className="from-top absolute top-2/4 left-0 !mb-0 w-full translate-y-[-80%] px-4 py-3 group-hover:-translate-y-2/4">
                              Ultricies Aenean
                            </h5>
                          </figcaption>
                        </figure>
                      </div>
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
