import { useState } from 'react';

function XmanCard(props){
    const [toggleXman, setToggleXman] = useState(false)
    return(
        
        <div className="xman">
            {toggleXman ?
            <div>
                <h2>{props.xman.name}</h2>
                <h2 className="wrap">{props.xman.bio}</h2>
                <br/>
                <button>Loves: {props.xman.loves}</button>
            </div>
            :
            <div>
                <h2>{props.xman.name}</h2>
                <img src={props.xman.image} alt="Various X-Man" />
                <br/>
                <button>Loves: {props.xman.loves}</button>
            </div>
            }
            <button onClick ={()=> setToggleXman(!toggleXman)}>{toggleXman ? "See Image" : "See Bio"}</button>
        </div>
    )
}
export default XmanCard;