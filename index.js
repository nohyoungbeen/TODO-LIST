//할일 완료 : completed : true
//미완료 : completed :false
const todos = [
    {title : '출근', completed : true},
    {title :'공부', completed : true}
]

const add = document.querySelector('#add')

const input = document.querySelector('#todoValue')

for(i in todos){
    createTodo(todos[i].title)
}

function createTodo(title){
    const ul = document.querySelector('#list')
    const button = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    ul.append(li) 
    li.append(checkbox)
    li.append(title)
    button.append("지우기")
    li.append(button)
    button.addEventListener('click', remove)
    checkbox.addEventListener('click', listColor)
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