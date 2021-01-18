<?php
 // Отправка формы в телеграм группу
$name = $_POST['name']; //Имя
$phone = $_POST['phone']; //Номер
$email = $_POST['email']; //Почта
$message = $_POST['message']; //Сообщение
$token = "1478846595:AAH9WFw5g3QjFpmG8XeJR0vTB-tDyjh9l3c"; 
$chat_id = "-1001413694969"; // id группы куда будет отправляться данные
$arr = array(
    'Имя клиента: ' => $name,
    'Номер: ' => $phone, // Текста данных
    'Почта: ' => $email,
    'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram) {
  header('Location: thanksfor.html');
}
else {
  echo 'error';
}

?>
