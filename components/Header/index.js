// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    //  <div class="header">
    const divHeader = document.createElement('div')
    divHeader.classList.add('header')

    //    <span class="date">SMARCH 28, 2019</span>
    const spanHeader = document.createElement('span')
    spanHeader.classList.add('date')
    spanHeader.textContent = 'SMARCH 28, 2019'

    //    <h1>Lambda Times</h1>
    const h1Header = document.createElement('h1')
    h1Header.textContent = 'Lambda Times'

    //    <span class="temp">98°</span>
    const span2Header = document.createElement('span')
    span2Header.classList.add('temp')
    span2Header.textContent = '98°'

    // creating an array of my different component pieces 
    const elements = [spanHeader, h1Header, span2Header]
    // then using .map to loop thorugh my array appending eachone after the divHeader 
	elements.map(element => divHeader.append(element))

    return divHeader
}

// create a variable that holds your entire function
const headerContainer = Header()

// append header to .header-container
document.querySelector('.header-container').appendChild(headerContainer)
