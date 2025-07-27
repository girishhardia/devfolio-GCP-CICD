import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "https://github.com/girishhardia",
    twitter: "https://x.com/GirishHardia?t=F-dPKTb4sj1xvhApxOTz8A&s=08",
    linkedin: "https://www.linkedin.com/in/girish-hardia-444076248/",
  };
  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "girishhardia@gmail.com",
    onClick: () => openLink("mailto:girishhardia@gmail.com?subject=Hello"),
  },
  handleIconClick,
};

export default sideElements;
