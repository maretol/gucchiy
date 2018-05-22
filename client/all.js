function onClickPost(){
    var text = document.getElementById("InputTextArea").value
    if(text==""){
        showNoGuchiMessage()
        return
    }
    alert(text)
}

function showNoGuchiMessage(){
    alert("愚痴がないのはいいことだよね！！！")
}

function showMessageModalDialog(text){

}