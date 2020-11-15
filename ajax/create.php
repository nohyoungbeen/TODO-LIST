<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'todoList'
);

$sql = "INSERT INTO todo(title) VALUES ('{$_GET["todo"]}')";
$result = mysqli_query($conn, $sql);

if($result == false){
    echo mysqli_error($conn);
}
$id = mysqli_insert_id($conn);
echo $id;
/*
$returnData = [];
while($row = mysqli_fetch_array($result)) {
    array_push($returnData, $row);//$row가 여러개의 행이므로 배열으로 출력을하기 위해 returnData=[]; 배열로 출력이 필요?
    //array_push(배열(데이터)을 저장할 공간, row 데이터)
//print_r($row);
}
echo json_encode($returnData);//row를 가지고 []로 출력?
                            //json_encode json형식으로 타입배열을 문자로 만들어주는 함수
//print_r($returnData);
*/




?>