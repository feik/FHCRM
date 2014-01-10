<?php
class CustomerAction extends Action{
	public function read(){
		$Customer = M('Customer_abroad');
		$start = $_GET['start'];
		$limit = $_GET['limit'];
        $data['total'] = $Customer->count();
        $data['success'] = true;
        $data['message'] = '读取数据';
        $data['data'] = $Customer->order('id DESC')->limit($start,$limit)->select();
        $this->ajaxReturn($data,'JSON');
	}
	/*删除客户数据*/
	public function delete(){
		$Customer = M('Customer_abroad');
		$info = $_REQUEST['data'];
		if($info){
			$result = json_decode($info);
			$id = $result->id;
			$Customer->where("id=$id")->delete();
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
}