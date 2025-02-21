"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const aboutme = {
    tittle: "About me",
    description: "I hold a Bachelor's degree in Information Technology from Punjab University (PU).",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Laiba Nadeem"
        },
        // {
        //     fieldName: "Phone",
        //     fieldValue: "+92 3244722107"
        // },
        {
            fieldName: "Experience",
            fieldValue: "1 Year"
        },
        // {
        //     fieldName: "Skype",
        //     fieldValue: "laiba.01"
        // },
        {
            fieldName: "Language",
            fieldValue: "English, Urdu"
        },
        {
            fieldName: "Email",
            fieldValue: "laibanadeem1026@gmail.com"
        },
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    tittle: "My Experience",
    description: "Developed a Fitness Tracker Website as my Final Year Project (FYP) using Next.js",
    items: [
        {
            company: "Final year project",
            position: "Fullstack WebDeveloper",
            duration: "8 months",
        },
        {
            company: "Heapware",
            position: "Fullstack WebDeveloper",
            duration: "3 months",
        },

    ]
};

const education = {
    icon: '/assets/resume/cap.svg',
    tittle: "My Education",
    description: "I graduated with a Bachelor of Science in Information Technology (BSIT) from the University of Punjab, where I gained foundational knowledge and hands-on experience in software development, web technologies, and IT management.",
    items: [
        {
            institution: "University of Punjab",
            degree: "BSIT",
            duration: "2020 - 2024",
        },
        {
            institution: "Ideoversity",
            degree: "Full Stack WebDevelopment Course",
            duration: "6 months",
        },
        {
            institution: "Govt. college for women. Gulberg",
            degree: "ICS(Physics)",
            duration: "2018 - 2020 ",
        },

    ],
};

const skills = {
    tittle: "My Skills",
    description: "I am a web developer with expertise in front-end technologies. I specialize in creating responsive, interactive, and visually appealing websites. ",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
    ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.tittle}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 border border-accent"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.tittle}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 border border-accent"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.tittle}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] rounded-xl flex items-center justify-center group border border-transparent hover:border-accent transition-all duration-300">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>

                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{aboutme.tittle}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{aboutme.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {aboutme.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="">{item.fieldValue}</span>

                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div >
        </motion.div >

    )
}

export default Resume
