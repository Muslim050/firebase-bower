!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase)}(this,function(st){"use strict";try{(function(){st=st&&Object.prototype.hasOwnProperty.call(st,"default")?st.default:st;var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function d(e,a,s,u){return new(s=s||Promise)(function(n,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function i(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,i)}o((u=u.apply(e,a||[])).next())})}function h(n,r){var i,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}(arguments[t]));return e}function f(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function p(){return"indexedDB"in self&&null!==indexedDB}function v(){return new Promise(function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=window.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||window.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function g(){return!(!navigator||!navigator.cookieEnabled)}var i,e,t,o="FirebaseError",y=(i=Error,n(e=u,t=i),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a),u);function a(){this.constructor=e}function u(e,t){var n=i.call(this,t)||this;return n.code=e,n.name=o,Object.setPrototypeOf(n,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,c.prototype.create),n}var c=(b.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r,i=t[0]||{},o=this.service+"/"+e,a=this.errors[e],s=a?(r=i,a.replace(w,function(e,t){var n=r[t];return null!=n?String(n):"<"+t+"?>"})):"Error",u=this.serviceName+": "+s+" ("+o+").",c=new y(o,u),l=0,f=Object.keys(i);l<f.length;l++){var p=f[l];"_"!==p.slice(-1)&&(p in c&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),c[p]=i[p])}return c},b);function b(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var w=/\{\$([^}]+)}/g,m=(_.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},_.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},_.prototype.setServiceProps=function(e){return this.serviceProps=e,this},_);function _(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function E(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function I(n,r,i){var o,e=new Promise(function(e,t){E(o=n[r].apply(n,i)).then(e,t)});return e.request=o,e}function S(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function T(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return I(this[n],e,arguments)})})}function O(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function C(e,r,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return e=this[r],(t=I(e,n,arguments)).then(function(e){if(e)return new P(e,t.request)});var e,t})})}function N(e){this._index=e}function P(e,t){this._cursor=e,this._request=t}function A(e){this._store=e}function x(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function D(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new x(n)}function R(e){this._db=e}S(N,"_index",["name","keyPath","multiEntry","unique"]),T(N,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),C(N,"_index",IDBIndex,["openCursor","openKeyCursor"]),S(P,"_cursor",["direction","key","primaryKey","value"]),T(P,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(P.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),E(t._request).then(function(e){if(e)return new P(e,t._request)})})})}),A.prototype.createIndex=function(){return new N(this._store.createIndex.apply(this._store,arguments))},A.prototype.index=function(){return new N(this._store.index.apply(this._store,arguments))},S(A,"_store",["name","keyPath","indexNames","autoIncrement"]),T(A,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),C(A,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),O(A,"_store",IDBObjectStore,["deleteIndex"]),x.prototype.objectStore=function(){return new A(this._tx.objectStore.apply(this._tx,arguments))},S(x,"_tx",["objectStoreNames","mode"]),O(x,"_tx",IDBTransaction,["abort"]),D.prototype.createObjectStore=function(){return new A(this._db.createObjectStore.apply(this._db,arguments))},S(D,"_db",["name","version","objectStoreNames"]),O(D,"_db",IDBDatabase,["deleteObjectStore","close"]),R.prototype.transaction=function(){return new x(this._db.transaction.apply(this._db,arguments))},S(R,"_db",["name","version","objectStoreNames"]),O(R,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[A,N].forEach(function(e){o in e.prototype&&(e.prototype[o.replace("open","iterate")]=function(){var e,t=(e=arguments,Array.prototype.slice.call(e)),n=t[t.length-1],r=this._store||this._index,i=r[o].apply(r,t.slice(0,-1));i.onsuccess=function(){n(i.result)}})})}),[N,A].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(t){r.iterateCursor(e,function(e){e?(i.push(e.value),void 0===n||i.length!=n?e.continue():t(i)):t(i)})})})});var L,j="0.4.16",k=1e4,B="w:"+j,H="FIS_v2",F="https://firebaseinstallations.googleapis.com/v1",q=36e5,V=((L={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',L["not-registered"]="Firebase Installation is not registered.",L["installation-not-found"]="Firebase Installation not found.",L["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',L["app-offline"]="Could not process request. Application offline.",L["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",L),G=new c("installations","Installations",V);function M(e){return e instanceof y&&e.code.includes("request-failed")}function U(e){var t=e.projectId;return F+"/projects/"+t+"/installations"}function K(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function W(r,i){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,i.json()];case 1:return t=e.sent(),n=t.error,[2,G.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function z(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $(e,t){var n=t.refreshToken,r=z(e);return r.append("Authorization",H+" "+n),r}function J(n){return d(this,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,n()];case 1:return 500<=(t=e.sent()).status&&t.status<600?[2,n()]:[2,t]}})})}function Y(t){return new Promise(function(e){setTimeout(e,t)})}var X=/^[cdef][\w-]{21}$/,Z="";function Q(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return btoa(String.fromCharCode.apply(String,r(e))).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22);return X.test(t)?t:Z}catch(e){return Z}}function ee(e){return e.appName+"!"+e.appId}var te=new Map;function ne(e,t){var n=ee(e);re(n,t),function(e,t){var n=oe();n&&n.postMessage({key:e,fid:t});ae()}(n,t)}function re(e,t){var n,r,i=te.get(e);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){(0,a.value)(t)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var ie=null;function oe(){return!ie&&"BroadcastChannel"in self&&((ie=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){re(e.data.key,e.data.fid)}),ie}function ae(){0===te.size&&ie&&(ie.close(),ie=null)}var se,ue,ce,le,fe="firebase-installations-database",pe=1,de="firebase-installations-store",he=null;function ve(){var t,e,n;return he||(t=function(e){switch(e.oldVersion){case 0:e.createObjectStore(de)}},e=I(indexedDB,"open",[fe,pe]),(n=e.request)&&(n.onupgradeneeded=function(e){t&&t(new D(n.result,e.oldVersion,n.transaction))}),he=e.then(function(e){return new R(e)})),he}function ge(a,s){return d(this,void 0,void 0,function(){var t,n,r,i,o;return h(this,function(e){switch(e.label){case 0:return t=ee(a),[4,ve()];case 1:return n=e.sent(),r=n.transaction(de,"readwrite"),[4,(i=r.objectStore(de)).get(t)];case 2:return o=e.sent(),[4,i.put(s,t)];case 3:return e.sent(),[4,r.complete];case 4:return e.sent(),o&&o.fid===s.fid||ne(a,s.fid),[2,s]}})})}function ye(i){return d(this,void 0,void 0,function(){var t,n,r;return h(this,function(e){switch(e.label){case 0:return t=ee(i),[4,ve()];case 1:return n=e.sent(),[4,(r=n.transaction(de,"readwrite")).objectStore(de).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}function be(s,u){return d(this,void 0,void 0,function(){var t,n,r,i,o,a;return h(this,function(e){switch(e.label){case 0:return t=ee(s),[4,ve()];case 1:return n=e.sent(),r=n.transaction(de,"readwrite"),[4,(i=r.objectStore(de)).get(t)];case 2:return o=e.sent(),void 0!==(a=u(o))?[3,4]:[4,i.delete(t)];case 3:return e.sent(),[3,6];case 4:return[4,i.put(a,t)];case 5:e.sent(),e.label=6;case 6:return[4,r.complete];case 7:return e.sent(),!a||o&&o.fid===a.fid||ne(s,a.fid),[2,a]}})})}function we(i){return d(this,void 0,void 0,function(){var r,t,n;return h(this,function(e){switch(e.label){case 0:return[4,be(i,function(e){var t=_e(e||{fid:Q(),registrationStatus:0}),n=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:function(o){return d(this,void 0,void 0,function(){var t,n,r,i;return h(this,function(e){switch(e.label){case 0:return[4,me(o)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,Y(100)];case 3:return e.sent(),[4,me(o)];case 4:return t=e.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,we(o)];case 6:return n=e.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}})})}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(G.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,7]),[4,function(s,e){var u=e.fid;return d(this,void 0,void 0,function(){var t,n,r,i,o,a;return h(this,function(e){switch(e.label){case 0:return t=U(s),n=z(s),r={fid:u,authVersion:H,appId:s.appId,sdkVersion:B},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,J(function(){return fetch(t,i)})];case 1:return(o=e.sent()).ok?[4,o.json()]:[3,3];case 2:return a=e.sent(),[2,{fid:a.fid||u,registrationStatus:2,refreshToken:a.refreshToken,authToken:K(a.authToken)}];case 3:return[4,W("Create Installation",o)];case 4:throw e.sent()}})})}(r,i)];case 1:return t=e.sent(),[2,ge(r,t)];case 2:return M(n=e.sent())&&409===n.serverCode?[4,ye(r)]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,ge(r,{fid:i.fid,registrationStatus:0})];case 5:e.sent(),e.label=6;case 6:throw n;case 7:return[2]}})})}(e,r);return{installationEntry:r,registrationPromise:i}}}(i,t);return r=n.registrationPromise,n.installationEntry})];case 1:return(t=e.sent()).fid!==Z?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=e.sent(),n)];case 3:return[2,{installationEntry:t,registrationPromise:r}]}})})}function me(e){return be(e,function(e){if(!e)throw G.create("installation-not-found");return _e(e)})}function _e(e){return 1===(t=e).registrationStatus&&t.registrationTime+k<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Ee(e,l){var f=e.appConfig,p=e.platformLoggerProvider;return d(this,void 0,void 0,function(){var r,i,o,a,s,u,c;return h(this,function(e){switch(e.label){case 0:return t=f,n=l.fid,r=U(t)+"/"+n+"/authTokens:generate",i=$(f,l),(o=p.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:B}},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,J(function(){return fetch(r,s)})];case 1:return(u=e.sent()).ok?[4,u.json()]:[3,3];case 2:return c=e.sent(),[2,K(c)];case 3:return[4,W("Generate Auth Token",u)];case 4:throw e.sent()}var t,n})})}function Ie(s,u){return void 0===u&&(u=!1),d(this,void 0,void 0,function(){var a,t,n;return h(this,function(e){switch(e.label){case 0:return[4,be(s.appConfig,function(e){if(!Te(e))throw G.create("not-registered");var t,n,r,i=e.authToken;if(u||2!==(r=i).requestStatus||function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+q}(r)){if(1===i.requestStatus)return a=function(r,i){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,Se(r.appConfig)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.authToken.requestStatus?[3,5]:[4,Y(100)];case 3:return e.sent(),[4,Se(r.appConfig)];case 4:return t=e.sent(),[3,2];case 5:return 0===(n=t.authToken).requestStatus?[2,Ie(r,i)]:[2,n]}})})}(s,u),e;if(!navigator.onLine)throw G.create("app-offline");var o=(t=e,n={requestStatus:1,requestTime:Date.now()},l(l({},t),{authToken:n}));return a=function(i,o){return d(this,void 0,void 0,function(){var t,n,r;return h(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,8]),[4,Ee(i,o)];case 1:return t=e.sent(),r=l(l({},o),{authToken:t}),[4,ge(i.appConfig,r)];case 2:return e.sent(),[2,t];case 3:return!M(n=e.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,ye(i.appConfig)];case 4:return e.sent(),[3,7];case 5:return r=l(l({},o),{authToken:{requestStatus:0}}),[4,ge(i.appConfig,r)];case 6:e.sent(),e.label=7;case 7:throw n;case 8:return[2]}})})}(s,o),o}return e})];case 1:return t=e.sent(),a?[4,a]:[3,3];case 2:return n=e.sent(),[3,4];case 3:n=t.authToken,e.label=4;case 4:return[2,n]}})})}function Se(e){return be(e,function(e){if(!Te(e))throw G.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+k<Date.now()?l(l({},e),{authToken:{requestStatus:0}}):e})}function Te(e){return void 0!==e&&2===e.registrationStatus}function Oe(t,n){return void 0===n&&(n=!1),d(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,function(n){return d(this,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,we(n)];case 1:return(t=e.sent().registrationPromise)?[4,t]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}(t.appConfig)];case 1:return e.sent(),[4,Ie(t,n)];case 2:return[2,e.sent().token]}})})}function Ce(s,u){return d(this,void 0,void 0,function(){var r,i,o,a;return h(this,function(e){switch(e.label){case 0:return t=s,n=u.fid,r=U(t)+"/"+n,i=$(s,u),o={method:"DELETE",headers:i},[4,J(function(){return fetch(r,o)})];case 1:return(a=e.sent()).ok?[3,3]:[4,W("Delete Installation",a)];case 2:throw e.sent();case 3:return[2]}var t,n})})}function Ne(e,r){var i=e.appConfig;return function(e,t){oe();var n=ee(e),r=te.get(n);r||(r=new Set,te.set(n,r)),r.add(t)}(i,r),function(){var e,t,n;e=r,t=ee(i),(n=te.get(t))&&(n.delete(e),0===n.size&&te.delete(t),ae())}}function Pe(e){return G.create("missing-app-config-values",{valueName:e})}function Ae(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}(se=st).INTERNAL.registerComponent(new m("installations",function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Pe("App Configuration");if(!e.name)throw Pe("App Name");try{for(var r=s(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Pe(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(i){return d(this,void 0,void 0,function(){var t,n,r;return h(this,function(e){switch(e.label){case 0:return[4,we(i.appConfig)];case 1:return t=e.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):Ie(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(e){return Oe(n,e)},delete:function(){return function(r){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,be(t=r.appConfig,function(e){if(!e||0!==e.registrationStatus)return e})];case 1:if(!(n=e.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw G.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw G.create("app-offline");case 3:return[4,Ce(t,n)];case 4:return e.sent(),[4,ye(t)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(n)},onIdChange:function(e){return Ne(n,e)}}},"PUBLIC")),se.registerVersion("@firebase/installations",j),(le=ce=ce||{})[le.DEBUG=0]="DEBUG",le[le.VERBOSE=1]="VERBOSE",le[le.INFO=2]="INFO",le[le.WARN=3]="WARN",le[le.ERROR=4]="ERROR",le[le.SILENT=5]="SILENT";function xe(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=Le[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,Ae(["["+i+"]  "+e.name+":"],n))}}var De={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Re=ce.INFO,Le=((ue={})[ce.DEBUG]="log",ue[ce.VERBOSE]="log",ue[ce.INFO]="info",ue[ce.WARN]="warn",ue[ce.ERROR]="error",ue),je=(Object.defineProperty(ke.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in ce))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),ke.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?De[e]:e},Object.defineProperty(ke.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(ke.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),ke.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ae([this,ce.DEBUG],e)),this._logHandler.apply(this,Ae([this,ce.DEBUG],e))},ke.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ae([this,ce.VERBOSE],e)),this._logHandler.apply(this,Ae([this,ce.VERBOSE],e))},ke.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ae([this,ce.INFO],e)),this._logHandler.apply(this,Ae([this,ce.INFO],e))},ke.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ae([this,ce.WARN],e)),this._logHandler.apply(this,Ae([this,ce.WARN],e))},ke.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ae([this,ce.ERROR],e)),this._logHandler.apply(this,Ae([this,ce.ERROR],e))},ke);function ke(e){this.name=e,this._logLevel=Re,this._logHandler=xe,this._userLogHandler=null}var Be,He,Fe,qe,Ve="measurementId",Ge="firebase_id",Me="origin",Ue="https://www.googletagmanager.com/gtag/js";(He=Be=Be||{}).EVENT="event",He.SET="set",He.CONFIG="config",(qe=Fe=Fe||{}).ADD_SHIPPING_INFO="add_shipping_info",qe.ADD_PAYMENT_INFO="add_payment_info",qe.ADD_TO_CART="add_to_cart",qe.ADD_TO_WISHLIST="add_to_wishlist",qe.BEGIN_CHECKOUT="begin_checkout",qe.CHECKOUT_PROGRESS="checkout_progress",qe.EXCEPTION="exception",qe.GENERATE_LEAD="generate_lead",qe.LOGIN="login",qe.PAGE_VIEW="page_view",qe.PURCHASE="purchase",qe.REFUND="refund",qe.REMOVE_FROM_CART="remove_from_cart",qe.SCREEN_VIEW="screen_view",qe.SEARCH="search",qe.SELECT_CONTENT="select_content",qe.SELECT_ITEM="select_item",qe.SELECT_PROMOTION="select_promotion",qe.SET_CHECKOUT_OPTION="set_checkout_option",qe.SHARE="share",qe.SIGN_UP="sign_up",qe.TIMING_COMPLETE="timing_complete",qe.VIEW_CART="view_cart",qe.VIEW_ITEM="view_item",qe.VIEW_ITEM_LIST="view_item_list",qe.VIEW_PROMOTION="view_promotion",qe.VIEW_SEARCH_RESULTS="view_search_results";var Ke,We=new je("@firebase/analytics");function ze(e,n,t){var p,d,r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[n].push(arguments)};return window[t]&&"function"==typeof window[t]&&(r=window[t]),window[t]=(p=r,d=e,function(e,t,n){if(e===Be.EVENT){var r=[];if(n&&n.send_to){var i=n.send_to;Array.isArray(i)||(i=[i]);for(var o=0,a=i;o<a.length;o++){var s=a[o],u=d[s];if(!u){r=[];break}r.push(u)}}if(0===r.length)for(var c=0,l=Object.values(d);c<l.length;c++){var f=l[c];r.push(f)}Promise.all(r).then(function(){return p(Be.EVENT,t,n||{})}).catch(function(e){return We.error(e)})}else e===Be.CONFIG?(d[t]||Promise.resolve()).then(function(){p(Be.CONFIG,t,n)}).catch(function(e){return We.error(e)}):p(Be.SET,t)}),{gtagCore:r,wrappedGtag:window[t]}}var $e,Je,Ye=((Ke={})["no-ga-id"]='"'+Ve+'" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',Ke["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",Ke["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",Ke["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate",Ke["indexedDB-unsupported"]="IndexedDB is not supported by current browswer",Ke["invalid-indexedDB-context"]="Environment doesn't support IndexedDB: {$errorInfo}. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments",Ke["cookies-not-enabled"]="Cookies are not enabled in this browser environment. Analytics requires cookies to be enabled.",Ke["invalid-analytics-context"]="Firebase Analytics is not supported in browser extensions.",Ke),Xe=new c("analytics","Analytics",Ye),Ze={},Qe="dataLayer",et="gtag",tt=!1;function nt(e){if(tt)throw Xe.create("already-initialized");e.dataLayerName&&(Qe=e.dataLayerName),e.gtagName&&(et=e.gtagName)}function rt(e,t){if(f())throw Xe.create("invalid-analytics-context");if(!g())throw Xe.create("cookies-not-enabled");if(!p())throw Xe.create("indexedDB-unsupported");v().catch(function(e){throw Xe.create("invalid-indexedDB-context",{errorInfo:e})});var n,r,i,o,a,s,u,c=e.options[Ve];if(!c)throw Xe.create("no-ga-id");if(null!=Ze[c])throw Xe.create("already-exists",{id:c});return tt||(function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(Ue))return r}}()||(s=Qe,(u=document.createElement("script")).src=Ue+"?l="+s,u.async=!0,document.head.appendChild(u)),o=Qe,a=[],Array.isArray(window[o])?a=window[o]:window[o]=a,r=(n=ze(Ze,Qe,et)).wrappedGtag,i=n.gtagCore,Je=r,$e=i,tt=!0),Ze[c]=function(r,i,o){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,i.getId()];case 1:return t=e.sent(),o("js",new Date),o(Be.CONFIG,r.options[Ve],((n={})[Ge]=t,n[Me]="firebase",n.update=!0,n)),[2]}})})}(e,t,$e),{app:e,logEvent:function(e,t,n){return r=Je,i=c,o=e,u=(a=t)||{},(s=n)&&s.global||(u=l(l({},a),{send_to:i})),void r(Be.EVENT,o,u||{});var r,i,o,a,s,u},setCurrentScreen:function(e,t){return n=Je,r=c,i=e,void((o=t)&&o.global?n(Be.SET,{screen_name:i}):n(Be.CONFIG,r,{update:!0,screen_name:i}));var n,r,i,o},setUserId:function(e,t){return n=Je,r=c,i=e,void((o=t)&&o.global?n(Be.SET,{user_id:i}):n(Be.CONFIG,r,{update:!0,user_id:i}));var n,r,i,o},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var i={},o=0,a=Object.keys(n);o<a.length;o++){var s=a[o];i["user_properties."+s]=n[s]}e(Be.SET,i)}else e(Be.CONFIG,t,{update:!0,user_properties:n})}(Je,c,e,t)},setAnalyticsCollectionEnabled:function(e){return t=e,void(window["ga-disable-"+c]=!t);var t}}}var it,ot="analytics";function at(){return d(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:if(f())return[2,!1];if(!g())return[2,!1];if(!p())return[2,!1];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,v()];case 2:return[2,e.sent()];case 3:return e.sent(),[2,!1];case 4:return[2]}})})}(it=st).INTERNAL.registerComponent(new m(ot,function(e){return rt(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())},"PUBLIC").setServiceProps({settings:nt,EventName:Fe,isSupported:at})),it.INTERNAL.registerComponent(new m("analytics-internal",function(e){try{return{logEvent:e.getProvider(ot).getImmediate().logEvent}}catch(e){throw Xe.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),it.registerVersion("@firebase/analytics","0.4.2")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-analytics.js.map
