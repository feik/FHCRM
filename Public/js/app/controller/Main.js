Ext.define('app.controller.Main',{
	extend: 'Ext.app.Controller',
	stores: [
		'app.store.menu.User',
		'app.store.menu.Product',
		'app.store.menu.Customer'
	],
	views:[
		'app.view.Viewport'
	],
	init: function(){
		this.control({
            'sidebar > treepanel':{
            	afterrender:function(treepanel){
            		treepanel.on('itemclick',function(view,record,item,index){
						if (record.get('leaf')) {
						    var title = treepanel.ownerCt.ownerCt.down('#tabCenter').items.findBy(function(result) {
						        return result.title === record.get('text');
						    });
						    if (!title) {
						        treepanel.ownerCt.ownerCt.down('#tabCenter').add({
						            title: record.get('text') || '未命名标题',
						            closable: true,
						            layout: 'fit',
						            autoDestroy: true,
						            items: {
						                xtype: record.raw['xtypeClass']
						            }
						        }).show();
						    } else {
						        treepanel.ownerCt.ownerCt.down('#tabCenter').setActiveTab(title);
						    }
						
						}
					},this);
            	}
            }
		});
	}
});