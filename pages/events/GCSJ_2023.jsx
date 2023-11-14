import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { gcsj_data } from "@/Common/gcsj";
import StatisticsSimple from "@/components/Statictics";
import Link from "next/link";
import { useState } from "react";

const index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = gcsj_data.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-fit dark:bg-neutral-950 bg-white">
      <Navbar />
      <div>
        <section className="pb-6">
          <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h1 class="max-w-2xl mx-auto text-4xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 xl:text-4xl">
              Review of{" "}
              <span class="text-blue-500">Google Cloud Study Jams</span>
            </h1>

            <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
              This year&apos;s Study jams were a blast! And as we come to its end, we&apos;d like to thank everyone who participated in it and made it a success.
            </p>
          </div>
        </section>
      </div>
      <div className="flex-grow text-black h-fit">
        <h1 class="max-w-2xl text-center mx-auto text-4xl font-semibold tracking-tight dark:text-gray-100 text-gray-800 xl:text-4xl">
          Look at the {" "}
          <span class="text-blue-500">Staticstics</span>!
        </h1>
        <StatisticsSimple />
        <div className="md:mx-10 mt-4">
        <div className="flex justify-center items-center space-x-3">
         
        <input
            className="border border-gray-300 rounded-md p-3 w-full md:w-1/2 lg:w-1/3 text-sm text-black focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          </div>



          <div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    S. No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Certificate Link
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Cloud Skill Boost URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, id) => {
                  return (
                    <tr key={id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {data.id}
                      </th>
                      <td class="px-6 py-4">
                        {data.name}
                      </td>
                      <td class="px-6 py-4">
                        {data.email}
                      </td>
                      <td class="px-6 py-4">
                        Download Certificate
                      </td>
                      <td class="px-6 py-4">
                        <a href={data.url} className="text-blue-600 font-bold" > Click Here </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;

