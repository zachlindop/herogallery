import {useState} from 'react';
function XmanForm({ handleAddXmanCard, xmen }){
// const [title, titleSetter] = useState("")
// const [content, contentSetter] = useState("")
    
//     function manageXmanTitle(event) {
//         console.log(event.target)
//         titleSetter(event.target.value)
//     }

//     function manageXmanContent(event) {
//         console.log(event.target)
//         contentSetter(event.target.value)
//     }

    const [ formXmanData, formXmanDataSetter ] = useState({
        name: "",
        image: "",
        bio: "",
        loves: ""
    })

    function manageXmanFormData(event) {
        let targeXmantName = event.target.name
        let targetXmanValue = event.target.value

        formXmanDataSetter({
            ...formXmanData,
            [targeXmantName]: targetXmanValue
        })
    }

    // Create a callback function to handle onSubmit behavior for our controlled form
    function handleXmanSubmit(event) {
        let newXmanId = parseInt(xmen[xmen.length - 1].id) + 1
        event.preventDefault()

        const newXmanCard = {

            id: newXmanId,
            // name: formXmanData.name,
            // image: formXmanData.image,
            // bio: formXmanData.bio,
            // loves: formXmanData.loves
            ...formXmanData
        }

        handleAddXmanCard(newXmanCard)
        
        formXmanDataSetter({
            ...formXmanData,
            name: "",
            image: "",
            bio: "",
            loves: ""
        })

    }

    return (
        <div>
            <h1> Add New XMEN Card</h1>
            <form onSubmit={handleXmanSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    className="input"
                    onChange={manageXmanFormData}
                    value={formXmanData.name}
                />
                <input 
                    type="text" 
                    placeholder="Image" 
                    name="image"
                    className="input"
                    onChange={manageXmanFormData}
                    value={formXmanData.image}
                />
                 <input 
                    type="text" 
                    placeholder="Biography" 
                    name="bio"
                    className="input"
                    onChange={manageXmanFormData}
                    value={formXmanData.bio}
                />
                <input 
                    type="text" 
                    placeholder="Loves" 
                    name="loves"
                    className="input"
                    onChange={manageXmanFormData}
                    value={formXmanData.loves}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
                <p>{formXmanData.title}</p>
                <p>{formXmanData.content}</p>
            </form>
        </div>
    );
}

export default XmanForm;