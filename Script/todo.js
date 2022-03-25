

var x=JSON.parse(localStorage.getItem("Todolist"))
// console.log(x)
var completed=JSON.parse(localStorage.getItem("CompletedTodo"))||[]


x.map(function(el,i,arr){
 var tr=document.createElement("tr")
 var td1=document.createElement("td")
 td1.innerText=el.name
 var td2=document.createElement("td")
 td2.innerText=el.itemq
 var td3=document.createElement("td")
 td3.innerText=el.itemp
 var td4=document.createElement("td")
//  var btn=document.createElement("button")
//  btn.innerText="Mark as complete"
//  td4.append(btn)
//  td4.style.backgroundColor="lightgreen"
td4.textContent="Complete"
td4.style.color="red"
td4.style.cursor="pointer"
//add complete me push
//annonamous function//we use this 
td4.addEventListener("click",function(){
  markComp(el,i,arr)//elemnet the object of data
 
})
 tr.append(td1,td2,td3,td4)
 document.querySelector("#body").append(tr)


})

function markComp(el,i,arr){
    // console.log(el)
    // splice(i)
   
    completed.push(el)
    localStorage.setItem("CompletedTodo",JSON.stringify(completed))
    // x=x.splice(0,i-1)
    console.log(completed)
    x.splice(i,1)
    localStorage.setItem("Todolist",JSON.stringify(x))
    window.location.reload()
    // window.location.reload()

   

    // for(var g=0;g<arr.length;g++){
    // arr=arr.splice(g,i)
    // }

    

}

//

//Addtocart~entire with image all the thigs
//pushihng the completed array and stored in server
// var comleted=[]





