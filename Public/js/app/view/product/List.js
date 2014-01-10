Ext.define('app.view.product.List',{
	extend:	'Ext.grid.Panel',
	alias: 'widget.productList',
	id: 'id',
	title: '商品管理',
	store: 'Product',
	tbar:[
		{xtype:'button', text: '新增', action: 'add', iconCls: 'Add'},
		{xtype:'tbseparator'},
		{xtype:'button', text: '删除', itemId: 'deleteProduct', action: 'delete', iconCls: 'Delete'},
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
	        {header: '序号',  dataIndex: 'id', flex: 1, hidden: true},
	        {header: '商品图片', dataIndex: 'picture', flex: 1, align: 'center', renderer: function(value,meta,record){return '<img width=50 height=50 src=Uploads/'+value+'>';}},
	        {header: '商品名称',  dataIndex: 'name',  flex: 1, minWidth: 400},
	        {header: '商品编号',  dataIndex: 'sku',  flex: 1},
	        {header: '库存', dataIndex: 'stock', flex: 1},
	        {header: '商品描述', dataIndex: 'content', flex: 1, hidden: true},
	        {header: '重量', dataIndex: 'weight', flex: 1},
	        {header: '采购价格', dataIndex: 'p_price', flex: 1},
	        {header: '零售价格', dataIndex: 'r_price', flex: 1},
	        {header: '发布平台', dataIndex: 'pid', flex: 1},
	        {header: '上架状态', dataIndex: 'status', flex: 1},
	        {header: '日期', dataIndex: 'date', flex: 1}
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
        this.store.load();
        this.callParent(arguments);
    }
	
});