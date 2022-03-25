

var Item=JSON.parse(localStorage.getItem("CompletedTodo"))
Item.map(function(el,i,arr){
    var tr=document.createElement("tr")
    var td1=document.createElement("td")
    td1.textContent=el.name
    var td2=document.createElement("td")
    td2.textContent=el.itemq
    var td3=document.createElement("td")
    td3.textContent=el.itemp
   
     tr.append(td1,td2,td3)
     document.querySelector("#body").append(tr)
    
})
// console.log(Item)

    