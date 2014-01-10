Ext.define('app.store.ProductCategory',{
	extend: 'Ext.data.Store',
	model: 'app.model.ProductCategory',
	autoLoad: false,
	pageSize: 10,
	proxy: {
		type: 'ajax',
		api: {
			read: 'ProductCategory/read',
			update: 'ProductCategory/update',
			create: 'ProductCategory/create',
			destroy: 'ProductCategory/destroy'
		},
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success',
		},
		writer: {
			type: 'json',
			root: 'data',
			encode: true
		}
	}
	
})