$(".todoX").click(function(e) {
    console.log(e.target.dataset);
});


if(localStorageHaveItem()){
    loadTodoItems();
}

function localStorageHaveItem() { 
    if(localStorage.getItem("todoList") == null){
        return false;
    }
    return true;
}

function loadTodoItems() { 
    let items = localStorage.getItem("todoList");
    
}

function progressBar(n){
    let border = "▓"
    let progress = "░"
    let whiteSpace = " "
    let actual = ""
    
    let width = 10
    for(i=1;i<=n;i++){
        actual = actual + progress
    }
    for(p=n;p<=width;p++){
        actual = actual + whiteSpace
    }
    finalBar = border + actual + border;
    console.debug(finalBar, n*10)
    $("#progressBar").text(finalBar + whiteSpace + n*10 + "%")
}

progressBar(getRandom(10))

function getRandom(max) { 
    return Math.round(Math.random() * max);
  }