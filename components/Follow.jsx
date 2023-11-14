import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const socialData = [
    {
        id: 1,
        icon: <FaTwitter className="w-6 h-6 text-blue-500" />,
        link: "https://twitter.com/gdscabesit",
    },
    {
        id: 2,
        icon: <FaGithub className="w-6 h-6 text-gray-600" />,
        link: "https:///github.com/gdsc-abesit",
    },
    {
        id: 3,
        icon: <FaInstagram className="w-6 h-6 text-purple-500" />,
        link: "https://instagram.com/gdscabesit",
    },
    {
        id: 4,
        icon: <FaLinkedinIn className="w-6 h-6 text-blue-700" />,
        link: "https://www.linkedin.com/company/dscabesit/mycompany/",
    },
    {
        id: 5,
        icon: <FaYoutube className="w-6 h-6 text-red-500" />,
        link: "https://www.twitter.com/gdscabesit",
    }
]


const Follow = () => {
    return (
        <div className="bg-white dark:bg-neutral-900 dark:text-white text-black flex flex-col md:flex-row gap-8 first-letter:md:flex-row justify-around items-center p-6 w-3/4 mx-auto rounded-xl shadow-md">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 1000 }
                }}

            >
                <h2 className="text-2xl font-semibold tracking-wide relative group max-w-fit"><span>Follow Us</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-500 transition-all group-hover:w-full"></span>
                </h2>
                <p className="text-sm font-light mt-2">If you don&apos;t want to miss any updates ;)</p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -1000 }
                }}

                className="flex gap-8 flex-wrap"
            >
                {socialData.map((item) => {
                    return (
                        <motion.a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            className="transition outline outline-1 shadow-lg hover:shadow-red-400 p-2.5 rounded-full"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.1 }}
                        >
                            {item.icon}
                        </motion.a>
                    )
                })}
            </motion.div>
        </div>
    );
};

export default Follow;
