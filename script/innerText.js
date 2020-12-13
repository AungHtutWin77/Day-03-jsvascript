let h2 = document.querySelectorAll('h2')
console.log(h2)//h2 =[h2, h2]

//inner Text
// h2[0].innerText = 'WoW!' //overide (assign)

let getText = h2[0].innerText //edit access
console.log(getText)
h2[0].innerText = getText + ': Welcome'

