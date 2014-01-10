Ext.define('app.model.Supplier',{
	extend: 'Ext.data.Model',
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