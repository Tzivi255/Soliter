let wrongCode=document.getElementById("wrongCode")
let code=document.getElementById("code")
let name=document.getElementById("name")
let conect=document.getElementById("conect")
name.addEventListener("blur",f_checkName)
name.addEventListener("keypress",f_checkNameLetter)
conect.addEventListener("click",f_overToGame)
code.addEventListener("keypress",f_chekCodeNumber)


function f_chekCodeNumber(){
    if(!(event.keyCode>=48 && event.keyCode<=57))
        event.preventDefault()
}
function f_checkNameLetter(){
    if(event.keyCode>=48 && event.keyCode<=57)
        event.preventDefault()
}
//בדיקת תקינות שם
function f_checkName(){
    if(localStorage.getItem(code.value)!=null){
     let data = JSON.parse(localStorage.getItem(code.value))
        if(data["name"]!=name.value){
            wrongName.textContent="The Username or Password you entered is incorrect please try again"
        }
        else{
           wrongName.textContent="" 
           return true   
        }
    }
    if(name.value=="")
        wrongName.textContent="" 
}
//מעבר למשחק
function f_overToGame(){
if(localStorage.getItem(code.value)!=null && code.value!="" && name.value!=""){
    if(f_checkName()==true)
        window.location="../html/game.html"}
    else if(code.value!="" && name.value!=""){
    localStorage.setItem(code.value,JSON.stringify({"name":"null","c":"0","game":"0"}))
    let data = JSON.parse(localStorage.getItem(code.value))
    data["name"]=name.value
    localStorage.setItem(code.value, JSON.stringify(data))
   //מעבר למשחק
    window.location="../html/game.html"
    }
    sessionStorage.setItem("playNew",code.value)
}





