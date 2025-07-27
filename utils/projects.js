const projects = {
  heading: `Projects`,
  list: [
    {
      image: "/assets/projects/roadhealth.png",
      label: "Featured Project",
      title: "RoadHealth AI",
      link: "https://github.com/girishhardia/RoadHealth.ai",
      description:
        "Developed a road damage detection system using YOLOv8 to identify cracks and potholes from road images with high accuracy. Integrated the trained model into a Laravel-based web app for instant damage analysis. Fine-tuned the model on a custom dataset of 2,500+ images, improving detection accuracy for critical damage types. Enabled 60% faster road assessment and reduced labor costs by over 40% for field survey teams.",
      techs: ["Python", "YOLO", "Laravel", "OpenCV"],
    },
    {
      image: "/assets/projects/jweluxe.png",
      label: "Featured Project",
      title: "Jweluxe",
      link: "https://github.com/girishhardia/Jweluxe",
      description:
        "Designed and developed a Jewelry Shop Application using the MERN stack, featuring real-time search, filtering, and responsive design. Developed a robust backend with Node.js and Express.js, integrated MongoDB for scalable storage, and implemented JWT-based authentication and Bcrypt for secure user access.",
      techs: ["MERN", "JWT", "Node.js", "Express.js", "MongoDB", "React.js"],
    },
    {
      image: "/assets/projects/aws-blog.png",
      label: "Featured Project",
      title: "CI/CD Pipeline for Cloud-Based Blogging Website on AWS",
      link: "https://github.com/girishhardia/CICD-BloggingWebsite",
      description:
        "Built a CI/CD pipeline using AWS CodePipeline to automate the build, test, and deployment processes for a MERN stack blogging website. Deployed the React-based frontend on Amazon S3 with CloudFront and hosted the Node.js and Express.js backend on AWS EC2 with a secure API integration using AWS RDS and AWS Cognito.",
      techs: [
        "AWS",
        "CodePipeline",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
  ],
};

export default projects;
