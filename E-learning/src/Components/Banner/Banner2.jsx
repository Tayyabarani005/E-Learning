import React from 'react'
import BanerPng from '../../assets/banner.png'
import { motion } from 'framer-motion'
const Banner2 = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                {/* Banner text */}
                <motion.div
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1, x:0}}
                className='flex flex-cols justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                        <h1 className='text-4xl font-bold !leading-snug'>Join Our Community to Start your Journey</h1>
                        <p className='text-dark2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
                        <a href='https://github.com/Tayyabarani005' className='primary-btn !mt-8'>Join Now</a>
                    </div>
                </motion.div>
                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                       
                        src={BanerPng} alt="" className='w-[350x] md:max-w-[450px] object-cover drop-shadow ' />
                </div>

            </div>

        </section>
    )
}

export default Banner2