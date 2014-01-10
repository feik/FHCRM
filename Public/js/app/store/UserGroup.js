Ext.define('app.store.UserGroup',{
	extend: 'Ext.data.Store',
	model: 'app.model.UserGroup',
	idProperty: 'user_group_id',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'User/usergroup',
		reader: {
			type: 'json'
		}
	}
})