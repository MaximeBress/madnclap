export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type Video = {
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
