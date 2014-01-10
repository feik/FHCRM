Ext.define('app.store.CustomerAbroad',{
	extend: 'Ext.data.Store',
	model: 'app.model.CustomerAbroad',
	autoLoad: false,
	pageSize: 10,
	proxy: {
		type: 'ajax',
		api: {
			read: 'Customer/read',
			update: 'Customer/update',
			create: 'Customer/create',
			destroy: 'Customer/delete'
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
})