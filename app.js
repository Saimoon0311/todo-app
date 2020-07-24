var list = document.getElementById("myUL")

function newElement(){
     var inserts = document.getElementById("myInput") 
     var todolist = document.createElement("li")
     todolist.setAttribute("id","ed")
     var text = document.createTextNode(inserts.value)
    //  list.appendChild(todolist)
     todolist.appendChild(text)
     list.appendChild(todolist)
     inserts.value=""


     var delbutton = document.createElement("button")
     var deltext = document.createTextNode("Delete")
     var delsrc = document.createAttribute("class")
    //  var req = document.setAttribute("required")
     delsrc.value="addBtns"
     delbutton.setAttributeNode(delsrc)
     delbutton.setAttribute("onclick","delItem(this)")
    //  delbutton.appendChild(delsac)
     delbutton.appendChild(deltext)
     todolist.appendChild(delbutton)
    
    // var editBtn = document.createElement("button")
    // var editText = document.createTextNode("Edit")
    // editBtn.appendChild(editText)
    // todolist.appendChild(editBtn)
    // editBtn.setAttribute("onclick","editItem(this)")
    // editBtn.setAttribute("class","addBtns")

}
function AllDel(){
    list.innerHTML= ""
}
function delItem(e){
    e.parentNode.remove()
}
// function editItem(e){
//    var inse= document.createElement("input")
//    var textup = document.createTextNode(inse.value)
// //    var edit = document.getElementById("ed")
//    inse.appendChild(textup)
   // e.parentNode.nodeValue.appendChild(inse)
//    e.parentNode.firstChild.nodeValue=inse.parentNode
// 


// var ins = document.createElement("input")
// var textup = document.createTextNode(ins.value)
// ins.appendChild(textup)
// list.replaceChild(ins,list.firstChild)


// var editvalue = document.createElement("INPUT");
// var edit = document.createTextNode(editvalue)
// editvalue.appendChild(edit)
// document.body.appendChild(editvalue);
// editvalue.setAttribute("type", "text");
// //     var editvalue =prompt("Enter Edit value",e.parentNode.firstChild.nodeValue)
// //    var val = e.parentNode.firstChild.nodeValue
//    e.parentNode.firstChild.nodeValue = editvalue


// }