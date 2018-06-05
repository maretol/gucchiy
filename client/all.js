function onClickPost(){
    var text = document.getElementById("InputTextArea").value
    if(text==""){
        showNoGuchiMessage()
        return
    }
    showMessageModalDialog("Cuchiった！！！", "Guchiを受け取ったよ！！")
}

function showNoGuchiMessage(){
    showMessageModalDialog("Guchiってない！！！", "Guchiがないのはいいことだよね！！！")
}

function showMessageModalDialog(title, text){
    document.getElementById("resultTitle").textContent = title
    document.getElementById("resultBody").textContent = text
    $('#messageModal').modal();
}

// ここのセレクタをちゃんとしたい（ちゃんとしたら動かない（ちゃんとできてない（わからない
$('*').on('show.bs.tab', function(event){
    if(event.target.id=="someGucchiTab"){
        for(var i=0; i<10; i++){
            var container = document.getElementById("someGuchiList")
            var item = createGucchiListItem("Hello" + i)
            container.appendChild(item);
        }
    }
})

function createGucchiListItem(text){
    var item = document.createElement("li")
    item.className="list-group-item"

    var childrenHeader = document.createElement("div")
    childrenHeader.className = "list-group-item-heading"
    childrenHeader.textContent = "header"

    var children = document.createElement("div")
    children.className = "list-group-item-footer"
    children.textContent = text
    
    var childrenFooter = document.createElement("div")
    childrenFooter.className = "list-group-item-footing"
    childrenFooter.appendChild(createButton("わかる"))
    childrenFooter.appendChild(createButton("それな"))

    item.appendChild(childrenHeader)
    item.appendChild(children)
    item.appendChild(childrenFooter)

    return item
}

function createButton(text){
    var button = document.createElement("button")
    button.appendChild(function(){
        var icon = document.createElement("span")
        icon.className = "glyphicon glyphicon-plus"
        icon.setAttribute("aria-hidden", "true")
        
        return icon
    }())
    button.textContent = text
    return button
}