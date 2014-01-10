Ext.define('app.controller.Product',{
	extend: 'Ext.app.Controller',
	stores: [
		'Product'
	],
	views:[
		'product.List',
		'product.Edit',
		'product.Create'
		
	],
	init: function(){
		this.control({
			'productList': {
                itemdblclick: this.editProduct,
                selectionchange: this.selectProduct
            },
			'productList button[action=add]': {
				click: this.newProduct
			},
			'productCreate button[action=save]': {
				click: this.createProduct
			},
			'productList button[action=delete]': {
                click: this.deleteProduct
            },
            'productEdit button[action=save]': {
                click: this.updateProduct
            }
		});
	},
    selectProduct: function(selModel, selections) {
        var delBut = Ext.ComponentQuery.query('#deleteProduct')[0];
        delBut.setDisabled(false);
    },
    
    editProduct: function(grid, record) {
        var view = Ext.widget('productEdit');
        view.down('form').loadRecord(record);
        
    },
	/*添加商品*/
	newProduct: function(button) {
        var view = Ext.widget('productCreate');
        view.down('form');
    },
    /*保存商品*/
    createProduct: function(button){
        var win    = button.up('window');
        form   = win.down('form');
        if(form.isValid()){
	        record = form.getRecord();
	        values = form.getValues();
	        this.getProductStore().add(values);
	        win.close();
	        this.getProductStore().sync();        	
        }
    },
    /*删除商品*/
    deleteProduct: function(button){
        var viewList = Ext.ComponentQuery.query('#id')[0];
        var selection = viewList.getSelectionModel().getSelection()[0];
        if(selection)
        {
            this.getProductStore().remove(selection);
            this.getProductStore().sync();
        }
    },
    /*修改商品*/
    updateProduct: function(button){
        var win    = button.up('window');
        form   = win.down('form');
        record = form.getRecord(),
        values = form.getValues();
        if (form.isValid()) {
            record.set(values);
            win.close();
            this.getProductStore().sync();
        }    	
    }
});