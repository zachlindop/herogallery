import './App.css';
import HeroHeader from './components/HeroHeader';
import TurtleCard from './components/TurtleCard';
import turtles from './turtles';
import XmanCard from './components/XmanCard';
import xmen from './xmen';
import justiceLeague from './justiceLeague';
import JusticeLeaguerCard from './components/JusticeLeaguerCard';
import Navbar from './components/Navbar';
import Cardlist from './components/Cardlist';
import cardData from './cards';
import CardForm from './components/CardForm';
import TurtleForm from './components/TurtleForm';
import XmanForm from './components/XmanForm';
import { useState } from 'react';
import { Route, NavLink, useParams, Switch, Routes, BrowserRouter} from 'react-router-dom'
import MockInterview from './components/MockInterview';

function App() {
  const [kards, setKards] = useState(cardData)
  const [turtle, setTurtle] = useState(turtles)
  const [xman, setXman] = useState(xmen)

  function handleAddCard(newCard){
    console.log(newCard)

    const newCardsArray = [...kards, newCard]

    setKards(newCardsArray)
    // kardSetter(newCardsArray)

  }

  function handleAddTurtleCard(newTurtleCard){
    console.log(newTurtleCard)

    const newTurtleCardArray = [...turtle, newTurtleCard]

    setTurtle(newTurtleCardArray)
    // kardSetter(newCardsArray)
  }
  function handleAddXmanCard(newXmanCard){
    console.log(newXmanCard)
    const newXmanCardArray = [...xman, newXmanCard]

    setXman(newXmanCardArray)
  }
  return (
    <div className="App">
     
     
    {/* <Navbar /> */}
     
    
      <Route exact path="/">
        <HeroHeader firstname="Zach" lastname="Lindop" />
      </Route>
      <MockInterview />
      {/* <CardForm handleAddCard = {handleAddCard} cards = {kards} />
      <Cardlist cards = {kards} /> */}
      
      <Route exact path = '/tmnt'>
      <h1>Teenage Mutant Ninja Turtles</h1>
      <nav>
          <NavLink className ="button" to="/tmnt">
            <a className="navBarHorizontal" style={{color: "green"}}>TMNT</a>
          </NavLink>
          <NavLink className ="button" to="/xmen" >
          <a className="navBarHorizontal" style={{color: "blue"}}>X-Men</a>
          </NavLink>
          <NavLink className ="button" to="/justiceleague" >
            <a className="navBarHorizontal" style={{color: "red"}}>Justice League</a>
          </NavLink>
        </nav>
      <TurtleForm handleAddTurtleCard = {handleAddTurtleCard} turtles = {turtle}/>
      {turtles.map(turtle => {
      return <TurtleCard turtle={turtle} />
      })}
      </Route>
      <Route exact path = '/xmen'>
      <h1>X-Men</h1>
      <nav>
          <NavLink className ="button" to="/tmnt">
            <a className="navBarHorizontal" style={{color: "green"}}>TMNT</a>
          </NavLink>
          <NavLink className ="button" to="/xmen" >
          <a className="navBarHorizontal" style={{color: "blue"}}>X-Men</a>
          </NavLink>
          <NavLink className ="button" to="/justiceleague" >
          <a className="navBarHorizontal" style={{color: "red"}}>Justice League</a>
          </NavLink>
        </nav>
      <XmanForm 
        handleAddXmanCard={handleAddXmanCard}
        xmen={xmen}
      />
      {xmen.map(xman =>{
        return< XmanCard xman={xman}/>
      })}
      </Route>
      <Route exact path ='/justiceleague'>
      <h1>Justice League</h1>
      <nav>
          <NavLink className ="button" to="/tmnt">
            <a className="navBarHorizontal" style={{color: "green"}}>TMNT</a>
          </NavLink>
          <NavLink className ="button" to="/xmen" >
            <a className="navBarHorizontal" style={{color: "blue"}} >X-Men</a>
          </NavLink>
          <NavLink className ="button" to="/justiceleague" >
          <a className="navBarHorizontal" style={{color: "red"}}>Justice League</a>
          </NavLink>
        </nav>
      {justiceLeague.map(justiceLeaguer =>{
        return <JusticeLeaguerCard justiceLeaguer={justiceLeaguer} />
      })}
      </Route>
    </div>
  );
}

export default App;
