//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
    logoText: "Akira Suzuki", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'dybbuk555@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        skype: 'live:.cid.e112098476dcf1a1',
        address: 'Japan, Tokyo, Minato City',
        phone: '', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '' //It is advisable to add the country code incase you mention your contact number.
    },
    links: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/dark7892/', icon: faGithubAlt },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Senior Full-stack Developer",
        subtitle: "I am Akira Suzuki, a full-stack developer. I provide development, updating, and customizing of the various types of websites with the perfect front-end and back-end in which strong fashion and business style, gorgeousness, and delicacy are in harmony."
    },
    skills: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Front-end", // eg.frontend, backend, devops etc
            skillset: ["React.js", "Next.js", "Vue.js"] //eg. react, html, python etc.
        },
        {
            category: "Back-end",
            skillset: ["Node.js", "Laravel", "Typescript"]
        },
        {
            category: "Database",
            skillset: ["MongoDB", "MySQL", "PostgreSQL"]
        },
        {
            category: "Other",
            skillset: ["Github", "GitLab", "Jira"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        contents:[ "I have 5 years of solid experience in React.js and Node.js, and 3 years of experience in Next.js, Vue.js, and Laravel.",
        "I have 4 advantages as follows:", 
        "First, I can work in any time zone. Until now, I have been working in several different time zone.", 
        "Second, I have a clear analysis and quick implementation abilities of the new systems or technologies.",
        "Third, I have enough experience in using GitHub, GitLab, BitBucket, Jira, and Trello.", 
        "Fourth, I have good communication and collaboration abilities for teamwork.", 
        "It is my goal to understand the clients' needs clearly and to deliver a high-quality project on time at an optimal cost."],
        resume: "http://dybbuk.great-site.net/Resume.pdf" //link your resume here. it can be drive link or any other link
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'BEETSOFT',
                companylogo: '../styles/logos/logo2.jpg',
                position: 'Senior Full-stack Developer',
                time: 'November 2018 - December 2021',
                description1: 'Designed the application architecture on React.js, Redux, and Node.js.',
                description2: 'Created reusable React components according to the provided design.',
                description3: 'Optimized a number of large NoSQL reporting queries.'
            },
            {
                company: 'Tacchi Studios',
                companylogo: '../styles/logos/logo3.png',
                position: 'Full-stack Software Engineer',
                time: 'Octover 2017 - September 2018',
                description1: 'Maintained and improved the client portal React Application.  ',
                description2: 'Implemented multiresolution React icon library using code generation.',
                description3: 'Contributed as part of a team that made a huge, enterprise app for clients.'
            },
        ],
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Projects',
    skills: 'Skills',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}