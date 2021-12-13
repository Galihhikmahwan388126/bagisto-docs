(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{498:function(e,a,t){"use strict";t.r(a);var s=t(32),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation:")]),e._v(" "),t("ul",[t("li",[e._v('Unzip the respective extension zip and then merge "packages" folder into project root directory.')])]),e._v(" "),t("h3",{attrs:{id:"goto-config-app-php-file-and-add-following-line-under-providers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goto-config-app-php-file-and-add-following-line-under-providers"}},[e._v("#")]),e._v(" Goto config/app.php file and add following line under 'providers'")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    Webkul\\GraphQLAPI\\Providers\\GraphQLAPIServiceProvider::class\n")])])]),t("h3",{attrs:{id:"goto-composer-json-file-and-add-following-line-under-psr-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goto-composer-json-file-and-add-following-line-under-psr-4"}},[e._v("#")]),e._v(" Goto composer.json file and add following line under 'psr-4'")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    "Webkul\\\\GraphQLAPI\\\\": "packages/Webkul/GraphQLAPI"\n')])])]),t("h3",{attrs:{id:"run-the-below-mentioned-commands-from-the-root-directory-in-terminal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-below-mentioned-commands-from-the-root-directory-in-terminal"}},[e._v("#")]),e._v(" Run the below mentioned commands from the root directory in terminal:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    composer dump-autoload\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    php artisan optimize\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("    php artisan bagisto_graphql:install\n")])])]),t("h3",{attrs:{id:"find-a-file-config-lighthouse-php-from-root-and-do-the-following-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find-a-file-config-lighthouse-php-from-root-and-do-the-following-changes"}},[e._v("#")]),e._v(" Find a file config/lighthouse.php from root and do the following changes:")]),e._v(" "),t("ul",[t("li",[e._v("change the "),t("strong",[e._v("guard")]),e._v(" index value from "),t("strong",[e._v("api")]),e._v(" to "),t("strong",[e._v("admin-api")]),e._v(" like below mentioned:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    'guard' => 'admin-api',\n")])])]),t("ul",[t("li",[e._v("change the path from "),t("em",[e._v("'graphql/schema.graphql'")]),e._v(" to "),t("strong",[e._v("'packages/Webkul/GraphQLAPI/graphql/schema.graphql'")]),e._v(" for the "),t("strong",[e._v("register")]),e._v(" index under "),t("strong",[e._v("schema")]),e._v(" array index like below mentioned:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    'schema' => [\n        'register' => base_path('packages/Webkul/GraphQLAPI/graphql/schema.graphql'),\n    ],\n")])])]),t("ul",[t("li",[e._v("change the "),t("em",[e._v("App\\GraphQL\\")]),e._v(" path to "),t("strong",[e._v("Webkul\\GraphQLAPI\\")]),e._v(" in all the indexes of "),t("strong",[e._v("namespace")]),e._v(" index:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    'namespaces' => [\n        'models' => ['App', 'Webkul\\\\GraphQLAPI\\\\Models'],\n        'queries' => 'Webkul\\\\GraphQLAPI\\\\Queries',\n        'mutations' => 'Webkul\\\\GraphQLAPI\\\\Mutations',\n        'subscriptions' => 'Webkul\\\\GraphQLAPI\\\\Subscriptions',\n        'interfaces' => 'Webkul\\\\GraphQLAPI\\\\Interfaces',\n        'unions' => 'Webkul\\\\GraphQLAPI\\\\Unions',\n        'scalars' => 'Webkul\\\\GraphQLAPI\\\\Scalars',\n        'directives' => ['Webkul\\\\GraphQLAPI\\\\Directives'],\n        'validators' => ['Webkul\\\\GraphQLAPI\\\\Validators'],\n    ],\n")])])]),t("ul",[t("li",[e._v("Add the "),t("strong",[e._v("JWT_TTL")]),e._v(" (JWT time to live) entry in the "),t("strong",[e._v(".env")]),e._v(" file under the "),t("strong",[e._v("JWT_SECRET")]),e._v(" key:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    JWT_TTL=525600\n")])])]),t("h3",{attrs:{id:"now-to-use-the-graphql-playground-for-testing-the-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#now-to-use-the-graphql-playground-for-testing-the-apis"}},[e._v("#")]),e._v(" Now to use the graphql-playground for testing the APIs:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    http://example.com/graphql-playground\n")])])]),t("h3",{attrs:{id:"or-you-can-also-use-the-postmen-for-testing-the-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#or-you-can-also-use-the-postmen-for-testing-the-apis"}},[e._v("#")]),e._v(" Or you can also use the Postmen for testing the APIs:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    http://example.com/graphql\n")])])]),t("blockquote",[t("p",[e._v("That's it, now just execute the project on your specified domain.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);