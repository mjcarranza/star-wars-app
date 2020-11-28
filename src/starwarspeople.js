const url = 'https://swapi.dev/api/people/'

fetch(url)
.then(response => response.json)
.then(data => {
    let element = document.getElementById('elem')
    element.innerHTML =`
    <p>${data.name}</p>`;
    console.log(data)
})
.catch(err=>console.log(err))