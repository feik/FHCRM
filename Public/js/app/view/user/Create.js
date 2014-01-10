Ext.define('app.view.user.Create', {
    extend: 'Ext.window.Window',
    alias: 'widget.userCreate',
    title: '添加用户',
    layout: 'fit',
    bodyStyle: 'background:#fff',
    bodyPadding: 20,
    autoShow: true,
    initComponent: function() {
        this.items = [
	        {
	        	xtype: 'form',
	        	id: 'userForm',
	        	width: 350,
	        	autoHeight: true,
	        	border: 0,
			    layout: 'anchor',
			    defaults: {
			        anchor: '100%'
			    },
			    defaultType: 'textfield',
	            fieldDefaults: {
	            	labelAlign: 'right',
	            	labelWidth: 80
	            },
	        	items: [
		        	{
		        		fieldLabel: '用户名',
		        		name: 'username',
		        		allowBlank: false
		        	},
		        	{
		        		fieldLabel: '电子邮箱',
		        		name: 'email',
		        		allowBlank: false
		        	},
		        	{
		        		xtype: 'combo',
		        		fieldLabel: '用户类型',
		        		name: 'usertype',
		        		allowBlank: false
		        	},
		        	{
		        		xtype: 'datefield',
		        		fieldLabel: '注册日期',
		        		name: 'ctime',
		        		allowBlank: false
		        	},
		        	{
		        		xtype: 'fieldcontainer',
		        		fieldLabel: '账号状态',
		        		defaultType: 'radiofield',
		        		layout: 'hbox',
		        		items: [
		        		{
		        			boxLabel: '正常',
		        			name: 'status',
		        			inputValue: 1,
		        			checked: true
		        		},
		        		{
		        			boxLabel: '禁用',
		        			name: 'status',
		        			inputValue: 0
		        		}
		        		]
		        	}
	        	]
	        }
        ];

        this.buttons = [{
            text: '保存',
            action: 'save'
        },
        {
            text: '取消',
            scope: this,
            handler: this.close
        }];

        this.callParent(arguments);
    }
});