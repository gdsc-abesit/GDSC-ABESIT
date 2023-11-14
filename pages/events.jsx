import Navbar from '@/components/Navbar'
import React from 'react'
import { PastEvents } from '@/Common/PastEvents'
import Link from 'next/link'

const events = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                <div className='text-4xl font-bold text-center my-5'>
                    Our Past Events
                </div>
                <div className=' mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 grid grid-cols-3 gap-8'>
                    {PastEvents.map((event) => (
                        <div key={event.id} className='bg-gray-200 p-2 rounded-2xl'>
                            <div>
                                <img src='https://res.cloudinary.com/dmutgbmtd/image/upload/v1699954425/image_4_b9q9gg.png' alt='err' />
                            </div>
                            <div className='my-5 text-black'>
                                <div className='bg-red-300 inline-flex p-1 rounded-lg mb-3'>
                                    HandsOn Workshop
                                </div>
                                <div className='font-bold text-2xl'>
                                    {event.title}
                                </div>
                                <div className='text-sm'>
                                    {event.date}
                                </div>

                                <div className='text-gray-500 text-sm mt-5'>
                                    {event.description}
                                </div>

                                <div >
                                    {
                                        event.link ? (
                                            <Link className=' text-white bg-black rounded-xl flex justify-center items-center h-10 mt-5 hover:cursor-pointer' href={event.link}> Know More </Link>
                                        ) : (<div className=' text-black bg-gray-300 rounded-xl flex justify-center items-center h-10 mt-5'>
                                            Coming soon
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default events