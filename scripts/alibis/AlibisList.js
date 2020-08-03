import { getAlibi, useAlibi } from "./AlibisProvider.js";
import { AlibiHTMLConverter } from "./AlibisHTMLConverter.js";

const contentTarget = document.querySelector(".alibisList")
const eventHub = document.querySelector(".container")

const render = alibis => {
    contentTarget.innerHTML = alibis.map(
        (alibiObject) => {
            return AlibiHTMLConverter(alibiObject)
        }
    ).join("")
}

export const AlibiList = () => {
    getAlibi()
        .then(useAlibi)
        .then(render)
}

eventHub.addEventListener("showAlibisClicked", AlibiList)
eventHub.addEventListener("alibiStateChanged", () => {
    const newAlibis = useAlibis()
    render(newAlibis)
})