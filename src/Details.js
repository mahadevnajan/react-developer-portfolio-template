// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/final_passport.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/PostgreSQL.png";
import js from "./assets/techstack/js.png";
import react from "./assets/NET_Core_Logo.svg.png";
import redux from "./assets/devops.png";
import tailwind from "./assets/sql.png";
import bootstrap from "./assets/C_Sharp_Logo_2023.svg.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/Visual_Studio_Icon_2019.svg.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/ChatGPT_logo.svg.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mahadev Najan",
  tagline: "Transforming Concepts into Functional Realities",
  img: profile,
  about: `I am a passionate and detail-oriented Software Engineer with hands-on 
  experience in developing user-friendly and efficient web applications. Skilled 
  in HTML, CSS, JavaScript, C#, and .NET Core MVC, Web API , EF Core , LINQ have worked on end-to-end projects 
  involving frontend design, backend logic, database management, and API integration. 
  I am quick to adapt to new technologies, eager to learn, and thrive in collaborative 
  environments to deliver high-quality software solutions.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/mahadev-najan-859207208/",
  github: "https://github.com/mahadevnajan",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Associate Software Product Analyst",
    Company: `BlueBenz Digitizations Pvt Ltd`,
    Location: "Pune-Maharashtra",
    Type: "Full Time",
    Duration: "Oct 2024 - May 2025",
  },
  {
    Position: "Software Engineer Intern",
    Company: `Acks Solution Pvt Ltd`,
    Location: "Ahmednagar-Maharashtra",
    Type: "Internship",
    Duration: "Apri 2024 - Sep 2024",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Information Technology",
    Company: "Savitribai Phule Pune University",
    Location: "Pune",
    Type: "Full Time",
    Duration: "Jul 2020 - May 2024",
  },
  
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap, 
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "TARA",
    image: projectImage1,
    description: `Developed a task management system enabling task creation, assignment (self, users, groups), scheduling, reminders, and WhatsApp notifications via Twilio API. Implemented task expiration 
    and automated status updates using Quartz.NET scheduler. Integrated Expo Push Notifications for real-time alerts. Built backend APIs with C#, ASP.NET Core Web API, EF Core, LINQ, and PostgreSQL.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "CodeVora Web Application",
    image: projectImage2,
    description: `CodeVora Web Application – Built a responsive IT solutions website using .NET Core MVC with MS SQL Server backend, 
    featuring service pages, internship listings, Google OAuth login, admin/user panels, and API-driven user & job application management.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Asset Management System",
    image: projectImage3,
    description: `Asset Management System – Designed and developed a web-based application using .NET Core Web API, EF Core, LINQ, and MS SQL Server to streamline asset tracking, manage allocations, monitor maintenance schedules, and generate real-time analytical reports with secure role-based access control.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  /*{
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  */
];

// Enter your Contact Details here
export const contactDetails = {
  email: "najanmahadev99@gmail.com",
  phone: "+91 7559256062",
};
