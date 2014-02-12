Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath({
	'Ext.ux':'Public/lib/extjs/ux'
});
Ext.require([
	'Ext.ux.form.CkEditor'
]);
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