const deletes = document.querySelectorAll('.delete')

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
        const button = document.createElement('button')
        const liNode = document.createElement('li')

        checkbox.type = 'checkbox'
        liNode.append(list[i])
        liNode.append(checkbox)
        liNode.append(input.value)
        liNode.append(button)
        button.append('delete')
        listNode.append(liNode)
        }
        button.addEventListener('click',function(e){
            e.target.parentNode.remove()
        })
})