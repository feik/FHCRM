Ext.define('app.view.Viewport',{
	extend: 'Ext.Viewport',
	layout: 'fit',
	requires: [
		'app.view.layout.Header',
		'app.view.layout.Sidebar',
		'app.view.layout.Footer',
	    'app.view.layout.Main'
	],
	initComponent: function(){
		Ext.apply(this,{
			layout:'border',
			items:[
				Ext.create('app.view.layout.Header'),
				Ext.create('app.view.layout.Sidebar'),
				Ext.create('app.view.layout.Footer'),
				Ext.create('app.view.layout.Main')
			]
		});
		this.callParent(arguments);
	}
});