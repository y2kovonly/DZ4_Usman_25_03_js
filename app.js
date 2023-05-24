// 1 - task
const container = document.querySelector('.container')

const request = new XMLHttpRequest()
request.open("GET", "data.json")
request.setRequestHeader('Content-Type', 'application/json')
request.send()

request.onload = () => {
    const data = JSON.parse(request.response)
    console.log(data)

    data.forEach(data => {
        const card = document.createElement('div')
        card.classList.add('box')

        card.innerHTML = `
                <h2>${data.name}</h2>
                <span>Age: ${data.age}</span>`

        container.appendChild(card)

    })
}




// 2 - task
const reqst = new XMLHttpRequest()
reqst.open("GET", "data.json")
reqst.setRequestHeader("Content-Type", "application.json")
reqst.send()

reqst.onload = () => {
    const data = JSON.parse(reqst.response)
    console.log(data)
}