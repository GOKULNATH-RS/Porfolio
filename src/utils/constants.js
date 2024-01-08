import {
  CSS,
  Figma,
  Github,
  HTML,
  Linkedin,
  Tailwind,
  Twitter,
  react,
  Dribble,
  eye,
} from "../assets/icons";

import {
  CarsWebsite,
  KnowmynationWebsite,
  NftsGallery,
  MultiverseConnections,
} from "../assets/images/index";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
];

export const Herolinks = [
  { icon: Github, href: "https://github.com/GOKULNATH-RS" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gokulnath-rs/" },
  { icon: Twitter, href: "https://twitter.com/gokulnath_2329" },
];

export const AboutText =
  "Hey there! I'm a sophomore pursuing a BTech in IT from Coimbatore, and I'm genuinely intrigued by the world of Full Stack Development. I've already got a good grip on HTML, CSS, and designing user interfaces with Figma. Currently, I'm on a journey to master the MERN stack. Apart from academics, you'll find me actively involved in open-source projects and tech communities. And guess what? I've also taken a dive into the captivating realm of DevOps.";

export const skills = [
  { icon: HTML, alt: "HTML" },
  { icon: CSS, alt: "CSS" },
  { icon: react, alt: "React" },
  { icon: Figma, alt: "Figma" },
  { icon: Tailwind, alt: "Tailwind CSS" },
];

export const projects = [
  {
    id: 1,
    imgUrl: CarsWebsite,
    title: "Cars Showcase",
    description: "Website that showcases cars, added animations",
    tagText: "UI / UX",
    icon1: Dribble,
    href1:
      "https://dribbble.com/shots/22136574-Car-Showcasing-website-design?utm_source=Clipboard_Shot&utm_campaign=GOKULNATH-RS&utm_content=Car%20Showcasing%20website%20design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=GOKULNATH-RS&utm_content=Car%20Showcasing%20website%20design&utm_medium=Social_Share",
    icon2: Figma,
    href2:
      "https://www.figma.com/file/GwsEjCM6l6CGfHq2vFq8gM/Cars-Website?type=design&node-id=28%3A19&mode=design&t=BHVBisqJGayt3pn3-1",
  },
  {
    id: 2,
    imgUrl: KnowmynationWebsite,
    title: "Know My Nation",
    description: "A simplified Website to know everything about India",
    tagText: "Front End",
    icon1: Github,
    href1: "https://github.com/GOKULNATH-RS/Know-My-Nation",
    icon2: eye,
    href2: "https://knowmynation.netlify.app/",
  },
  {
    id: 3,
    imgUrl: MultiverseConnections,
    title: "Multiverse Connections",
    description:
      "A Imaginary Website inspired by a fascination with multiverse",
    tagText: "Front End",
    icon1: Github,
    href1: "https://github.com/GOKULNATH-RS/Multiverse-Connections",
    icon2: eye,
    href2: "https://multiverseconnections.netlify.app/",
  },
  {
    id: 4,
    imgUrl: NftsGallery,
    title: "NFTs Gallery",
    description:
      "About NFT Explorer, a user-friendly web app introducing NFTs.",
    tagText: "Full Stack",
    icon1: Github,
    href1: "https://github.com/GOKULNATH-RS/NFT_Gallery_Website",
    icon2: eye,
    href2: "https://nftsgallery.netlify.app/",
  },
];

export const connectLinks = [
  {
    icon: Github,
    name: "GOKULNATH-RS",
    href: "https://github.com/GOKULNATH-RS",
  },
  {
    icon: Twitter,
    name: "@gokulnath_2329",
    href: "https://twitter.com/gokulnath_2329",
  },
  {
    icon: Linkedin,
    styles: "",
    name: "gokulnath-rs",
    href: "https://www.linkedin.com/in/gokulnath-rs/",
  },
  {
    icon: Dribble,
    styles: "h-9 w-9",
    name: "GOKULNATH-RS",
    href: "https://dribbble.com/GOKULNATH-RS",
  },
];
