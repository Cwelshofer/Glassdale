export const WitnessHTMLConverter = (witnessObject) => {
    return `
        <section class="witness">
            <div class="witness--name">Name: ${ witnessObject.name }</div>
            <div class="witness--statment">${ witnessObject.alibi }</div>
        </section>
    `
}