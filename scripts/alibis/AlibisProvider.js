let alibis = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const alibiStateChangedEvent = new CustomEvent("alibiStateChanged")
    
    eventHub.dispatchEvent(alibiStateChangedEvent)
}

export const saveAlibi = (alibi) => {
    const jsonAlibi = JSON.stringify(alibi)

    return fetch('http://localhost:8088/alibis', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: jsonAlibi
    })
    .then(getAlibi)
    .then(dispatchStateChangeEvent)
}



export const useAlibi = () => {
    return alibis.slice()

}

export const getAlibi = () => {
    return fetch('http://localhost:8088/alibis')
    .then(response => response.json())
    .then(parsedAlibis => {
        alibis = parsedAlibis
    })
}