<?php
class MemberAction extends Action{
	public function login(){
		$this->display();
	}
	public function doLogin(){
		$User = M('User');
		$where['username'] = $_POST['username'];
		$where['password'] = md5($_POST['password']);
		$record = $User->field('uid')->where($where)->find();
		if($record){
			$_SESSION['username'] = $where['username'];
			$_SESSION['id'] = $record['uid'];
			$result['success'] = true;
			$result['msg'] = '登陆成功';
			$this->ajaxReturn($result,'JSON');
		}else{
			$result['success'] = false;
			$result['msg'] = '用户名或密码错误';
			$this->ajaxReturn($result,'JSON');
		}
	}
	public function doLogout(){
		$_SESSION=array();
		if(isset($_COOKIE[session_name()])){
			setcookie(session_name(),'',time()-1,'/');
		}
		session_destroy();
		$result['success'] = true;
		$this->ajaxReturn($result,'JSON');
	}
}