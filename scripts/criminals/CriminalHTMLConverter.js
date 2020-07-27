export const CriminalHTMLConverter = (criminalObj) => {
    return `
        <section class="criminal">
           <h4>${criminalObj.name}</h4>           
           
           <div class="criminal__age">Age: ${criminalObj.age}<br></br></div>
           <div class=criminal__crime">Crime: ${criminalObj.conviction}<br></br></div>
           <div class=criminal__term-start">Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}<br></br></div>
           <div class=criminal__term-end">Term End: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        </section>
    `
} 