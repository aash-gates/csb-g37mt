(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),c=a(4),n=a.n(c),r=a(1),s=a(2),o=a(5),u=a(6),d=a(8),p=a(7);a(14);function b(e){var t="button ";return t+=e.double?"double":"",t+=e.triple?"triple":"",t+=e.operation?"operation":"",i.a.createElement("button",{className:t,onClick:function(){return e.click&&e.click(e.label)}},e.label)}a(15);function m(e){return i.a.createElement("div",{className:"display"},e.value)}a(16);var h={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).clearMemory=function(){l.setState(Object(s.a)({},h))},l.setOperation=function(e){if(0===l.state.current)l.setState({operation:e,current:1,clearDisplay:!0});else{var t="="===e,a=l.state.operation,i=Object(r.a)(l.state.values);i[0]=l.execOperation(i,a),i[1]=0,l.setState({displayValue:i[0],operation:t?null:e,current:t?0:1,clearDisplay:!t,values:i})}},l.execOperation=function(e,t){switch(t){case"+":return e[0]+e[1];case"-":return e[0]-e[1];case"*":return e[0]*e[1];case"/":return e[0]/e[1];default:return e[0]}},l.addDigit=function(e){if("."!==e||!l.state.displayValue.includes(".")){var t=("0"===l.state.displayValue||l.state.clearDisplay?"":l.state.displayValue)+e;if(l.setState({displayValue:t,clearDisplay:!1}),"."!==e){var a=l.state.current,i=parseFloat(t);console.log(i);var c=Object(r.a)(l.state.values);c[a]=i,l.setState({values:c})}}},l.state=Object(s.a)({},h),l}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"calculator"},i.a.createElement(m,{value:this.state.displayValue}),i.a.createElement(b,{label:"AC",click:this.clearMemory,triple:!0}),i.a.createElement(b,{label:"/",click:this.setOperation,operation:!0}),i.a.createElement(b,{label:"7",click:this.addDigit}),i.a.createElement(b,{label:"8",click:this.addDigit}),i.a.createElement(b,{label:"9",click:this.addDigit}),i.a.createElement(b,{label:"*",click:this.setOperation,operation:!0}),i.a.createElement(b,{label:"4",click:this.addDigit}),i.a.createElement(b,{label:"5",click:this.addDigit}),i.a.createElement(b,{label:"6",click:this.addDigit}),i.a.createElement(b,{label:"-",click:this.setOperation,operation:!0}),i.a.createElement(b,{label:"1",click:this.addDigit}),i.a.createElement(b,{label:"2",click:this.addDigit}),i.a.createElement(b,{label:"3",click:this.addDigit}),i.a.createElement(b,{label:"+",click:this.setOperation,operation:!0}),i.a.createElement(b,{label:"0",click:this.addDigit,double:!0}),i.a.createElement(b,{label:".",click:this.addDigit}),i.a.createElement(b,{label:"=",click:this.setOperation,operation:!0}))}}]),a}(i.a.Component),k=(a(17),document.getElementById("root"));n.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),k)}],[[9,1,2]]]);
//# sourceMappingURL=main.59e0f045.chunk.js.map