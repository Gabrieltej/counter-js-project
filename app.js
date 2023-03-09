const buttonOne=document.querySelector('.btnone')
const buttonTwo = document.querySelector('.btntwo')
const buttonThree = document.querySelector('.btnthree')

const result=document.querySelector('.result')
let i=0
buttonTwo.addEventListener('click', addshit)
buttonOne.addEventListener('click',lowershit)



function addshit(){
   i++
  result.innerHTML = i
if(i>0){
  result.style.color = 'white'
result.innerHTML = i
} i.animate() }


function lowershit(){
 i--
 if(i<0){
   result.style.color = 'red'
 }
result.innerHTML = i
}
buttonThree.addEventListener('click',()=>{
result.innerHTML = 0
})