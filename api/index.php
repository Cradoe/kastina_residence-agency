<?php

/**
 * API
 *
 * required headers
 */
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Max-Age: 86400');
define('BACKEND_ROOT', '../backend/');



require_once BACKEND_ROOT . "class/class.db.php";
require_once BACKEND_ROOT . "class/class.customer.php";
require_once BACKEND_ROOT . "class/class.general-functions.php";

$db = new DB();
$genFunc = new GeneralFunctions();
$customer = new Customer($db, $genFunc);
$data = json_decode(file_get_contents("php://input"));

if (isset($data) && isset($data->action)) {
    $action = $data->action;

    if ($action == 'registerAccount') {
        echo json_encode(
            $customer->registerAccount($data)
        );
    } elseif ($action === 'login') {

        echo json_encode(
            $customer->login(
                $data
            )
        );
    } elseif ($action === 'checkCardStatus') {
        echo json_encode(
            $customer->checkCardStatus(
                $data->regNo
            )
        );
    } elseif ($action === 'verifyCard') {
        echo json_encode(
            $customer->verifyCard(
                $data->cardRegNo
            )
        );
    } elseif ($action === 'cardRenewalApplication') {
        echo json_encode(
            $customer->cardRenewalApplication(
                $data->cardRegNo
            )
        );
    }
}
