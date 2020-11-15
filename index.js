//할일 완료 : completed : true
//미완료 : completed :false
//https://jsonplaceholder.typicode.com/todos

const add = document.querySelector('#add')
const todoValue = document.querySelector('#todoValue')

function createTodo(id, title , completed){ // a, un
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
        removeAjax(e, id)
    })
    //삭제부분의 ajax가 들어가는 부분

    checkbox.addEventListener('click', function(e){
        updateAjax(e, id, completed)
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
    if(todoValue.value === ""){
        alert("값을 입력하세요. ")
    }else{
        createAjax()
    }
    
})

function remove(e){
    e.target.parentNode.remove()
}

selectAjax()