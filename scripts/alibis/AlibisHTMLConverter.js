export const AlibiHTMLConverter = (alibiObject) => {
    return `
        <section class="alibi">
            <div class="alibi--name">Name: ${ alibiObject.name }</div>
            <div class="alibi--alibi">${ alibiObject.alibi }</div>
            <div class="alibi--id">${ alibiObject.id }</div>
        </section>
    `
}