/* async function getResponse() {
    //let response = await fetch("../../furniture.json");
    let response = await fetch("https://jsonplaceholder.typicode.com/photos"); 
    let content = await response.json();
    content = content.splice(0, 4);


    let key;
    for (key in content) {
        content[key];
    }
}

getResponse(); */
