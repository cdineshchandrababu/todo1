    var input=document.getElementById("input") 
    var message=document.getElementById("message")

    function update(){
        var list=document.createElement("li")
        list.innerHTML=input.value+ "<button onclick='remove()'>delete</button>"+"<button onclick='change(this)'>edit</button>"
        message.append(list)
        input.value=""
    }

    function remove(){
        event.target.parentElement.remove(event)
     }
     var currentItem=null
     function change(event){
        currentItem=event.parentElement
        var popup=document.getElementById("popup")
        popup.style.display="block"
     }
     function update2(event){
        var input2=document.getElementById("input2")
        var inputvalue=input2.value
        currentItem.innerHTML=inputvalue+"<button onclick='remove(event)'>delete</button>"+"<button onclick='change(this)'>edit</button>"
        popup.style.display="none"
        input2.value=''
     }