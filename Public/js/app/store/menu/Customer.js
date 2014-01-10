Ext.define('app.store.menu.Customer',{
	extend: 'Ext.data.TreeStore',
	proxy: {
		type: 'ajax',
		url: 'Menu/customer',
		noCache: false,
		actionMethods: {
			read: 'GET'
		}
	}
})