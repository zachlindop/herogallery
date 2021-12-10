// import { useState } from 'react';
import Button from './Button';

function Card({ title, content }){
    // const [isAdded, setAdded] = useState(false);
    // const [liked, setLiked] = useState(false);
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width: "10rem"
            }}
        />
    )
    
    return(
        <div className="card">
            
                    <h1>Title: {title}</h1>
                    <ColoredLine color="red"/>
                    <p>Content: {content}</p>
                
                <Button name="cart" />
                <br/>
                <Button name="like" />
                {/* <button className="button" onClick={()=> setAdded(!isAdded)}>Add To Cart</button>
                <br/>
                <button className="button" onClick={() => setLiked(!liked)}>{liked ? "👍" : "👎"}</button> */}
        </div>
        
    )
}
export default Card;