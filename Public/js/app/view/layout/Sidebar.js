Ext.define('app.view.layout.Sidebar',{
	extend: 'Ext.panel.Panel',
	region: 'west',
	title: '管理菜单',
	xtype: 'sidebar',
	iconCls: 'Sitemap',
	split: true,
	collapsible: true,
	width:180,
	bbar: [
		{
			text: '系统菜单',
			iconCls: 'Cog',
			menu: [
				{
					text: '系统信息',
					iconCls: 'Information',
					handler: function(){
						Ext.create('Ext.window.Window',{
							title: '关于-未来客户关系管理系统',
							width: 750,
							height: 400,
							bodyStyle:{
								background:'#fff',
								padding:'10px'
							},
							html: '<h1>通用后台管理系统V1.0介绍</h1>'
						}).show();
					}
				},
				{
					text: '修改密码',
					iconCls: 'Key'
				},
				{
					text: '退出登陆',
					iconCls: 'Stop',
					handler: function(){
						Ext.Ajax.request({
							url: 'Member/doLogout',
							success: function(action){
								if(Ext.decode(action.responseText.success=true)){
									window.location="/";
								}
							}
						});
					}
				}
			]
		}
	],
	layout: {
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
	},
	items: [
		{
			title: '产品管理',
			xtype: 'treepanel',
			iconCls: 'Cmy',
			rootVisible: false,
			split: true,
			collapsible: true,
	        store: 'app.store.menu.Product'
		},
		{
			title: '客户管理',
			xtype: 'treepanel',
			iconCls: 'Usersuit',
			rootVisible: false,
			split: true,
			collapsible: true,
			store: 'app.store.menu.Customer'
		},
		{
			title: '菜单管理',
			iconCls: 'Folderwrench',
			html: 'Panel content!'
		},
		{
			title: '用户管理',
			xtype: 'treepanel',
			iconCls: 'Usergray',
			rootVisible: false,
			split: true,
			collapsible: true,
	        store: 'app.store.menu.User'
		},
		{
			title: '参考资料',
			xtype: 'treepanel',
			iconCls: 'Usergray',
			rootVisible: false,
			split: true,
			collapsible: true,
	        store: 'app.store.menu.User'
		}
	]
});