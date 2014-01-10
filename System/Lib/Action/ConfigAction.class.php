<?php
class ConfigAction extends CommonAction{
	public function ip(){
		import('ORG.Net.IpLocation');// 导入IpLocation类
		$Ip = new IpLocation(); // 实例化类
		$location = $Ip->getlocation('218.79.93.194'); // 获取某个IP地址所在的位置
		$area = $Ip->getlocation();
		dump($area);
	}
}