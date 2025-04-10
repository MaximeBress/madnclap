'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ContactFormData } from '@/typing';
import * as yup from 'yup';

export const Contact = () => {
  const t = useTranslations('Homepage');

  const schema = yup
    .object()
    .shape({
      name: yup.string().required(t('contact.form.name.required')),
      email: yup
        .string()
        .email(t('contact.form.email.email'))
        .required(t('contact.form.email.required')),
      message: yup
        .string()
        .min(5, t('contact.form.message.min'))
        .required(t('contact.form.message.required')),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success('Votre message a bien été envoyé !', {
          position: 'bottom-left',
        });
        reset({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        toast.error("Il y'a eu une erreur lors de l'envoi du message !", {
          position: 'bottom-left',
        });
      });
  };

  return (
    <section id="contact">
      <div
        className="wrapper image-wrapper bg-image bg-overlay relative z-0 bg-cover bg-fixed bg-[center_center] bg-no-repeat before:absolute before:top-0 before:left-0 before:z-[1] before:block before:h-full before:w-full before:bg-[rgba(30,34,40,.5)] before:content-['']"
        data-image-src="img/telephone.png"
      >
        <div className="container py-[5rem] md:!py-[7rem] lg:!py-[7rem] xl:!py-[7rem]">
          <div className="mx-[-15px] flex flex-wrap">
            <div className="!mx-auto w-full max-w-full flex-[0_0_auto] !px-[15px] xl:w-9/12">
              <div className="card border-0 !bg-[rgba(255,255,255,.9)]">
                <div className="card-body p-[40px] lg:!px-24 lg:!py-16 xl:!px-24 xl:!py-16">
                  <h2 className="!mb-3 !text-center !text-[calc(1.295rem_+_0.54vw)] !leading-[1.25] !font-semibold xl:!text-[1.7rem]">
                    Contact
                  </h2>
                  <p className="lead !mb-10 !text-[1.1rem] !leading-[1.55] font-medium">
                    {t('contact.title')}
                  </p>
                  <form className="contact-form needs-validation" onSubmit={handleSubmit(onSubmit)}>
                    <div className="messages"></div>
                    <div className="mx-[-10px] flex flex-wrap">
                      <div className="w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-6/12">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_name"
                            type="text"
                            className="form-control relative m-0 block h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] w-full rounded-[0.4rem] border-0 border-solid border-[rgba(8,60,130,0.07)] bg-[rgba(255,255,255,.7)] bg-clip-padding p-[.6rem_1rem] !pr-9 text-[.75rem] !leading-[1.25] font-medium !text-[#60697b] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] transition-[border-color] duration-[0.15s] ease-in-out placeholder:!text-[#959ca9] placeholder:opacity-100 focus:!border-0 focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-0"
                            placeholder=""
                            {...register('name', { required: true })}
                          />
                          <label
                            htmlFor="form_name"
                            className="font-Manrope pointer-events-none !absolute top-0 left-0 !z-[2] !mb-2 !inline-block h-full origin-[0_0] overflow-hidden border border-solid border-transparent px-4 py-[0.6rem] text-start text-[.75rem] text-ellipsis whitespace-nowrap !text-[#959ca9]"
                          >
                            {t('contact.form.name.label')} *
                          </label>
                          {errors['name'] && (
                            <div className="mt-1 w-full text-[0.7rem] text-[#dc3545]">
                              {errors['name']?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full max-w-full flex-[0_0_auto] !px-[15px] md:w-6/12 lg:w-6/12 xl:w-6/12">
                        <div className="form-floating relative !mb-4">
                          <input
                            id="form_email"
                            type="email"
                            className="form-control relative m-0 block h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] w-full rounded-[0.4rem] border-0 border-solid border-[rgba(8,60,130,0.07)] bg-[rgba(255,255,255,.7)] bg-clip-padding p-[.6rem_1rem] !pr-9 text-[.75rem] !leading-[1.25] font-medium !text-[#60697b] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] transition-[border-color] duration-[0.15s] ease-in-out placeholder:!text-[#959ca9] placeholder:opacity-100 focus:!border-0 focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-0"
                            placeholder=""
                            {...register('email', { required: true })}
                          />
                          <label
                            htmlFor="form_email"
                            className="font-Manrope pointer-events-none !absolute top-0 left-0 !z-[2] !mb-2 !inline-block h-full origin-[0_0] overflow-hidden border border-solid border-transparent px-4 py-[0.6rem] text-start text-[.75rem] text-ellipsis whitespace-nowrap !text-[#959ca9]"
                          >
                            {t('contact.form.email.label')} *
                          </label>
                          {errors['email'] && (
                            <div className="mt-1 w-full text-[0.7rem] text-[#dc3545]">
                              {errors['email']?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full max-w-full flex-[0_0_auto] !px-[15px]">
                        <div className="form-floating relative !mb-4">
                          <textarea
                            id="form_message"
                            className="form-control relative m-0 block h-[150px] min-h-[calc(2.5rem_+_2px)] w-full rounded-[0.4rem] border-0 border-solid border-[rgba(8,60,130,0.07)] bg-[rgba(255,255,255,.7)] bg-clip-padding p-[.6rem_1rem] !pr-9 text-[.75rem] !leading-[1.25] font-medium !text-[#60697b] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] transition-[border-color] duration-[0.15s] ease-in-out placeholder:!text-[#959ca9] placeholder:opacity-100 focus:!border-0 focus:bg-[rgba(255,255,255,.7)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-0"
                            placeholder=""
                            {...register('message', { required: true })}
                          ></textarea>
                          <label
                            htmlFor="form_message"
                            className="font-Manrope pointer-events-none !absolute top-0 left-0 !z-[2] !mb-2 !inline-block h-full origin-[0_0] overflow-hidden border border-solid border-transparent px-4 py-[0.6rem] text-start text-[.75rem] text-ellipsis whitespace-nowrap !text-[#959ca9]"
                          >
                            {t('contact.form.message.label')} *
                          </label>
                          {errors['message'] && (
                            <div className="mt-1 w-full text-[0.7rem] text-[#dc3545]">
                              {errors['message']?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full max-w-full flex-[0_0_auto] !px-[15px] !text-center">
                        <button
                          type="submit"
                          className="btn btn-yellow btn-send !rounded-[50rem] border-[#fab758] !bg-[#fab758] !text-white hover:!border-[#fab758] hover:bg-[#fab758] hover:text-white active:border-[#fab758] active:bg-[#fab758] active:text-white disabled:border-[#fab758] disabled:bg-[#fab758] disabled:text-white"
                        >
                          {t('contact.form.button')}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
