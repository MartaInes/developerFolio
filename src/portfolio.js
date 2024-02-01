/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Marta Gonzalez",
  title: "Hi there, I'm Marta",
  subTitle: emoji(
    "A passionate Software Engineer student with experience in several programming languages and frameworks. And an increasing interest in Game Development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MartaInes",
  linkedin: "https://www.linkedin.com/in/marta-inés-gonzález-diánez-423147244",
  gmail: "martaines1823@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Self learner with a high intereset in the videogame community, and knowledge in Fornt end and Back end development",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ API creation and integration"),
    emoji(
      "⚡ Design and implementation of 2D videogames with Unity and Godot"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-hashtag"
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
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "WebGL/OpenGL",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Godot",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "python/Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad de Sevilla",
      logo: require("./assets/images/usLogo.png"),
      subHeader: "Bachelor of Science in IT and Computer Science",
      duration: "September 2019 - June 2024",
      desc: "Participated in several projects",
      descBullets: [
        "Creation of an API",
        "DeliverUS, a web page to order food",
        "XemaCars, a web page to rent cars",
        "Decide, a web page where you can securely vote",
        "Organization of Innosoft Days, as the Equality Committee coordinator"
      ]
    },
    {
      schoolName: "Johannes Kepler University Linz (Erasmus)",
      logo: require("./assets/images/JKULogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science and Artificial Intelligence",
      duration: "September 2022 - June 2023",
      desc: "Took courses about Game Development and Computer Graphics, apart from Security, AI, Web Development, and User Interface courses",
      descBullets: [
        "Thesis about the importance of Mockups in web development",
        "Development of DemonInc, a single-player 2D videogame made with Unity"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Spanish", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "English",
      progressPercentage: "90%"
    },
    {
      Stack: "French",
      progressPercentage: "50%"
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
      company: "Axión",
      companylogo: require("./assets/images/axionLogo.jpg"),
      date: "October 2023 – December 2023",
      desc: "Curricular Intership where I was responsible of testing their systems"
    },
    {
      role: "MonopolyGo!Game Jam",
      company: "Scopely",
      companylogo: require("./assets/images/MonopolyLogo.webp"),
      date: "December 2023",
      desc: "We won the first place with our game 'All the Way Up'. We didn't know each other before the event, so it was a great experience to meet new people and see our working skills."
    },
    {
      role: "Global Game Jam",
      company: "EspacioRES",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "January 2024",
      desc: "A fulfilling experience where I had the opportunity to meet awesome people, and discover my potential as Game Designer, being the responsible of creating the decission tree for the first part of our game."
    }
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
  subtitle: "SOME GAMES THAT I HELPED TO DEVELOP OR THAT I'M DEVELOPING",
  projects: [
    {
      image: require("./assets/images/MonopolyLogo.webp"),
      projectName: "All The Way UP",
      projectDesc: "It was the game presented at the MonopolyGo!Game Jam, where the topic was 'Own it All'. In this game I was the Game Designer and I also worked as one of the programmers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://calaveraparlante.itch.io/all-the-way-up"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/usLogo.png"),
      projectName: "Thesis",
      projectDesc: "For my thesis project I'm doing a 2D single-player videogame in Godot. As the player you'll have to find clues to discover what is behind the strange behaviour of your father. It's a mistery game based on a british child's song.",
      /*footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]*/
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+34 640545756",
  email_address: "martaines1823@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
