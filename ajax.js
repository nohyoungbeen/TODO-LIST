
function selectAjax(){
    $.ajax({
        url : 'http://127.0.0.1/TODO-LIST/select.php', 
        type : "get",
        dataType : "json",
        success : function(response){
            for(let i = 0; i < response.length; i ++){
                createTodo(response[i].id, response[i].title, response[i].completed )
                console.log(response);
            }
        },
        fail : function(error){
            console.log(error)
        }
    })
}

function removeAjax(e, id){
    $.ajax({
        type:'GET',
        url : 'http://127.0.0.1/TODO-LIST/delete.php?id='+id,
        dataType : 'json',
        success: remove(e)
    })
}

function updateAjax(e, id, completed){
    if(completed == 0){
        completed = 1
    }else if(completed == 1){
        completed = 0
    }
    $.ajax({
        type:'GET',
        url : `http://127.0.0.1/TODO-LIST/update.php?id=${id}&completed=${completed}`,
        dataType : 'json',
        success: listColor(e)
    })
}

function createAjax(){
    $.ajax({
        type:'GET',
        url : 'http://127.0.0.1/TODO-LIST/create.php?todo='+todoValue.value,
        dataType : 'json',
        success: createTodo('',todoValue.value)
    })
}