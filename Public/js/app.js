Ext.Loader.setConfig({enabled:true});
Ext.application({
	name: 'app',
	appFolder: 'Public/js/app',
	autoCreateViewport: true,
	controllers: [
		'Main',
		'Product',
		'ProductCategory',
		'CustomerAbroad',
		'User'
	]
});