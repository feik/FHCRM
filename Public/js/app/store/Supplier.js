Ext.define('app.store.Supplier',{
	extend: 'Ext.data.Store',
	model: 'app.model.Supplier',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'Supplier/read',
		reader: {
			type: 'json'
		}
	}
	
});