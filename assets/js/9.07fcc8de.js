(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{437:function(t,s,e){t.exports=e.p+"assets/img/installed-elastic-info.46e47fde.png"},438:function(t,s,e){t.exports=e.p+"assets/img/product-index.a45ce729.png"},506:function(t,s,e){"use strict";e.r(s);var a=e(28),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"indexing-products-to-elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexing-products-to-elasticsearch"}},[t._v("#")]),t._v(" Indexing products to Elasticsearch")]),t._v(" "),a("p",[t._v("In this section, we will explain the indexing of products from the database to the Elasticsearch engine.")]),t._v(" "),a("h2",{attrs:{id:"setting-up-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-environment"}},[t._v("#")]),t._v(" Setting up environment")]),t._v(" "),a("p",[t._v("To continue with this make sure you have "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticseach"),a("OutboundLink")],1),t._v(" installed on your system. By default, Elasticsearch uses the "),a("code",[t._v("9200")]),t._v(" port. So, we are using the same port.")]),t._v(" "),a("p",[t._v("Just hit this route "),a("code",[t._v("http://localhost:9200")]),t._v(", if you see the below image then Elasticsearch is successfully installed on your system,")]),t._v(" "),a("p",[a("img",{attrs:{src:e(437),alt:"Elasticsearch Installation Info"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you want to use curl, you can hit this command,")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9200'")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("You can use "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/kibana/7.10/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kibana"),a("OutboundLink")],1),t._v(" for visualization also, but in this section, we are using only the Elasticsearch engine.")]),t._v(" "),a("h2",{attrs:{id:"setting-up-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-config"}},[t._v("#")]),t._v(" Setting up config")]),t._v(" "),a("p",[t._v("The most simple way to set up your environment is by just setting the key in the "),a("code",[t._v(".env")]),t._v(" file.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Now, open the "),a("code",[t._v(".env")]),t._v(" file in your project and this line,")]),t._v(" "),a("div",{staticClass:"language-env extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('SCOUT_DRIVER=elastic\nELASTIC_HOST="localhost:9200"\n')])])])]),t._v(" "),a("li",[a("p",[t._v("After that run "),a("code",[t._v("php artisan config:cache")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Done! Now you are all set to index your products.")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If still it is not working, then you can directly set your config in the following files i.e.,")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("config/elastic.client.php")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'hosts'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ELASTIC_HOST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'localhost:9200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("config/scout.php")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'driver'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SCOUT_DRIVER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'elastic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("Then run "),a("code",[t._v("php artisan config:cache")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"indexing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexing"}},[t._v("#")]),t._v(" Indexing")]),t._v(" "),a("p",[t._v("Now, after setting up the environment and config, your product gets automatically indexed when you create a new one.")]),t._v(" "),a("p",[t._v("If you want to index the existing products, then you need to run the below command,")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("php artisan "),a("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("scout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("import Webkul\\\\Product\\\\Models\\\\ProductFlat\n")])])]),a("p",[t._v("This command will index all your data from "),a("code",[t._v("product_flat")]),t._v(" table to Elasticsearch index.")]),t._v(" "),a("h2",{attrs:{id:"checking-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-index"}},[t._v("#")]),t._v(" Checking index")]),t._v(" "),a("p",[t._v("Now, let's check our imported index in the Elasticsearch by hitting this URL "),a("code",[t._v("http://localhost:9200/_cat/indices?v")]),t._v(",")]),t._v(" "),a("p",[a("img",{attrs:{src:e(438),alt:"Product Index Info"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you want to use curl, you can hit this command,")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9200/_cat/indices?v'")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);