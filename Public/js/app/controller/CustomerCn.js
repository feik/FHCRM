Ext.define('app.controller.Customer',{
	extend: 'Ext.app.Controller',
	stores: [
		'Customer'
	],
	views: [
		'customer.List'
	],
	init: function(){
		this.control({
			
		})
	}
})