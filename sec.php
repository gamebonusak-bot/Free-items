<?php
// check_email.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config.php';

$email = $_POST['email'] ?? '';
$response = ['valid' => false, 'message' => ''];

if (empty($email)) {
    $response['message'] = 'ایمیل را وارد کنید';
    echo json_encode($response);
    exit;
}

// 1. بررسی فرمت
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'فرمت ایمیل اشتباه است';
    echo json_encode($response);
    exit;
}

$domain = explode('@', $email)[1];

// 2. بررسی دامنه‌های معروف
global $VALID_DOMAINS;
if (in_array(strtolower($domain), $VALID_DOMAINS)) {
    $response['valid'] = true;
    $response['message'] = 'دامنه معتبر';
    echo json_encode($response);
    exit;
}

// 3. بررسی MX Record (بررسی واقعی)
if (checkdnsrr($domain, 'MX')) {
    $response['valid'] = true;
    $response['message'] = 'دامنه معتبر (MX موجود)';
    echo json_encode($response);
    exit;
}

// 4. بررسی A Record
if (checkdnsrr($domain, 'A')) {
    $response['valid'] = true;
    $response['message'] = 'دامنه معتبر (A موجود)';
    echo json_encode($response);
    exit;
}

// 5. اگر هیچ کدام نبود
$response['message'] = 'دامنه ایمیل معتبر نیست';
echo json_encode($response);
exit;
?>