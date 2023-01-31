(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{556:function(t,s,e){"use strict";e.r(s);var n=e(41),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"create-your-own-product-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-own-product-type"}},[t._v("#")]),t._v(" Create your own product type")]),t._v(" "),e("p",[t._v("By default Bagisto provides the following product types: simple, configurable, virtual, grouped, downloadable, bundled and bookings.\nIf the default product types do not meet your requirements, you can create your own product type.")]),t._v(" "),e("h2",{attrs:{id:"steps-to-create-your-own-product-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-create-your-own-product-types"}},[t._v("#")]),t._v(" Steps to create your own product-types")]),t._v(" "),e("p",[t._v("You may access this super-functionality of creating your own product-types by following the points listed below.")]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(': To demonstrate the process here, we will be creating a new product-type say "'),e("code",[t._v("coupon")]),t._v('"')]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Create your own package, you can check out the "),e("a",{attrs:{href:"../packages"}},[t._v("Package Development")]),t._v(" section if you need help with this.")])]),t._v(" "),e("li",[e("p",[t._v("Within the Config folder of your package, create a file "),e("code",[t._v("product_types.php")])])]),t._v(" "),e("li",[e("p",[t._v("Write the below piece of code in it, which is will be used to add product-type in your project.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'coupon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'coupon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Coupon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ACME\\Coupon\\Type\\Coupon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("li",[e("p",[t._v("After that, we need to merge this "),e("code",[t._v("Config/product_types.php")]),t._v("  with a core product_types option. For this, we use the method mergeConfigFrom() in the register method of the service provider("),e("code",[t._v("ACME\\Coupon\\Providers\\CouponServiceProvider.php")]),t._v(").")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Coupon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * CouponServiceProvider\n     *\n     * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)\n     */")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("CouponServiceProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * Register services.\n         *\n         * @return void\n         */")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeConfigFrom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/Config/product_types.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'product_types'")]),t._v("\n             "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n")])])])])]),t._v(" "),e("li",[e("p",[t._v("In 3rd point above, that have mentioned key "),e("code",[t._v("class")]),t._v(" which loads coupon product type. So, you need to create a file "),e("code",[t._v("Coupon.php")]),t._v(" within your package under Type folder and add the below code.")])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("ACME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Coupon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Product"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Coupon")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractType")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[t._v("After successfully completion of above steps, your product type will get created. But, still we don't have any code written for coupon type product in the "),e("code",[t._v("Type/Coupon.php")]),t._v(". To inherit basic functionality of any product to your product type, we need to inherit the classes from the Product package "),e("code",[t._v("type/AbstractType.php")]),t._v(" file.")])]),t._v(" "),e("li",[e("p",[t._v("Extending "),e("code",[t._v("AbstractType.php")]),t._v(" class within your product_type ("),e("code",[t._v("Type\\Coupon.php")]),t._v(") class let you to provide some core functionality of product. But, in addition, if user need to defined it's own custom methods, then he can define within their "),e("code",[t._v("Coupon.php")]),t._v(" file.")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);