import { useState } from 'react';

function Button({ name }){
    const [isToggled, setIsToggled] = useState(false);
    return(
    <button className="button" onClick={()=> setIsToggled(!isToggled)}>
        { isToggled ? "Remove From Cart" : "Add To Cart"}
        { isToggled ? "👍" : "👎" }
    </button>
        
    );
}
export default Button;