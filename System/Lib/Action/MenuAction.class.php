<?php 
class MenuAction extends Action{
	public function product(){
		$menu = "{
			children: [
				{
					text: '产品分类',
					leaf: true,
					xtypeClass: 'productcategoryList'
				},
				{
					text: '产品列表',
					leaf: true,
					xtypeClass: 'productList'
				}
				]}";
		echo $menu;
	}
	public function user(){
		$data = "{
			children: [
				{
					text: '用户列表',
					leaf: true,
					xtypeClass: 'userList'
				},
				{
					text: '用户类型',
					leaf: true,
					xtypeClass: 'userGroup'
				},
				{
					text: '禁用列表',
					leaf: true,
					xtypeClass: 'bannedUser'
				}
			]
		}";
		echo $data;
	}
	public function customer(){
		$data = "{
			children: [
				{
					text: '国内客户',
					leaf: true,
					xtypeClass: 'customerList'
				},
				{
					text: '海外客户',
					leaf: true,
					xtypeClass: 'listAbroad'
				}
			]
		}";
		echo $data;
	}
}