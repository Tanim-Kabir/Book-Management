<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$p3user = (file_get_contents('php://input'));
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "POST":
        $p3user = json_decode( file_get_contents('php://input') );
        $sql = "SELECT SL, Name, PName, PDate, PageNo  FROM books";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $p3user = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($p3user);

        $response = ['status' => 1, 'message' => 'page3 Record created successfully.'];
        break;
}