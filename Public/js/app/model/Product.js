Ext.define('app.model.Product',{
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'}, 
		{name: 'sku', type: 'string'},
		{name: 'stock', type: 'int'},
		{name: 'content', type: 'string'},
		{name: 'weight', type: 'float'},
		{name: 'p_price', type: 'float'},
		{name: 'r_price', type: 'float'},
		{name: 'picture', type: 'string'},
		{name: 'sid', type: 'int'},
		{name: 'pid', type: 'int'},
		{name: 'status', type: 'int'},
		{name: 'date', type: 'string'}
	]
})