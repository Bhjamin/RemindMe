import { motion } from "framer-motion";
import Reminders from "./Reminders";
import AddReminder from "./AddReminder";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore"

const Main = () => {

    const dailyTasksRef = collection(db, 'dailyTasks')
    const docRef = doc(db, 'dailyTasks', 'tasks')

    const [finishedTask1, setFinishedTask1] = useState(false)
    const [finishedTask2, setFinishedTask2] = useState(false)
    const [finishedTask3, setFinishedTask3] = useState(false)
    const [finishedTask4, setFinishedTask4] = useState(false)
    const [finishedTask5, setFinishedTask5] = useState(false)
    const [task2Name, setTask2Name] = useState('')
    const [task3Name, setTask3Name] = useState('')
    const [task4Name, setTask4Name] = useState('')
    const [task5Name, setTask5Name] = useState('')
    const [todaysDate, setTodaysDate] = useState('')
    const [workoutDay, setWorkoutDay] = useState('')
    const [squares, setSquares] = useState([])

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

    const newReminderHandler = async (input) => {

        if(!task2Name) {

            setTask2Name(input)

            const data = {
                task2: `${input}`
            }

            try {
                await updateDoc(docRef, data)
            } catch (err) {
                console.log(err)
            }

        } else if(!task3Name) {

            setTask3Name(input)

            const data = {
                task3: `${input}`
            }

            try {
                await updateDoc(docRef, data)
            } catch (err) {
                console.log(err)
            }

        } else if(!task4Name) {

            setTask4Name(input)

            const data = {
                task4: `${input}`
            }

            try {
                await updateDoc(docRef, data)
            } catch (err) {
                console.log(err)
            }

        } else {

            setTask5Name(input)

            const data = {
                task5: `${input}`
            }

            try {
                await updateDoc(docRef, data)
            } catch (err) {
                console.log(err)
            }

        }

    }

    const task1Handler = async () => {
        setFinishedTask1(!finishedTask1)

        const data = {
            task1complete: !finishedTask1
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }

    }

    const task2Handler = async () => {
        setFinishedTask2(!finishedTask2)

        const data = {
            task2complete: !finishedTask2
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }

    }

    const task3Handler = async () => {
        setFinishedTask3(!finishedTask3)

        const data = {
            task3complete: !finishedTask3
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }
    }

    const task4Handler = async () => {
        setFinishedTask4(!finishedTask4)

        const data = {
            task4complete: !finishedTask4
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }
    }

    const task5Handler = async () => {
        setFinishedTask5(!finishedTask5)

        const data = {
            task5complete: !finishedTask5
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteTask2Handler = async () => {

        setFinishedTask2(false)
        setTask2Name('')

        const data = {
            task2: '',
            task2complete: false
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }

    }

    const deleteTask3Handler = async () => {

        setFinishedTask3(false)
        setTask3Name('')

        const data = {
            task3: '',
            task3complete: false
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }

    }

    const deleteTask4Handler = async () => {

        setFinishedTask4(false)
        setTask4Name('')

        const data = {
            task4: '',
            task4complete: false
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }

    }

    const deleteTask5Handler = async () => {

        setFinishedTask5(false)
        setTask5Name('')

        const data = {
            task5: '',
            task5complete: false
        }

        try {
            await updateDoc(docRef, data)
        } catch (err) {
            console.log(err)
        }

    }

    const getData = async () => {

        try {

            const data = await getDocs(dailyTasksRef)

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))

            const {date, task1complete, task2, task2complete, task3, task3complete, task4, task4complete, task5, task5complete} = filteredData[0]

            setTask2Name(task2)
            setTask3Name(task3)
            setTask4Name(task4)
            setTask5Name(task5)
            setFinishedTask1(task1complete)
            setFinishedTask2(task2complete)
            setFinishedTask3(task3complete)
            setFinishedTask4(task4complete)
            setFinishedTask5(task5complete)

            let today = new Date()
            setTodaysDate(`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`)
            setWorkoutDay(`${today.getDate() - 1}`)

            if (date !== `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`) {

                setTask2Name("")
                setTask3Name("")
                setTask4Name("")
                setTask5Name("")
                setFinishedTask1(false)
                setFinishedTask2(false)
                setFinishedTask3(false)
                setFinishedTask4(false)
                setFinishedTask5(false)

                const data = {
                    date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
                    task2: "",
                    task2complete: false,
                    task3: "",
                    task3complete: false,
                    task4: "",
                    task4complete: false,
                    task5: "",
                    task5complete: false
                }

                try {
                    await updateDoc(docRef, data)
                } catch (err) {
                    console.log(err)
                }

            }

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {

        getData()

        const generatedSquares = Array(window.innerWidth < 768 ? 15 : 50).fill("");

        setSquares(generatedSquares.map((square, i) => {
            const randX = Math.floor(Math.random() * 95) + 4
            const randomDelay = (Math.floor(Math.random() * 75) + 1) / 5
            const randomSize = Math.floor(Math.random() * 20) + 5
            const randomColor = getRandomColor()
            return (
                <motion.div
                    style={{ width: `${randomSize}px`, height: `${randomSize}px` }}
                    key={i}
                    className={` z-[1] absolute bottom-0 ${randomColor} opacity-0`}
                    initial={{ y: 75, x: `${randX}vw`, opacity: 0 }}
                    animate={{
                        y: -window.innerHeight - 50,
                        opacity: 0.75,
                        rotate: randX < 40 ? -720 : 720
                    }}
                    transition={{ duration: `${randomSize}`, repeat: Infinity, delay: randomDelay }}
                ></motion.div>
            );
        }))

    }, [])

    return (
        <>
            <div className="w-full h-full bg-base-100 p-6 flex flex-col items-center overflow-x-hidden">

                <div className=" p-4 bg-base-100/30 shadow-xl z-20 backdrop-blur rounded-2xl flex justify-center items-center">
                    <h1 className=" z-10 text-3xl md:text-4xl font-semibold text-success ">Daily Reminders</h1>
                </div>

                <br/>
                <br/>

                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">

                <Reminders task1complete={finishedTask1} task2={task2Name} task2complete={finishedTask2} task3={task3Name} task3complete={finishedTask3} task4={task4Name} task4complete={finishedTask4} task5={task5Name} task5complete={finishedTask5} task1handler={task1Handler} task2handler={task2Handler} task3handler={task3Handler} task4handler={task4Handler} task5handler={task5Handler} workoutDay={workoutDay} deleteTask2Handler={deleteTask2Handler} deleteTask3Handler={deleteTask3Handler} deleteTask4Handler={deleteTask4Handler} deleteTask5Handler={deleteTask5Handler} />
                    
                <AddReminder task1complete={finishedTask1} task2={task2Name} task2complete={finishedTask2} task3={task3Name} task3complete={finishedTask3} task4={task4Name} task4complete={finishedTask4} task5={task5Name} task5complete={finishedTask5} addReminder={newReminderHandler} />

                </div>

            </div>

            {
                squares.map((sqr) => sqr)
            }
        
        </>
    )
}

export default Main