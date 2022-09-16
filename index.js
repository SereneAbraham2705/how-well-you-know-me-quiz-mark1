var readlineSync=require('readline-sync')
var username=readlineSync.question("Enter your name: ")
console.log("Welcome "+username+" to the How Well You Know Me!")

function random(q,a){
  var useranswer=readlineSync.question(q);
  if(useranswer == a){
    console.log("You are right! :)")
    s++
  }
  else{
    console.log("You are wrong! ):")
    
  }
  console.log("Final Score: "+s)
  console.log("............")
}
var m=[
  {
    q:"Am I older than 25? ",
    a:"yes"
  },
  {
    q:"Do I study in GRIET? ",
    a:"yes"
  },
  {
    q:"Do I watch k-drama? ",
    a:"yes"
  }
]
var s=0
for(var i=0;i<m.length;i++){
    random(m[i].q,m[i].a)
  
}
console.log("Total score: ",s)