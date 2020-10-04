const todos = ['home', 'work', 'cleanup']

function createTodo(text){
    const li = document.createElement('li')
    const input = document.createElement('input')
    const button = document.createElement('button')

    li.append(input)
    li.append(text)//인자값을 파라미터를 통해 받아서 li안으로 넣어서 보여준다.
    li.append(button)
    button.append('delete')
    ul.append(li)

    input.type = "checkbox"
    li.className = "todo"
    input.className = "check"
    button.className = "delete"

    button.addEventListener('click',removeTodo)
}

const ul = document.querySelector('ul')
for(let i = 0; i < todos.length; i++) {
    createTodo(todos[i])
}

const add = document.querySelector('#add')  
add.addEventListener('click',function(){
    const input = document.querySelector('#todoValue')
    if(input.value === ""){
        alert('값을 입력하세요')
    }else{
        createTodo(input.value)
    }
})

function removeTodo(e){
    e.target.parentNode.remove()
}

