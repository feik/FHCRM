<?php
class SupplierAction extends Action{
	public function read(){
		$Supplier = M('Supplier');
		$data = $Supplier->select();
		$this->ajaxReturn($data,'json');
	}
}