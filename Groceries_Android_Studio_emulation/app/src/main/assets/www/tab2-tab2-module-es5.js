function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      {{titleOfPage}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <h3 class=\"ion-text-center\" *ngIf=\"loadGroceryItems().length === 0\">No Grocery Items are in the list</h3>\n<!-- List of Sliding Items -->\n<ion-list>\n  <ion-item-sliding *ngFor=\"let groceryItem of loadGroceryItems(); let i = index\">\n    <ion-item>\n      <ion-label>{{groceryItem.itemName}}</ion-label>\n      <p>{{groceryItem.itemCount}}</p>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"editGroceryItem( groceryItem, i )\" color=\"primary\"><ion-icon name=\"create-outline\"></ion-icon>Edit</ion-item-option>\n      <ion-item-option (click)=\"shareGroceryItem( groceryItem, i )\" color=\"light\"><ion-icon name=\"share-outline\"></ion-icon>Share</ion-item-option>\n      <ion-item-option (click)=\"removeGroceryItem( groceryItem, i )\" color=\"secondary\"><ion-icon name=\"trash-outline\"></ion-icon>Remove</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n<!-- The Add button on right bottom corner -->\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"addGroceryItem()\" >\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/groceries-service.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/groceries-service.service.ts ***!
    \**********************************************/

  /*! exports provided: GroceriesServiceService */

  /***/
  function srcAppGroceriesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroceriesServiceService", function () {
      return GroceriesServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GroceriesServiceService = /*#__PURE__*/function () {
      function GroceriesServiceService() {
        _classCallCheck(this, GroceriesServiceService);

        this.groceryItems = [];
      }

      _createClass(GroceriesServiceService, [{
        key: "getItems",
        value: function getItems() {
          return this.groceryItems;
        }
      }, {
        key: "removeItem",
        value: function removeItem(index) {
          this.groceryItems.splice(index, 1);
        }
      }, {
        key: "addItem",
        value: function addItem(item) {
          this.groceryItems.push(item);
        }
      }, {
        key: "editItem",
        value: function editItem(item, index) {
          this.groceryItems[index] = item;
        }
      }]);

      return GroceriesServiceService;
    }();

    GroceriesServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GroceriesServiceService);
    /***/
  },

  /***/
  "./src/app/input-dialog-service.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/input-dialog-service.service.ts ***!
    \*************************************************/

  /*! exports provided: InputDialogServiceService */

  /***/
  function srcAppInputDialogServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputDialogServiceService", function () {
      return InputDialogServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _groceries_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./groceries-service.service */
    "./src/app/groceries-service.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var InputDialogServiceService = /*#__PURE__*/function () {
      function InputDialogServiceService(alertController, dataService) {
        _classCallCheck(this, InputDialogServiceService);

        this.alertController = alertController;
        this.dataService = dataService;
      } // Show Prompt function


      _createClass(InputDialogServiceService, [{
        key: "showPrompt",
        value: function showPrompt(item, index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: item ? 'Edit Item' : 'Add Item',
                      message: item ? 'Please edit Item name and quantity' : 'Please enter Item name and quantity',
                      inputs: [{
                        name: 'itemName',
                        type: 'text',
                        placeholder: 'Grocery Item Name',
                        value: item ? item.itemName : null
                      }, {
                        name: 'itemCount',
                        type: 'text',
                        placeholder: 'Grocery Item Count',
                        value: item ? item.itemCount : null
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(data) {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: index !== undefined ? 'Save' : 'Add',
                        handler: function handler(item) {
                          console.log('Confirm Add', item);

                          if (index !== undefined) {
                            _this.dataService.editItem(item, index);
                          } else {
                            _this.dataService.addItem(item);
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return InputDialogServiceService;
    }();

    InputDialogServiceService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_2__["GroceriesServiceService"]
      }];
    };

    InputDialogServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InputDialogServiceService);
    /***/
  },

  /***/
  "./src/app/tab2/tab2-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab2/tab2-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/tab2/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../groceries-service.service */
    "./src/app/groceries-service.service.ts");
    /* harmony import */


    var _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../input-dialog-service.service */
    "./src/app/input-dialog-service.service.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

    var Tab2Page = /*#__PURE__*/function () {
      // Constructor 
      function Tab2Page(toastController, alertController, dataService, inputDialogService, socialSharing) {
        _classCallCheck(this, Tab2Page);

        this.toastController = toastController;
        this.alertController = alertController;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.socialSharing = socialSharing; // Variables

        this.titleOfPage = "Grocery List";
      } // Load Grocery Items


      _createClass(Tab2Page, [{
        key: "loadGroceryItems",
        value: function loadGroceryItems() {
          return this.dataService.getItems();
        } // Remove grocery function

      }, {
        key: "removeGroceryItem",
        value: function removeGroceryItem(groceryItem, index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: "You have removed: ".concat(groceryItem.itemName),
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();
                    this.dataService.removeItem(index);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Remove grocery function

      }, {
        key: "shareGroceryItem",
        value: function shareGroceryItem(groceryItem, index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast, message, subject;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: "Sharing item: ".concat(groceryItem.itemName),
                      duration: 2000
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();
                    message = "Grocery Item - Name: ".concat(groceryItem.itemName, " - Quantity: ").concat(groceryItem.itemCount);
                    subject = "Shared via Groceries app";
                    this.socialSharing.share(message, subject).then(function () {
                      console.log("Shared!");
                    })["catch"](function () {
                      console.error("Not Shared!");
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Edit grocery function

      }, {
        key: "editGroceryItem",
        value: function editGroceryItem(groceryItem, index) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: "You are editing: ".concat(groceryItem.itemName),
                      duration: 2000
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();
                    this.inputDialogService.showPrompt(groceryItem, index);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Add grocery function

      }, {
        key: "addGroceryItem",
        value: function addGroceryItem() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.inputDialogService.showPrompt();

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"]
      }, {
        type: _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__["InputDialogServiceService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map