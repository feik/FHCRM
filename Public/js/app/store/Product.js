Ext.define('app.store.Product',{
	extend: 'Ext.data.Store',
	model: 'app.model.Product',
	autoLoad: false,
	pageSize: 10,
	proxy:{
		type: 'ajax',
		api: {
			read: 'Product/read',
			update: 'Product/update',
			create: 'Product/create',
			destroy: 'Product/delete'
		},
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success'
		},
		writer: {
			type: 'json',
			root: 'data',
			encode: true
		}
	}
});