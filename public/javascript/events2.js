const rssKey = "rss"
const urls = []

// async function add () {
//     const inptRss = document.getElementById("url")
//     const value = inptRss.value
//     if(!value){
//         alert('Wprowadź url nim klikniesz "Dodaj"!')
//         return
//     } else {


//         lsOutput.innerHTML+=`<div class = "lsOutput">${value} </div>`
//         const urlsToSend = document.querySelectorAll('.lsOutput');

//         for(let urlToSend of urlsToSend){
//             await urls.push(urlToSend.innerHTML)
//             localStorage.setItem(rssKey,urls)
//         }
//         return Promise.all(urls)
//     }   
// }


function save () {
    const emailValue = document.getElementById('e-mail').value
    const rss = []
    email.readOnly = true

    document.getElementById('list_rss').childNodes.forEach(elem => {
        if (!elem.id) {
            return
        }
        rss.push(elem.id)
    })
    
    const content = {
    email: emailValue,
    rss: rss
    }

    fetch('/api/user', {
    method: 'POST',
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
    })
    .then((res) => {
        if (res.status !== 200) {
        alert('Failed to save data')
        return
        }
        alert('Data was saved')
    })
    .catch((error) => {
        alert('Request failed. ' + JSON.stringify(error))
    })
}
//     const rssValue = urls
//     const emailValue = document.getElementById('e-mail').value
//     const content = JSON.stringify(emailValue)
//     const data =
//     {
//         email : content,
//         rss : rssValue 
//     }
//     fetch('/api/user', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then((res) => {
//         console.log('huhu')
//         if (res.status !== 200) {
//             alert('Nie udało się zapisać danych')
//             return
//         }
//         alert("Zapisano dane")})
//     .catch((error) => {
//         alert('Request failed. ' + JSON.stringify(error))
//     })
// }



function addRss (rss) {
    if (!rss) {
        return
    }

    const ul = document.getElementById('list_rss')

    const li = document.createElement('li')
    li.setAttribute('id', rss)
    li.setAttribute('class', 'list-group-item')

    const a = document.createElement('a')
    a.setAttribute('class', 'fa fa-trash-o mr-2 fa-1.5x')
    a.setAttribute('onclick', "deleteRss('" + rss + "')")

    li.appendChild(a)
    li.appendChild(document.createTextNode(rss))
    ul.appendChild(li)
}

// eslint-disable-next-line no-unused-vars
function add () {
    addRss(document.getElementById('url').value)
    document.getElementById('url').value = ''
}

function deleteRss (id) {
    const ul = document.getElementById('list_rss')
    const li = document.getElementById(id)
    ul.removeChild(li)
}

function preview () {
    const email = document.getElementById('e-mail').value
    fetch(`/api/mail?email=${email}`, {
        method: 'GET'
    })
    .then(res => {
        return res.text()
    })
    .then(data => {
        var doc = document.getElementById('encoder_iframe').contentWindow.document
        doc.open()
        doc.write(data)
        doc.close()
    })
    .catch((error) => {
        alert('Żądanie nie powiodło się.' + JSON.stringify(error))
    })
}


function sendMail () {
    const email = document.getElementById('e-mail').value
    fetch(`/api/mail?email=${email}`, {
        method: 'POST'
    })
    .then(res => {
    return res.text()
    })
    .catch((error) => {
    alert('Żądanie nie powiodło się.' + JSON.stringify(error))
    })
}

function getData () {
    fetch(`/api/user`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        data.email = document.getElementById('e-mail').value 
        data.rss = localStorage.getItem(rssKey)
    })
    .catch((error) => {
        alert('Żądanie nie powiodło się. ' + JSON.stringify(error))
    })
}

window.onload = getData()
