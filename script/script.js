// let getId = document.getElementById('test_id')
// console.log(getId)


//load
//click
//keydown / keyup
//mouseEnter / mouserout


window.addEventListener('load', function(){
    let getId = document.getElementById('test_id')
    console.log(getId, 'here is id')

    let getClass = document.getElementsByClassName('test_class')
    console.log(getClass, 'here are ids')

    let getTag = document.getElementsByTagName('h2')
    console.log(getTag, 'Here is Tag h2')

    let getQuery = document.querySelector('h2')
    console.log(getQuery, 'get tag by query selector')

    let getAllTag = document.querySelectorAll('h2')
    console.log(getAllTag, 'Get all tag')
})
