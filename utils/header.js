import { openLink, scrollTo } from "./methods";

const header = {
  menus: [
    { title: "Home", id: "home" },
    { title: "My Self", id: "my-self" },
    { title: "Training", id: "experience" },
    { title: "My Work", id: "my-work" },
    // { title: "Reviews", id: "reviews" },
    { title: "Certifications", id: "certifications" },
    // { title: 'Contribution', id: 'contributions' },
    { title: "Contact", id: "contact" },
  ],
  rightBtn: {
    label: "Download CV",
    onClick: () =>
      openLink(
        "https://drive.google.com/file/d/1KBzyC5wIggWxqQ-fbNxlkB8TsA2eS4py/view?usp=sharing"
      ),
  },
  logo: {
    src: "/assets/profile.jpg",
    alt: "girishhardia",
  },
  github: "https://github.com/girishhardia",
  email: "girishhardia@gmail.com",
  handleIconClick: () => scrollTo("home"),
  handleItemSelect: (menu) => scrollTo(menu.id),
};

export default header;
