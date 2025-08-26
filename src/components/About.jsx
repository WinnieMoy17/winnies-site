export default function About() {
    const techStack = [
        "python", "javascript", "c", "java", "mips", "html", "css", "tailwind", "react", "sql"
    ];
    const designTools = [
        "figma", "canva", "adobe photoshop", "procreate"
    ];

    return (
        <section
            id="about"
            className="py-28 min-h-screen">
            <div>
                <h1 className="text-5xl mb-4">about me</h1>
                <hr className="border-black w-full height-3 border-t-[1.5px]"></hr>
                <div className="flex justify-between gap-10 mx-5">
                    <div className="w-1/2 flex flex-col text-xl mt-10 gap-7">
                        <p>Heyyy! Welcome!</p>
                        <p>I'm Winnie, and I’m currently a penultimate Software Engineering student at the University of New South Wales.</p>
                        <p>Growing up, I always had this passion for creating. I drew, painted and sculpted all my daydreams and ideas into real life. Yet, I also enjoyed math and problem solving thoughout school. I found fufillment in finding fitting solutions to any problem. </p>
                        <p>Now at uni, I’ve been able to combine both worlds to solve problems delightfully through building software, and have discovered a drive for creating meaningful digital experiences.</p>
                    </div>

                    <div className="w-1/2 mt-[500px]">
                        <h2 className="text-4xl mb-5">&#128187; &nbsp;tech stack.</h2>
                        <div className="flex flex-wrap gap-5 mb-20 text-xl">
                            {techStack.map((tech) => (
                                <p key={tech}>{tech}</p>
                            ))}
                        </div>
                        <h2 className="text-4xl mb-5">&#127912; &nbsp;design tools.</h2>
                        <div className="flex gap-5 text-xl">
                            {designTools.map((tool) => (
                                <p key={tool}>{tool}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}