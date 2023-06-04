import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    nest,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    pinecone,
    volfour,
    tiny,
    boginoo,
    uno,
    unread,
    invader,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },

    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: creator,
    },
    {
        title: "MERN Developer",
        icon: mobile,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "Basic of Programming",
        company_name: "Nest Academy",
        icon: nest,
        iconBg: "#383E56",
        date: "September 2021 - May 2022",
        points: [
            "Algorithm",
            "C, C++",
            "HTML, CSS, JS",
            "Github and Trelio",
        ],
    },
    {
        title: "MERN Full stack developer",
        company_name: "Pinecone Academy",
        icon: pinecone,
        iconBg: "#383E56",
        date: "Sep 2022 - May 2023",
        points: [
            "React",
            "NodeJS",
            "Express",
            "MongoDB",
            "Work on Project as a leader"
        ],
    },

];


const projects = [
    {
        name: "Volfour",
        description:
            "Web-based platform that allows users to search and organise volunteer jobs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },
        ],
        image: volfour,
        source_code_link: "https://github.com/TeamVolfour",
        url: 'https://volfour.vercel.app/'
    },
    {
        name: "Tiny World",
        description:
            "Website and game that is made for World Sustainable Development.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "green-text-gradient",
            },
            {
                name: 'css',
                color: "pink-text-gradient",
            },
        ],
        image: tiny,
        source_code_link: "https://github.com/RayeTheDev/HYPERS",
        url: "https://hypers-7429f.web.app/"
    },
    {
        name: "Boginoo",
        description:
            "Website that is convert long url to short url AKA tinyUrl",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: boginoo,
        source_code_link: "https://github.com/RayeTheDev/HOP2D-Projects/tree/main/tiny",
        url: "https://boginoo-badfc.web.app/"
    },
    {
        name: "Uno",
        description:
            "Website card game (UNO) that is made by me for challange myself",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },

            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: uno,
        source_code_link: "https://github.com/RayeTheDev/HOP2D-Projects/tree/main/uno",
        url: 'https://uno-jet.vercel.app/'
    },
    {
        name: "Unread clone",
        description:
            "The fullstack website clone of news article site called Unread.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: unread,
        source_code_link: "https://github.com/RayeTheDev/Rick-Frontend",
        url: 'https://unreadout.web.app/'
    },

    {
        name: "Invader",
        description:
            "The music website platform  of my version like Spotify, Deezer and SoundCloud ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: invader,
        source_code_link: "https://github.com/RayeTheDev/Music",
        url: 'https://musicapp-71a8c.web.app/'
    },


];

export { services, technologies, experiences, projects };