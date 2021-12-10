import Card from './Card';

function Cardlist({cards, handleAddCard}){
    return(
        <div>
            {/* {cards.map(card => { */}
                {[...cards].reverse().map(card => {
                return( <Card 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                />
                )
            })}
            <button onClick={handleAddCard}>Add New Card</button>
        </div>   
    )
}
export default Cardlist;