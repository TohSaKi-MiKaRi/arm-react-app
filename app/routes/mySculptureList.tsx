import { useState } from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject() {
    const [index, setIndex] = useState(0);
    

    function handleClickNext() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        }else {
            setIndex(0); 
        }
    }

    function handleClickBack() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    let sculpture = sculptureList[index];

    return (
        <>
           <div className="bg-green-300 flex flex-col items-center p-6 font-sans">
            <div className="mb-4 flex space-x-4">
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" 
                    onClick={handleClickNext}>
                    Next
                </button>
                <button 
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700" 
                    onClick={handleClickBack}>
                    Prev
                </button>
            </div>
            <div className="text-center max-w-md space-y-4">
                <h2 className="text-2xl font-bold">
                    <i>{sculpture.name}</i> โดย {sculpture.author}
                </h2>
                <h3 className="text-lg text-gray-600">
                    {index + 1} จาก {sculptureList.length}
                </h3>
                <img 
                    className="w-full max-w-sm mx-auto" 
                    src={sculpture.url} 
                    title={sculpture.name}
                    alt={sculpture.name}
                />
                <p className="text-base text-gray-800">
                    {sculpture.description}
                </p>
                <a 
                    className="text-blue-500 hover:underline" 
                    href={sculpture.reference} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    ข้อมูลเพิ่มเติม
                </a>
            </div>
        </div>
        <a href="/" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back</a>

        </>
    );
}