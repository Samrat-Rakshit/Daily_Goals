const title = document.getElementById("title")
const description = document.getElementById("description")
const form = document.querySelector("form")
const container = document.querySelector(".container")
var currentDate = new Date();

var year = currentDate.getFullYear();
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
var day = ('0' + currentDate.getDate()).slice(-2);
var formattedDate = day + '-' + month + '-' + year;
//console.log(formattedDate);

document.getElementById("currentDate").innerHTML = formattedDate;
//container.prepend(currentDate)
const task = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")) :[];
showalltasks()
function showalltasks(){
      task.forEach((value,index)=>{
            const div = document.createElement("div")
            div.setAttribute("class","task")
            const innerdiv = document.createElement("div")
            div.append(innerdiv)

            const p = document.createElement("p")
            p.innerText=value.title
            innerdiv.append(p)

            const span = document.createElement("span")
            span.innerText=value.description
            innerdiv.append(span)

            const btn = document.createElement("button")
            btn.setAttribute("class","delbtn")
            btn.innerText="-"

            btn.addEventListener("click",()=>{
                  removetask()
                  task.splice(index,1)
                  localStorage.setItem("task",JSON.stringify(task))
                  showalltasks()
            })
            div.append(btn)

            container.append(div)
      })
}

function removetask(){
      task.forEach((value)=>{
            const div = document.querySelector(".task")
            div.remove()

      })
}
form.addEventListener("submit",(e)=>{
      e.preventDefault();
      removetask()
      task.push({
            title:title.value,
            description:description.value,
      })
      localStorage.setItem("task",JSON.stringify(task))
      showalltasks()
})
