import React from 'react'
import { motion } from "framer-motion"


const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleword = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {

            duration: 1
        }
    }
}



const AnimatedText = ({ text }) => {
    return (
        <div

        >
            <motion.h1 className={`inline-block w-full text-dark  font-bold capitalize text-7xl  2xl:text-6xl xl:text-5xl lg:text-5xl sm:text-4xl xs:text-3xl ${className}`}
                variants={quote}
                initial="initial"
                whileInView="animate"
            >
                {text.split(" ").map((word, index) =>
                    <motion.span key={word + '-' + index} className='inline-block'
                        variants={singleword}

                    >
                        {word}&nbsp;
                    </motion.span>
                )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText