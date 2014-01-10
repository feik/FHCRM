Ext.define('app.model.ProductCategory',{
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'publish', type: 'int'},
		{name: 'sort', type: 'int'}
	]
})