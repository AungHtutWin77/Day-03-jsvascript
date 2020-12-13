let tasklist = [
    'doing homework',
    'doing exercise',
    'to buy milk'
]

// let getbody = document.querySelector('body')  ----> inner html (cler data)
// getbody.innerHTML = ""

//tasklist.push('another task') //insert
//console.log(tasklist)

//element append
//select parent element
//create new element (new tag)
//append tag

// let listContainer = document.querySelector('.list-container')
// let task = document.createElement('li')
// task.innerText = tasklist[0]
// listContainer.appendChild(task)

for(let i=0; i < tasklist.length; i++){
    let listContainer = document.querySelector('.list-container')
    let task = document.createElement('li')
    task.innerText = tasklist[i]
    listContainer.appendChild(task)


    task.addEventListener('click', function(){
        // task.classList.add('done')
        task.classList.toggle('done')
    })
}


