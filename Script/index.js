document.querySelector("form").addEventListener("submit",Todo)

var TodoData; //=JSON.parse(localStorage.getItem("todoData"))//refreshed walla tension khatam samjha abb hamlog localstorage ko use karenge ha ha ha //Niche Dheko
// console.log(TodoData)//cannot reading property of null//

// if(localStorage.getItem("Todolist")==null){
//     TodoData=[]
// }
// else{
//     TodoData=JSON.parse(localStorage.getItem("Todolist"))
// }

//
//one line me likho samjha kya 

var TodoData=JSON.parse(localStorage.getItem("Todolist"))||[]//if null than [] but if its contain something than it itself 

function Todo(){
   
    
    event.preventDefault()
    var nam=document.querySelector("#name").value
    var quantity=document.querySelector("#qty").value 
    var priority=document.querySelector("#priority").value

    var todoobj={

        name:nam,
        itemq:quantity,
        itemp:priority
    }
    TodoData.push(todoobj)
    localStorage.setItem("Todolist",JSON.stringify(TodoData))
   
     //bugs
     //1.whenever page is refreshig array is empty----->get from local storage
     //2.WE CANNOT PUSH A NULL OBJECT THERE WILL THROUGH ERROR//try to access something not in local storage than that null //

     //true or null then true come
    //  console.log(null||[])
    console.log(localStorage.getItem("Todolist")||[])
    

     


}