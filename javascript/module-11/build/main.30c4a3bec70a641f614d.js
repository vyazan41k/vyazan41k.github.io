(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("RYXX"),n("e+qc");function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')};new(function(){function t(t){var e=t.selector,n=t.targetDate;this.selector=e,this.targetDate=n}var e,n,r;return e=t,(n=[{key:"resultTime",get:function(){var t=this;setInterval((function(){t.deltaTime=t.targetDate-new Date,t.timeCalc}),1e3)}},{key:"timeCalc",get:function(){return this.days=String(Math.floor(this.deltaTime/864e5)).padStart(2,"0"),this.hours=String(Math.floor(this.deltaTime%864e5/36e5)).padStart(2,"0"),this.mins=String(Math.floor(this.deltaTime%36e5/6e4)).padStart(2,"0"),this.secs=String(Math.floor(this.deltaTime%6e4/1e3)).padStart(2,"0"),this.updateClock}},{key:"updateClock",get:function(){o.days.textContent=this.days,o.hours.textContent=this.hours,o.mins.textContent=this.mins,o.secs.textContent=this.secs}}])&&a(e.prototype,n),r&&a(e,r),t}())({selector:"#timer-1",targetDate:new Date("Jan 1, 2021")}).resultTime;n("JBxO"),n("FdtR");var r=function(t){return new Promise((function(e){setTimeout((function(){e(t)}),t)}))},i=function(t){return console.log("Resolved after "+t+"ms")};r(2e3).then(i),r(1e3).then(i),r(1500).then(i);n("lmye"),n("D/wG"),n("wCa+");var s=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(t,e){return new Promise((function(n){n(t.map((function(t){return t.name===e?Object.assign({},t,{active:!t.active}):t})))}))},u=function(t){return console.table(t)};c(s,"Mango").then(u),c(s,"Lux").then(u);var l=function(t){return new Promise((function(e,n){var a,o,r=(a=200,o=500,Math.floor(Math.random()*(o-a+1)+a));setTimeout((function(){Math.random()>.3?e({id:t.id,time:r}):n(t.id)}),r)}))},d=function(t){var e=t.id,n=t.time;console.log("Transaction "+e+" processed in "+n+"ms")},m=function(t){console.warn("Error processing transaction "+t+". Please try again later.")};l({id:70,amount:150}).then(d).catch(m),l({id:71,amount:230}).then(d).catch(m),l({id:72,amount:75}).then(d).catch(m),l({id:73,amount:100}).then(d).catch(m)},RYXX:function(t,e){var n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={body:document.body,start:document.querySelector('button[data-action="start"]'),stop:document.querySelector('button[data-action="stop"]')},o=null;a.start.addEventListener("click",(function(){o=setInterval((function(){var t,e,o;t=n[(e=0,o=n.length-1,Math.floor(Math.random()*(o-e+1)+e))],a.body.style.backgroundColor=""+t}),1e3),a.start.disabled=!0})),a.stop.addEventListener("click",(function(){clearInterval(o),a.start.disabled=!1}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.30c4a3bec70a641f614d.js.map