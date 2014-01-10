Ext.define('app.store.menu.Product',{
	extend: 'Ext.data.TreeStore',
	proxy: {
		type: 'ajax',
		url: 'Menu/product',
		noCache: false,
		actionMethods: {
			read: 'GET'
		}
	}
})