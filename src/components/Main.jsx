import { motion } from "framer-motion";
import Reminders from "./Reminders";
import AddReminder from "./AddReminder";

const Main = () => {

    let reminders = [{ task: "Workout", taskComplete: false, id: 1 }, { task: "", taskComplete: false, id: 2 }, { task: "", taskComplete: false, id: 3 }, { task: "", taskComplete: false, id: 4 }, { task: "", taskComplete: false, id: 5 }]

    const squares = Array(window.innerWidth < 768 ? 15 : 50).fill("");

    const getRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 95) + 4;
        return randomNum;
    };

    const getRandomDelay = () => {
        let number = Math.floor(Math.random() * 75) + 1;

        number = number / 5;

        return number;
    };

    const getRandomSize = () => {
        const size = Math.floor(Math.random() * 20) + 5

        return size
    }

    const getRandomColor = () => {
        const randNum = Math.floor(Math.random() * 3)

        if (randNum === 1) {
            return 'bg-primary'
        } else if (randNum === 2) {
            return 'bg-secondary'
        } else {
            return 'bg-accent'
        }

    }

    return (
        <>
            <div className="w-full h-full bg-base-100 p-6 flex flex-col items-center overflow-x-hidden">

                <div className=" p-4 bg-base-100/30 shadow-xl z-20 backdrop-blur rounded-2xl flex justify-center items-center">
                    <h1 className=" z-10 text-3xl md:text-4xl font-semibold text-success ">Daily Reminders</h1>
                </div>

                <br/>
                <br/>

                <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-10">

                <Reminders remindersArray={reminders}/>
                    
                <AddReminder remindersArray={reminders}/>

                </div>

            </div>
            {squares.map((square, i) => {
                const randX = getRandomNum();
                const randomDelay = getRandomDelay();
                const randomSize = getRandomSize()
                const randomColor = getRandomColor()
                return (
                    <motion.div
                        style={{ width: `${randomSize}px`, height: `${randomSize}px` }}
                        key={i}
                        className={` z-[1] absolute bottom-0 ${randomColor} opacity-0`}
                        initial={{ y: -10, x: `${randX}vw`, opacity: 0 }}
                        animate={{
                            y: -1000,
                            opacity: 0.75,
                            rotate: 720
                        }}
                        transition={{ duration: `${randomSize}`, repeat: Infinity, delay: randomDelay }}
                    ></motion.div>
                );
            })}
        </>
    )
}

export default Main