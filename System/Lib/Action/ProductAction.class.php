<?php
class ProductAction extends Action{
	/*读取商品数据*/
	public function read(){
		$Product = M('Product');
		$start = $_GET['start'];
		$limit = $_GET['limit'];
        $data['total'] = $Product->count();
        $data['success'] = true;
        $data['message'] = '读取数据';
        $data['data'] = $Product->order('id DESC')->limit($start,$limit)->select();
        $this->ajaxReturn($data,'JSON');
	}
	/*商品图片上传*/
	public function upload(){
		import('ORG.Net.UploadFile');
		$upload = new UploadFile();// 实例化上传类
		$upload->maxSize  = 3145728 ;// 设置附件上传大小
		$upload->allowExts  = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
		$upload->savePath =  'Uploads/';// 设置附件上传目录
		if (!$upload->upload()) {
			echo '{"success": false, "msg": "No Files"}';
		} else {
			$info = $upload->getUploadFileInfo();
			echo '{"success": true, "msg": "'.$info[0]['savename'].'"}';
		}
	}
	/*添加商品资料入库*/
	public function create(){
		$Product = M('Product');
		$info = $_REQUEST['data'];
		if($info){
			$result = json_decode($info);
			$source['name'] = $result->name;
			$randStr = str_shuffle('123456789');
			$rand = substr($randStr,0,6);
			$source['sku'] = $rand;
			$source['stock'] = $result->stock;
			$source['content'] = $result->content;
			$source['weight'] = $result->weight;
			$source['p_price'] = $result->p_price;
			$source['r_price'] = $result->r_price;
			$source['picture'] = $result->picture;
			$source['sid'] = $result->sid;
			$source['pid'] = $result->pid;
			$source['status'] = $result->status;
			$source['date'] = date('Y-m-d');
			$Product->add($source);
			$data['success'] = true;
			$data['message'] = '添加成功';
			$id = mysql_insert_id();
			$data['data'] = $Product->where("id=$id")->find();
			$this->ajaxReturn($data,'JSON');
		}else{
			$data['success'] = false;
			$data['message'] = '添加失败';
			$data['data'] = '';
			$this->ajaxReturn($data,'JSON');
		}
	}
	/*删除商品数据*/
	public function delete(){
		$Product = M('Product');
		$info = $_REQUEST['data'];
		if($info){
			$result = json_decode($info);
			$id = $result->id;
			$Product->where("id=$id")->delete();
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
		$Product = M('Product');
		$info = $_REQUEST['data'];
        if($info){
        	$result = json_decode($info);
        	$id = $source['id'] =$result->id;
        	$source['name'] = $result->name;
			$source['stock'] = $result->stock;
			$source['content'] = $result->content;
			$source['weight'] = $result->weight;
			$source['p_price'] = $result->p_price;
			$source['r_price'] = $result->r_price;
			$source['picture'] = $result->picture;
        	$Product->where("id=$id")->save($source);
        	$data['success'] = true;
        	$data['message'] = '修改成功';
        	$data['data'] = $Product->where("id=$id")->find();
        	$this->ajaxReturn($data,'JSON');
        }else{
        	$data['success'] = false;
        	$data['message'] = '修改失败';
        	$data['data'] = '';
        	$this->ajaxReturn($data,'JSON');
        }
	}
	
	//文件上传
	public function uploadfile(){
		// Required: anonymous function reference number as explained above.
		$funcNum = $_GET['CKEditorFuncNum'] ;
		// Optional: instance name (might be used to load a specific configuration file or anything else).
		$CKEditor = $_GET['CKEditor'] ;
		// Optional: might be used to provide localized messages.
		$langCode = $_GET['langCode'] ;
		
		// Check the $_FILES array and save the file. Assign the correct path to a variable ($url).
		$url = '/path/to/uploaded/file.ext';
		// Usually you will only assign something here if the file could not be uploaded.
		$message = '';
		echo "<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction($funcNum, '$url', '$message');</script>";
	}
}
