import { useState } from 'react';

function JusticeLeaguerCard(props){
    const [toggleJusticeLeaguer, setToggleJusticeLeaguer] = useState(false)
    return(
        <div className="DCHero">
            {toggleJusticeLeaguer ?
                <div>
                    <h2>{props.justiceLeaguer.name}</h2>
                    <img src={props.justiceLeaguer.pic} alt="Various DC Hero" />
                    <p>Loves: {props.justiceLeaguer.loves}</p>
                </div>
            :
        
            
                <div>
                    <h2>{props.justiceLeaguer.name}</h2>
                    <img src={props.justiceLeaguer.image} alt="Various DC Hero" />
                    <p>Loves: {props.justiceLeaguer.loves}</p>
                </div>
            }
                <button onClick={()=>setToggleJusticeLeaguer(!toggleJusticeLeaguer)}>Toggle Images</button>
        </div>   
    )
}
export default JusticeLeaguerCard;