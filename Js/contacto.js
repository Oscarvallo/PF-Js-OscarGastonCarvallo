let url = 'https://jsonplaceholder.typicode.com/comments';
fetch(url)
      .then(response => response.json())
      .then(data => mostrardata(data) )
      .catch(error => console.log(error))

const mostrardata = (data) => {
console.log(data)
let body ='' 
for (let i = 0; i<data.length; i++){
    body += `<tr><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].body}</td></tr>`

}
document.getElementById('data').innerHTML = body
}