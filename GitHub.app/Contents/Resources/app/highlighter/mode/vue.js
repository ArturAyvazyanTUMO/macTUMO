self.webpackChunk(["mode/vue"],{25:function(a,b,c){(function(a){"use strict";a(c(0),c(35),c(3),c(4),c(7),c(2),c(34),c(33),c(32),c(31))})(function(a){var b={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"],["lang",/^babel$/,"javascript"],["type",/^text\/babel$/,"javascript"],["type",/^text\/ecmascript-\d+$/,"javascript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["lang",/^less$/i,"text/x-less"],["lang",/^scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"],["type",/^(text\/)?(x-)?scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?less$/i,"text/x-less"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]};a.defineMode("vue-template",function(b,c){return a.overlayMode(a.getMode(b,c.backdrop||"text/html"),{token:function(a){if(a.match(/^\{\{.*?\}\}/))return"meta mustache";for(;a.next()&&!a.match("{{",!1););return null}})}),a.defineMode("vue",function(c){return a.getMode(c,{name:"htmlmixed",tags:b})},"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars"),a.defineMIME("script/x-vue","vue"),a.defineMIME("text/x-vue","vue")})}});
//# sourceMappingURL=vue.js.map