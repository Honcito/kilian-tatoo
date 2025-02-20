// import images
import Logo from '../src/img/header/kilian-logo.svg';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import GalleryImg9 from '../src/img/gallery/9.png';
import GalleryImg10 from '../src/img/gallery/10.png';
import GalleryImg11 from '../src/img/gallery/11.png';
import GalleryImg12 from '../src/img/gallery/12.png';
import GalleryImg13 from '../src/img/gallery/13.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Inicio' },
    { href: '/', name: 'Sobre mí' },
    { href: '/', name: 'Galería' },
    { href: '/', name: 'Testimonios' },
    { href: '/', name: 'Artículos' },
    { href: '/', name: 'Contacto' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'Soy Kilian.',
  subtitle:
    'El arte del tatuaje va más allá de la piel. Cada diseño es una huella única, una forma de expresarte y llevar tu esencia contigo.',
  btnText: 'lee más',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Sobre mí:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Conóce más',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Galería:",
  btnText: "Galería",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 400,
      height: 700,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 400,
      height: 700,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 500,
      height: 700,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 400,
      height: 700,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 400,
      height: 700,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 400,
      height: 700,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 400,
      height: 412,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 400,
      height: 412,
    },
    {
      src: GalleryImg9,
      original: GalleryImg9,
      width: 465,
      height: 600,
    },
    {
      src: GalleryImg10,
      original: GalleryImg10,
      width: 400,
      height: 700,
    },
    {
      src: GalleryImg11,
      original: GalleryImg11,
      width: 650,
      height: 800,
    },
    {
      src: GalleryImg12,
      original: GalleryImg12,
      width: 400,
      height: 500,
    },
    {
      src: GalleryImg13,
      original: GalleryImg13,
      width: 400,
      height: 500,
    },
  ],
};

export const interviewData = {
  title:
    '“Considera lo que deseas. Tu tatuador nunca te dirá qué tatuaje debes tener.”',
  btnText: 'Ver ahora',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Contácto:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Tu nombre',
    email: 'Tu email',
    message: 'Tu mensaje',
    btnText: 'Enviar',
  },
};

export const footerData = {
  about: {
    title: 'Sobre Kilian tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'Sobre mí' },
      { href: '/', name: 'Mi galería' },
      { href: '/', name: 'Mis servicios' },
      { href: '/', name: 'Contacto' },
    ],
  },
  program: {
    title: 'Horario',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Noticias',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Tu email',
      icon: <FiSend />,
    },
  },
};
