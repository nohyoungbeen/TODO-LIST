const todos = ['home', 'work', 'cleanup']

function Createli(){
    const liNode = document.createElement('li')
    const input = document.createElement('input')
    const button = document.createElement('button')

    ul.append(liNode)
    li.append(input)
    li.append(todos[i])
    li.append(button)
    button.append('delete')
}    
const ul = document.querySelector('ul')
for(let i = 0; i < todos.length; i++) {
    Createli()

    input.type = "checkbox"
    liNode.className = "todo"
    input.className = "check"
    button.className = "delete"

}
const deletes = document.querySelectorAll('.delete')
for(let i = 0; i < deletes.length; i++){
    deletes[i].addEventListener('click',function(e){
        removeTodo(e)
        //e.target : 이벤트가 발생한 요소.
    })
}


const add = document.querySelector('#add')
add.addEventListener('click',function(){
    const input = document.querySelector('#todoValue')
    if(input.value === ""){
        alert('값을 입력하세요')
    }else{
        const checkbox = document.createElement('input')
        const listNode = document.querySelector('#list')
        const button = document.createElement('button')
        Createli()

        checkbox.type = 'checkbox'
        liNode.append(checkbox)
        liNode.append(input.value)
        liNode.append(button)
        button.append('delete')
        listNode.append(liNode)
        
        button.addEventListener('click',function(e){
            removeTodo(e)
        })
    }
})

function removeTodo(e){
    e.target.parentNode.remove()
}

