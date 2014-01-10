Ext.define('app.store.menu.User',{
	extend: 'Ext.data.TreeStore',
    proxy: {
	    type: 'ajax',
	    url: 'Menu/user',
	    noCache : false,
	    actionMethods: {
	        read: 'GET'
	    }
	}
})