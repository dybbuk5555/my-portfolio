// import project demo images as follows.
import EDUCATION1 from '../styles/projects/education/1.png';
import EDUCATION2 from '../styles/projects/education/2.png';
import RESTAURANT1 from '../styles/projects/restaurant/1.png';
import RESTAURANT2 from '../styles/projects/restaurant/2.png';
import RESTAURANT3 from '../styles/projects/restaurant/3.png';
import BUSINESS1 from '../styles/projects/business/1.png';
import BUSINESS2 from '../styles/projects/business/2.png';
import BUSINESS3 from '../styles/projects/business/3.png';
import ECOMMERCE1 from '../styles/projects/eCommerce/1.png';
import ECOMMERCE2 from '../styles/projects/eCommerce/2.png';
import ECOMMERCE3 from '../styles/projects/eCommerce/3.png';
import BLOG1 from '../styles/projects/blog/1.png';
import BLOG2 from '../styles/projects/blog/2.png';
import EVENT1 from '../styles/projects/event/1.png';
import MONKEYLEAGUE1 from '../styles/projects/monkeyleague/1.png';
import MONKEYLEAGUE2 from '../styles/projects/monkeyleague/2.png';
import SOCIAL1 from '../styles/projects/social/1.png';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'BUSINESS', //project name
        description: 'Faraday Future is a business website for advanced design and extreme technology geared to serve the driver.', //project description
        projectLink: 'https://www.ff.com/', //deployed project link
        tech: ['ReactJS', 'NodeJS', 'Express'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [BUSINESS1, BUSINESS2, BUSINESS3], //list of names of images from above imports.
    },
    {
        name: 'ECOMMERCE',
        description: 'Ray is an eCommerce websites for cosmetics. This provides the skincare goods for skin and health.',
        projectLink: 'https://ray.care/',
        tech: ['ReactJS', 'NextJS', 'NodeJS'],
        photo: [ECOMMERCE1, ECOMMERCE2, ECOMMERCE3],
    },
    {
        name: 'BLOG',
        description: '"Midlands Wiskey Experiences" is a blog websites to explain about the cultural heritage and history of our proud ancient distilling tradition in the Midlands and invite to join us on one of our Whiskey Tours.',
        projectLink: 'https://midlandswhiskeyexperiences.ie/',
        tech: ['Wordpress', 'PHP', 'Bootstrap'],
        photo: [BLOG1, BLOG2],
    },
    {
        name: 'SOCIAL NETWORK',
        description: 'Equiliberty is a Social Network website for the business owners.',
        projectLink: 'https://equiliberty.web.app/',
        tech: ['ReactJS', 'Ant design', 'Bootstrap'],
        photo: [SOCIAL1],
    },
    {
        name: 'EDUCATION',
        description: 'Dunes Academy is an education website for children.',
        projectLink: 'https://dunesacademy.com/',
        tech: ['ReactJS', 'PHP', 'Wordpress'],
        photo: [EDUCATION1, EDUCATION2],
    },
    {
        name: 'EVENT',
        description: 'EventLab is Events, Meetup, and Conference website. I have built this project with ReactJS.',
        projectLink: 'https://eventlab-react.b-cdn.net/',
        tech: ['ReactJS', 'Bootstrap', 'CSS'],
        photo: [EVENT1],
    },
    {
        name: 'RESTAURANT',
        description: 'BANCROFT is a website for bancroft restaurant.',
        projectLink: 'https://www.the-bancroft.com/',
        tech: ['Wordpress', 'PHP', 'MySQL'],
        photo: [RESTAURANT1, RESTAURANT2, RESTAURANT3],
    },
    {
        name: 'MONKEY LEAGUE',
        description: 'Monkey League is a Gaming website by the Monekey NFTs. Each Monkey NFT is generated with its own unique genetic composition, formulated from 32 traits, ranging from Common to Rare to Epic to Legendary.',
        projectLink: 'https://www.monkeyleague.io/',
        tech: ['ReactJS', 'Web3JS', 'Solidity'],
        photo: [MONKEYLEAGUE1, MONKEYLEAGUE2],
    },
]
