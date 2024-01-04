import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import ProgressBar from './ProgressBar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

const montserrat = Montserrat({
    subsets: ['latin'],
    variants: ['400', '500', '600', '700', '800', '900'],
})

const teamData = [
    {
        id: 1,
        name: 'Keshav Malik',
        img: 'https://res.cloudinary.com/dkgwk8ey5/image/upload/v1696613754/1689511880357_amgrmn.jpg',
        title: 'Lead',
        twitter: 'https://x.com/_keshav_malik',
        github: 'https://github.com/keshav-0907',
    },
    {
        id: 2,
        name: 'Ishaan',
        img: 'https://avatars.githubusercontent.com/u/113186458?v=4',
        title: 'Open Source',
        twitter: 'https://x.com/Ishaan2053',
        github: 'https://github.com/Ishaan2053',
    },
    {
        id: 3,
        name: 'Chirag Ramesh Chandra',
        img: 'https://res.cloudinary.com/dkgwk8ey5/image/upload/v1704397077/1692046814475_u7zmfm.jpg',
        title: 'App Development',
        twitter: 'https://x.com/chiragchandra25',
        github: 'https://github.com/Chiragramesh25',
    },
    {
        id: 4,
        name: 'Aditya Srivasatava',
        img: 'https://github.com/IronicDeGawd.png',
        title: 'App Development',
        twitter: 'https://x.com/0xironyAditya',
        github: 'https://github.com/IronicDeGawd',
    },
    {
        id: 5,
        name: 'Pranav Tripathi',
        img: 'https://github.com/prnvtripathi.png',
        title: 'Web Development',
        twitter: 'https://x.com/prnvtwts',
        github: 'https://github.com/prnvtripathi',
    },
    {
        id:6,
        name : 'Harsh Tyagi',
        img: 'https://res.cloudinary.com/dkgwk8ey5/image/upload/v1704396844/WhatsApp_Image_2024-01-05_at_01.00.36_rimcc6.jpg',
        title: 'Harsh Tyagi',
        twitter: 'https://twitter.com/PYGmlon',
        github: 'https://github.com/ThePygmalion'
    },
    {
        id: 7,
        name: 'Ishita Malik',
        img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ishita_malik_kJ8lz6J.jpg',
        title: 'Design',
        twitter: 'https://x.com/malikishita805',
        github: 'https://github.com/ishita8839',
    },
    {
        id: 8,
        name: 'Himanshu Chhatwal',
        img: 'https://github.com/himanshu1221.png',
        title: 'Outreach & Sponsorship',
        twitter: 'https://x.com/himanshuchhatw2',
        github: 'https://github.com/himanshu1221',
    },
    {
        id: 9,
        name: 'Prateek Tiwari',
        img: 'https://res.cloudinary.com/dgozpfjis/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1696741236/IMG_20231008_101633_rjdkjm.jpg?_s=public-apps',
        title: 'Event Management',
        twitter: 'https://x.com/t_prateek23',
        github: 'https://github.com/tomioka-sensei',
    },
    {
        id: 10,
        name: 'Ankur Chauhan',
        img: "https://github.com/gdsc-abesit/GDSC-ABESIT/assets/111558974/33aa576b-d239-49b5-899b-5a23ad0a60d6",
        title: 'Design',
        twitter: 'https://x.com/',
        github: "https://github.com"
    },
    {
        id: 11,
        name: 'Harsh Pal',
        img: "https://github.com/gdsc-abesit/GDSC-ABESIT/assets/111558974/3ede8eb9-682d-496d-8a7e-bd353de5351c",
        title: 'Design',
        twitter: 'https://x.com/Choley_Bhature',
        github: "https://github.com"
    },
    {
        id: 12,
        name: 'Kumar Kartikey',
        img: "https://github.com/gdsc-abesit/GDSC-ABESIT/assets/111558974/e824069e-9ddd-4e95-8d06-19cb696c4261",
        title: 'Design',
        twitter: 'https://x.com/',
        github: "https://github.com"
    },
    {
        id: 13,
        name: 'Arjun Dhawan',
        img: "https://github.com/gdsc-abesit/GDSC-ABESIT/assets/111558974/163a9fd4-6a73-4ac2-ad3d-88df7448ef74",
        title: 'Social Media',
        twitter: 'https://x.com/',
        github: "https://github.com"
    }, {
        id: 14,
        name: 'Aahana Shukla',
        img: 'https://github.com/Aahana-0204.png',
        title: 'Outreach',
        twitter: 'https://x.com/AahanaShukla2',
        github: 'https://github.com/Aahana-0204',
    },
]

const TeamSection = () => {
    return (
        <div id="team" className={`bg-white text-black w-full text-center ${montserrat.className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
                            Our {" "}
                            <span className="text-yellow-400 tracking-wider">Team</span>
                        </h1>
                        <p className="text-base dark:text-gray-300 text-gray-700 md:text-lg text-center">
                            The list of people who are working to make this community amazing & welcoming.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {teamData &&
                            teamData.map((member) => {
                                return (
                                    <div key={member.id}>
                                        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                            <img
                                                className="object-cover w-full sm:h-80"
                                                src={member.img}
                                                alt={member.name}
                                            />

                                            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                                <p className="mb-1 text-lg font-bold text-gray-100">
                                                    {member.name}
                                                </p>
                                                <p className="mb-4 text-xs text-gray-100">
                                                    {member.title}
                                                </p>
                                                <div className="flex items-center justify-center space-x-3">
                                                    <SocialIcon
                                                        url={member.twitter}
                                                        target="_blank"
                                                        style={{ height: 35, width: 35 }}
                                                        bgColor="black"
                                                    />

                                                    <SocialIcon
                                                        url={member.github}
                                                        target="_blank"
                                                        style={{ height: 35, width: 35 }}
                                                        bgColor="black"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default TeamSection