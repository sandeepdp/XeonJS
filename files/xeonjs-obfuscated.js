const _0x48b4=['view','getHtml','(.+)','from','route','click','fromEntries','5156AUVFyU','target','1VImrmz','preventDefault','pushState','map','1237377NiiAKw','body','18919moUyrD','addEventListener','3BksxQD','46MWmdXi','match','path','matchAll','popstate','224822qKowOi','3843050eULqnk','matches','832489StIhqg','3iWYkly','replace','slice','result','937038VMmaNr','find','innerHTML'];const _0x1f3342=_0xf8c3;function _0xf8c3(_0x4142c5,_0x462cd9){return _0xf8c3=function(_0x48b442,_0x5656da){_0x48b442=_0x48b442-0x10b;let _0x10f237=_0x48b4[_0x48b442];return _0x10f237;},_0xf8c3(_0x4142c5,_0x462cd9);}(function(_0x31ab78,_0x3f3603){const _0x4a380d=_0xf8c3;while(!![]){try{const _0x49b1bf=-parseInt(_0x4a380d(0x123))+parseInt(_0x4a380d(0x10b))*-parseInt(_0x4a380d(0x115))+-parseInt(_0x4a380d(0x11b))*-parseInt(_0x4a380d(0x11f))+-parseInt(_0x4a380d(0x11e))+-parseInt(_0x4a380d(0x10d))*parseInt(_0x4a380d(0x111))+-parseInt(_0x4a380d(0x113))*parseInt(_0x4a380d(0x116))+parseInt(_0x4a380d(0x11c));if(_0x49b1bf===_0x3f3603)break;else _0x31ab78['push'](_0x31ab78['shift']());}catch(_0x204fc9){_0x31ab78['push'](_0x31ab78['shift']());}}}(_0x48b4,0x988e6));import{routes,root}from'/src/main.js';const pathToRegex=_0x297d3a=>new RegExp('^'+_0x297d3a[_0x1f3342(0x120)](/\//g,'\x5c/')['replace'](/:\w+/g,_0x1f3342(0x128))+'$'),getParams=_0x38d21b=>{const _0xcd4ab3=_0x1f3342,_0x114f80=_0x38d21b[_0xcd4ab3(0x122)][_0xcd4ab3(0x121)](0x1),_0x132349=Array[_0xcd4ab3(0x129)](_0x38d21b[_0xcd4ab3(0x12a)][_0xcd4ab3(0x118)][_0xcd4ab3(0x119)](/:(\w+)/g))[_0xcd4ab3(0x110)](_0x49312e=>_0x49312e[0x1]);return Object[_0xcd4ab3(0x12c)](_0x132349[_0xcd4ab3(0x110)]((_0x220f11,_0x5dccea)=>{return[_0x220f11,_0x114f80[_0x5dccea]];}));},navigateTo=_0x2bcb05=>{const _0xdc4a7d=_0x1f3342;history[_0xdc4a7d(0x10f)](null,null,_0x2bcb05),router();},router=async()=>{const _0x207802=_0x1f3342,_0x7637d4=routes['map'](_0x43f4d1=>{const _0x37ab31=_0xf8c3;return{'route':_0x43f4d1,'result':location['pathname'][_0x37ab31(0x117)](pathToRegex(_0x43f4d1[_0x37ab31(0x118)]))};});let _0xb6e677=_0x7637d4[_0x207802(0x124)](_0x459de7=>_0x459de7[_0x207802(0x122)]!==null);if(!_0xb6e677){navigateTo('/');return;}const _0x262d69=new _0xb6e677[(_0x207802(0x12a))][(_0x207802(0x126))](getParams(_0xb6e677));root[_0x207802(0x125)]=await _0x262d69[_0x207802(0x127)]();};window[_0x1f3342(0x114)](_0x1f3342(0x11a),router),document['addEventListener']('DOMContentLoaded',()=>{const _0x113d85=_0x1f3342;document[_0x113d85(0x112)][_0x113d85(0x114)](_0x113d85(0x12b),_0x3eb78b=>{const _0x5ebeac=_0x113d85;_0x3eb78b[_0x5ebeac(0x10c)][_0x5ebeac(0x11d)]('[data-link]')&&(_0x3eb78b[_0x5ebeac(0x10e)](),navigateTo(_0x3eb78b['target']['href']));}),router();});