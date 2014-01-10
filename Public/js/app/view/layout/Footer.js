Ext.define('app.view.layout.Footer',{
	extend:'Ext.panel.Panel',
	initComponent: function(){
		Ext.apply(this,{
			region:'south',
			split: true,
			cls:'footer',
			height: 20,
			html:'<p>Copyright © 1998 - 2013 Tencent. All Rights Reserved</p>'
		});
		this.callParent(arguments);
	}
});