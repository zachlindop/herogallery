import {useState} from 'react';

function TurtleForm({ handleAddTurtleCard, turtles }){
    const [turtleFormData, turtleFormDataSetter] = useState({
        name:"",
        image:"",
        bio:"",
        loves:""
    })

    function manageTurtleFormData(event) {
        let targetTurtleName = event.target.name;
        let targetTurtleValue = event.target.value;

        turtleFormDataSetter({
            ...turtleFormData,
            [targetTurtleName]: targetTurtleValue
        });

    }   

    function handleSubmitTurtle(event) {
        let newTurtleId = parseInt(turtles[turtles.length - 1].id) + 1
        event.preventDefault();
        
        const newTurtleCard = {
            id: newTurtleId,
            ...turtleFormData
        }

        handleAddTurtleCard(newTurtleCard);

        turtleFormDataSetter({
            ...turtleFormData,
            name: "",
            image: "",
            bio: "",
            loves: ""
        })
    }
    return (
        <div>
            <h1> Add New TMNT Hero!</h1>
            <form onSubmit={handleSubmitTurtle}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    className="input"
                    onChange={manageTurtleFormData}
                    value={turtleFormData.name}
                />
                <input 
                    type="text" 
                    placeholder="Image" 
                    name="image"
                    className="input"
                    onChange={manageTurtleFormData}
                    value={turtleFormData.image}
                />
                <input 
                    type="text" 
                    placeholder="Biography" 
                    name="bio"
                    className="input"
                    onChange={manageTurtleFormData}
                    value={turtleFormData.bio}
                />
                <input 
                    type="text" 
                    placeholder="Loves" 
                    name="loves"
                    className="input"
                    onChange={manageTurtleFormData}
                    value={turtleFormData.loves}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
                        <p>{turtleFormData.name}{turtleFormData.image}</p>

            </form>
        </div>
    );
}
export default TurtleForm;