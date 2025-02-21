"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"

const services = [
    {
        num: "01",
        tittle: "Web Development",
        Description: ' I specialize in building fast, responsive, and visually appealing web interfaces using modern frameworks like Next.js and React',
        href: "",
    },
    {
        num: "02",
        tittle: "UI/UX Design",
        Description: 'I specialize in creating intuitive, visually appealing, and user-friendly interfaces that enhance user experience and satisfaction.',
        href: "",
    },
]
const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div
                                        className="text-5xl front-extrabold text-outline text-transparent">{service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full text-accent  transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                                    >
                                        <BsArrowDownRight className="text-accent text-3xl group-hover:text-accent" />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent">{service.tittle}</h2>
                                <h2 className="text-white/60">{service.Description}</h2>
                                <div className="border-b border-white/20 w-full"></div>

                            </div>
                        )
                    })}
                </motion.div>
            </div >
        </section >
    )
}

export default Services
