import libraryware from '../public/library-ware.png';
import emi from '../public/emi.png';

export const projects: IprojectCard[] = [
  {
    title: "LibraryWare",
    picture: libraryware,
    description:
      "Libraryware is an online platform that makes reading interactive and social. Users can access books, bookmark sections, and share their thoughts with friends, enhancing their reading experience through connection and collaboration.",
    view: "https://sofia-library.netlify.app/",
    github: "https://github.com/BirushaNdegeya/libraryware",
  },
  {
    title: "Emi",
    picture: emi,
    description:
      "This web application was developed as part of an intensive workshop with Wikimedia RDC. Its main objective is to filter the available data on Wikimedia and identify the most searched articles in a given country.",
    view: "https://emingi.netlify.app/",
    github: "https://github.com/BirushaNdegeya/mostvisitedarticle",
  }
];
