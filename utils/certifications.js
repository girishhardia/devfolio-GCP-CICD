import { openLink } from "./methods";

const certifications = {
  heading: `Licenses & certifications`,
  list: [
    {
      size: 1,
      title: "Online certification in Cloud Computing",
      platform: "NPTEL",
      link: "",
      date: "May 2025",
      logo: "/assets/nptel.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Continuous Delivery and DevOps",
      platform: "University of Virginia",
      link: "",
      date: "Dec 2024",
      logo: "/assets/uva.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "Advance React",
      platform: "Meta",
      link: "",
      date: "Aug 2024",
      logo: "/assets/meta.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Google Cloud Certified",
      platform: "Google Cloud",
      link: "",
      date: "Feb 2024",
      logo: "/assets/googlecloud.png",
      aos: "zoom-out-right",
    },
  ],
  handleIconClick: openLink,
};

export default certifications;
