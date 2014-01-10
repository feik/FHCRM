<?php
class UserAction extends Action{
	public function read(){
		$User = M('User');
		$start = $_GET['start'];
		$limit = $_GET['limit'];
        $data['total'] = $User->count();
        $data['success'] = true;
        $data['message'] = '读取数据';
        $data['data'] = $User->order('uid DESC')->limit($start,$limit)->select();
        $this->ajaxReturn($data,'JSON');
	}
	public function create(){
		$User = M('User');
		$info = $_REQUEST['data'];
			if($info){
			$result = json_decode($info);
			$source['username'] = $result->username;
			$source['ctime'] = date('Y-m-d');
			$User->add($source);
			$data['success'] = true;
			$data['message'] = '添加成功';
			$uid = mysql_insert_id();
			$data['data'] = $User->where("uid=$uid")->find();
			$this->ajaxReturn($data,'JSON');
		}else{
			$data['success'] = false;
			$data['message'] = '添加失败';
			$data['data'] = '';
			$this->ajaxReturn($data,'JSON');
		}
	}
	
	public function delete(){
		$User = M('User');
		$info = $_REQUEST['data'];
		if($info){
			$result = json_decode($info);
			$uid = $result->uid;
			$User->where("uid=$uid")->delete();
			$data['success'] = true;
			$data['message'] = '删除成功';
			$data['data'] = '';
			$this->ajaxReturn($data,'JSON');
		}else{
			$data['success'] = false;
			$data['message'] = '删除失败';
			$data['data'] = '';
			$this->ajaxReturn($data,'JSON');
		}
	}
	public function update(){
		$User = M('User');
		$info = $_REQUEST['data'];
		if($info){
			$result = json_decode($info);
			$uid = $source['uid'] =$result->uid;
			$source['username'] = $result->username;
			$User->where("uid=$uid")->save($source);
			$data['success'] = true;
			$data['message'] = '修改成功';
			$data['data'] = $User->where("uid=$uid")->find();
			$this->ajaxReturn($data,'JSON');
		}else{
			$data['success'] = false;
			$data['message'] = '修改失败';
			$data['data'] = '';
			$this->ajaxReturn($data,'JSON');
		}
	}
	public function usergroup(){
		$UserGroup = M('User_group');
		$data = $UserGroup->select();
		$this->ajaxReturn($data,'json');
	}
}