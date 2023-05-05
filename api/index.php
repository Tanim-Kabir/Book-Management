<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = (file_get_contents('php://input'));
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "GET":
        $sql = "SELECT * FROM books";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;

    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO books VALUES(null, :firstName, :pName, :pAge, :pageNo, :pDate, :type)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':firstName', $user->firstName);
        $stmt->bindParam(':pName', $user->pName);
        $stmt->bindParam(':pAge', $user->pAge);
        $stmt->bindParam(':pageNo', $user->pageNo);
        $stmt->bindParam(':pDate', $user->pDate);
        $stmt->bindParam(':type', $user->type);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Index Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE users SET name= :name, email =:email, mobile =:mobile, updated_at =:updated_at WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':updated_at', $updated_at);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM users WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;

	case "CALL":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO books (SL, Name, PAge, Type) VALUES(null, :firstName, :pAge, :type)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':firstName', $user->firstName);
        $stmt->bindParam(':pAge', $user->pAge);
        $stmt->bindParam(':type', $user->type);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Index Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
}