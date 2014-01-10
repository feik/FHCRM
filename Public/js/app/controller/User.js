Ext.define('app.controller.User',{
	extend: 'Ext.app.Controller',
    stores: [
    	'User',
    	'UserGroup'
    ],
    models: ['User'],
	views:[
		'user.List',
		'user.Create'
		
	],
    init: function () {
        this.control(
        	{
				'userList button[action=add]':{
                        click: this.addUser
                }
            });
    },
    addUser: function(button){
        var view = Ext.widget('userCreate');
        view.down('form');
    }
});