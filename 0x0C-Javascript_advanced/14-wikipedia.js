function createElement(data){
    const para = document.createElement('p');
    para.innerHTML = data;
    document.body.appendChild(para)
}

function queryWikipedia(callback){
    const xhr = new XMLHttpRequest() ;
    xhr.open('GET', "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
    xhr.onload= () => {
        const data = JSON.parse(xhr.response)
        console.log("xhr.onload -> data", data.query.pages[21721040].extract)
        callback(data.query.pages[21721040].extract)
        // console.log("xhr.onload -> callback(data)", callback(data))
        // console.log(data);
    }
    xhr.send()
}

queryWikipedia(createElement);
