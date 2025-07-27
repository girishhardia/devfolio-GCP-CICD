import { openLink } from "./methods";

const outer = {
  title1: `Hi, I'm`,
  title2: "Girish Hardia,",
  decrypTexts: [
    "A Software Engineer",
    "A Full Stack Developer",
    "I build things for the web",
    "A Graphic Designer",
    "A Traveler",
  ],
  desciption: `Full-Stack Web Developer (MERN Stack) passionate about building and deploying robust web applications. Experienced in RESTful APIs, JWT authentication, and responsive UI design. Adept at using Git, AWS, Docker, and modern frameworks.`,
  button: {
    label: "Contact me!",
    onClick: () => openLink("mailto:girishhardia@gmail.com?subject=Hello"),
  },
};

export default outer;
