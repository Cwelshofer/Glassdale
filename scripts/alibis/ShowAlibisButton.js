const contentTarget = document.querySelector(".alibiListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAlibis") {
        const customEvent = new CustomEvent("alibisClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowAlibiButton = () => {
    contentTarget.innerHTML = ` <button id="associates--">Associate Alibis</button>`
}