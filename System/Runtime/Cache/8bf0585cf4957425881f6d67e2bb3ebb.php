<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="__PUBLIC__/css/style.css" rel="stylesheet" />
<link href="__PUBLIC__/css/system.css" rel="stylesheet" />
</head>
<body>
<!-- <TABLE id="checkList" class="list" cellpadding=0 cellspacing=0 >
<tr><td height="5" colspan="5" class="topTd" ></td></tr>
<TR class="row" ><th colspan="3" class="space">系统信息</th></tr>
<?php if(is_array($info)): $i = 0; $__LIST__ = $info;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><TR class="row" onmouseover="over()" onmouseout="out()" onclick="change()" ><TD width="15%"><?php echo ($key); ?></TD><TD><?php echo ($v); ?></TD></TR><?php endforeach; endif; else: echo "" ;endif; ?>
<tr><td height="5" colspan="5" class="bottomTd"></td></tr>
</TABLE> -->
<ul class="system-info">
	<?php if(is_array($info)): $i = 0; $__LIST__ = $info;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><li><div class="info"><?php echo ($key); ?></div><div class="value"><?php echo ($v); ?></div></li><?php endforeach; endif; else: echo "" ;endif; ?>
</ul>
</body>
</html>