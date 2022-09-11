import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Local Music Scene",
      subtitle: "JavaScript, Sequelize, Handlebars, HTML, CSS, Bootstrap",
      description:
        "A full-stack application for local underground artists to share music with local residents... without having to go to a live music venue.",
      link: "https://damp-plateau-16490.herokuapp.com/",
      github: "https://github.com/cpm-128/local-music-scene",
      photo: require("../../assets/local-music-scene.png"),
    },
    {
      title: "What's For Dinner",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "Application that uses Edamam Recipe Search and TheMealDB API to search for recipes based on keywords.",
      link: "https://nmsiegel1.github.io/Whats-for-dinner/",
      github: "https://github.com/nmsiegel1/Whats-for-dinner",
      photo: require("../../assets/whats-for-dinner.png"),
    },
    {
      title: "Employee Management System",
      subtitle: "JavaScript, Node.js, MySQL",
      description:
        "Command-line application that allows user to view and manage departments, roles, and employees within a company so they can organize and plan their business.",
      link: "https://drive.google.com/file/d/1XmPwSI0GZNlDQaSeaNMl2XfHRRtUaxj4/view",
      github: "https://github.com/dashley2/employee-management-system",
      photo: require("../../assets/employee-management.png"),
    },
    {
      title: "Markdown Generator",
      subtitle: "JavaScript, Node.js",
      description:
        "A command-line Node.js application that accepts user input to generate a README.md file.",
      link: "https://drive.google.com/file/d/15E6COIqlVSTXRdRSGJZr6UURSWWwmSJj/view",
      github: "https://github.com/dashley2/markdowngenerator",
      photo: require("../../assets/markdown.png"),
    },
    {
      title: "Daily Planner",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "A daily planner that allows user to schedule tasks during standard work hours. Displays current time block in red, and future timeblocks in green to flag upcoming tasks. Tasks inputed by the user are saved in localStorage, so that they can be reloaded as the user refreshes the application.",
      link: "https://daily-planner-ad.netlify.app/",
      github: "https://github.com/dashley2/daily-planner",
      photo: require("../../assets/daily-planner.png"),
    },
    {
      title: "Password Generator",
      subtitle: "HTML, CSS, JavaScript",
      description:
        "A website that randomly generates a password that meets certain criteria to provide greater security.",
      link: "https://github.com/dashley2/password-generator",
      github: "https://github.com/dashley2/password-generator",
      photo: require("../../assets/password-generator.png"),
    },
  ];

  return (
    <main>
      <div className="container">
        <div className="row">
          <h2 className="title m-5 font-weight-bold">
            <u>My Portfolio</u>
          </h2>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="col-xs-12 col-lg-6" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;