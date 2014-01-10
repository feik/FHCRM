Ext.define('app.model.User', {
    extend: 'Ext.data.Model',
	fields: [
		{name: 'uid', type: 'int'},
		{name: 'username', type: 'string'},
		{name: 'ctime', type: 'int'}
	]
});
