import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
console.log("clickEvent Heard")
        const noteTitle = document.querySelector("#noteForm--title")
        const noteAuthor = document.querySelector("#noteForm--author")
        const noteContent = document.querySelector("#noteForm--content")

        // Make a new object representation of a note
        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            content: noteContent.value,
            timestamp: Date.now() 
        }
        console.log(newNote)
        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <section class="noteForm">
          <label for ="noteForm--title">Title:</label> <input type="text" id="noteForm--title" placeholder="Enter note title" />
            <label for ="noteForm--author">Author:</label><input type="text" id="noteForm--author" placeholder="Your name here" />
            <label for ="noteForm--content">Content:</label><textarea id="noteForm--content" placeholder="Note text here"></textarea>
            <button id="saveNote">Save Note</button>
        </section>
    `
}

export const NoteForm = () => {
    render()
}