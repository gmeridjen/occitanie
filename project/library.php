<?php

$components = array(
    "header" => "components/header.php",
    "footer" => "components/footer.php"
);

foreach ($components as $name => $link) {
   echo ('<p><a href="' . $link . '">' . $name . '</a></p>');
}