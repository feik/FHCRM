Ext.define('app.view.product.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.productEdit',
    title : '编辑商品',
    layout: 'fit',
    bodyStyle: 'background:#fff',
    bodyPadding: 20,
    autoShow: true,
    modal: true,
	onUpload: function () {
	    Ext.getCmp('productForm').submit({
	        url: 'Product/upload',
	        scope: this,
	        success: function (formPanel, action) {
	            var data = Ext.decode(action.response.responseText);
	            console.log("Success: " + data.msg);
	            Ext.getCmp('picture').setValue(data.msg);
	            Ext.Msg.alert('上传成功',data.msg);
	        },
	        failure: function (formPanel, action) {
	            console.log("Failure: " + data.msg);
	            Ext.Msg.alert('上传失败',data.msg);
	        }
	    });
	},
    initComponent: function() {
        this.items = [
	        {
	        	xtype: 'form',
	        	id: 'productForm',
	        	autoHeight: true,
	        	border: 0,
	            fieldDefaults: {
	            	labelAlign: 'right',
	            	labelWidth: 120
	            },
	        	items: [
		        	{
			            xtype: 'fieldset',
			            title: '基本信息',
			            layout: 'column',
			            width: 750,
			            labelSeparator: ' ',
			            items: [{
			                columnWidth: .52,
			                labelSeparator: ' ',
			                border: false,
			                defaults: {
			                    anchor: '100%',
			                    width: 335
			                },
			                items: [{
			                    xtype: 'textfield',
			                    name: 'name',
			                    fieldLabel: '商品名称',
			                    allowBlank: false
			                },
			                {
			                    xtype: 'textfield',
			                    fieldLabel: 'SKU',
			                    name: 'sku',
			                    allowBlank: false,
			                    readOnly: true,
			                    disabled: 'disabled'
			                },
			                {
			                    xtype: 'textfield',
			                    name: 'p_price',
			                    fieldLabel: '采购价格'
			                },
			                {
			                    xtype: 'fieldcontainer',
			                    defaultType: 'radiofield',
			                    fieldLabel: '发布状态',
			                    layout: 'hbox',
			                    items: [{
			                        boxLabel: '上架',
			                        name: 'status',
			                        inputValue: '1',
			                        checked: true
			                    },
			                    {
			                        boxLabel: '下架',
			                        name: 'status',
			                        inputValue: '0'
			                    }]
			                }]
			            },
			            {
			                columnWidth: .47,
			                labelSeparator: ' ',
			                border: false,
			                defaults: {
			                    anchor: '97%',
			                    width: 335
			                },
			                items: [{
			                    fieldLabel: '库存',
			                    xtype: 'numberfield',
			                    name: 'stock'
			
			                },
			                {
			                    fieldLabel: '重量',
			                    xtype: 'textfield',
			                    name: 'weight'
			                },
			                {
			                    xtype: 'textfield',
			                    name: 'r_price',
			                    fieldLabel: '零售价格'
			                },
			                {
			                    xtype: 'checkboxgroup',
			                    fieldLabel: '发布平台',
			                    items: [{
			                        boxLabel: '淘宝网',
			                        name: 'pid',
			                        inputValue: '1'
			                    },
			                    {
			                        boxLabel: '天猫网',
			                        name: 'pid',
			                        inputValue: '2'
			                    }]
			                }]
			            }]
			        },
			        {
			            xtype: 'fieldset',
			            title: '详细信息',
			            layout: 'column',
			            width: 750,
			            items: [{
			                layout: 'hbox',
			                border: 0,
			                items: [{
			                    xtype: 'textfield',
			                    id: 'picture',
			                    name: 'picture',
			                    readOnly: true,
			                    fieldLabel: '上传图片',
			                    width: 335,
			                    margin: '0 8 0 0'
			                },
			                {
			                    xtype: 'filefield',
			                    id: 'uploadPic',
			                    buttonOnly: true,
			                    name: 'uploadPic',
			                    buttonText: '选择图片...',
			                    listeners: {
			                        'change': {
			                            scope: this,
			                            fn: function(field, e) {
			                                this.onUpload();
			                            }
			                        }
			                    }
			                }]
			            },
			            {
/*			                xtype: 'htmleditor',
			                name: 'content',
			                fieldLabel: '商品描述',
			                width: 600,
			                height: 200,
			                margin: '8 0 8 0'*/
			                xtype: 'ckeditor',
			                fieldLabel: '文章内容',
			                labelAlign: 'left',
			                name: 'content',
			                allowBlank: true,
			                CKConfig: {
			                	width: 600,
			                    height: 200,
			                    //如果选择字体样式等的弹出窗口被当前window挡住，就设置这个为一个较大的值
			                    baseFloatZIndex: 99999,
			                    //图片和flash都上传到这里
			                    filebrowserUploadUrl: '/upload4ckeditor'
			                },
			                width: 600,
			                height: 300,
			                margin: '8 0 8 0'
			            }]
			        }
	        	//
	        	]
	        }
        ];

        this.buttons = [
            {
                text: '保存',
                action: 'save'
            },
            {
                text: '取消',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});