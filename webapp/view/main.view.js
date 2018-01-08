sap.ui.jsview("SYSUI5.view.main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.main
	 */
	getControllerName: function() {
		return "SYSUI5.controller.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.main
	 */
	createContent: function(oController) {
		var mainPage = new sap.m.Page({
			title: "{i18n>titleMain}",
			content: [
				new sap.m.Button({
					text: "{i18n>buttonServiceLayer}",
					width: "150px",
					press:[oController.onPressGoToServiceLayer, oController]
				})
				]
		});

		return mainPage;
	}

});