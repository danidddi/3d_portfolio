import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    threejs,
    reactjs,
    redux,
    tailwind,
    django,
    git,
    sql,
    carStore,
    portfolio,
    light,
    diploma,
    work,
    step,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Обо мне",
    },
    {
        id: "work",
        title: "Работы",
    },
    {
        id: "contact",
        title: "Контакты",
    },
];

const services = [
    {
        title: "Web Разработчик",
        icon: web,
    },
    {
        title: "Backend Разработчик",
        icon: backend,
    },
    {
        title: "Frontend Разработчик",
        icon: mobile,
    },
    {
        title: "Высокие soft-skills",
        icon: creator,
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Жажда знаний",
        icon: light,
        iconBg: "#E6DEDD",
        date: "Май 2020",
        point: 'Во время обучения в ВУЗе я понял, что хочу специалистом, который по-настоящему приносит пользу. Я всегда сторонился программирования, думая, что это сложно. Но я приятно ошибся и начал погружение в сферу IT.'
    },
    {
        title: "Академия  IT STEP",
        icon: step,
        iconBg: "#E6DEDD",
        date: "Октябрь 2020",
        point: 'Академия дала мне все базовые знания ключевых технологий. Начал с С++, потом C# с ASP.NET, обучили паттернам програмирования, расказали о командной работе. В общем, показали самые востребованные технологии. Но больше всего я влюбился в React и Django.',
    },
    {
        title: "Дипломирование",
        icon: diploma,
        iconBg: "#E6DEDD",
        date: "Октябрь 2023",
        point: 'Я успешно защитил свой дипломный проект и выбрал направление, в котором хочу развиваться. Дипломную работу вы можете увидеть в моем портфолио на GitHub.',
    },
    {
        title: "Самореализация",
        icon: work,
        iconBg: "#E6DEDD",
        date: "Октябрь 2023 - по настоящее время",
        point: 'С горящими глазами я ищу место, где смогу помочь команде специалистов делать нашу жизнь проще, создавать что-то новое. Моя цель - стать настоящим ремесленником своего дела.',
    },
];

const projects = [
    {
        name: "Салон премиальных автомобилей",
        description:
            'Сайт создан с целью публикации актуального каталога автомобилей и мотивацией клиента к оставлении заявки на контакт с менеджером. Реализована авторизация и возможность добавления авто в избранное.',
        tags: [
            {
                name: "react ts",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "redux toolkit",
                color: "blue-violet-text-gradient",
            },
        ],
        image: carStore,
        source_code_link: "https://github.com/danidddi/diploma",
    },
    {
        name: "3D портфолио",
        description:
            'В данном проекты ознакомился с Three.js. Сайт-портфолио с краткой информацией обо мне и 3D элементами на странице.',
        tags: [
            {
                name: "react ts",
                color: "blue-text-gradient",
            },
            {
                name: "Three.js",
                color: "dark-green-text-gradient",
            }
        ],
        image: portfolio,
        source_code_link: "https://github.com/danidddi/3d_portfolio",
    },
];

export { services, technologies, experiences, projects };