import { useState } from 'react';

function TurtleCard(props){
    const[turtleToggle, setTurtleToggle] = useState(false)
    return(
        <div className = "turtle">
            {turtleToggle ? 
                <div>
                    <h2>{props.turtle.name}</h2>
                    <h2 className="wrap">{props.turtle.bio}</h2>
                    <p>Loves: {props.turtle.loves}</p>
                </div>
            :
            <div>
                <h2>{props.turtle.name}</h2>
                <img src={props.turtle.image} alt="Various Turtle Character" />
                <p>Loves: {props.turtle.loves}</p>
            </div>
            }
                <button onClick={()=>setTurtleToggle(!turtleToggle)}>{turtleToggle ? "See Image" : "See Bio"}</button>

        </div>
    );
}
export default TurtleCard;