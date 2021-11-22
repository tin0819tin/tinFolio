/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Guan Ting",
  title: "Hi all, I'm ",
  subTitle: emoji(
    "A CS student standing on the road of developer x product manager 🚀  I'm passionate about engineering, product and entrepreneurship. I'm eager to utilize my technical skills and business sense to create practical products for the real world."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_O04rtqPKvK2w-ZQKAh7TcvJzRJGxlGd/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tin0819tin",
  linkedin: "https://www.linkedin.com/in/guan-ting-ting/",
  gmail: "antony19990819@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100004455990562",
  medium: "https://tin0819tin.medium.com/",
  instagram: "https://www.instagram.com/tin0819tin/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  mySkills: [
    {
      skillSummary: "Full Stack Development",
      softwareSkills: [
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5",
          style: "html",
          color: "#E34F26" 
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt",
          style: "css",
          color: "#1572B6",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js",
          style: "jss",
          color: "#F7DF1E",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "fab fa-react",
          style: "react",
          color: "#61DAFB",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "fab fa-node",
          style: "node",
          color: "#339933",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "fab fa-node",
          style: "flask",
          color: "#000000"
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm",
          style: "npm",
          color: "#CB3837",
        },
        {
          skillName: "sql-database",
          fontAwesomeClassname: "fas fa-database",
          style: "mssql",
          color: "#CC2927"
        },
        {
          skillName: "Neo4j",
          fontAwesomeClassname: "fas fa-database",
          style: "neo4j",
          color: "#008CC1"
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "fas fa-database",
          style: "mongo",
          color: "#47A248"
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fas fa-database",
          style: "git",
          color: "#F05032"
        },
      ]
    },
    {
      skillSummary: "Cloud & Infra",
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "fab fa-aws",
          style: "azure",
          color: "#0078D4"
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "fab fa-aws",
          style: "aws",
          color: "#FF9900",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "fab fa-python",
          style: "gcp",
          color: "#4285F4"
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fab fa-docker",
          style: "docker",
          color: "#2496ED"
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "fab fa-docker",
          style: "k8s",
          color: "#326CE5"
        },
      ]
    },
    {
      skillSummary: "Language & Framework",
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "fab fa-python",
          style: "python",
          color: "#3776AB",
        },
        {
          skillName: "C/C++",
          fontAwesomeClassname: "fab fa-aws",
          style: "cplus",
          color: "#00599C"
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "fab fa-python",
          style: "csharp",
          color: "#239120"
        },
        {
          skillName: ".NET core",
          fontAwesomeClassname: "fab fa-python",
          style: "dotnet",
          color: "#512BD4"
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "fab fa-python",
          style: "java",
          color: "#007396"
        },
        {
          skillName: "html-5",
          fontAwesomeClassname: "fab fa-html5",
          style: "html",
          color: "#E34F26" 
        },
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3-alt",
          style: "css",
          color: "#1572B6",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js",
          style: "jss",
          color: "#F7DF1E",
        },
      ]
    },


  ],
    
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Taiwan University",
      logo: require("./assets/images/ntuLogo.png"),
      subHeader: "B.S. in Electrical Engineering",
      duration: "Sep. 2017 - Present",
      desc: "Participated in the research of soical live video streaming application to design third party tools for the industries and published 1 papers in AINTEC2021. ",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "UC Berkeley",
      logo: require("./assets/images/berkeleyLogo.png"),
      subHeader: "Summer Session",
      duration: "Jul. 2019 - Aug. 2019",
      desc: "Ranked top 5% in the program. Took courses about multimedia package design, journalism and public speaking.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "Jul. 2021 – Present",
      desc: "Develop strategic solutions with Azure for Microsoft partners.",
      descBullets: [
        "Optimized monitor system of an IoT solution collecting 20M+ messages a day for  factory of AU Optronics, one of the largest display providers in the world",
        "Developed an end-to-end Indoor Map solution to optimize management on real-time data, machine error, and labor scheduling for manufacturing factory with 100+ operators"
      ],
      tags: [
        "Azure", "FullStack Development", "IoT"
      ]
    },
    {
      role: "Back-End Developer Intern",
      company: "Aiello",
      companylogo: require("./assets/images/aielloLogo.png"),
      date: "Jul. 2020 – Aug. 2020",
      desc: "Designed and developed language agnostic RESTful APIs using ASP .NET Core on conversational AIoT voice service and deployed PaaS solutions on Azure service for more than 30 business customers.",
      descBullets: [
        "Designed and developed language agnostic RESTful APIs and microservices using ASP .NET Core for digital management system and deployed it on Azure to serve 30+ business customers",
        "Redesigned database specs on Neo4j for a  better read/write performance and prevented concurrent issues from executing transactions with SQL",
      ],
      tags: [
        ".NET core", "C#", "REST-API", "Azure",  "Neo4j", "SQL", "Swagger", "NUnit", "Bitbucket"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Medium Sharing",
  subtitle:
    "May the power of software development, product management and entrepreneurship be with you.",

  blogs: [
    {
      url: "https://medium.com/@tin0819tin/%E9%96%8B%E7%99%BCapi%E5%88%9D%E9%AB%94%E9%A9%97-%E6%89%93%E9%80%A0%E4%BE%9B%E5%AF%A6%E9%9A%9B%E5%A0%B4%E6%99%AF%E6%87%89%E7%94%A8%E7%9A%84restful-api-%E6%9C%8D%E5%8B%99-1-bf88647f61ce",
      title: "Develop RESTful API and micorservices in real-world scenarios-(1)",
      description:
        "Do you want to learn what is API and how to design API in 10 mins?"
    },
    {
      url: "https://medium.com/@tin0819tin/%E9%96%8B%E7%99%BCapi%E5%88%9D%E9%AB%94%E9%A9%97-%E6%89%93%E9%80%A0%E4%BE%9B%E5%AF%A6%E9%9A%9B%E5%A0%B4%E6%99%AF%E6%87%89%E7%94%A8%E7%9A%84restful-api-%E6%9C%8D%E5%8B%99-%E4%B8%8B-284432818927",
      title: "Develop RESTful API and micorservices in real-world scenarios-(2)",
      description:
        "Tell you some interest experience about how to develop and test APIs and microservices."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested to work with me or just want to say hi? My inbox is open for u 📩",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
