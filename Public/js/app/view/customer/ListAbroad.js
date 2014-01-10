Ext.define('app.view.customer.ListAbroad',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.listAbroad',
	title: '客户管理',
	store: 'CustomerAbroad',
	tbar: [
		{xtype: 'button', text: '新增', action: 'add',iconCls: 'Add'},
		{xtype:'tbseparator'},
		{xtype:'button', text: '删除', itemId: 'deleteCustomer', action: 'delete', iconCls: 'Delete'},
		{xtype: 'tbseparator'},
		{xtype: 'button', text: '刷新', handler: function(){
			this.onRefresh;
		}},
		{xtype: 'tbfill' },
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
					text: '搜索',
					iconCls:'Zoom'
				}
			]
		}
	],
	initComponent: function(){
		this.columns = [
			{header: '序号', dataIndex: 'id', flex: 1, hidden: true},
			{header: '姓名', dataIndex: 'name', flex:1},
			{header: '国家', dataIndex: 'country', flex:1},
			{header: 'E-mail', dataIndex: 'email', flex:1},
			{header: '电话号码', dataIndex: 'phone', flex:1},
			{
				xtype: 'actioncolumn',
				width: 40,
				align: 'center',
				items: [
					{
						icon: 'http://cdn.sencha.io/ext-4.0.2a/examples/restful/images/delete.png',
						tooltip: '删除',
                        handler: function (grid, rowIndex, colIndex) {
                        	grid.getStore().removeAt(rowIndex);
                        }
					}
				]
			}
		];
		this.callParent(arguments);
	},
	onRefresh: function() {
    	this.getStore().load();
  	},
	onRender: function(){
		this.store.load();
		this.callParent(arguments);
	}
})