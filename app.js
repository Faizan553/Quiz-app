var ques=[
  {
      id:1,
      question:"1. WWW stands for?",
      answer:"B.World Wide Web",
      options:[
          "A.World Worm Web",
          "B.World Wide Web",
          "C.World Word Web",
          "D.None of the above",
      ]
  },
  {
      id:2,
      question:"2. ________ is used to communicate from one city to another. ",
      answer:"A.WAN",
      options:[
          "A.WAN",
          "B.MAN",
          "C.LAN",
          "D.ALL of the above",
      ]
  },
  {
      id:3,
      question:"3. Which of the following software is used to view web pages?",
      answer:"A.Web Browser",
      options:[
          "A.Web Browser",
          "B.Internet Browser",
          "C.Page Browser",
          "D.All of the above",
      ]
  },
  {
      id:4,
      question:"4. Which of the following is a presentation program?",
      answer:"C.Ms-Power Point",
      options:[
          "A.MS-Word",
          "B.Ms-Excel",
          "C.Ms-Power Point",
          "D.Ms- Access",
      ]
  },
 
  

]
var count=0
var score=0;
function next(){
    check(count);    
count++;

remove()
nextques(count)

}

function nextques(e){
  var question=document.getElementById("question")
  question.innerHTML=ques[e].question;
  var opt=document.getElementsByClassName("option")
  for (var i=0;i<opt.length;i++){

  opt[i].innerHTML=ques[e].options[i]
 
}
}


function putactive(e){

remove()
e.classList.add("active")

}
function remove(){
var active=document.getElementsByClassName("option")
for (i=0;i<active.length;i++){
    active[i].classList.remove("active");
}
}

function check(e){
    var active=document.getElementsByClassName("active")
    var i = active[0].innerHTML
    

    if (i==ques[e].answer)
    {
        score+=5
        
    }
   if (e>=3){
       var question=document.getElementById("question")
  question.innerHTML="Your score is " + score + " out of 20";
  question.classList.add("center")
   }
   if(e>=3){
       var hide=document.getElementById("hide")
       hide.className="hide"
   }
    if(e>=3){
        var btn=document.getElementById("btn")
        btn.className="hide"
    }
}