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
        const del = document.createTextNode('delete')
        const todoLi = document.createTextNode(input.value)
        checkbox.type = 'checkbox'
        
        liNode.appendChild(checkbox)
        liNode.appendChild(todoLi)
        liNode.appendChild(button)
        button.appendChild(del)
        listNode.appendChild(liNode) 
        
        button.addEventListener('click',function(e){
            e.target.parentNode.remove()
        })
    }
})



 // const txtVal = document.querySelector('#txtVal')
        // console.log(txtVal)
        // txtVal.addEventListener('#add', function(event){

        //     if(document.getElementById('txtVal').value.length === 0){
        //         alert('검색어를 입력해주세요.');
        //         event.preventDefault();
        //     }else{
            // function checkForBlank() {
            //     if(document.getElementById('txtVal').value == "") {
            //         alert('추가할항목을 입력해주세요');
            //     return false;
            //     }
            // }
        
            
    
            // var add = document.querySelector("#add")
            // console.log(add)
            // add.onclick = function() {
            //     const list = document.getElementById('list')
            //     const li = document.createElement('li')
            //     const checkbox = document.createElement('input') //기본 타입은 text로 된다!
            //     checkbox.type = 'checkbox'
            //     const text = document.createTextNode('TodoList')
            //     const button = document.createElement('button')
            //     const del = document.createTextNode('delete')
            //     li.appendChild(checkbox)
            //     li.appendChild(text)
            //     li.appendChild(button)
            //     button.appendChild(del)
            //     list.appendChild(li)
            // }
    
    
            // const deleteThis = document.querySelector('.delete')
            // console.log(deleteThis)
            // const todo = document.querySelector('.todo')
            // console.log(todo)
    
            // deleteThis.addEventListener('click', function() {
            //     alert('delete?')
            //     todo.remove()
            // })