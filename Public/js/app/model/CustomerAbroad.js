Ext.define('app.model.CustomerAbroad',{
	extend: 'Ext.data.Model',
	idProperty: 'id',
	fields: [
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'country', type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'phone', type: 'string'}
	]
})