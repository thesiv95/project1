<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 05.11.2015
 * Time: 22:27
 */

    // Getting params from form

    $name = $_POST['projectName'];
    $data = array();


    if ($name === '') {
        $data['status'] = 'error';
        $data['text'] = '��������� ���!';
    } else {
        $data['status'] = 'ok';
        $data['text'] = '��������� ���!';
    }

    header("Content-Type: application/json");
    echo json_encode($data);
    exit;

?>