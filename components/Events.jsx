import { motion } from "framer-motion";

const eventsData = [
    {
        id: 1,
        title: 'HacktoberFiesta',
        date: '9 October 2023',
        img: "https://lh3.googleusercontent.com/pw/ADCreHfoZAzw--HtoXom_ac0RbsIsSGPZQIqQ12OntqKQX5YEqf63M7JpWu_PR2wNlNdJY8EiwP0RAMB_UK4jYpNTa8RTL30nlvadSAgJliAntzf8ClTvAj4NdzqL5Q2waYDCUTpsfTAgPGf3dty9l738Mv1ng=w1231-h924-s-no-gm?authuser=0",
        description: 'Spreadig the awareness about open source and hacktoberfest to the students of ABESIT.'
    },
    {
        id: 2,
        title: 'Twitter Space',
        date: '30 Septemeber 2023',
        img: "https://lh3.googleusercontent.com/pw/ADCreHcZNmkg9GJdHAufvpIiNGQ0jqHLILfQ8naQ0zOdlnkmLkb5pKk9-jJkWvSFgy80SdmSf6RKwu4NSNjQYw04RS98HbmYS_K2gIfU47A7Cia7lsQaonTxIW-1AL0frT8oBhAG-tp-kBx6qg2b2DyKbrNOYQ=w720-h614-s-no-gm?authuser=0",
        description: 'A space on twitter to discuss how hackathons, open source and communities help in improving resume.'
    },
    {
        id: 3,
        title: 'Google Cloud Study Jams',
        date: '15 October 2023',
        img: "https://lh3.googleusercontent.com/pw/ADCreHd3AUEVhXJGyWrf06fvUzlt3Lj6XWuvTMy7DylGD0QLGwRKerZB-9PY9rXUSrsKo771aOnwaKOGSuKV-lX9oN-XxTA5gbA9hkoXDi2_2UYE-1RH4kGJ3O0q5pvTPWzUAlLkSihjYneFXkpHcgrvAvsCwg=w786-h590-s-no-gm?authuser=0",
        description: 'A series of events to help students learn about Google Cloud and get hands-on experience through a series of codelabs.'
    }
];

const Events = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className='outline outline-1 outline-black dark:outline-slate-100 w-11/12 rounded-xl shadow-xl mx-auto py-3 px-5 flex flex-col items-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}

        >
            <h2 className="text-xl md:text-4xl my-4 font-semibold text-black dark:text-slate-200 tracking-wide relative group max-w-fit text-center">
                <span>Previous Events</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black dark:bg-slate-300 transition-all group-hover:w-full"></span>
            </h2>
            <div className='w-11/12 mx-auto flex justify-around items-stretch p-3 flex-grow flex-wrap flex-col md:flex-row gap-2'>
                {eventsData.map((event) => (
                    <motion.div
                        className='bg-red-300 w-1/4 text-black p-4 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 border-transparent hover:border-red-500'
                        key={event.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className='text-xl font-bold mb-2 text-gray-700'>{event.title}</h3>
                        <img src={event.img} alt={event.title} className='w-11/12 mx-auto h-54 object-contain mb-2 rounded-xl shadow-md' />
                        <p className='text-gray-600 mb-2'>{event.date}</p>
                        <p className='text-base'>{event.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Events;
