// Add your code here
const userUrl = "http://localhost:3000/users"

function submitData(name, email) {
    return fetch(userUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(resp => resp.json())
    .then(json => document.body.innerHTML =json.id)
    .catch(function(error) {
        alert("uh oh!");
        document.body.innerHTML = error.message})

}