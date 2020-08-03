import { saveWitness } from "./WitnesssProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveWitness") {
console.log("clickEvent Heard")
        const witnessName = document.querySelector("#witness--name")
        const witnessAlibi = document.querySelector("#witness--statment")

        // Make a new object representation of a note
        const newWitness = {
            title: witnessName.value,
            author: witnessStatement.value,
        
        }
        console.log(newStatment)
        // Change API state and application state
        saveStatment(newStatement)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <section class="witnessForm">
        
        </section>
    `
}

export const WitnessForm = () => {
    render()
}