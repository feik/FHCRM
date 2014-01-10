Ext.define('app.view.layout.Main',{
	extend: 'Ext.tab.Panel',
	initComponent: function(){
		Ext.apply(this,{
			itemId: 'tabCenter',
			region: 'center',
			activeTab: 0,
			items:[{
				id: 'HomePage',
				title: '首页',
				layout: 'fit',
				html:'<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="Public/main"> </iframe>'
			}]
		});
		this.callParent(arguments);
	}
});