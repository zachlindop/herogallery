import {useState} from 'react';

function CardForm({ handleAddCard, cards }){
    const [formData, formDataSetter] = useState({
        title:"",
        content:""
    })

    function manageFormData(event) {
        let targetName = event.target.name;
        let targetValue = event.target.value;

        formDataSetter({
            ...formData,
            [targetName]: targetValue
        });

    } 

    function handleSubmit(event) {
        let newId = parseInt(cards[cards.length - 1].id) + 1
        event.preventDefault();

        const newCard = {
            id: newId,
            ...formData
        }

        handleAddCard(newCard);

        formDataSetter({
            ...formData,
            title: "",
            content: ""
        })
    }
    return (
        <div>
            <h1> Add New Card</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title"
                    className="input"
                    onChange={manageFormData}
                    value={formData.title}
                />
                <input 
                    type="text" 
                    placeholder="Content" 
                    name="content"
                    className="input"
                    onChange={manageFormData}
                    value={formData.content}
                />

                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
                {/* <p>{title}</p>
                <p>{content}</p> */}
            </form>
            <p>{formData.title}{formData.content}</p>
        </div>
    );
}

export default CardForm;