const contentTarget = document.querySelector(".witnessListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        const customEvent = new CustomEvent("witnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = ` <button id="witnesses--statment">Witness Statements</button>`
}