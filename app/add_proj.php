<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.11.2015
 * Time: 14:21
 */
// Getting params from form

$name = $_POST['projectName'];
$data = array();


if ($name === '') {
    $data['status'] = 'error';
    $data['text'] = '��������� ���!';
} else {
    $data['status'] = 'OK';
    $data['text'] = '��������� ���!';
}

header("Content-Type: application/json");
echo json_encode($data);

exit;

?>