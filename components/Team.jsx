import Link from 'next/link'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { Montserrat } from 'next/font/google'

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
        twitter: 'https://twitter.com/_keshav_malik',
        github: 'https://github.com/keshav-0907',
    },
    {
        id: 2,
        name: 'Ishaan',
        img: 'https://avatars.githubusercontent.com/u/113186458?v=4',
        title: 'Open Source',
        twitter: 'https://twitter.com/Ishaan2053',
        github: 'https://github.com/Ishaan2053',
    },
    {
        id: 3,
        name: 'Chirag Ramesh Chandra',
        img: 'https://media.licdn.com/dms/image/D4D03AQF3Rrlg-Uls1w/profile-displayphoto-shrink_400_400/0/1692046813033?e=1701907200&v=beta&t=Ad_JDZC_bVD4Th-MMQrcnVswbasn5vrsOiXobar6yd4',
        title: 'App Development',
        twitter: 'https://twitter.com/chiragchandra25',
        github: 'https://github.com/Chiragramesh25',
    },
    {
        id: 4,
        name: 'Aditya Srivasatava',
        img: 'https://github.com/IronicDeGawd.png',
        title: 'App Development',
        twitter: 'https://twitter.com/0xironyAditya',
        github: 'https://github.com/IronicDeGawd',
    },
    {
        id: 5,
        name: 'Pranav Tripathi',
        img: 'https://github.com/prnvtripathi.png',
        title: 'Web Development',
        twitter: 'https://twitter.com/prnvtwts',
        github: 'https://github.com/prnvtripathi',
    },
    {
        id: 6,
        name: 'Aahana Shukla',
        img: 'https://github.com/Aahana-0204.png',
        title: 'Outreach',
        twitter: 'https://x.com/AahanaShukla2',
        github: 'https://github.com/Aahana-0204',
    },
    {
        id: 7,
        name: 'Ishita Malik',
        img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/ishita_malik_kJ8lz6J.jpg',
        title: 'Design',
        twitter: 'https://twitter.com/malikishita805',
        github: 'https://github.com/ishita8839',
    },
    {
        id: 8,
        name: 'Himanshu Chhatwal',
        img: 'https://github.com/himanshu1221.png',
        title: 'Outreach & Sponsorship',
        twitter: 'https://twitter.com/himanshuchhatw2',
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
]

const TeamSection = () => {
    return (
        <div id="team" className={`bg-white text-black w-full text-center ${montserrat.className}`}>
            <div className='w-4/5 mx-auto'>
                <h2 className="text-3xl md:text-4xl font-bold mt-6">Team Member</h2>
                <p className="text-base text-gray-700 md:text-lg w-3/4 mx-auto my-6">
                    The list of people who're working to make this community amazing & welcoming.
                </p>
                <div className='flex flex-wrap justify-center items-center mt-12'>
                    {teamData && teamData.map((member) => {
                        return (
                            <div key={member.id} className="flex flex-col justify-center items-center w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                                <div>
                                    <img className='rounded-full border-8 border-yellow-400 aspect-square' src={member.img} alt={member.name} width={175} />
                                </div>
                                <div>
                                    <h3 className='text-xl md:text-2xl font-semibold'>{member.name}</h3>
                                    <p className='text-blue-500 font-semibold'>{member.title}</p>
                                    <div className="flex justify-center items-center gap-4 bg-blue-500 p-2 md:p-4 text-2xl text-white rounded-full mt-2 md:mt-4 w-24 md:w-32 mx-auto">
                                        <Link href={member.twitter} target="_blank" rel="noreferrer" className='transition hover:text-black'>
                                            <FaTwitter />
                                        </Link>
                                        <Link href={member.github} target="_blank" rel="noreferrer" className='transition hover:text-black'>
                                            <FaGithub />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TeamSection


