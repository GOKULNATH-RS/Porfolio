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
  Discord,
} from "../assets/icons";

import { CarsWebsite, PortfolioWebsite } from "../assets/images/index";

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
    imgUrl: PortfolioWebsite,
    title: "Portfolio Website",
    description: "My portfolio  that showcases my  skills ",
    tagText: "Web Dev",
    icon1: Github,
    href1: "",
    icon2: eye,
    href2: "https://gokulnath-rs.netlify.app/",
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