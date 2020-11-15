<?php
$conn = mysqli_connect(
    '127.0.0.1',
    'root',
    'root',
    'todoList'
);

$sql = "UPDATE todo SET completed={$_GET['completed']} WHERE id={$_GET['id']}";
$result = mysqli_query($conn, $sql);

if($result == false){
    echo mysqli_error($conn);
}
echo "수정 성공";
?>