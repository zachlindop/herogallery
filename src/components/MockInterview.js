import { useState } from 'react';
function MockInterview(){
    const [button, setButton] = useState(false);
    const [count, setCount] = useState(0);

    function handleClickCount(){
        setCount(count + 1)
    }

    return(
        <div>
            <button onClick={() => setButton("A")}
            className={button === "A" ? "bold" : ""}>Button A</button>
            <button onClick={() => setButton("B")} 
            className={button === "B" ? "bold" : ""}>Button B</button>
        
            <button onClick={handleClickCount}>Likes {count}</button>
        
        </div>

        
    )
}
export default MockInterview;