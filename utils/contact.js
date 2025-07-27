import { openLink } from "./methods";

const contact = {
  label: `Get in touch`,
  heading: `Let's Work Together`,
  description: `Feel free to reach out for collaboration, project opportunities, or just to connect! Email: girishhardia@gmail.com | Mobile: 7067191647`,
  button: {
    label: "Say Hello",
    onClick: () => openLink("mailto:girishhardia@gmail.com?subject=Hello"),
  },
  designAndBuiltBy: "Designed & Built By Girish Hardia",
  handleBuiltByClick: () => openLink("https://github.com/girishhardia"),
};

export default contact;
