
//debugger
// הגדרת משתנים
let gameDiv=document.getElementById("gameDiv")
let cardDiv=document.getElementById("cardDiv")
let winOpenDiv=document.getElementById("winOpenDiv")
let openDiv=document.getElementById("openDiv")
let winDiv=document.getElementById("winDiv")
let moreDiv=document.getElementById("moreDiv")
let div0=document.getElementById("0")
let div1=document.getElementById("1")
let div2=document.getElementById("2")
let div3=document.getElementById("3")
let div4=document.getElementById("4")
let div5=document.getElementById("5")
let div6=document.getElementById("6")
let div7=document.getElementById("7")
let div8=document.getElementById("8")
let div9=document.getElementById("9")
let cardI=5
const cardJ=10
let indexType=0
let timer=document.createElement("label")
let point=document.createElement("label")
let second=0
let minutes=0
let hours=0
let countOfPoint
let countOfGame
sessionStorage.setItem("indexType",indexType)
let cardArr=[0,8,8,8,8,8,8,8,8,8,8,8,8,8]
let win=[0,0,0,0,0,0,0,0]
let randomNum
let soundOpenOneCard
let soundOpenCards
let soundMistake
let soundCloseCard
let maxij=[5,5,5,5,4,4,4,4,4,4]
let arrdiv=[div0,div1,div2,div3,div4,div5,div6,div7,div8,div9]

let card0=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"discover"}]
let card1=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"discover"}]
let card2=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"discover"}]
let card3=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"discover"}]                             
let card4=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"discover"}]
let card5=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"discover"}]
let card6=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"discover"}]
let card7=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"discover"}]  
let card8=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"discover"}]
let card9=[{"num":"null","status":"back"},{"num":"null","status":"back"},{"num":"null","status":"back"},
           {"num":"null","status":"back"},{"num":"null","status":"discover"}] 
let c={"num":"null","status":"null"}
//הגדרת מערך של כל הגסון
let arrjison=[card0,card1,card2,card3,card4,card5,card6,card7,card8,card9]

//הפעלה של הפונקציה מיד עם ריצת התוכנית
initStartGame()
//הפעלה של פונקצית הזמן כל הזמן
setInterval(f_timer,1000);
//פונקציה שיוצרת רק את לוח המשחק
function initStartGame(){
    //מחיקת כל הדברים מהלוח
    gameDiv.innerHTML=""
    for(let j=0;j<cardJ;j++){
        arrdiv[j].innerHTML=""
    }
    openDiv.innerHTML=""
    winDiv.innerHTML=""
    moreDiv.innerHTML=""
    //איפוס כל הנתונים
    cardArr=[0,8,8,8,8,8,8,8,8,8,8,8,8,8]
    win=[0,0,0,0,0,0,0,0]
    maxij=[5,5,5,5,4,4,4,4,4,4]
    //איפוס הגיסון
    for(let j=0;j<cardJ;j++){
        for(let i=0;i<arrjison[j].length;i++)
        {
            arrjison[j][i]["num"]='null'
            if((j<4 && i==5) || (j>=4 && i==4))
              arrjison[j][i]["status"]='discover'
            else if((j<4 && i<5) || (j>=4 && i<4))
              arrjison[j][i]["status"]='back'
            else
            delete arrjison[j][i];
        }
        if(arrjison[j].length>maxij[j]+1)
            arrjison[j].length=maxij[j]+1
    }
let back0="back0"
let back1="back1"
let back2="back2"
let back3="back3"
let back4="back4"
let arrTypeCard=[back0,back1,back2,back3,back4]
let indexType=parseInt(sessionStorage.getItem("indexType"))
//יצירת הלוגו
let logo=document.createElement("img")
logo.setAttribute("src","../img/לוגו.png")
logo.setAttribute("id","logo")
gameDiv.appendChild(logo)
//יצירת הקלפים כל פעם עמודה
let cardGame
for(let i=0;i<arrjison.length;i++){
    for(let j=0;j<arrjison[i].length;j++){
    cardGame=document.createElement("img")
    cardGame.setAttribute("class","cardGame")
    cardGame.setAttribute("id","img"+j+i)
    cardGame.setAttribute("data-i",j)
    cardGame.setAttribute("data-j",i)
    randomNum=Math.floor(Math.random()*cardArr.length)
    while(cardArr[randomNum]==0)
        randomNum=Math.floor(Math.random()*cardArr.length)
    cardArr[randomNum]--
    arrjison[i][j]["num"]=randomNum
    if(arrjison[i][j]["status"]=='back')
       cardGame.setAttribute("src","../img/"+arrTypeCard[indexType]+".png")
    else
       cardGame.setAttribute("src","../img/"+arrjison[i][j]["num"]+".png")
       arrdiv[i].appendChild(cardGame)
    if(arrjison[i][j]["status"]=='discover'){
        cardGame.addEventListener("click",f_move)
    }
}
cardDiv.appendChild(arrdiv[i])
}
gameDiv.appendChild(cardDiv)
//יצירת כפתור פתיחת קלפים
for(let k=0;k<5;k++){
let openCard=document.createElement("img")
openCard.setAttribute("src","../img/"+arrTypeCard[indexType]+".png")
openCard.setAttribute("class","openCard")
openCard.setAttribute("id","openCard"+k)
openCard.setAttribute("data-k",k)
openDiv.appendChild(openCard)
gameDiv.appendChild(winOpenDiv)
openCard.addEventListener("click",f_openCard)
}
//יצירת תחתית הדף עם האפציות
//משחק חדש
let buttonNewGame=document.createElement("img")
buttonNewGame.setAttribute("src","../img/newGame.png")
buttonNewGame.setAttribute("class","buttonFooter")
buttonNewGame.addEventListener("click",initStartGame)
moreDiv.appendChild(buttonNewGame)
gameDiv.appendChild(moreDiv)
//סוגים של קלפים
let cards=document.createElement("img")
cards.setAttribute("src","../img/cards.png")
cards.setAttribute("class","buttonFooter")
cards.addEventListener("click",f_typeCard)
moreDiv.appendChild(cards)

//רמז
//let remez=document.createElement("img")
//remez.setAttribute("src","../img/remez.png")
//remez.setAttribute("class","buttonFooter")
//remez.addEventListener("click",f_remez)
//moreDiv.appendChild(remez)
//טימר
timer.setAttribute("id","timer")
second=0
minutes=0
hours=0
timer.textContent="0:00"
moreDiv.appendChild(timer)

//מספר נקודות
countOfPoint=600
let data = JSON.parse(localStorage.getItem(sessionStorage.getItem("playNew")))
//let point=document.createElement("label")
point.setAttribute("id","point")
point.textContent="your score:"+countOfPoint
moreDiv.appendChild(point)

//השיא
let maxScore=document.createElement("label")
maxScore.setAttribute("id","maxScore")
maxScore.textContent="your c:"+data["c"]
moreDiv.appendChild(maxScore)
//כמות משחקים
let countOfGame=document.createElement("label")
countOfGame.setAttribute("id","countOfGame")
countOfGame.textContent="games:"+data["game"]
moreDiv.appendChild(countOfGame)
//שם המשתמש
let txtName=document.createElement("label")
let namePlayer=data["name"]
txtName.textContent=namePlayer
txtName.setAttribute("id","txtName")
txtName.setAttribute("class","buttonFooter")
moreDiv.appendChild(txtName)
gameDiv.appendChild(moreDiv)


//הגדרת שמע
//קלף אחד
soundOpenOneCard=document.createElement("audio")
soundOpenOneCard.setAttribute("src","../audio/openOneCard.mp3")
//שגיאת קלף
soundMistake=document.createElement("audio")
soundMistake.setAttribute("src","../audio/mistake.mp3")
//פתיחת הרבה קלפים 
soundOpenCards=document.createElement("audio")
soundOpenCards.setAttribute("src","../audio/openCards.mp3")
//סגירת קלפים
soundCloseCard=document.createElement("audio")
soundCloseCard.setAttribute("src","../audio/closeCards.mp3")
}
//הזזת קלפים מעמודה לעמודה
function f_move(){
    let boolean=0  
    let cardGame
    let chekColumn=0
    let i=parseInt(event.srcElement.getAttribute("data-i"))
    let j=parseInt(event.srcElement.getAttribute("data-j"))
    console.log(arrjison[j][i]["num"]);
    let num=arrjison[j][i]["num"]
    let temp=num
    let count=1
    let iopen=i-1
    let jnew
    //בודק האם ניתן להעביר את ערימת הקלפים 
    for(let i1=(i+1);i1<arrjison[j].length && arrjison[j][i1]["num"]!='null';i1++){
        if(arrjison[j][i1]["num"]+1!=temp){
            chekColumn=1
        }
        temp--; count++
    }
    let tempcount=count
    //אם ניתן להעביר את הערימה
    if(chekColumn==0){
    let index=j+1
    let sum=0
    while(sum<2){
   //עובר על כל הקלפים החיצוניים
    for(j1=index;j1<maxij.length && boolean==0;j1++){
        let num2
        if(maxij[j1]>=0)
             num2=arrjison[j1][maxij[j1]]["num"];
        if((maxij[j1]<0) || (j1!=j && num2-1==num && arrjison[j1][maxij[j1]]["status"]=='discover')){
            //עדכון נקודות
            countOfPoint-=1
            point.textContent="your score:"+countOfPoint
            soundOpenOneCard.play()
          //עובר על כל הקלפים בגיסון הנוכחי ומעביר אחד אחד
            for(let i1=i;i1<arrjison[j].length && count!=0;i1++){ 
                maxij[j]--;  maxij[j1]++ 
                let c={"num":"null","status":"null"}
                if(arrjison[j1].length-1<maxij[j1])
                   arrjison[j1].push(c)
                //עדכון קלף בעמודה חדשה
                arrjison[j1][maxij[j1]]["num"]=num
                arrjison[j1][maxij[j1]]["status"]='discover'
                //מחיקת קלף מעמודה ישנה
                arrjison[j][i1]["num"]='null'
                arrjison[j][i1]["status"]='null'
                cardGame=document.getElementById("img"+i1+j);
                arrdiv[j].removeChild(cardGame)
                //שינוי נתונים לקלף החדש
                cardGame.setAttribute("id","img"+maxij[j1]+j1)
                cardGame.setAttribute("data-i",maxij[j1])
                cardGame.setAttribute("data-j",j1) 
                arrdiv[j1].appendChild(cardGame)
                num--
                index++
                count--  
                jnew=j1
            }    
            boolean=1
        }
        }
        if(j!=0){
           index=0
           sum++}
        else sum=2
    }
    //פתיחת קלף סגור
    if(iopen>=0){
    let numm=arrjison[j][iopen]["num"]
    let cardGame=document.getElementById("img"+iopen+j)
    if(arrjison[j][iopen+1]["num"]=='null'){
        cardGame.setAttribute("src","../img/"+numm+".png")
       arrjison[j][iopen]["status"]="discover"
       cardGame.addEventListener("click",f_move)
    }}      
}
if(boolean==0)
soundMistake.play()
if(maxij[jnew]>="12")
    f_closeCard(jnew)
}
//החלפת סוג הקלף
function f_typeCard(){
if(sessionStorage.getItem("indexType")==null)
    sessionStorage.setItem("indexType",indexType)
let back0="back0"
let back1="back1"
let back2="back2"
let back3="back3"
let back4="back4"
let arrTypeCard=[back0,back1,back2,back3,back4]
let indexType=parseInt(sessionStorage.getItem("indexType"))
if(indexType+1<=arrTypeCard.length-1)
     indexType++
else
    indexType=0
    sessionStorage.setItem("indexType",indexType)  
//החלפת קלפי המשחק
for(let j=0;j<cardJ;j++){
    for(let i=0;i<arrjison[j].length;i++){
        if(arrjison[j][i]["status"]=='back'){
            let cardGame=document.getElementById("img"+i+j)
            cardGame.setAttribute("src","../img/"+arrTypeCard[indexType]+".png")
                }
        }
     }
//החלפת קלפי הפתיחה
for(let k=0;k<5;k++){
    let openCard=document.getElementById("openCard"+k)
openCard.setAttribute("src","../img/"+arrTypeCard[indexType]+".png")
}
}
// פתיחת קלפים נוספים
function f_openCard(){
    let k=event.srcElement.getAttribute("data-k")
    let wait = 0
    for(let j=0;j<cardJ;j++)
    {
        //שליחה לפונקציה שתגרום לקלפים להפתח אחד אחד
       setTimeout(f_openCardtime.bind(null, j),wait)
       wait+=50
    }
    openDiv.removeChild(document.getElementById("openCard"+k))
    for(let j1=0;j1<maxij.length;j1++){
        if(maxij[j1]>="12")
             f_closeCard(j1)
    }
    soundOpenCards.play()
}
//יצירת הקלפים של הפתיחה
function f_openCardtime(j)
{
    let randomNum=Math.floor(Math.random()*cardArr.length)
    while(cardArr[randomNum]==0)
        randomNum=Math.floor(Math.random()*cardArr.length)
    cardArr[randomNum]--
    let cardGame=document.createElement("img")
    cardGame.setAttribute("src","../img/"+randomNum+".png")
    cardGame.setAttribute("class","cardGame")
    maxij[j]++
    if(maxij[j]>=arrjison[j].length){
        let c={"num":"null","status":"null"}
        arrjison[j].push(c)
        }  
    cardGame.setAttribute("id","img"+maxij[j]+j)
    cardGame.setAttribute("data-i",maxij[j])
    cardGame.setAttribute("data-j",j) 
    cardGame.addEventListener("click",f_move)
    arrjison[j][maxij[j]]["num"]=randomNum
    arrjison[j][maxij[j]]["status"]='discover'
    arrdiv[j].appendChild(cardGame)
}
//סגירת חפיסת קלפים
function f_closeCard(j){
    let num=1
    let flage=0
    let cardGame
    let wait=0
//בדיקה האם ניתן לסגור חפיסה
for(let i=maxij[j];  i>=0 && flage=="0" && num<="13" && arrjison[j][i]["status"]=='discover';i--){
    if(arrjison[j][i]["num"]!=num)
        flage=1
    num++
}
//מחיקת הקלפים מהלוח    
if(flage=='0' && num=="14"){
    for(let i=maxij[j];i>=0 && num>1 ;i--){
    setTimeout(f_closeCardtime.bind(null,i,j,num),wait)
    wait+=50
    num--
    arrjison[j][i]["num"]='null'
        arrjison[j][i]["status"]='null'
        maxij[j]--
}

f_win()
soundCloseCard.play()
//עדכון נקודות
if(hours==0 && minutes<2)
     countOfPoint+=200
else if(hours==0 && minutes>2 && minutes<5)
     countOfPoint+=150
else 
    countOfPoint+=100
point.textContent="your score:"+countOfPoint
}
//פתיחת הקלף הסגור
if(maxij[j]>=0 && arrjison[j][maxij[j]]["status"]=='back'){
    let numm=arrjison[j][maxij[j]]["num"]
    let cardGame=document.getElementById("img"+maxij[j]+j)
    //if(arrjison[j][maxij[j]]["num"]=='null'){
        cardGame.setAttribute("src","../img/"+numm+".png")
       arrjison[j][maxij[j]]["status"]="discover"
       cardGame.addEventListener("click",f_move)
//    }
}      
}
function f_closeCardtime(i,j,num){
        let cardGame=document.getElementById("img"+i+j)
        arrdiv[j].removeChild(cardGame)
        
        
   
}
//הוספת קלף ניצחון 
function f_win(){
    let i
    let cardGame=document.createElement("img")
    cardGame.setAttribute("src","../img/13.png")
    cardGame.setAttribute("class","cardGame")
    cardGame.setAttribute("id","winDiv")
    winDiv.appendChild(cardGame)
    for(i=0;i<win.length && win[i]!=0;i++){}
    //if(i<win.length-1)
       win[i]=1
    if(win[win.length-1]==1)
      f_gameWin()
}
//פונקציה של הזמן
function f_timer(){    
    second++
if(second==60){
    minutes++
    second=0
}
if(minutes==60)
    hours++ 
//יש שעות
if(hours==0){
    if(second<10)
        timer.textContent=minutes+":0"+second
    else
        timer.textContent=minutes+":"+second
}
//אין שעות 
else{
    if(second<10 && minutes<10)
        timer.textContent=hours+":0"+minutes+":0"+second
    else if(second<10)
        timer.textContent=hours+":"+minutes+":0"+second
    else
        timer.textContent=hours+":0"+minutes+":"+second
}
}
//ניצחון במשחק
function f_gameWin(){
//עדכון נקודות
if(hours==0 && minutes<2)
countOfPoint+=400
else if(hours==0 && minutes>2 && minutes<5)
countOfPoint+=300
else 
countOfPoint+=200
point.textContent="your score:"+countOfPoint
let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("playNew")))
if(data["c"]<countOfPoint)
   data["c"]=countOfPoint
 data["game"]=parseInt(countOfGame+1)  
localStorage.setItem(sessionStorage.getItem("playNew"), JSON.stringify(data))
 // alert("ניצחתתתתתתתתתתתתת")
}

