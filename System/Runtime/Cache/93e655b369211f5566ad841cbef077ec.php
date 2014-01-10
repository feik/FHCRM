<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>通用后台管理系统</title>
<link href="__PUBLIC__/lib/extjs/resources/css/ext-all-gray.css" rel="stylesheet" />
<link href="__PUBLIC__/css/style.css" rel="stylesheet" />
<link href="__PUBLIC__/css/icon.css" rel="stylesheet" />
<script src="__PUBLIC__/lib/extjs/bootstrap.js"></script>
<script src="__PUBLIC__/lib/extjs/locale/ext-lang-zh_CN.js"></script>
<?php
 if(!isset($_SESSION['username']) || $_SESSION['username']==''){ echo '<link href="__PUBLIC__/css/login.css" rel="stylesheet" />'; echo '<script src="__PUBLIC__/js/login.js"></script>'; }else{ echo '<script src="__PUBLIC__/js/app.js"></script>'; } ?>
</head>
<body>

</body>
</html>