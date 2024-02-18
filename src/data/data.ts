export interface Project {
    title: string;
    description: string;
    image: string;
    stack: string;
    view: string;
    code: string;
    display: boolean;
    id: number;
}

const projects: Project[] = [
    {
        title: "Karagoz Aviation",
        description: "Website for Karagoz Aviation agency",
        image: "karagoz-m.jpeg",
        stack: "HTML#CSS#Javascript#Web Components#Vite",
        view: "https://sergeymoryakov.github.io/kza-website/",
        code: "https://github.com/sergeymoryakov/kza-website/",
        display: true,
        id: 1,
    },
    {
        title: "LumiLine",
        description: "LumiLine Interior Studio website prototype",
        image: "lumiline-m.jpeg",
        stack: "HTML#CSS#Javascript",
        view: "https://sergeymoryakov.github.io/lumiline-website/",
        code: "https://github.com/sergeymoryakov/lumiline-website/",
        display: true,
        id: 2,
    },
    {
        title: "Aviaparts",
        description: "Aviation asset marketplace prototype",
        image: "aviaparts-m.jpeg",
        stack: "HTML#CSS#Javascript#Parcel",
        view: "https://sergeymoryakov.github.io/ecommerce-avia/",
        code: "https://github.com/sergeymoryakov/ecommerce-avia",
        display: true,
        id: 3,
    },
    {
        title: "SEPPO.Digital",
        description: "Website for SEPPO.digital web studio",
        image: "seppo-m.jpeg",
        stack: "HTML#CSS#Javascript",
        view: "https://sergeymoryakov.github.io/seppo-digital/",
        code: "https://github.com/sergeymoryakov/seppo-digital/",
        display: true,
        id: 4,
    },
    {
        title: "Project Name",
        description: "Website for LumiLine Interior Design Studio",
        image: "no-img-s.jpeg",
        stack: "HTML#CSS#Javascript#Vite",
        view: "https://sergeymoryakov.github.io/lumiline-website/",
        code: "https://github.com/sergeymoryakov/lumiline-website/",
        display: true,
        id: 5,
    },
    {
        title: "Project Name",
        description: "Website for LumiLine Interior Design Studio",
        image: "no-img-s.jpeg",
        stack: "HTML#CSS#Javascript#Vite",
        view: "https://sergeymoryakov.github.io/lumiline-website/",
        code: "https://github.com/sergeymoryakov/lumiline-website/",
        display: true,
        id: 6,
    },
    {
        title: "Project Name",
        description: "Website for LumiLine Interior Design Studio",
        image: "no-img-s.jpeg",
        stack: "HTML#CSS#Javascript#Vite",
        view: "https://sergeymoryakov.github.io/lumiline-website/",
        code: "https://github.com/sergeymoryakov/lumiline-website/",
        display: true,
        id: 7,
    },
];

export default projects;
