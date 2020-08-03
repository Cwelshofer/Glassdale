import { saveAlibi } from "./AlibisProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibisContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveAlibi") {
console.log("clickEvent Heard")
        const alibiName = document.querySelector("#alibi--name")
        const alibiAlibi = document.querySelector("#alibi--alibi")

        // Make a new object representation of a note
        const newAlibi = {
            title: alibiName.value,
            author: alibiAlibi.value,
        
        }
        console.log(newAlibi)
        // Change API state and application state
        saveAlibi(newAlibi)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <section class="alibiForm">
        
        </section>
    `
}

export const AlibiForm = () => {
    render()
}