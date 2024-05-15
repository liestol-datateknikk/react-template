export interface LandingPageData {
  Header: Header;
  About: About;
  Gallery: Gallery[];
  Services: Service[];
  Testimonials: Testimonial[];
  Team: Teams[];
  Contact: Contact;
  Features: Feature[]
}

export interface Header {
  title: string;
  paragraph: string;
}

export interface Gallery {
  title: string;
  largeImage: string;
  smallImage: string;
}

export interface Service {
  icon: string;
  name: string;
  text: string;
}

export interface Testimonial {
  img: string;
  text: string;
  name: string;
}

export interface Teams {
  img: string;
  name: string;
  job: string;
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  facebook: string;
  twitter: string;
  youtube: string;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface About {
  paragraph: string;
  Why: Why;
  Why2: Why;
}

export type Why = string[];

export interface Images {
  title: string;
  largeImage: string;
  smallImage: string;
}

export const initialLandingPageData: LandingPageData = {
  Header: {
    title: "",
    paragraph: "",
  },
  About: {
    paragraph: "",
    Why: [],
    Why2: [],
  },
  Gallery: [],
  Services: [],
  Testimonials: [],
  Team: [],
  Contact: {
    address: "",
    phone: "",
    email: "",
    facebook: "",
    twitter: "",
    youtube: "",
  },
  Features: [],
};
