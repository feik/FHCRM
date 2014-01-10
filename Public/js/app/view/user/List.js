Ext.define('app.view.user.List',{
	extend:'Ext.grid.Panel',
	alias : 'widget.userList',
	title: '用户管理',
	store: 'User',
	tbar:[
		{
			xtype: 'toolbar',
			border: false,
			items: [
				{
					xtype: 'textfield',
					emptyText: '输入搜索关键字...'
				},
				{
					xtype: 'button',
					text: '查找',
					iconCls:'Zoom'
				}
			]
		},
		{xtype: 'tbseparator' },
		{xtype:'button', text: '添加', action: 'add', iconCls: 'Add'}
    ],
    initComponent: function(){
	    this.columns = [
	        {header: '序号',  dataIndex: 'id', flex: 1, hidden: true},
	        {header: '用户名', dataIndex: 'username', flex: 1},
	        {header: '电子邮箱',  dataIndex: 'email',  flex: 1},
	        {header: '用户类型',  dataIndex: 'user_group_id',  flex: 1},
	        {header: '注册日期',  dataIndex: 'ctime',  flex: 1},
	        {header: '账号状态',  dataIndex: 'status',  flex: 1},
			{
        		xtype:'actioncolumn', 
		        header: '编辑',
		        width: '20',
		        align: 'center',
		        items: [{
		          iconCls: 'Applicationedit',
		          tooltip: '编辑',
		          handler: function(grid, rowIndex, colIndex) {
		            var rec = grid.getStore().getAt(rowIndex);
		            
		            this.fireEvent('edit', rec);
		          },
		          scope: this
		        }]
      		},
			{
        		xtype:'actioncolumn', 
		        header: '禁用',
		        width: '20',
		        align: 'center',
		        items: [{
		          iconCls: 'Applicationosxkey',
		          tooltip: '禁用',
		          handler: function(grid, rowIndex, colIndex) {
		            var rec = grid.getStore().getAt(rowIndex);
		            
		            this.fireEvent('lock', rec);
		          },
		          scope: this
		        }]
      		},
			{
        		xtype:'actioncolumn', 
		        header: '删除',
		        width: '20',
		        align: 'center',
		        items: [{
		        iconCls: 'Applicationdelete',
		        tooltip: '删除',
				handler: function(grid, rowIndex, colIndex) {
					var record = grid.getStore().getAt(rowIndex);
					Ext.MessageBox.confirm('警告','确定删除该用户吗?',function(btn){
					if(btn == 'yes'){
						grid.getStore().remove(record);
					}
					});
				},
		          scope: this
		        }]
      		}
	    ];
	    this.callParent(arguments);
    },
    dockedItems: [{
	    xtype: 'pagingtoolbar',
	    store: 'User',
	    dock: 'bottom',
	    displayInfo: true
    }],
    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    }
	
});