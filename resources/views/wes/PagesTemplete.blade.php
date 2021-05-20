<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php echo $pages_title; ?></title>
</head>
<body>
<div class="flex-center position-ref full-height">
    <?php echo $pages_content; ?>
</div>
</body>
</html>
