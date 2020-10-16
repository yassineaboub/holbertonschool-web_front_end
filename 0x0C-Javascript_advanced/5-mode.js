function changeMode(size, weight, transform, background, color) {
    return function(){
    document.body.style['font-size'] = size + 'px';
    document.body.style['font-weight'] = weight
    document.body.style['text-transform'] = transform
    document.body.style['background-color'] = background
    document.body.style['color'] = color 
}
}

function main() {
    let spooky = changeMode('9', 'bold', 'uppercase', 'pink', 'green')
    let darkMode = changeMode('12', 'bold', 'capitalize', 'black', 'white')
    let screamMode = changeMode('12', 'normal', 'lowercase', 'white', 'black')
    
    // para 
    const para = document.createElement('p')
    para.innerHTML = 'Welcome to Holberton'
    document.body.appendChild(para)

    // first btn 
    const spookyBtn = document.createElement('button')
    spookyBtn.innerHTML = 'Spooky';
    spookyBtn.addEventListener('click', spooky) 
    document.body.appendChild(spookyBtn)

    // second btn 
    const darkModeBtn = document.createElement('button')
    darkModeBtn.innerHTML = 'Dark Mode';
    darkModeBtn.addEventListener('click', darkMode) 
    document.body.appendChild(darkModeBtn)

    // third btn 
    const screamModeBtn = document.createElement('button')
    screamModeBtn.innerHTML = 'Scream Mode';
    screamModeBtn.addEventListener('click', screamMode) 
    document.body.appendChild(screamModeBtn)
}
main() ;
