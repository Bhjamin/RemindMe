import { motion, AnimatePresence } from "framer-motion"

const Reminders = ({ task1complete, task2, task2complete, task3, task3complete, task4, task4complete, task5, task5complete, task1handler, task2handler, task3handler, task4handler, task5handler, workoutDay, deleteTask2Handler, deleteTask3Handler, deleteTask4Handler, deleteTask5Handler }) => {

    let workouts = [
        { workout1: "Pushups - 40", workout2: "Situps - 35", workout3: "Skullcrushers - 45" },
        { workout1: "Pullups - 30", workout2: "Hammercurls - 50", workout3: "Zottman Curls - 40" },
        { workout1: "Dumbbell Lunges - 35", workout2: "Dumbbell Squats - 45", workout3: "Dumbbell Bench - 30" },
        { workout1: "Pushups - 50", workout2: "Situps - 40", workout3: "Dumbbell Lunges - 30" },
        { workout1: "Skullcrushers - 35", workout2: "Pullups - 45", workout3: "Hammercurls - 30" },
        { workout1: "Zottman Curls - 40", workout2: "Dumbbell Squats - 30", workout3: "Dumbbell Bench - 50" },
        { workout1: "Pushups - 30", workout2: "Skullcrushers - 40", workout3: "Dumbbell Squats - 35" },
        { workout1: "Situps - 45", workout2: "Pullups - 30", workout3: "Dumbbell Bench - 40" },
        { workout1: "Hammercurls - 35", workout2: "Zottman Curls - 30", workout3: "Dumbbell Lunges - 45" },
        { workout1: "Pushups - 40", workout2: "Situps - 35", workout3: "Hammercurls - 30" },
        { workout1: "Skullcrushers - 45", workout2: "Pullups - 40", workout3: "Dumbbell Lunges - 35" },
        { workout1: "Dumbbell Squats - 30", workout2: "Zottman Curls - 45", workout3: "Dumbbell Bench - 40" },
        { workout1: "Pushups - 35", workout2: "Skullcrushers - 30", workout3: "Dumbbell Bench - 45" },
        { workout1: "Situps - 40", workout2: "Pullups - 35", workout3: "Dumbbell Squats - 30" },
        { workout1: "Hammercurls - 45", workout2: "Zottman Curls - 40", workout3: "Dumbbell Lunges - 30" },
        { workout1: "Pushups - 30", workout2: "Situps - 35", workout3: "Zottman Curls - 40" },
        { workout1: "Skullcrushers - 40", workout2: "Pullups - 30", workout3: "Dumbbell Bench - 35" },
        { workout1: "Dumbbell Squats - 45", workout2: "Hammercurls - 30", workout3: "Dumbbell Lunges - 40" },
        { workout1: "Pushups - 40", workout2: "Situps - 45", workout3: "Dumbbell Lunges - 30" },
        { workout1: "Skullcrushers - 30", workout2: "Pullups - 40", workout3: "Hammercurls - 45" },
        { workout1: "Zottman Curls - 35", workout2: "Dumbbell Squats - 30", workout3: "Dumbbell Bench - 40" },
        { workout1: "Pushups - 30", workout2: "Skullcrushers - 40", workout3: "Dumbbell Squats - 35" },
        { workout1: "Situps - 35", workout2: "Pullups - 30", workout3: "Dumbbell Bench - 40" },
        { workout1: "Hammercurls - 40", workout2: "Zottman Curls - 35", workout3: "Dumbbell Lunges - 30" },
        { workout1: "Pushups - 45", workout2: "Situps - 40", workout3: "Dumbbell Bench - 35" },
        { workout1: "Skullcrushers - 30", workout2: "Pullups - 45", workout3: "Dumbbell Squats - 40" },
        { workout1: "Dumbbell Lunges - 40", workout2: "Hammercurls - 30", workout3: "Zottman Curls - 35" },
        { workout1: "Pushups - 40", workout2: "Situps - 30", workout3: "Hammercurls - 35" },
        { workout1: "Skullcrushers - 35", workout2: "Pullups - 40", workout3: "Dumbbell Lunges - 30" },
        { workout1: "Dumbbell Squats - 30", workout2: "Zottman Curls - 35", workout3: "Dumbbell Bench - 40" }
    ];

    return (
        <div className="p-8 bg-base-300/20 shadow-xl z-30 backdrop-blur rounded-xl w-[90%] md:w-[65%] flex flex-row justify-center flex-wrap gap-12 ">

            <div className="flex items-center gap-4">

                <button onClick={task1handler} className="w-10 h-10 rounded-lg border-2 border-neutral-200 relative overflow-hidden transition-all shadow-black shadow-md active:scale-95 active:shadow-none">


                    <AnimatePresence>

                        {
                            task1complete ?
                                <>
                                    <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                        initial={{ y: 75, x: 75 }}
                                        animate={{ y: 0, x: 0, rotate: -45 }}
                                        transition={{ delay: .1 }}
                                        exit={{ y: 75, x: 75 }}
                                    />

                                    <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                        initial={{ y: 75, x: -75 }}
                                        animate={{ y: 0, x: 0, rotate: 45 }}
                                        transition={{}}
                                        exit={{ y: 75, x: -75 }}
                                    />
                                </>
                                : null
                        }

                    </AnimatePresence>

                </button>

                <div className="flex flex-col items-center">
                    <h2 className={`text-base sm:text-xl md:text-3xl transition-all text-secondary ${task1complete && 'line-through'}`}>Workout</h2>
                    {
                        workoutDay ?
                            <>
                                <p className="text-xs sm:text-sm">
                                    {workouts[workoutDay].workout1}
                                </p>
                                <p className="text-xs sm:text-sm">
                                    {workouts[workoutDay].workout2}
                                </p>
                                <p className="text-xs sm:text-sm">
                                    {workouts[workoutDay].workout3}
                                </p>
                            </>
                            :
                            null
                    }
                </div>

            </div>


            <AnimatePresence>

                {
                    task2 ?

                        <motion.section className="flex flex-row items-center overflow-hidden justify-center gap-4"
                            initial={{ height: 0, width: 0, opacity: 0 }}
                            animate={{ height: 'auto', width: 'auto', opacity: 1 }}
                            exit={{ height: 0, width: 0, opacity: 0 }}
                        >

                            <button onClick={task2handler} className="w-10 h-10 rounded-lg border-2 border-neutral-200 relative overflow-hidden transition-all shadow-black shadow-md active:scale-95 active:shadow-none">


                                <AnimatePresence>

                                    {
                                        task2complete ?
                                            <>
                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: 75 }}
                                                    animate={{ y: 0, x: 0, rotate: -45 }}
                                                    transition={{ delay: .1 }}
                                                    exit={{ y: 75, x: 75 }}
                                                />

                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: -75 }}
                                                    animate={{ y: 0, x: 0, rotate: 45 }}
                                                    transition={{}}
                                                    exit={{ y: 75, x: -75 }}
                                                />
                                            </>
                                            : null
                                    }

                                </AnimatePresence>

                            </button>

                            <div className="flex gap-2 items-center">
                                <h2 className={`text-base sm:text-xl md:text-3xl transition-all ${task2complete && 'line-through'}`}>{task2}</h2>
                                <button onClick={deleteTask2Handler} className="w-4 h-4 p-1 border-2 border-black bg-red-600 flex items-center justify-center rounded-sm transition-all hover:scale-105 hover:shadow-md active:scale-95 active:shadow-none shadow-black">-</button>
                            </div>

                        </motion.section>

                        : null
                }

            </AnimatePresence>

            <AnimatePresence>

                {
                    task3 ?

                        <motion.section className="flex flex-row items-center overflow-hidden justify-center gap-4"
                        initial={{ height: 0, width: 0, opacity: 0 }}
                        animate={{ height: 'auto', width: 'auto', opacity: 1 }}
                        exit={{ height: 0, width: 0, opacity: 0 }}
                        >

                            <button onClick={task3handler} className="w-10 h-10 rounded-lg border-2 border-neutral-200 relative overflow-hidden transition-all shadow-black shadow-md active:scale-95 active:shadow-none">


                                <AnimatePresence>

                                    {
                                        task3complete ?
                                            <>
                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: 75 }}
                                                    animate={{ y: 0, x: 0, rotate: -45 }}
                                                    transition={{ delay: .1 }}
                                                    exit={{ y: 75, x: 75 }}
                                                />

                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: -75 }}
                                                    animate={{ y: 0, x: 0, rotate: 45 }}
                                                    transition={{}}
                                                    exit={{ y: 75, x: -75 }}
                                                />
                                            </>
                                            : null
                                    }

                                </AnimatePresence>

                            </button>

                            <div className="flex gap-2 items-center">
                                <h2 className={`text-base sm:text-xl md:text-3xl transition-all ${task3complete && 'line-through'}`}>{task3}</h2>
                                <button onClick={deleteTask3Handler} className="w-4 h-4 p-1 border-2 border-black bg-red-600 flex items-center justify-center rounded-sm transition-all hover:scale-105 hover:shadow-md active:scale-95 active:shadow-none shadow-black">-</button>
                            </div>

                        </motion.section>

                        : null
                }

            </AnimatePresence>

            <AnimatePresence>

                {
                    task4 ?

                        <motion.section className="flex flex-row items-center overflow-hidden justify-center gap-4"
                        initial={{ height: 0, width: 0, opacity: 0 }}
                        animate={{ height: 'auto', width: 'auto', opacity: 1 }}
                        exit={{ height: 0, width: 0, opacity: 0 }}
                        >

                            <button onClick={task4handler} className="w-10 h-10 rounded-lg border-2 border-neutral-200 relative overflow-hidden transition-all shadow-black shadow-md active:scale-95 active:shadow-none">


                                <AnimatePresence>

                                    {
                                        task4complete ?
                                            <>
                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: 75 }}
                                                    animate={{ y: 0, x: 0, rotate: -45 }}
                                                    transition={{ delay: .1 }}
                                                    exit={{ y: 75, x: 75 }}
                                                />

                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: -75 }}
                                                    animate={{ y: 0, x: 0, rotate: 45 }}
                                                    transition={{}}
                                                    exit={{ y: 75, x: -75 }}
                                                />
                                            </>
                                            : null
                                    }

                                </AnimatePresence>

                            </button>

                            <div className="flex gap-2 items-center">
                                <h2 className={`text-base sm:text-xl md:text-3xl transition-all ${task4complete && 'line-through'}`}>{task4}</h2>
                                <button onClick={deleteTask4Handler} className="w-4 h-4 p-1 border-2 border-black bg-red-600 flex items-center justify-center rounded-sm transition-all hover:scale-105 hover:shadow-md active:scale-95 active:shadow-none shadow-black">-</button>
                            </div>

                        </motion.section>

                        : null
                }

            </AnimatePresence>

            <AnimatePresence>

                {
                    task5 ?

                        <motion.section className="flex flex-row items-center overflow-hidden justify-center gap-4"
                        initial={{ height: 0, width: 0, opacity: 0 }}
                        animate={{ height: 'auto', width: 'auto', opacity: 1 }}
                        exit={{ height: 0, width: 0, opacity: 0 }}
                        >

                            <button onClick={task5handler} className="w-10 h-10 rounded-lg border-2 border-neutral-200 relative overflow-hidden transition-all shadow-black shadow-md active:scale-95 active:shadow-none">


                                <AnimatePresence>

                                    {
                                        task5complete ?
                                            <>
                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: 75 }}
                                                    animate={{ y: 0, x: 0, rotate: -45 }}
                                                    transition={{ delay: .1 }}
                                                    exit={{ y: 75, x: 75 }}
                                                />

                                                <motion.span className="block w-1 h-12 absolute -top-[6px] origin-center left-4 bg-accent"
                                                    initial={{ y: 75, x: -75 }}
                                                    animate={{ y: 0, x: 0, rotate: 45 }}
                                                    transition={{}}
                                                    exit={{ y: 75, x: -75 }}
                                                />
                                            </>
                                            : null
                                    }

                                </AnimatePresence>

                            </button>

                            <div className="flex gap-2 items-center">
                                <h2 className={` text-base sm:text-xl md:text-3xl transition-all ${task5complete && 'line-through'}`}>{task5}</h2>
                                <button onClick={deleteTask5Handler} className="w-4 h-4 p-1 border-2 border-black bg-red-600 flex items-center justify-center rounded-sm transition-all hover:scale-105 hover:shadow-md active:scale-95 active:shadow-none shadow-black">-</button>
                            </div>

                        </motion.section>

                        : null
                }

            </AnimatePresence>

        </div>
    )
}

export default Reminders 