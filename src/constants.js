// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import PhpLogo from './assets/tech_logo/PhpLogo.png';
import DjangoLogo from './assets/tech_logo/DjangoIcon.png';
import Apis from './assets/tech_logo/Apis.png';
import Laravel from './assets/tech_logo/laravel.png';
import PycharmIcon from "./assets/tech_logo/pycharmIcon.png";

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';

import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import figmaLogo from './assets/tech_logo/figma.png';

import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import DockerLogo from './assets/tech_logo/docker.png'


// Experience Section Logo's
import SmecLogo from './assets/company_logo/SmecLogo.png';

// Education Section Logo's

import MgLogo from './assets/education_logo/mg.jpg';
import GhsLogo from './assets/education_logo/ghslogo.jpg';
import GhssLogo from './assets/education_logo/ghsslogo.jpg';


// Project Section Logo's
import EduStayLogo from './assets/work_logo/EduStay.png';
import LapZoneLogo from './assets/work_logo/LapZone.png';
import HireSpotLogo from './assets/work_logo/HireSpot.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'React JS', logo: reactjsLogo },
      
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Django', logo: DjangoLogo },
      { name: 'Apis', logo: Apis },
       { name: 'Node JS', logo: nodejsLogo },
      { name: 'Laravel', logo: Laravel },

      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },   
      { name: 'PostgreSQL', logo: postgreLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
     
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'PHP', logo: PhpLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'PyCharm', logo: PycharmIcon },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Docker', logo: DockerLogo },

    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: SmecLogo,
      role: "Fullstack Developer Intern",
      company: "Smec Labs",
      date: "May 2024 - Present",
      desc: "Developed dynamic and scalable web applications as a Full Stack Developer using Django and React.js. Handled both frontend and backend development, including the creation of responsive user interfaces and robust RESTful APIs. Collaborated with cross-functional teams to ensure seamless integration, efficient performance, and agile delivery of high-quality applications",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Tailwind CSS",
        "React JS",
        "Python",
        "Django",
        "REST API",
        "Node JS",
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "MongoDb",
        
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: MgLogo,
      school: "Mahatma Gandhi University, Kottayam",
      date: "Sept 2021 - april 2024",
      
      desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from Mahatma Gandhi University, Kottayam. During my time at MG University, I built a solid foundation in programming, software development, and core computer science concepts. I studied key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also took part in various technical workshops and coding events, which helped sharpen my practical skills. My academic journey at MG University has played a vital role in developing my technical expertise and preparing me for a professional career in IT.",
      degree: "Bachelor of Computer Applications - BCA",
    },
   
    {
      id: 2,
      img: GhssLogo,
      school: "Government Higher Secondary School Amaravathy, Idukki",
      date: "June 2019 - March 2021",
      
      desc: "I completed my Class 12 education from Government Higher Secondary School, Amaravathy, under the Kerala State Board, with a focus on Computer Science. My studies included core subjects that strengthened my analytical and logical thinking, particularly in programming and IT fundamentals. This academic experience laid a strong foundation for my further studies in computer applications and software development.",
      degree: "Kerala State Board (XII) - Computer Science",
    },
    {
      id: 3,
      img: GhsLogo,
      school: "Government High School, Marayoor",
      date: "June 2018 - March 2019",
      
      desc: "I completed my class 10 from Government High School,My curriculum included core subjects such as Science, Mathematics, and Computer Applications, which helped build a strong academic base and sparked my interest in technology and computing.",
      degree: "Kerala State Board (X) - SSLC",
    },
  ];
  
  export const projects = [
     {
      id: 0,
      title: "LapZone",
      description:
        "A feature-rich eCommerce web application developed using React.js for the frontend and Django REST API for the backend, focused on providing a seamless platform for purchasing laptops. The app offers a dynamic product catalog, detailed laptop specifications, user authentication, shopping cart functionality, and secure checkout. With real-time data fetching, responsive design, and efficient API communication, this platform ensures a smooth and intuitive shopping experience for users seeking the latest in laptop technology.",
        image: LapZoneLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "REST API","MySQL", "JWT"],
      github: "https://github.com/kannansk0512/Lapzone",
      webapp: "",
      isCodeComplete: true
    },
    {
      id: 1,
      title: "EduStay",
      description:
        "A powerful and student-focused full-stack application built with React.js and Django REST API integration, designed to help students easily discover the best training or internship opportunities along with nearby accommodation options. By entering preferences such as domain or location, the app fetches real-time data from a robust backend, offering verified listings of internships, training programs, and accommodation details. The clean and responsive interface ensures an intuitive user experience, making it a valuable platform for students planning their career paths",
      image: EduStayLogo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "REST API","MySQL", "JWT"],
      github: "https://github.com/kannansk0512/EduStay",
      webapp: "",
      isCodeComplete: false
    },
    {
      id: 2,
      title: "HireSpot",
      description:
        "A modern and user-friendly job portal built with React.js and Laravel REST API. HireSpot connects job seekers with employers, allowing users to browse job listings, apply for positions, and manage applications with ease. Employers can register, post jobs, and review applicants via a secure dashboard. The system supports role-based access, token-based authentication, and real-time data interactions, making it a robust platform for efficient hiring and job discovery.",
      image: HireSpotLogo,
      tags: ["HTML", "Tailwind CSS", "React JS", "Laravel", "REST API", "MySQL", "JWT"],
      github: "",
      webapp: "",
      isCodeComplete: false
    }
   
  ];  