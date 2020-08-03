let witnesses = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const witnessStateChangedEvent = new CustomEvent("witnessStateChanged")
    
    eventHub.dispatchEvent(witnessStateChangedEvent)
}

export const saveWitness = (witness) => {
    const jsonWitness = JSON.stringify(witness)

    return fetch('http://localhost:8088/witnesses', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: jsonWitness
    })
    .then(getWitness)
    .then(dispatchStateChangeEvent)
}



export const useWitness = () => {
    return witnesses.slice()

}

export const getWitness = () => {
    return fetch('http://localhost:8088/witnesses')
    .then(response => response.json())
    .then(parsedWitnesses => {
        notes = parsedWitnesses
    })
}