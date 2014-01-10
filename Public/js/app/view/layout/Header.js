Ext.define('app.view.layout.Header',{
	extend: 'Ext.Component',
	initComponent: function(){
		Ext.apply(this,{
			region:'north',
			split: true,
			cls:'header',
			height:30,
			html: '<h1>未来客户关系管理系统</h1>'
		});
		this.callParent(arguments);
	}
});