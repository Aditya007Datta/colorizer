import React from "react";
import { useState } from "react";
const Colorizer = () => {
    const [color, setColor] = useState('#54ced4')
    const [count, setCount] = useState(0)
    const changeColor = () => {
        console.log("Color Changed!")
        const randomColor = getRandomColor()
        setColor(randomColor)
        changeCount()

    }
    const getRandomColor = () => {
        const randomInt = () => Math.floor(Math.random() * 256); // Generate a random integer between 0 and 255

        const red = randomInt().toString(16).padStart(2, '0'); // Convert random integer to hexadecimal and pad with leading zeros if necessary
        const green = randomInt().toString(16).padStart(2, '0');
        const blue = randomInt().toString(16).padStart(2, '0');

        return `#${red}${green}${blue}`; // Return the hexadecimal color notation
    };
    const changeCount = () => {
        setCount(count + 1)
    }
    return (
        <div className="colorize">
            <div className="box" style={{ backgroundColor: color }}>
                {color}
            </div>
            <button onClick={changeColor} >Change Color!</button>
            <button onClick={changeCount} >Color changed {count} times</button>
        </div >
    );
};

export default Colorizer;
