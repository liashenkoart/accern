<?php 

$string = file_get_contents("./seo.json");
$seo = '';
$siteURL='http'.(empty($_SERVER['HTTPS'])?'':'s').'://'.$_SERVER['HTTP_HOST'].'/';

if ($string != false) {
  $json_a = json_decode($string, true);
  if ($json_a !== null) {
    $path = "/";

    if($json_a[$_SERVER['REQUEST_URI']]) {
      $path = $_SERVER['REQUEST_URI'];
    }

    foreach ($json_a[$path] as $key => $value) {
      if($key === "title") {$seo .= '<title>'.$value.'</title>';}
      
      if($key === "meta") {
        foreach ($value as $pk => $pkv) 
        {
          $seo .= '<meta ';
          foreach ($pkv as $property => $property_value) 
          {
            if(strpos($property_value, '.svg') || strpos($property_value, '.png') || strpos($property_value, '.jpg')) {
              $seo .= $property.'="'.$siteURL.'assets/img/'.$property_value.'" id="og"';
            }else {
              $seo .= $property.'="'.$property_value.'" ';
            }
          }
          $seo .='>';
        }
      }
  }
}
}

$p = substr($_SERVER['REQUEST_URI'], 1);

$seo .= '<meta property="og:url" content="'.$siteURL.$p.'">';

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
  <?php echo $seo; ?>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src='https://www.googletagmanager.com/gtag/js?id=UA-173918264-1'></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-173918264-1');
  </script>
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8216779.js"></script>
</head>

<body style="width: 100vw;height: 100vh;overflow: hidden;">
  <div id="loader-bg" style="position: fixed;width:100vw;height:100vh;top:0;left:0;background-color:#ffffff;z-index:999;"></div>
  <div id="app"></div>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <script src="/assets/bundle.js"></script>
</body>

</html>

<?php ?>