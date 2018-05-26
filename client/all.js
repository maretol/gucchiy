function onClickPost(){
    var text = document.getElementById("InputTextArea").value
    if(text==""){
        showNoGuchiMessage()
        return
    }
    showMessageModalDialog("Guchiを受け取ったよ！！")
}

function showNoGuchiMessage(){
    showMessageModalDialog("Guchiがないのはいいことだよね！！！")
}

function showMessageModalDialog(text){
    document.getElementById("resultBody").textContent = text
    $('#messageModal').modal();
}

$('#mainTab a').on('show.bs.tab', function(event){
    if($(event.target).text()=="somegucchi"){
        for(var i=0; i<10; i++){
            console.log("hogehoge")
            var container = document.getElementById("someGuchiList")
            var item = document.createElement("li")
            item.textContent = "HELLO"
            container.appendChild(item);
        }
    }
})