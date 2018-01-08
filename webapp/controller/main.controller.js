/* global app: true */

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SYSUI5.controller.main", {
		onInit: function() {
			sap.ui.localResources("i18n");
			
			var oResourceModel = new sap.ui.model.resource.ResourceModel({
				bundleName: "i18n.i18n"
			});
			
			sap.ui.getCore().setModel(oResourceModel, "i18n");
		},
		
		onPressGoToServiceLayer: function() {
			app.to("serviceLayerPage");
		}
	});
});