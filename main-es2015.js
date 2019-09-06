(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/addpost/addpost.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addpost/addpost.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t\t<h1>Add Post</h1> \n\t\t\t\t<hr>\n\t\t\t\t<form [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit(postForm.value)\" style=\"border:1px solid #ccc;padding:10px;\">\n\t\t\t\t\t<label for=\"email\"><b>Title</b></label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"title\">\n\t\t\t\t\t<label for=\"psw\"><b>Description</b></label>\n\t\t\t\t\t<textarea formControlName=\"description\" [froalaEditor]></textarea>\n\t\t\t\t\t<label for=\"image\">Image</label>\n\t\t\t\t\t<input #file type=\"file\" accept=\"image/*\" formControlName=\"image\" (change)\t=getFileDetails(file.files)>\n\t\t\t\t\t<img [src]=\"img_url\" height=\"200\" *ngIf=\"img_url\">\n\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t <button class=\"btn btn-primary\">Save</button>\n\t\t\t\t\t</div>\t\n\t\t\t\t</form>\t\n\t\t</div> \n\t</div> \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav_menu\">\n\t<ul class=\"nav_menu\" style=\"display: inline;float:right\">\n\t\t<li><a routerLink=\"/\">Home</a></li>\n\t\t<li *ngIf=\"!userLoggedIn()\"><a routerLink=\"/sign-in\">Login</a></li>\n\t\t<li *ngIf=\"!userLoggedIn()\" ><a routerLink=\"/sign-up\">Sign Up</a></li>\t\n\t\t<li *ngIf=\"userLoggedIn()\"><a routerLink=\"/add-post\">Add Post</a></li>\t\n\t\t<li *ngIf=\"userLoggedIn()\" ><a>{{username | uppercase}}</a></li>\n\t\t<li *ngIf=\"userLoggedIn()\"><a (click)=\"logOut()\">Logout</a></li>\n\t</ul>\n</div>\t\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"leftcolumn\">\n\t\t\t\t<div class=\"card\" *ngFor=\"let posts of post_data index as blogId\">\n\t\t\t\t\t<h2>{{blogId+1}} {{posts.title | titlecase}}</h2>\n\t\t\t\t\t<h5>Author : {{posts.name}} {{posts.created_at | date}}  </h5>\n\t\t\t\t\t<div class=\"fakeimg\" style=\"height:200px;\">\n\t\t\t\t\t\t <img [src]=\"server_url+posts.image\" style=\"height:140px;\" *ngIf=posts.image/>\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div [innerHTML]=\"posts.description\"></div>\n\t\t\t\t\t<star-rating value=\"{{posts.rating}}\" checkedcolor=\"green\" uncheckedcolor=\"black\" size=\"24px\"    readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\n\t\t\t\t<p>Read More</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"loadmore\">\n\t\t\t\t\t<a (click)=\"loadMore()\">Load More</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"rightcolumn\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<h2>About Me</h2>\n\t\t\t\t\t<div class=\"fakeimg\" style=\"height:100px;\">Image</div>\n\t\t\t\t\t<p>Some text about me in culpa qui officia deserunt mollit anim..</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<app-popularpost></app-popularpost>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<h3>Follow Me</h3>\n\t\t\t\t\t<p>Some text..</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"items.length>0\">Cart</h3>\n<div class=\"cart-item\" *ngFor=\"let item of items index as itemId\">\n  <span>{{ item.name }}</span>\n  <span>{{ item.price | currency}}</span><a (click)=removeItem(itemId)>X</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-products/list-products.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-products/list-products.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<div class=\"container\">\n    <div class=\"row\" style=\"width:100%\">\n        <div class=\"col-md-7\">\n            <h3>Products</h3>\n            <div *ngFor=\"let product of products, index as productId\">\n                <h3>\n                    <a [routerLink]=\"['/product-details', productId]\" [title]=\"product.name+ 'details'\">\n                        {{ product.name }}\n                    </a>\n                </h3>\n                <p *ngIf=\"product.description\">{{product.description}}</p>\n                <button [routerLink]=\"['/product-details', productId]\">View Details</button>\n                &nbsp;\n                <button (click)=\"addToCart(product)\">Buy Now</button>\n                <!--<app-product-alerts\n                    [lproduct]=\"product\"   (notify)=\"onNotify()\">\n                </app-product-alerts>-->\t\n            </div>\n        </div>\n        <div class=\"col-md-5\">\n            <app-cart></app-cart>\n        </div>                          \n    </div> \n</div> \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listcustomers/listcustomers.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listcustomers/listcustomers.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"col-md-6 offset-md-3\">\n\t\t<table class=\"table table-striped\">\n\t\t\t<tr>\n\t\t\t\t<th>S.No</th>\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Email</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let user of users| paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n\t\t\t\t<th>{{i+1}}</th>\n\t\t\t\t<th>{{user.name}}</th>\n\t\t\t\t<th>{{user.email}}</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t</table>\t\n\t\t <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\t\n\t</div>\n</div>\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pull-right\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\" style=\"border:1px solid #ccc;padding:10px;\">\n\t\t\t\t\t<h1>Sign In</h1>\n\t\t\t\t\t<div *ngIf=\"email_password_not_match != ''\" class=\"red\">\n\t\t\t\t\t{{email_password_not_match}} \n\t\t\t\t\t</div>   \n\t\t\t\t\t<hr>\n\t\t\t\t\t<label for=\"email\"><b>Email</b></label>\n\t\t\t\t\t<input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n\t\t\t\t\t<div *ngIf=\"submitted\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"f.email?.errors?.required\">Email is required</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t <div *ngIf=\"f.email?.errors?.email\" class=\"invalid-feedback\">\n\t\t\t\t\t Email must be a valid email address\n\t\t\t\t\t</div>\n\t\t\t\t\t<label for=\"psw\"><b>Password</b></label>\n\t\t\t\t\t<input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n\t\t\t\t\t<div *ngIf=\"submitted\" class=\"invalid-feedback\">\n\t\t\t\t\t\t<div *ngIf=\"f.password?.errors?.required\">Password is required</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t <button class=\"btn btn-primary\">Log In</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t</div> \n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popularpost/popularpost.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popularpost/popularpost.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Popular Post</h3>\n<div class=\"fakeimg\" *ngFor=\"let popular_post of popular_post_data\">\n\t{{ popular_post.title | uppercase }} ({{popular_post.rating}})\n</div><br>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-alerts/product-alerts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-alerts/product-alerts.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"lproduct.price > 700\">\n  <button (click)=\"notify.emit()\">Notify Me</button>\n</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-details/product-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<div class=\"container\">\n    <div class=\"row\" style=\"width:100%\">\n    \t<div class=\"col-md-7\">\n\t\t\t<h2>Product Details</h2>\n\t\t\t<div *ngIf=\"product\">\n\t\t\t  <h3>{{ product.name }}</h3>\n\t\t\t  <h4>{{ product.price | currency }}</h4>\n\t\t\t  <p>{{ product.description }}</p>\n\t\t\t  <p><a [routerLink]=\"['/']\">Back</a></p>\n\t\t\t  <button (click)=\"addToCart(product)\">Buy Now</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-5\">\n\t\t<app-cart></app-cart>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\" style=\"border:1px solid #ccc;padding:10px;\">\n\t\t\t\t<h1>Sign Up</h1>\n\t\t\t\t<p>Please fill in this form to create an account.</p>\n\t\t\t\t<hr>\n\t\t\t\t<label for=\"name\"><b>Name</b></label>\n\t\t\t\t<input type=\"text\" formControlName=\"name\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n\t\t\t\t<div *ngIf=\"submitted\" class=\"invalid-feedback\">\n\t\t\t\t\t<div  *ngIf=\"f.name?.errors?.required\">First Name is required</div>\n\t\t\t\t</div>\n\t\t\t\t<label for=\"email\"><b>Email</b></label>\n\t\t\t\t<input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n\t\t\t\t<div *ngIf=\"submitted\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.email?.errors?.required\">Email is required</div>\n\t\t\t\t</div>\n\t\t\t\t <div *ngIf=\"f.email?.errors?.email\" class=\"invalid-feedback\">\n\t\t\t\t Email must be a valid email address\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"email_already_exist != ''\" class=\"red\">\n\t\t\t\t{{email_already_exist}} \n\t\t\t\t</div>   \t\t\t\n\n\t\t\t\t<label for=\"psw\"><b>Password</b></label>\n\t\t\t\t<input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n\t\t\t\t<div *ngIf=\"submitted\" class=\"invalid-feedback\">\n\t\t\t\t\t<div *ngIf=\"f.password?.errors?.required\">Password is required</div>\n\t\t\t\t</div>\n\n\t\t\t\t<p>By creating an account you agree to our <a href=\"#\" style=\"color:dodgerblue\">Terms & Privacy</a>.</p>\n\n\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t <button class=\"btn btn-primary\">Register</button>\n\t\t\t\t</div>\n\t\t\t</form> \n\t\t</div> \n\t</div> \n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student-list/student-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student-list/student-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>student-list works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">\n  <h1>My Store</h1>\n</a>\n\n<a [routerLink]=\"['/cart']\" class=\"button fancy-button\"><i class=\"fa fa-shopping-cart\">shopping_cart</i>Checkout</a>\n"

/***/ }),

/***/ "./src/app/addpost/addpost.component.css":
/*!***********************************************!*\
  !*** ./src/app/addpost/addpost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHBvc3QvYWRkcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addpost/addpost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addpost/addpost.component.ts ***!
  \**********************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/register.service */ "./src/app/service/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");



;



let AddpostComponent = class AddpostComponent {
    constructor(fb, regService, router, tokenService) {
        this.fb = fb;
        this.regService = regService;
        this.router = router;
        this.tokenService = tokenService;
        this.submitted = false;
    }
    ngOnInit() {
        this.postForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ;
    onSubmit(data) {
        data.image = this.img_url;
        data.files = this.files_detail;
        data.author_id = this.tokenService.getUserData('id');
        this.regService.sendPostData(data).subscribe((response) => {
            if (response.type == "success") {
                this.router.navigate(['/']);
            }
            else {
                this.technical_error = "There is some technical error";
            }
        }, error => {
            this.technical_error = "There is some technical error";
        });
    }
    ;
    getFileDetails(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.files_detail = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.img_url = reader.result;
        };
    }
};
AddpostComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
AddpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addpost',
        template: __webpack_require__(/*! raw-loader!./addpost.component.html */ "./node_modules/raw-loader/index.js!./src/app/addpost/addpost.component.html"),
        styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/addpost/addpost.component.css")]
    })
], AddpostComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _listcustomers_listcustomers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listcustomers/listcustomers.component */ "./src/app/listcustomers/listcustomers.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addpost/addpost.component */ "./src/app/addpost/addpost.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");











const routes = [
    { 'path': '', 'component': _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"] },
    { 'path': 'product-details/:productId', 'component': _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"] },
    { 'path': 'cart', 'component': _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { 'path': 'customers', 'component': _listcustomers_listcustomers_component__WEBPACK_IMPORTED_MODULE_5__["ListcustomersComponent"] },
    { 'path': 'sign-up', 'component': _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { 'path': 'sign-in', 'component': _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { 'path': 'add-post', 'component': _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_9__["AddpostComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav_menu ul li {\n\tdisplay: inline-block;\n\tmargin-right: 20px;\n\tpadding:10px 5px;\n}\n\n.nav_menu ul li a{\n\tcolor:#000 !important;\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2X21lbnUgdWwgbGkge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1yaWdodDogMjBweDtcblx0cGFkZGluZzoxMHB4IDVweDtcbn1cblxuLm5hdl9tZW51IHVsIGxpIGF7XG5cdGNvbG9yOiMwMDAgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angular2basic';
        this.token = localStorage.getItem('token');
        if (this.token) {
            this.userinfo = this.token.split('.')[1];
            this.userinfos = JSON.parse(window.atob(this.userinfo));
            this.username = this.userinfos.data[0].name;
        }
        else {
            console.log("yes we are login out");
        }
    }
    userLoggedIn() {
        this.token = localStorage.getItem('token');
        if (this.token) {
            this.userinfo = this.token.split('.')[1];
            this.userinfos = JSON.parse(window.atob(this.userinfo));
            this.username = this.userinfos.data[0].name;
            return true;
        }
        return false;
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.clear();
        this.router.navigate(['/sign-in']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm2015/ng-starrating.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-products/list-products.component */ "./src/app/list-products/list-products.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-alerts/product-alerts.component */ "./src/app/product-alerts/product-alerts.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _listcustomers_listcustomers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./listcustomers/listcustomers.component */ "./src/app/listcustomers/listcustomers.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./addpost/addpost.component */ "./src/app/addpost/addpost.component.ts");
/* harmony import */ var _popularpost_popularpost_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./popularpost/popularpost.component */ "./src/app/popularpost/popularpost.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_13__["ListProductsComponent"],
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_14__["TopBarComponent"],
            _product_alerts_product_alerts_component__WEBPACK_IMPORTED_MODULE_15__["ProductAlertsComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_16__["ProductDetailsComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"],
            _listcustomers_listcustomers_component__WEBPACK_IMPORTED_MODULE_18__["ListcustomersComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
            _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_20__["StudentListComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__["BlogComponent"],
            _addpost_addpost_component__WEBPACK_IMPORTED_MODULE_23__["AddpostComponent"],
            _popularpost_popularpost_component__WEBPACK_IMPORTED_MODULE_24__["PopularpostComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__["FroalaEditorModule"].forRoot(),
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__["FroalaViewModule"].forRoot(),
            ng_starrating__WEBPACK_IMPORTED_MODULE_10__["RatingModule"]
        ],
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        console.log("here we are ");
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['sign-in']);
            return false;
        }
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import { JwtHelperService } from '@auth0/angular-jwt';
let AuthService = class AuthService {
    constructor() { }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
        //return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\n/* Add a gray background color with some padding */\n\nbody {\n  font-family: Arial;\n  padding: 20px;\n  background: #f1f1f1;\n}\n\n/* Header/Blog Title */\n\n.header {\n  padding: 30px;\n  font-size: 40px;\n  text-align: center;\n  background: white;\n}\n\n/* Create two unequal columns that floats next to each other */\n\n/* Left column */\n\n.leftcolumn {   \n  float: left;\n  width: 75%;\n}\n\n/* Right column */\n\n.rightcolumn {\n  float: left;\n  width: 25%;\n  padding-left: 20px;\n}\n\n/* Fake image */\n\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n/* Add a card effect for articles */\n\n.card {\n   background-color: white;\n   padding: 20px;\n   margin-top: 20px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.loadmore {\n  text-align:center;\n  padding:10px 20px;\n  border:solid 1px #eee;\n  width:auto;\n  margin:10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsa0RBQWtEOztBQUNsRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUEsOERBQThEOztBQUM5RCxnQkFBZ0I7O0FBQ2hCO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBLG1DQUFtQzs7QUFDbkM7R0FDRyx1QkFBdUI7R0FDdkIsYUFBYTtHQUNiLGdCQUFnQjtBQUNuQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQWRkIGEgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggc29tZSBwYWRkaW5nICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIZWFkZXIvQmxvZyBUaXRsZSAqL1xuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4vKiBMZWZ0IGNvbHVtbiAqL1xuLmxlZnRjb2x1bW4geyAgIFxuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLyogUmlnaHQgY29sdW1uICovXG4ucmlnaHRjb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4vKiBGYWtlIGltYWdlICovXG4uZmFrZWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBBZGQgYSBjYXJkIGVmZmVjdCBmb3IgYXJ0aWNsZXMgKi9cbi5jYXJkIHtcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZzogMjBweDtcbiAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmxvYWRtb3JlIHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIHBhZGRpbmc6MTBweCAyMHB4O1xuICBib3JkZXI6c29saWQgMXB4ICNlZWU7XG4gIHdpZHRoOmF1dG87XG4gIG1hcmdpbjoxMHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/blog.service */ "./src/app/service/blog.service.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../env */ "./src/app/env.ts");




let BlogComponent = class BlogComponent {
    constructor(blogservice) {
        this.blogservice = blogservice;
        this.server_url = _env__WEBPACK_IMPORTED_MODULE_3__["env"].API_URL + "/upload/";
    }
    ngOnInit() {
        this.limit = 1;
        this.blogservice.fetchAllPosts(this.limit).subscribe((response) => {
            this.post_data = response.data;
            this.limit++;
        });
    }
    loadMore() {
        this.blogservice.fetchAllPosts(this.limit).subscribe((response) => {
            this.post_data = response.data;
            this.limit++;
        });
    }
    onRate(event) {
        console.log(event);
    }
};
BlogComponent.ctorParameters = () => [
    { type: _service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html"),
        styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/service/cart.service.ts");



let CartComponent = class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.items = this.cartService.getCart();
        console.log(this.items);
        //console.log(this.items[0].name)
    }
    ngOnInit() {
    }
    removeItem(item_id) {
        this.cartService.removeItemFromCart(item_id);
        this.cartService.getCart();
    }
};
CartComponent.ctorParameters = () => [
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/env.ts":
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
const env = {
    'API_URL': "http://127.0.0.1:8081",
};


/***/ }),

/***/ "./src/app/list-products/list-products.component.css":
/*!***********************************************************!*\
  !*** ./src/app/list-products/list-products.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcHJvZHVjdHMvbGlzdC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-products/list-products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/list-products/list-products.component.ts ***!
  \**********************************************************/
/*! exports provided: ListProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function() { return ListProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/service/cart.service.ts");




let ListProductsComponent = class ListProductsComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
    }
    ngOnInit() {
    }
    share() {
        window.alert("Product has been shared");
    }
    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
    addToCart(product) {
        this.cartService.addCart(product);
    }
};
ListProductsComponent.ctorParameters = () => [
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
ListProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-products',
        template: __webpack_require__(/*! raw-loader!./list-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-products/list-products.component.html"),
        styles: [__webpack_require__(/*! ./list-products.component.css */ "./src/app/list-products/list-products.component.css")]
    })
], ListProductsComponent);



/***/ }),

/***/ "./src/app/listcustomers/listcustomers.component.css":
/*!***********************************************************!*\
  !*** ./src/app/listcustomers/listcustomers.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RjdXN0b21lcnMvbGlzdGN1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/listcustomers/listcustomers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/listcustomers/listcustomers.component.ts ***!
  \**********************************************************/
/*! exports provided: ListcustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcustomersComponent", function() { return ListcustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/register.service */ "./src/app/service/register.service.ts");




let ListcustomersComponent = class ListcustomersComponent {
    constructor(customerService, regService) {
        this.customerService = customerService;
        this.regService = regService;
    }
    ngOnInit() {
        console.log("test");
        this.customerService.getUserData().subscribe((response) => {
            this.users = response.data;
        });
    }
};
ListcustomersComponent.ctorParameters = () => [
    { type: _service_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }
];
ListcustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcustomers',
        template: __webpack_require__(/*! raw-loader!./listcustomers.component.html */ "./node_modules/raw-loader/index.js!./src/app/listcustomers/listcustomers.component.html"),
        styles: [__webpack_require__(/*! ./listcustomers.component.css */ "./src/app/listcustomers/listcustomers.component.css")]
    })
], ListcustomersComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/register.service */ "./src/app/service/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



;


let LoginComponent = class LoginComponent {
    constructor(fb, router, regService) {
        this.fb = fb;
        this.router = router;
        this.regService = regService;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit(data) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.regService.checkUserData(data).subscribe((response) => {
            console.log(response);
            if (response.type == 'success') {
                localStorage.setItem('token', response._token);
                this.router.navigate(['/customers']);
            }
            else {
                this.email_password_not_match = "email and password not match";
                console.log(this.email_password_not_match);
            }
        }, error => {
            this.email_password_not_match = "There is some technical issue";
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/popularpost/popularpost.component.css":
/*!*******************************************************!*\
  !*** ./src/app/popularpost/popularpost.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXJwb3N0L3BvcHVsYXJwb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/popularpost/popularpost.component.ts":
/*!******************************************************!*\
  !*** ./src/app/popularpost/popularpost.component.ts ***!
  \******************************************************/
/*! exports provided: PopularpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularpostComponent", function() { return PopularpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/blog.service */ "./src/app/service/blog.service.ts");



let PopularpostComponent = class PopularpostComponent {
    constructor(blogservice) {
        this.blogservice = blogservice;
    }
    ngOnInit() {
        this.blogservice.fetchPopularPosts().subscribe((response) => {
            this.popular_post_data = response.data;
        });
    }
};
PopularpostComponent.ctorParameters = () => [
    { type: _service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }
];
PopularpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popularpost',
        template: __webpack_require__(/*! raw-loader!./popularpost.component.html */ "./node_modules/raw-loader/index.js!./src/app/popularpost/popularpost.component.html"),
        styles: [__webpack_require__(/*! ./popularpost.component.css */ "./src/app/popularpost/popularpost.component.css")]
    })
], PopularpostComponent);



/***/ }),

/***/ "./src/app/product-alerts/product-alerts.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-alerts/product-alerts.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtYWxlcnRzL3Byb2R1Y3QtYWxlcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-alerts/product-alerts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-alerts/product-alerts.component.ts ***!
  \************************************************************/
/*! exports provided: ProductAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAlertsComponent", function() { return ProductAlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductAlertsComponent = class ProductAlertsComponent {
    constructor() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductAlertsComponent.prototype, "lproduct", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductAlertsComponent.prototype, "notify", void 0);
ProductAlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-alerts',
        template: __webpack_require__(/*! raw-loader!./product-alerts.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-alerts/product-alerts.component.html"),
        styles: [__webpack_require__(/*! ./product-alerts.component.css */ "./src/app/product-alerts/product-alerts.component.css")]
    })
], ProductAlertsComponent);



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/service/cart.service.ts");





let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = _products__WEBPACK_IMPORTED_MODULE_3__["products"][+params.get('productId')];
        });
    }
    addToCart(product) {
        console.log(product);
        window.alert("Your product has been added to cart");
        this.cartService.addCart(product);
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html"),
        styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/products.ts":
/*!*****************************!*\
  !*** ./src/app/products.ts ***!
  \*****************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
const products = [
    {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
    },
    {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    },
    {
        name: 'Phone Standard',
        price: 299,
        description: ''
    }
];
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\n\tcolor:red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7QUFDViIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkIHtcblx0Y29sb3I6cmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/register.service */ "./src/app/service/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(fb, router, regService) {
        this.fb = fb;
        this.router = router;
        this.regService = regService;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit(data) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.regService.saveUserData(data).subscribe((response) => {
            console.log(response);
            if (response.type == 'success') {
                this.router.navigate(['/customers']);
            }
            this.email_already_exist = "email already exsist";
            console.log(this.email_already_exist);
        }, error => {
            this.email_already_exist = "There is some technical issue";
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/service/blog.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/blog.service.ts ***!
  \*****************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BlogService = class BlogService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.base_url = "http://127.0.0.1:8081";
        this.data = [];
    }
    fetchAllPosts(data) {
        this.endpoint = "posts";
        if (data) {
            this.endpoint = "posts/" + data;
        }
        return this.httpClient.get(this.base_url + '/' + this.endpoint);
    }
    fetchPopularPosts() {
        return this.httpClient.get('http://localhost:8081/popular-posts');
    }
    ;
};
BlogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlogService);



/***/ }),

/***/ "./src/app/service/cart.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/cart.service.ts ***!
  \*****************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartService = class CartService {
    constructor() {
        this.items = [];
    }
    addCart(product) {
        this.items.push(product);
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
    getCart() {
        return this.items;
    }
    removeItemFromCart(item_id) {
        return this.items.splice(item_id, 1);
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/service/customer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/customer.service.ts ***!
  \*********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomerService = class CustomerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.base_url = "http://127.0.0.1:8081";
        this.data = [];
    }
    getUserData() {
        return this.httpClient.get(this.base_url + '/users');
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/app/service/register.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/register.service.ts ***!
  \*********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




//https://www.concretepage.com/angular/angular-httpclient-post
let RegisterService = class RegisterService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.headers_Authorization = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "Bearer " + localStorage.getItem('token') })
        };
    }
    saveUserData(data) {
        return this.httpClient.post('http://localhost:8081/sign-up', data);
    }
    ;
    checkUserData(data) {
        return this.httpClient.post('http://localhost:8081/sign-in', data);
    }
    ;
    sendPostData(data) {
        console.log(localStorage.getItem('token'));
        return this.httpClient.post('http://localhost:8081/posts', data, this.headers_Authorization);
    }
    ;
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ "./src/app/service/token.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TokenService = class TokenService {
    constructor() {
        this.token = localStorage.getItem('token');
    }
    getToken() {
        return this.token;
    }
    getUserData(param) {
        this.userinfo = this.token.split('.')[1];
        this.userinfos = JSON.parse(window.atob(this.userinfo));
        this.result = this.userinfos.data[0].name;
        if (param == 'id') {
            this.result = this.userinfos.data[0].id;
        }
        return this.result;
    }
};
TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ "./src/app/student-list/student-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-list/student-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentListComponent = class StudentListComponent {
    constructor() { }
    ngOnInit() {
    }
};
StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-list',
        template: __webpack_require__(/*! raw-loader!./student-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/student-list/student-list.component.html"),
        styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/student-list/student-list.component.css")]
    })
], StudentListComponent);



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopBarComponent = class TopBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: __webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
    })
], TopBarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/angular2basic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map