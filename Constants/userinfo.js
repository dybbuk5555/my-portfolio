//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
    logoText: "Akira Suzuki", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: '/dybbuk555@email.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '' //It is advisable to add the country code incase you mention your contact number.
    },
    links: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/GoldenStar71', icon: faGithubAlt },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hello there, I am Akira.",
        subtitle: "If you want to implement all features perfectly in developing your website, please contact me. Perhaps, you will receive a high-quality project on time at the optimal cost."
    },
    skills: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Front-end", // eg.frontend, backend, devops etc
            skillset: ["ReactJS", "VueJS", "HTML"] //eg. react, html, python etc.
        },
        {
            category: "Back-end",
            skillset: ["NodeJS", "Laravel", "Django"]
        },
        {
            category: "Database",
            skillset: ["MongoDB", "MySQL", "PostgreSQL"]
        },
        {
            category: "Blockchain",
            skillset: ["Solidity", "Web3"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "I am a Full-stack Expert and I have over 5 years of solid experience in React.js, Node.js, Express, MongoDB, Next.js, and Nest.js. I have been focusing on clean, elegant, and efficient coding and I am able to work on new and existing micro-sites, landing pages, templates, and provide guidance and troubleshooting support to clients. My experience also includes Blockchain Smart Contracts, NFT Marketplace, and Olympus DAO Fork. I look forward to being a part of a growing company as a Full-stack developer where I can utilize exceptional programming and interpersonal skills acquired to contribute to your company's success.",
        resume: "http://general.akiraportfolio.great-site.net/resume.pdf" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Mar 2014 - Sep 2017', //timespan
                title: 'Bachelor of Computer Science', //eg. BTech in Compuster Engineering
                organization: 'Tokyo University of Science', //eg. VJTI, Mumbai
                description: 'I have learnt a lot of basic concepts, knowledge, and experience in computer engineering and software development. This period is my first step as a software developer.' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },    
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Ekoios Technology', //company name eg.Microsoft
                companylogo: '../styles/logos/logo1.png', //companylogo
                position: 'Blockchain Developer', //post you held eg.Senior SDE
                time: 'March 2021 - November 2021', //timespan
                description1: 'Worked on the ERC20 and ERC721 based smart contracts with Solidity.', //eg. spearheaded the graphics team in designing SASS product UIs
                description2: 'Implemented Crypto payment for NFT using Web3.js and Solidity.',
                description3: 'Worked with Olympus Dao Fork.'
            },
            {
                company: 'BEETSOFT',
                companylogo: '../styles/logos/logo2.jpg',
                position: 'Senior Full-stack Developer',
                time: 'November 2018 - June 2021',
                description1: 'Designed application architecture and optimized NoSQL queries.',
                description2: 'Created reusable React components to the provided design.',
                description3: 'Integrated bank payment to bet slots'
            },
            {
                company: 'Tacchi Studios',
                companylogo: '../styles/logos/logo3.png',
                position: 'Full-stack Software Engineer',
                time: 'Octover 2017 - September 2018',
                description1: 'Maintained and improved the client portal React Application.  ',
                description2: 'Implemented multiresolution React icon library using code generation.',
                description3: 'made huge enterprise app for clients.'
            },
        ],
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
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