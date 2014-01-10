Ext.define('app.store.User', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    autoSync: true,
    model: 'app.model.User',
    idProperty: 'uid',
	proxy:{
		type: 'ajax',
		api: {
			read: 'User/read',
			update: 'User/update',
			create: 'User/create',
			destroy: 'User/delete'
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