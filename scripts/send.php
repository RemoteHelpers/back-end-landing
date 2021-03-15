<?php

$url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSddzDoonpEDint5lGvz7EA9P2EUhcv-EX4whR7H47AwbchdIA/formResponse";

$utm = $_SERVER["HTTP_REFERER"];

$link = "../thankYouPage.html";


$post_data = array (
 "entry.1017591174" => $_POST['name'],
 "entry.1400607094" => $_POST['email'],
 "entry.775621668" => $_POST['telephone'],
 "entry.902153994" => $utm,
 "draftResponse" => "[null,null,&quot;-3237460348487646028&quot;]",
 "pageHistory" => "0",
 "fbzx" => "-3237460348487646028"
);


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($ch, CURLOPT_POST, 1);

curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

$output = curl_exec($ch);
curl_close($ch);

//перенаправляем браузер пользователя на скачивание оффера по нашей ссылке
header('Location: ' .$link);
?>