import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Reminders = ({remindersArray}) => {


    return(
        <div className="p-4 bg-base-200/20 shadow-xl z-30 backdrop-blur rounded-xl w-[90%] md:w-[65%] h-80 ">

            {
                remindersArray.map((task, i) => {

                })
            }

        </div>
    )
}

export default Reminders 