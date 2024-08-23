!function(){var t,e,a=document.querySelector(".button"),r=document.querySelector(".message-start"),n=document.querySelector(".message-lose"),i=document.querySelector(".message-win"),s=document.querySelector(".game-score"),o={};function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=Array(e);a<e;a++)r[a]=t[a];return r}function l(t,e){if(t){if("string"==typeof t)return u(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(t,e)}}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.initialState=t,this.score=0,this.gameStatus=e.gameStatus.idle,this.state=t.map(function(t){return c(t)})}return t=[{key:"isStateChanged",value:function(t){this.hasStateChanged(t,this.state)&&(this.addRandomTile(),this.updateStatusOfTheGame(this.state))}},{key:"addRandomTile",value:function(){for(var t=[],e=0;e<4;e++)for(var a=0;a<4;a++)0===this.state[e][a]&&t.push([e,a]);if(t.length>0){var r,n=function(t){if(Array.isArray(t))return t}(r=t[Math.floor(Math.random()*t.length)])||function(t,e){var a,r,n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i=[],s=!0,o=!1;try{for(n=n.call(t);!(s=(a=n.next()).done)&&(i.push(a.value),2!==i.length);s=!0);}catch(t){o=!0,r=t}finally{try{s||null==n.return||n.return()}finally{if(o)throw r}}return i}}(r,2)||l(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=n[0],s=n[1];this.state[i][s]=.9>Math.random()?2:4}}},{key:"slideAndMerge",value:function(t){for(var e=t.filter(function(t){return 0!==t}),a=[],r=0;r<e.length;r++)e[r]===e[r+1]?(a.push(2*e[r]),this.score+=2*e[r],r++):a.push(e[r]);return a.concat(Array(4-a.length).fill(0))}},{key:"hasStateChanged",value:function(t,e){for(var a=0;a<4;a++)for(var r=0;r<4;r++)if(t[a][r]!==e[a][r])return!0;return!1}},{key:"moveUp",value:function(){var t=this,a=function(e){for(var a=t.state.map(function(t){return t[e]}),r=t.slideAndMerge(a),n=0;n<4;n++)t.state[n][e]=r[n]};if(this.gameStatus===e.gameStatus.playing){for(var r=this.state.map(function(t){return c(t)}),n=0;n<4;n++)a(n);this.isStateChanged(r)}}},{key:"moveDown",value:function(){var t=this,a=function(e){for(var a=t.state.map(function(t){return t[e]}).reverse(),r=t.slideAndMerge(a).reverse(),n=0;n<4;n++)t.state[n][e]=r[n]};if(this.gameStatus===e.gameStatus.playing){for(var r=this.state.map(function(t){return c(t)}),n=0;n<4;n++)a(n);this.isStateChanged(r)}}},{key:"moveLeft",value:function(){if(this.gameStatus===e.gameStatus.playing){for(var t=this.state.map(function(t){return c(t)}),a=0;a<4;a++)this.state[a]=this.slideAndMerge(this.state[a]);this.isStateChanged(t)}}},{key:"moveRight",value:function(){if(this.gameStatus===e.gameStatus.playing){for(var t=this.state.map(function(t){return c(t)}),a=0;a<4;a++)this.state[a]=this.slideAndMerge(this.state[a].reverse()).reverse();this.isStateChanged(t)}}},{key:"updateStatusOfTheGame",value:function(t){var a=!1;t.forEach(function(t){t.forEach(function(t){2048===t&&(a=!0)})}),a?this.gameStatus=e.gameStatus.win:this.canMove()||(this.gameStatus=e.gameStatus.lose)}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.gameStatus}},{key:"start",value:function(){this.gameStatus===e.gameStatus.idle&&(this.gameStatus=e.gameStatus.playing,this.addRandomTile(),this.addRandomTile())}},{key:"restart",value:function(){this.score=0,this.gameStatus=e.gameStatus.idle,this.state=this.initialState.map(function(t){return c(t)})}},{key:"canMove",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++){var a=this.state[t][e];if(0===this.state[t][e]||e<3&&a===this.state[t][e+1]||t<3&&a===this.state[t+1][e])return!0}return!1}}],function(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(e.prototype,t),e}();e={idle:"idle",playing:"playing",win:"win",lose:"lose"},(t="gameStatus")in f?Object.defineProperty(f,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):f[t]=e;var h=new(o=f);function d(){var t=h.getState();document.querySelectorAll(".field-row").forEach(function(e,a){e.querySelectorAll(".field-cell").forEach(function(e,r){var n=t[a][r];e.setAttribute("class","field-cell"),e.textContent="",0!==n&&(e.classList.add("field-cell--".concat(n)),e.textContent=n)})}),s.textContent=h.getScore(),v()}function m(){window.addEventListener("keydown",g,{once:!0})}function g(t){if(h.getStatus()===o.gameStatus.playing){switch(t.key){case"ArrowUp":h.moveUp();break;case"ArrowDown":h.moveDown();break;case"ArrowLeft":h.moveLeft();break;case"ArrowRight":h.moveRight()}m(),d(),v()}}function v(){n.classList.add("hidden"),i.classList.add("hidden"),r.classList.add("hidden"),h.gameStatus===o.gameStatus.win?i.classList.remove("hidden"):h.gameStatus===o.gameStatus.lose&&n.classList.remove("hidden")}a.addEventListener("click",function(){m(),h.gameStatus===o.gameStatus.idle?(h.start(),a.textContent="Restart",a.classList.replace("start","restart")):(h.restart(),a.textContent="Start",a.classList.replace("restart","start")),d()})}();
//# sourceMappingURL=index.02960446.js.map
