const url = "http://localhost:3000/users"
const requestHeader = {"Content-Type": "application/json",
                        "Accept":"application/json"}

function submitData(name, email){
    return fetch(url,{
        method: "POST",
        headers: requestHeader,
        body: JSON.stringify({
            name, 
            email
        })
    })
    .then(resp => resp.json())
    .then(function (user){
        document.body.innerHTML = user["id"]
    })   
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}
    
    

