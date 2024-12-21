sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
 ], (Controller, MessageToast, JSONModel) => {
    "use strict";
 
    return Controller.extend("ui5.genai.controller.App", {
        onInit() {
            //when controller is created,
            //this initial function will be called

            // set data model on view
            const oData = {
               recipient : {
                  name : "World"
               }
            };
            const oModel = new JSONModel(oData);
            //this model is now set on the view
            this.getView().setModel(oModel);
         },
       
        onShowHello() {
          MessageToast.show("Hello World");
       }
    });
 });