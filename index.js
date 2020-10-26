//할일 완료 : completed : true
//미완료 : completed :false
//https://jsonplaceholder.typicode.com/todos

$.ajax({
    url : "https://jsonplaceholder.typicode.com/users/1/todos" , 
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
    li.append(id+"-")
    li.append(title)
    button.append("지우기")
    li.append(button)
    button.addEventListener('click', remove)
    checkbox.addEventListener('click', listColor)

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
        createTodo(input.value)
    }
})

function remove(e){
    e.target.parentNode.remove()
}