fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => displayData(json))

function displayData(posts){
    const Title = posts.map(posts => posts.title)
    const Body = posts.map(posts => posts.body)
    const tableBody = document.getElementById('T1');

    for(let i=1; i<=Title.length; i++){
        const newRow = document.createElement('tr')
        const postTitle = Title[i];
        const titleData = document.createElement('td')
        titleData.innerHTML = postTitle;
        newRow.appendChild(titleData)

        const body = Body[i];
        const bodyData = document.createElement('td');
        bodyData.innerHTML = body;
        newRow.appendChild(bodyData)
        tableBody.appendChild(newRow)
    }
}