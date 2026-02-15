export interface Therapist {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  items: string[];
  image: string;
}

export interface Testimonial {
  author: string;
  text: string;
}

export interface Location {
  name: string;
  address: string;
  cityStateZip: string;
}

export interface Insurance {
  name: string;
}