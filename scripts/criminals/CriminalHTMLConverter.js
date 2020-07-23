export const CriminalHTMLConverter = (criminalObj) => {
    return `
        <section>
           ${criminalObj.name}<br></br>
           Age: ${criminalObj.age}<br></br>
           Crime: ${criminalObj.conviction}<br></br>
           Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}<br></br>
           Term End: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}
        </section>
    `
} 