import { useState } from "react"


const AddReminder = ({ addReminder }) => {

    const [input, setInput] = useState('')

    return (
        <div className="p-6 bg-base-300/20 shadow-xl z-30 backdrop-blur rounded-xl md:w-[25%] flex flex-col items-center gap-6">

            <h2 className=" text-xl md:text-3xl font-semibold text-primary">Add A Reminder</h2>

            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="type here..." className="p-1 bg-base-200/20 border-2 border-primary rounded-lg text-success w-[90%] md:w-[75%] text-center" />

            <button onClick={() => {
                addReminder(input)
                setInput('')
            }} className="w-1/3 h-6 bg-accent rounded-lg transition-all hover:shadow-black hover:shadow-md hover:scale-105 active:scale-100 active:shadow-none">Add</button>

        </div>
    )
}

export default AddReminder