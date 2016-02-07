/*
 *  PlotJs
 *  Abdessalem Boukil 2016
 *  The GNU General Public License v3.0
 *  http://abdesaslem.github.io/PlotJs/
 *
 */


!function(){function t(t,e){var n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}MATH_EXTENDED={},MATH_EXTENDED.sin=Math.sin,MATH_EXTENDED.cos=Math.cos,MATH_EXTENDED.tan=Math.tan,MATH_EXTENDED.asin=Math.asin,MATH_EXTENDED.acos=Math.acos,MATH_EXTENDED.atan=Math.atan,MATH_EXTENDED.abs=Math.abs,MATH_EXTENDED.floor=Math.floor,MATH_EXTENDED.ceil=Math.ceil,MATH_EXTENDED.exp=Math.exp,MATH_EXTENDED.sqrt=Math.sqrt,MATH_EXTENDED.max=Math.max,MATH_EXTENDED.min=Math.min,MATH_EXTENDED.sec=function(t){return 1/Math.cos(t)},MATH_EXTENDED.csc=function(t){return 1/Math.sin(t)},MATH_EXTENDED.cot=function(t){return 1/Math.tan(t)},MATH_EXTENDED.asec=function(t){return Math.acos(1/t)},MATH_EXTENDED.acsc=function(t){return Math.asin(1/t)},MATH_EXTENDED.acot=function(t){return Math.atan(1/t)},MATH_EXTENDED.ln=function(t){return Math.log(t)},MATH_EXTENDED.log=function(t){return Math.log(t)/Math.log(10)},MATH_EXTENDED.sinh=function(t){return(Math.exp(t)-Math.exp(-t))/2},MATH_EXTENDED.cosh=function(t){return(Math.exp(t)+Math.exp(-t))/2},MATH_EXTENDED.tanh=function(t){return(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))},MATH_EXTENDED.asinh=function(t){return Math.log(t+Math.sqrt(t*t+1))},MATH_EXTENDED.acosh=function(t){return Math.log(t+Math.sqrt(t*t-1))},MATH_EXTENDED.atanh=function(t){return.5*Math.log((1+t)/(1-t))},MATH_EXTENDED.sech=function(t){return 2/(Math.exp(t)+Math.exp(-t))},MATH_EXTENDED.csch=function(t){return 2/(Math.exp(t)-Math.exp(-t))},MATH_EXTENDED.coth=function(t){return(Math.exp(t)+Math.exp(-t))/(Math.exp(t)-Math.exp(-t))},MATH_EXTENDED.asech=function(t){return Math.log(1/t+Math.sqrt(1/t/t-1))},MATH_EXTENDED.acsch=function(t){return Math.log(1/t+Math.sqrt(1/t/t+1))},MATH_EXTENDED.acoth=function(t){return.5*Math.log((1+t)/(1-t))},Number.prototype.round=function(t){return+(Math.round(this+"e+"+t)+"e-"+t)},Plot=function(){function e(){if(1==D)return Plot.prototype.destroy(),!1;var t=document.createElement("div");t.style.height=window.innerHeight+"px",t.style.width=window.innerWidth+"px",t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.zIndex=9999999,document.body.appendChild(t),y.height=window.innerHeight,y.width=window.innerWidth,y.container=t;for(var e=new Plot(y,!0),n=0;n<m.length;n++)e.plot({equation:m[n].fn,borderThickness:m[n].settings.borderThickness,borderColor:m[n].settings.borderColor,resolution:m[n].settings.resolution})}function n(){c.clearRect(0,0,x.width,x.height),c.beginPath(),c.fillStyle=y.backgroundColor,c.fillRect(0,0,x.width,x.height),c.beginPath(),c.moveTo(E.x,0),c.lineTo(E.x,height),c.lineWidth=y.strokeThickness,c.strokeStyle=strokeColor,c.stroke(),c.beginPath(),c.moveTo(0,E.y),c.lineTo(width,E.y),c.lineWidth=y.strokeThickness,c.strokeStyle=strokeColor,c.stroke(),c.save(),c.translate(E.x,E.y),tickHeight=y.tickHeight,tickFontSize=y.fontSize;var t=l/20,e=s(t);t=Math.round(t*e)/e,T=t*u*y.keyNavSpeed;for(var n=-1*t;n>p&&y.guidelines;n-=t){tickPos=n*u,n%thickLinePer==0?(c.beginPath(),c.moveTo(tickPos,-1*E.y),c.lineTo(tickPos,height-E.y),c.lineWidth=y.strokeThickness,c.strokeStyle=y.lineColor1,c.stroke()):(c.beginPath(),c.moveTo(tickPos,-1*E.y),c.lineTo(tickPos,height-E.y),c.lineWidth=1,c.strokeStyle=y.lineColor2,c.stroke()),c.beginPath(),c.moveTo(tickPos,tickHeight/2*-1),c.lineTo(tickPos,tickHeight/2),c.lineWidth=y.tickThickness,c.strokeStyle=y.tickColor,c.stroke();var i=Math.round(n*e)/e;c.font=tickFontSize+"px Lucida Sans Unicode",c.fillStyle=y.fontColor,c.fillText(i,tickPos-tickFontSize/2,-10)}for(var n=t;l+p>n&&y.guidelines;n+=t){tickPos=n*u,n%thickLinePer==0?(c.beginPath(),c.moveTo(tickPos,-1*E.y),c.lineTo(tickPos,height-E.y),c.lineWidth=y.strokeThickness,c.strokeStyle=y.lineColor1,c.stroke()):(c.beginPath(),c.moveTo(tickPos,-1*E.y),c.lineTo(tickPos,height-E.y),c.lineWidth=1,c.strokeStyle=y.lineColor2,c.stroke()),c.beginPath(),c.moveTo(tickPos,tickHeight/2*-1),c.lineTo(tickPos,tickHeight/2),c.lineWidth=y.tickThickness,c.strokeStyle=y.tickColor,c.stroke();var i=Math.round(n*e)/e;c.font=tickFontSize+"px Lucida Sans Unicode",c.fillStyle=y.fontColor,c.fillText(i,tickPos-tickFontSize/2,-10)}for(var n=-1*t;n>k&&y.guidelines;n-=t){tickPos=n*u,n%thickLinePer==0?(c.beginPath(),c.moveTo(-1*E.x,tickPos),c.lineTo(width-E.x,tickPos),c.lineWidth=y.strokeThickness,c.strokeStyle=y.lineColor1,c.stroke()):(c.beginPath(),c.moveTo(-1*E.x,tickPos),c.lineTo(width-E.x,tickPos),c.lineWidth=1,c.strokeStyle=y.lineColor2,c.stroke()),c.beginPath(),c.moveTo(tickHeight/2*-1,tickPos),c.lineTo(tickHeight/2,tickPos),c.lineWidth=y.tickThickness,c.strokeStyle=y.tickColor,c.stroke();var i=Math.round(n*e)/e;c.font=tickFontSize+"px Lucida Sans Unicode",c.fillStyle=y.fontColor,c.fillText(-1*i,-30,tickPos-tickFontSize/2)}for(var n=t;h+k>n&&y.guidelines;n+=t){tickPos=n*u,n%thickLinePer==0?(c.beginPath(),c.moveTo(-1*E.x,tickPos),c.lineTo(width-E.x,tickPos),c.lineWidth=y.strokeThickness,c.strokeStyle=y.lineColor1,c.stroke()):(c.beginPath(),c.moveTo(-1*E.x,tickPos),c.lineTo(width-E.x,tickPos),c.lineWidth=1,c.strokeStyle=y.lineColor2,c.stroke()),c.beginPath(),c.moveTo(tickHeight/2*-1,tickPos),c.lineTo(tickHeight/2,tickPos),c.lineWidth=y.tickThickness,c.strokeStyle=y.tickColor,c.stroke();var i=Math.round(n*e)/e;c.font=tickFontSize+"px Lucida Sans Unicode",c.fillStyle=y.fontColor,c.fillText(-1*i,-30,tickPos-tickFontSize/2)}c.restore()}function i(){var t=Array.prototype.slice.call(arguments);if(M.style.transform="",M.style.left="0px",M.style.top="0px",P.clearRect(0,0,x.width,x.height),"object"==typeof t[0]&&"transform"==t[1]){var e=t[0];if(0==e.x&&0==e.y)return;xUnits=e.x/u*-1,yUnits=e.y/u*-1,p+=xUnits,d+=xUnits,k+=yUnits,g+=yUnits,o(),n();for(var i=0;i<m.length;i++)a(m[i].fn,m[i].settings);y.dispCallback(e)}else if("object"==typeof t[0]&&"zoom"==t[1]&&"string"==typeof t[2]){console.log(Y);var r=t[2],s=0;"in"==r?s=-1:"out"==r&&(s=1),p=Math.abs(U+s)*p,d=Math.abs(U+s)*d,k=Math.abs(U+s)*k,g=Math.abs(U+s)*g,l=d-p,h=g-k,o(),n();for(var i=0;i<m.length;i++)a(m[i].fn,m[i].settings);y.zommCallback()}}function o(){E.y=k/h*height*-1,E.x=p/l*width*-1,u=width/l,f=l/2e3}function r(t){var e={x:(t.x-contCords.x)/u+p,y:(t.y-contCords.y)/u+k};return e}function s(t){for(var e=0;;e++){if(t>1)return Math.pow(10,e);t*=10}}function a(t,e){c.save(),c.translate(E.x,E.y),c.beginPath();for(var n=!0,i=0,o=p;o<(width-E.x)/u;o+=e.resolution){var r=o*u,s=t(o)*u*-1;h>s-1500&&s+1500>-1500&&(t(o)-i<h/2?n?(n=!1,c.moveTo(r,s)):c.lineTo(r,s):n=!0,i=t(o))}c.lineWidth=e.borderThickness,c.strokeStyle=e.borderColor,c.stroke(),c.restore()}var l,c,h,u,f,d,p,g,k,T,y=[],E={},m=[],v={container:"",max:21,min:-21,strokeThickness:3,strokeColor:"black",lineColor1:"#AAAAAA",lineColor2:"#DDDDDD",backgroundColor:"white",zoom:!0,navigation:!0,height:"400px",width:"400px",errorReporting:!0,foregroundColor:"#EEEEEE",guidelines:!0,tickThickness:2,tickColor:"black",tickHeight:16,keyNavSpeed:1,fontSize:10,fontColor:"black",dispCallback:function(t){return!0},zommCallback:function(){return!0}};if(arguments[0]&&"object"==typeof arguments[0]&&(y=t(v,arguments[0]),("undefined"==typeof y.container||null===y.container||-1==y.container.constructor.toString().indexOf("Div"))&&y.errorReporting))throw new Error("The container is not valid, the container should be an empty div");var A=y.container;A.style.height=parseInt(y.height,10)+"px",A.style.width=parseInt(y.width,10)+"px","absolute"!=window.getComputedStyle(A).position&&"fixed"!=window.getComputedStyle(A).position&&(A.style.position="relative");var M=document.createElement("div");M.style.position="relative",M.style.height="100%",M.style.width="100%",A.appendChild(M);var x=document.createElement("canvas");x.setAttribute("height",parseInt(y.height,10)+"px"),x.setAttribute("width",parseInt(y.width,10)+"px"),M.appendChild(x);var b=document.createElement("canvas");b.setAttribute("height",x.height),b.setAttribute("width",x.width),b.style.position="absolute",b.style.top="0px",b.style.left="0px",M.appendChild(b);var w=document.createElement("div");w.style.position="absolute",w.style.bottom="2%",w.style.left="2%",w.style.zIndex=444,w.style.cursor="pointer",w.style.opacity="0.4";var D=arguments[1];1==D?(w.title="Go Back",w.innerHTML='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABCUlEQVRYhe2XUQrCMBAFR7xj623aI0jFIxTEekQhfpiUGDebhKYq2Af7k6XMlA1lC8/sgCNwQE+X6AP0iX4DDJY5w0+AAe5Aq8BNhoBRJBrLMMDZSRztgStJovP6OQKShA93NcQavkQX9HIFfIk2wphHHpOYgrNSAQPcEi84R5KQqlQgLO2eZUksEVDhLtcVBabUw+GFW2ME/RJ4DQFRIhdeS+BFogReU0Adx5YtW/4rP/Eh+uqnuFSihsAbvERiqUAU7vLVhUTaXmsKqCtZDrzGCESJ2N7+kbU8Bv/Ej0kLMGp2gkSuQB+cSxIjwB64KPBQIkcghEsSF8vGSYwK3JdIJQb3JUYHfwAnXYXTAAFAnAAAAABJRU5ErkJggg=="/>'):(w.title="Go Fullscreen",w.innerHTML='<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACI0lEQVRYhbXXTYhOURzH8c8Ys5iiWQ0SC2KhsbCw8pYFGxElO0lYWCgbG2pqKGEzJQsvWShZKDZko2GhSWlKiZkGKVaTspokNDOPxb1Ht6fnueeeO8/zr1vPOf3u+X5P95x7zwMvMY1XeIjruIDj2IctWIUe6bUU67EXp3EZ93PWVzyH92hErllsTACvwyf8jYw7Ac8qwLcnzhyGK0zsKdwsCcxjRw14VYm7ZM+7LHRbvecPZ7BQMvYlOBoRaOBODYkYvJFnbKsgkCpRBd7AYVjR1Dm3SIkYvLgz/i/u2bzjPI5EJMrWRJVnvgs/8/aGcOPbHB6qjkQMfrGQ3ZlL9IeOwRaziUncKkikwEOtbdGXJPEBfXluMhGeVK0kpmTfh1Cr8bEb8FYSzfCixHQ34EWJiTbwosQURjoNT6m6r+1KA/d2a/BY9eKe7CCxvCQ3gBc41Q14WFzjbSQG8DrPLHRKohneTqIID9eiJdrBw/WkkB1vk6kk0Yc1ifA/OFjIXynJtpNYGX5sxgw21YSHupogcQLfQmNPHprJZWLwQy3gVSVO5vD5vN0Px5oAdeFVJeYL7SE4V3JDKjzUtQpjNnAARjsMT5E4Cw8i8FYLrlMSozBWEpiTrZG6NYRfJeM/Ivt8llnWlRjC98jYb+BHJPQb77AsAT5YAR62vs+yf7JjsnfAiGyv7pYdHJckzTurHtnhZCv2y/b/MG7gsezV/QWT/wBzNcUpz04e1gAAAABJRU5ErkJggg=="/>'),A.appendChild(w);var P=b.getContext("2d"),C=document.createElement("div");C.style.height=parseInt(y.height,10)/25+"px",C.style.width=parseInt(y.width,10)/5+"px",C.style.position="absolute",C.style.bottom="0px",C.style.right="0px",C.style.border="1px solid black",C.style.backgroundColor="white",A.appendChild(C);var H=Math.random(0,999);C.innerHTML='<span id="plotjs-valuesX'+H+'" style="line-height:'+parseInt(y.height,10)/25+'px;position:absolute;left:0;width:50%;height:100%;text-align:center;font-size:12px;">X:&nbsp;&nbsp;</span><span id="plotjs-valuesY'+H+'" style="line-height:'+parseInt(y.height,10)/25+'px;position:absolute;right:0;width:50%;height:100%; text-align:center;font-size:12px;">Y:&nbsp;&nbsp;</span>';var S=document.getElementById("plotjs-valuesX"+H),X=document.getElementById("plotjs-valuesY"+H);y.border&&(A.style.border="2px solid black"),A.style.overflow="hidden",A.style.backgroundColor=y.foregroundColor,contCords=A.getBoundingClientRect(),c=x.getContext("2d"),width=x.width,height=x.height,d=y.max,p=y.min,l=d-p,g=height/2/(width/l),k=height/2/(width/l)*-1,h=g-k,strokeColor=y.strokeColor,lineUnit=y.lineUnit,tickHeight=15,o(),thickLinePer=8;var z={},N=!1,Y=1,U=.2;n(),y.navigation&&(M.style.cursor="grab"),M.addEventListener("mousedown",function(t){1==t.which&&y.navigation&&(M.style.cursor="grabbing",z.x=t.screenX,z.y=t.screenY,N=!0)}),M.addEventListener("mouseup",function(t){if(N){M.style.cursor="grab";var e={};e.x=t.screenX-z.x,e.y=t.screenY-z.y,N=!1,i(e,"transform")}}),M.addEventListener("mousemove",function(t){if(N){var e={};e.x=t.screenX-z.x,e.y=t.screenY-z.y,t.ctrlKey||(M.style.top=e.y+"px"),t.shiftKey||(M.style.left=e.x+"px")}else{var n=r({x:t.clientX,y:t.clientY});P.clearRect(0,0,x.width,x.height),P.save(),P.translate(E.x,E.y);for(var i=0;i<m.length;i++)fx=m[i].fn(n.x),P.beginPath(),P.fillStyle=m[Math.abs(m.length-i)-1].settings.borderColor,P.arc(n.x*u,fx*u*-1,5,0,2*Math.PI),P.fill(),S.innerHTML="X: "+n.x.toFixed(2),X.innerHTML="Y: "+fx.toFixed(2);P.restore()}}),M.addEventListener("wheel",function(t){return y.zoom?(deltaY=t.deltaY,t.preventDefault(),scrollTime=400,void(Math.abs(deltaY)==deltaY?(Y=parseFloat(Y)-U,M.style.OTransition="-o-transform "+scrollTime/1e3+"s ease",M.style.webkitTransition="-webkit-transform "+scrollTime/1e3+"s ease",M.style.MozTransition="-moz-transform "+scrollTime/1e3+"s ease",M.style.msTransition="-webkit-transform "+scrollTime/1e3+"s ease",M.style.transition="transform "+scrollTime/1e3+"s ease",M.style.webkitTransform="scale("+(1-U)+")",M.style.msTransform="scale("+(1-U)+")",M.style.MozTransform="scale("+(1-U)+")",M.style.OTransform="scale("+(1-U)+")",M.style.transform="scale("+(1-U)+")",M.style.transform="scale("+(1-U)+")",setTimeout(function(){M.style.OTransition="",M.style.webkitTransition="",M.style.MozTransition="",M.style.msTransition="",M.style.transition="";var e={x:t.screenX,y:t.screenY};i(e,"zoom","out")},scrollTime)):(Y=parseFloat(Y)+U,M.style.OTransition="-o-transform "+scrollTime/1e3+"s ease",M.style.webkitTransition="-webkit-transform "+scrollTime/1e3+"s ease",M.style.MozTransition="-moz-transform "+scrollTime/1e3+"s ease",M.style.msTransition="-webkit-transform "+scrollTime/1e3+"s ease",M.style.transition="transform "+scrollTime/1e3+"s ease",M.style.transform="scale("+(1+U)+")",M.style.webkitTransform="scale("+(1+U)+")",M.style.msTransform="scale("+(1+U)+")",M.style.MozTransform="scale("+(1+U)+")",M.style.OTransform="scale("+(1+U)+")",M.style.transform="scale("+(1+U)+")",setTimeout(function(){M.style.OTransition="",M.style.webkitTransition="",M.style.MozTransition="",M.style.msTransition="",M.style.transition="";var e={x:t.screenX,y:t.screenY};i(e,"zoom","in")},scrollTime)))):!1}),M.addEventListener("mouseenter",function(){this.setAttribute("class","plotjs-hovered")}),M.addEventListener("mouseleave",function(){this.setAttribute("class","")}),document.body.addEventListener("keydown",function(t){if("plotjs-hovered"!=M.getAttribute("class"))return!1;if(!y.navigation)return!1;var n,o=t.which;if(38==o||39==o||37==o||40==o||122==o||27==o)switch(o){case 38:t.preventDefault(),n={x:0,y:T},i(n,"transform");break;case 39:t.preventDefault(),n={x:-1*T,y:0},i(n,"transform");break;case 37:t.preventDefault(),n={x:T,y:0},i(n,"transform");break;case 40:t.preventDefault(),n={x:0,y:-1*T},i(n,"transform");break;case 122:t.preventDefault(),e();break;case 27:1==D&&e()}}),w.addEventListener("click",function(){e()}),M.addEventListener("dblclick",function(){e()}),Plot.prototype.plot=function(e){var n=Math.round(Date.now()*Math.random(0,1e4)),i={borderColor:"green",borderThickness:3,equation:"function"==typeof e.equation?function(){}:"",resolution:f};if("function"==typeof e)m.push({id:n,fn:e,settings:i}),a(e,i);else if("string"==typeof e){var o=new Equation(e);o=o.getFunction(),m.push({id:n,fn:o,settings:i}),a(o,i)}else{if("object"!=typeof e||"undefined"==typeof e.equation)throw new Error("Bad parameters to Plot method");var r=t(i,e);if("function"==typeof r.equation)m.push({id:n,fn:r.equation,settings:r}),a(r.equation,r);else{if("string"!=typeof r.equation)throw new Error("Bad parameters to Plot method");var o=new Equation(r.equation);o=o.getFunction(),m.push({id:n,fn:o,settings:i}),a(o,i)}}return{id:n}},Plot.prototype.destroyFunction=function(t){if("undefined"==typeof t||"undefined"==typeof t.id)throw new Error("Bad parameters to destoryFunction");for(var e=0;e<m.length;e++)if(m[e].id==t.id){m.splice(e,1),n();for(var i=0;i<m.length;i++)a(m[i].fn,m[i].settings);return!0}return!1},Plot.prototype.clear=function(){return m=[],n(),!0},Plot.prototype.destroy=function(){return A.remove(),!0}},Equation=function(t){if(!t)throw"You Have To Write An Equation";var e=function(t){for(var i=0;i<t.length;i++)n(t[i])&&e(t[i]);for(var i=0;i<t.length;i++)void 0!=MATH_EXTENDED[t[i]]&&(t[i]="MATH_EXTENDED."+t[i].toLowerCase(),t.splice(i,2,new Array("(",t[i],t[i+1],")")),i--);return t},n=function(t){return null==t?0:-1==t.constructor.toString().indexOf("Array")?!1:!0},o=function(t){for(var e="",i=0;i<t.length;i++)e+=n(t[i])?o(t[i]):t[i];return e},r=function(t,e){for(var n=0;n<t.length;n++)if(t[n]==e)return!0;return!1},s=function(t){for(e=0;e<t.length;e++)n(t[e])&&s(t[e]);for(var e=0;e<t.length;e++)"^"==t[e]&&(t.splice(e-1,3,new Array("Math.pow",new Array("(",t[e-1],",",t[e+1],")"))),e-=2);return t},a=function(t){for(var e=-1;r(t,"(")||r(t,")");){for(e=-1,i=0;i<t.length;i++){if("("==t[i]&&(e=i),")"==t[i]&&-1==e)throw"Unmatched right parenthesis )";")"==t[i]&&-1!=e&&(t.splice(e,i-e+1,t.slice(e,i+1)),i=-1,e=-1)}if(-1!=e)throw"Unmatched left parenthesis ("}return t},l=function(t,n){var i,r;return r=t.replace(/ /g,""),r=r.replace(/([0-9])([x])/gi,"$1*$2"),r=r.replace(/(\))([x]|\()/gi,"$1*$2"),r=r.replace(/([0-9x])(\()/gi,"$1*$2"),r=r.replace(/([a-z0-9\.])([^a-z0-9\.])/gi,"$1 $2"),r=r.replace(/([^a-z0-9\.])([a-z0-9\.])/gi,"$1 $2"),r=r.replace(/(\-|\)|\()/g," $1 "),i=a(r.split(/ +/)),i=e(i),null==i?!1:(i=s(i),null==i?null:o(i))};return Equation.prototype.getFunction=function(){return this.eqFunction=new Function("x","return "+this.equation),this.eqFunction},this.oldEquation=t,this.equation=l(t),this}}();