import propex_ss from '../assets/propex-ss.png'
import eggsinv_ss from '../assets/eggsinv-ss.png'
import beeyou_ss from '../assets/beeyou-ss.png'

export default function Projects() {
    const hexToRgba = (hex, opacity) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const projects = [
        {
            name: "PROPEX",
            date: "feb 2025",
            description: "A property insights platform turning messy property data into clear statistics to guide investors, businesses and home buyers in making their next financial decision.",
            highlight: "Group nominated for the Optiver Prize for SENG3011 Software Engineering Workshop 3 @ UNSW.",
            image: propex_ss,
            img_width: 470,
            img_height: 900,
            link: "https://alphas-propex.vercel.app/uploadjson",
            tech: ["python", "react", "AWS", "tailwindcss"],
            colour: "#B469F7",
            text_colour: '#AF21F1'
        },
        {
            name: "EGGS INVOICING",
            date: "feb 2024",
            description: "An end to end electronic invoicing platforms aimed to help growing businesses collaborate and streamline the invoicing process.",
            highlight: "Group nominated for the Macquarie Prize, SENG2021 Requirements and  Design Workshop @ UNSW.",
            image: eggsinv_ss,
            img_width: 470,
            img_height: 900,
            link: "https://invoice-seng2021-24t1-eggs-frontend.vercel.app/",
            tech: ["typescript", "react", "html/css"],
            colour: "#8E77FF",
            text_colour: '#5D2EE9'
        },
        {
            name: "BEEYOU",
            date: "jun 2024",
            description: "A gamified productivity app engaging users to complete in daily wellbeing challenges, earn points, and share and compete with friends.",
            highlight: "Competed for DevSoc x CSESoc Flagship Hackathon @ UNSW",
            image: beeyou_ss,
            img_width: 480,
            img_height: 900,
            tech: ["figma ux asset design", "react", "html/css"],
            colour: "#FFD977",
            text_colour: '#FFA100'
        }
    ]
    return (
        <section
            id="projects"
            className="pt-28 min-h-screen">
            <div>
                <h1 className="text-4xl mb-4">projects</h1>
                <hr className="border-black w-full height-3 border-t-[1.5px]"></hr>
                <div className="mx-14">
                    {projects.map((project, idx) => (
                        <div 
                            key={project.name + idx}
                            className={`flex justify-between gap-20 py-20 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}
                        >
                            <div className="w-1/2">
                                <div className="flex items-end gap-4">
                                    <p className={`text-4xl font-black mt-7`} style={{color: hexToRgba(project.text_colour,1)}}>{project.name}</p>
                                    <p className="text-2xl">{project.date}</p>
                                </div>
                                <p className="text-2xl mt-5">{project.description}</p>
                                <h2 className="text-2xl font-bold mt-5">{project.highlight}</h2>
                                <div className="flex gap-6 mt-7">
                                    {project.tech.map((tech) => (
                                        <p 
                                            key={tech}
                                            className={`px-5 py-2 rounded-full text-semibold`}
                                            style={{backgroundColor: hexToRgba(project.colour, 0.3), color: hexToRgba(project.text_colour, 1)}}
                                        >
                                            {tech}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center justify-center">
                                <div 
                                    className={`h-[370px] w-full rounded-lg flex justify-end items-end overflow-hidden`}
                                    style={{backgroundColor: hexToRgba(project.colour, 1)}}
                                >
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src={project.image} 
                                            width={project.img_width} 
                                            height={project.img_height} 
                                            alt={project.name} 
                                            className="rounded-lg transition-transform duration-300 hover:scale-110 hover:-rotate-1"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}