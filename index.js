//할일 완료 : completed : true
//미완료 : completed :false
//https://jsonplaceholder.typicode.com/todos

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

const add = document.querySelector('#add')

const input = document.querySelector('#todoValue')

function createTodo(id, title , completed){
    const ul = document.querySelector('#list')
    const li = document.createElement('li')
    const button = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    ul.append(li) 
    li.append(checkbox)
    li.append(title)
    button.append("지우기")
    li.append(button)
    button.addEventListener('click', function(e){
        $.ajax({
            type:'GET',
            url : 'http://127.0.0.1/TODO-LIST/delete.php?id='+id,
            dataType : 'json',
            success: remove(e)
        })
    })
    //삭제부분의 ajax가 들어가는 부분

    checkbox.addEventListener('click', function(e){
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
    })
    if( completed == true){
        checkbox.checked = true;
        li.classList.add('completed');
    }
}

function listColor(e){
    e.target.parentNode.classList.toggle('completed')
}

add.addEventListener('click', function(){
    if(input.value === ""){
        alert("값을 입력하세요. ")
    }else{
        $.ajax({
            type:'GET',
            url : 'http://127.0.0.1/TODO-LIST/create.php?todo='+input.value,
            dataType : 'json',
            success: createTodo(input.value)
        })
    }
    
})

function remove(e){
    e.target.parentNode.remove()
}