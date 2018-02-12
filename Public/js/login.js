Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        id: 'loginWindow',
        title: '通用后台管理系统',
        width: 360,
        layout: 'fit',
        closable: false,
        iconCls: 'Userb',
        items: {
            xtype: 'form',
            layout: 'hbox',
            bodyPadding: 10,
			items: [
				{
					xtype: 'image',
					src: 'http://www.sencha.com/img/20110215-feat-html5.png',
					width: 150,
					height: 150,
					margins: '0 10 0 0',
					border: false
				},
				{
					width: 166,
					border: false,
					defaults: {
						labelWidth: 30,
						labelStyle: 'padding: 0 0 8px 0'
					},
					items: [{
						xtype: 'textfield',
		                fieldLabel: '用户名',
		                name: 'username',
		                labelAlign: 'top',
		                allowBlank: false
		            },
		            {
		            	xtype: 'textfield',
		                fieldLabel: '密码',
		                inputType: 'password',
		                name: 'password',
		                labelAlign: 'top',
		                allowBlank: false
		            },
		            {
		            	xtype: 'checkboxgroup',
		            	fieldLabel: '记住',
		            	items: [
		            		{ boxLabel: '账号', name: 'remeber', inputValue: '1',checked: true}
		            	]
		            }
		            ]
				}
			],
            buttons: [
            {
                text: '登陆',
                formBind: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    var win = this.up('window');
                    //验证合法后使用加载进度条
                    if (form.isValid()) {
	                    form.doAction('submit',{
	                    	waitMsg:'请稍后',
                            waitTitle:'正在验证登录',
	                    	url: './Member/doLogin',
	                    	success: function(){
	                    		win.hide();
	                    		window.location = './';
	                    	},
	                    	failure: function(form,action){
	                    		if(action.failureType == 'server'){
	                    			obj = Ext.decode(action.response.responseText);
	                    			Ext.Msg.alert('登陆失败!', obj.msg);
	                    		}else{
	                    			console.log(action);
	                    			Ext.Msg.alert('警告!', '服务器出错 : ' + action.response.responseText);
	                    		}
	                    		form.reset();
	                    	}
	                    });
                    }
                }
            },
            {
                text: '重置',
                handler: function() {
                    this.up('form').getForm().reset();
                }
            }
            ]
        }
    }).show();
});
