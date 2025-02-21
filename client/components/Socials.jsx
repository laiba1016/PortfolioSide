import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"
const socials = [
    { icon: <FaGithub />, path: "https://github.com/laiba1016" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/laiba-nadeem-50ab47340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },

    { icon: <FaInstagram />, path: "https://www.instagram.com/laiba_nadeem16?igsh=MXB2cGY4eGl4czh2bw==" },

];
const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div >
    )
}

export default Socials
