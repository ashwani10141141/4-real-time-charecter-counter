const textareaEl = document.getElementById("textArea")
const spanNumber=document.getElementById("spanNum")
const spanNumOrange = document.getElementById("spanNumOr")
textareaEl.addEventListener("keyup", ()=>{
 updateText()
})
function updateText(){
  spanNum.innerText=textareaEl.value.length
  spanNumOrange.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length
}