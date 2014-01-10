Ext.define('app.view.productcategory.List',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.productcategoryList',
	title: '商品分类',
	store: 'ProductCategory',
	tbar: [
		{
			xtype: 'button',
			text: '新增',
			action: 'add',
			iconCls: 'Add'
		},
		{
			xtype:'tbseparator'
		},
		{
			xtype: 'button',
			text: '删除',
			action: 'delete',
			iconCls: 'Delete'
		},
		{
			xtype: 'button',
			text: '刷新',
			action: 'refesh',
			iconCls: 'Reload'
		}
	],
	initComponent: function(){
		this.columns = [
			{header: '序号', dataIndex: 'id', flex: 1, hidden: true},
			{header: '分类名称', dataIndex: 'name', flex: 1},
			{header: '发布', dataIndex: 'publish', flex: 1},
			{header: '排序', dataIndex: 'sort', flex: 1},
			{header: '操作'}
		];
		this.callParent(arguments);
	},
    dockedItems: [{
	    xtype: 'pagingtoolbar',
	    store: 'Product',
	    dock: 'bottom',
	    displayInfo: true
    }],
    onRender: function(){
        //this.store.load();
        this.callParent(arguments);
    }
})