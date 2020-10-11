const add = document.querySelector('#add')
//index.html 파일의  <button id="add">Add</button> 파일을 불러와 js파일에서 사용할 수 있도록 어딘가에 존재하게한다
const input = document.querySelector('#todoValue')
//index.html 파일의  <input type="text" id="todoValue">를 아이디명(#todoValue)으로 불러와 어딘가에 존재하게한다.delete

//밑의 createTodo()는 ul안의 li(list) 그리고 button 또 그안에 삽입되는 버튼위의 text를 불러와서 만들어준후 각 태그가 필요한 자리에 넣어준다.
//하지만 이런 태그를 필요할때마다 만들어주려면 번거럽기 때문에 하나의 코드에 압축시켜 사용할때는 그 압축된 제목만써서 필요한 태그와 버튼이 생성되게 해준다
function createTodo(){
    const ul = document.querySelector('#list')//index.html에 <ul id="list">를 querySelector를 써서 id명인 ('#list')로 불러와서 ul이란 변수명에 할당시킴.
    const li = document.createElement('li')//li를 createElement를 써서 생선시켜준후 li란변수에 할당을 시켜준다 그리고 어딘가에 존재하게함.
    const button = document.createElement('button') //button을 createElement로 생성을 시켜준후 button이란 변수파일을 만들어 할당시켜준다.
    ul.append(li) //위에 li의 변수에 할당시켜준 li을 ul의 안쪽에 넣어 <ul id="list"> <li> </li> </ul>이렇게 되게한다.
    button.append("delete")//button안에 delete란 텍스트를 넣어준다.
    li.innerHTML = `<input type="checkbox">${input.value}` //타입을 input "text"에서 checkbox로 바꿔줌. 그리고 $(input.vlaue)를 통해 검색어를 받는다.
    li.append(button)//list의 안에 위에 생성된 delete를 = button을 넣어준다 현재 li는 <li><button></button>
    //                                                                                      <input>><li/>가 생성되어있음
    button.addEventListener('click', remove)//버튼을 눌렀을때 삭제가 되는 곳인데 긴문장을 함수 function으로 써서 짧게 해놓았다.
}


add.addEventListener('click', function(){
    if(input.value === ""){// =는 할당이니 조심! ===쓰는 습관!! 의미는 만약 value가 ==="" 비어 있다면 
        alert("값을 입력하세요. ")//alert실행되는 목록이다 .
    }else{//만약 if가아니라면 else가 실행됨
    createTodo()//이함수 안에는 많은 코드가 들어가있다. <ul><li></li><button></button></ul>이 생성되어있고 value를 받아 자기가 원하는 글으 글등록한다
    }
})

function remove(e){
    e.target.parentNode.remove()
    //remove()로 타겟이 된 태그의 바로 부모태그를 없앤다
    //만약 e.target.parantNode를 써서<li><button></button></li>에 button.addEventListener('click', remove)를 써서 버튼을 눌러주면 그 부모코드인 li전체가 살아진다.

}