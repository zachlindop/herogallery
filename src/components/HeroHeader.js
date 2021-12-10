import { NavLink } from 'react-router-dom';

function HeroHeader({firstname, lastname}){
    return(
      <div id="heroHeader">
        {/* <h1>Hi, {firstname} {lastname}</h1> */}
        <h1 id="titleFont">Hero Gallery</h1>
        <nav>
          <NavLink className ="button" to="/tmnt" >
          <a className="navBarHorizontal" style={{color: "green"}}>TMNT</a>
          </NavLink>
          <NavLink className ="button" to="/xmen" >
          <a className="navBarHorizontal" style={{color: "blue"}}>X-Men</a>
          </NavLink>
          <NavLink className ="button" to="/justiceleague" >
          <a className="navBarHorizontal" style={{color: "red"}}>Justice League</a>
          </NavLink>
        </nav>
        <img id="headerImage" src="https://tse2.mm.bing.net/th?id=OIP.ITiWX84L1l4D6_R4ZwltmQHaEK&pid=Api&P=0&w=271&h=153"
             alt="wannabe IronMan" />
  
      </div>
    );
  }
  export default HeroHeader;