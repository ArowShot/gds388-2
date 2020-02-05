window.onload = async function() {
    var template = document.getElementsByTagName("template")[0]

    var todos = await fetch('/todo')
    var json = await todos.json()
    console.log(json)
    for(var todo of json)  {
        var clone = template.content.cloneNode(true)
        clone.querySelector("*[data-bind='title']").innerText = todo.title
        clone.querySelector("*[data-bind='completed']").value = todo.title
        
        
        document.querySelector("*[data-bind='todos']").appendChild(clone)
    }
}