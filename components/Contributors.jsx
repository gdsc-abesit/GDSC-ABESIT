import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function Contributors() {

  //   Contribute here guys!! Idhar udhar mat nikal jaana (ㆆ_ㆆ)
  const ContributorData = [
    {
      id: 1,
      name: "Chirag Ramesh Chandra",
      img: "https://media.licdn.com/dms/image/D4D03AQF3Rrlg-Uls1w/profile-displayphoto-shrink_400_400/0/1692046813033?e=1701907200&v=beta&t=Ad_JDZC_bVD4Th-MMQrcnVswbasn5vrsOiXobar6yd4",
      role: "App Developer",
      social1: "https://twitter.com/chiragchandra25",
      social2: "https://github.com/Chiragramesh25",
      desc: "Funniest guy in the room (that's what he said)"
    },
    {
      id: 2,
      name: "Ishaan",
      img: "https://avatars.githubusercontent.com/u/113186458?v=4",
      role: "Open Source",
      social1: "https://twitter.com/Ishaan2053",
      social2: "https://github.com/Ishaan2053",
      desc: "Secretive even when all he has to hide is a 10 ki chocolate"
    },
    {
      id: 3,
      name: "Pranav Tripathi",
      img: "https://github.com/prnvtripathi.png",
      role: "Web Developer",
      social1: "https://x.com/prnvtwts",
      social2: "https://github.com/prnvtripathi",
      desc: "The guy who's always in a hurry",
    },
    {
      id: 4,
      name: "Ganesh",
      img : "https://github.com/gpratap608.png",
      role: "Contributor",
      social1:"https://twitter.com/ganeshontwt",
      social2:"https://github.com/gpratap608",
      desc : "Can be Painfully Sarcastic sometimes :)",
    },
    {
      id: 5,
      name: "Kabir",
      img: "https://avatars.githubusercontent.com/u/147363110?v=4",
      role: "App Development Contributor",
      social1: "https://twitter.com/KabirShukl",
      social2: "https://www.linkedin.com/in/kabir-shukla-396247233/",
      desc: "Aspiring Jim Halpert"
    },
    {
         id: 2202901540128 ,
         name: "Rashmi",
         img: "https://avatars.githubusercontent.com/u/118280805?v=4",
         role: "Public Relation",
         social1: "https://github.com/RashK19",
         social2: "https://www.linkedin.com/in/rashmi-kumari-146001237",
         desc: "A beginner with lots of excitement to enter in the world of tech."
     },
  ];


// Do not touch this return function guys!(ㆆ_ㆆ) 
// Bahaut mehnat se banaya hai yaar. Upar jaao wapis （*＾-＾*）
  return (
    <div className="bg-white w-full py-5">
      <section className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 pb-16 pt-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  sm:text-4xl md:mx-auto">
                Our awesome{" "}
                <span className="text-yellow-500">Contributors</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                The list of people who've successfully contributed with this
                hands-on workshop. Get your name on GDSC's website too!
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {" "}
              {ContributorData &&
                ContributorData.map((member) => {
                  return (
                    <div key={member.id}>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src={member.img}
                          alt={member.name}
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            {member.name}
                          </p>
                          <p className="mb-4 text-xs text-gray-100">
                            {member.role}
                          </p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                          {member.desc}
                    </p>

                          <div className="flex items-center justify-center space-x-3">
                            <SocialIcon
                              url={member.social1}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            />

                            <SocialIcon
                              url={member.social2}
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
      </section>
    </div>
  );
}

// Bola tha na Upar jaao ( ˘︹˘ ) 

export default Contributors;
