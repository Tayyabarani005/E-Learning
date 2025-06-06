import { delay } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { CiMobile3 } from 'react-icons/ci'
import { IoMdHappy } from 'react-icons/io'
import { IoPulseOutline } from 'react-icons/io5'
import { RiComputerLine } from 'react-icons/ri'
import { TbWorldWww } from 'react-icons/tb'
import {motion } from 'framer-motion'
const ServiceData = [
    {
        id: 1,
        title: "Web Development",
        link: "#",
        icon: <TbWorldWww />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Mobile Development",
        link: "#",
        icon: <CiMobile3 />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Software Development",
        link: "#",
        icon: <RiComputerLine />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Satisfied Clients",
        link: "#",
        icon: <IoMdHappy />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "SEO Optimization",
        link: "#",
        icon: <IoPulseOutline />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "24/7 support",
        link: "#",
        icon: <BiSupport />,
        delay: 0.7,
    },
]
const SlideLeft = (delay)=>{
    return{
        initial:{
            opacity:0,
            x:50
        },
        animate:{
            opacity:1,
            x:0,
            tranistion:{
               duration:0.3,
               delay:delay ,
               ease:"easeInOut"

            }
        }
    }
}
const Services = () => {
    return (
        <section className='bg-white '>
            <div className="container pb-14 pt-16">
                <h1 className='text-4xl font-bold text-left pb-10'>Servives we provide</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8'>
                    {ServiceData.map((services) => (
                        <motion.div
                        variants={SlideLeft(services.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        className='bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                            <div className='text-4xl mb-4'> {services.icon} </div>
                            <h1 className='text-lg font-semibold text-center px-3'>{services.title}</h1>
                        </motion.div>
                    )
                    )}
                </div>
            </div>
        </section>


    )
}

export default Services;