const todos = ['home', 'work', 'cleanup']
const deletes = document.querySelectorAll('.delete')
const ul = document.querySelector('ul')
for(let i = 0; i < todos.length; i++) {
    const li = document.createElement('li')
    const input = document.createElement('input')
    const button = document.createElement('button')

    input.type = "checkbox"
    li.className = "todo"
    input.className = "check"
    button.className = "delete"

    ul.append(li)
    li.append(input)
    li.append(todos[i])
    li.append(button)
    button.append('delete')
}
for(let i = 0; i < deletes.length; i++){
    deletes[i].addEventListener('click',function(e){
        e.target.parentNode.remove()
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
        const button = document.createEl=ement('button')
        const liNode = document.createElement('li')

        checkbox.type = 'checkbox'
        liNode.append(list[i])
        liNode.append(checkbox)
        liNode.append(input.value)
        liNode.append(button)
        button.append('delete')
        listNode.append(liNode)
        
        button.addEventListener('click',function(e){
            e.target.parentNode.remove()
        })
    }
})