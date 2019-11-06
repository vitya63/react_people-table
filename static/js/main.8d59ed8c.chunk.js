(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=n(4),u=n(5),i=n(6),s=n(9),b=n(7),d=n(10),m=n(1),f=n(8),h=function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json").then(function(e){return e.json()})};n(16),n(17);var p=function(e){var t=e.person,n=e.selectPerson,r=e.selectedPersonId,o="\n    Person\n    ".concat("m"===t.sex?"Person--male":"Person--female","\n    Person--lived-in-").concat(t.century,"\n  ");return+r===t.id&&(o+="  Person--selected"),a.a.createElement("tr",{className:o,onClick:n,id:t.id},a.a.createElement("td",null,t.id),a.a.createElement("td",{className:t.born<1650?"born-before-1650":"born-from-1650"},t.name),a.a.createElement("td",null,t.sex),a.a.createElement("td",null,t.born),a.a.createElement("td",null,t.died),a.a.createElement("td",{className:t.age>=65?"reached-65":"didn't-reach-65"},t.age),a.a.createElement("td",null,t.century),a.a.createElement("td",null,t.mother),a.a.createElement("td",null,t.father))};var y=function(e){var t=e.people,n=e.selectPerson,r=e.selectedPersonId;return a.a.createElement("table",{className:"PeopleTable"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Id"),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Sex"),a.a.createElement("th",null,"Born"),a.a.createElement("th",null,"Died"),a.a.createElement("th",null,"Age"),a.a.createElement("th",null,"Century"),a.a.createElement("th",null,"Mother"),a.a.createElement("th",null,"Father"))),a.a.createElement("tbody",null,t.map(function(e){return a.a.createElement(p,{person:e,key:e.id,selectPerson:n,selectedPersonId:r})})))},E=function(e){var t=e.changeSortMethod;return a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:function(){return t("by name")}},"Sort by name"),a.a.createElement("button",{type:"button",onClick:function(){return t("by id")}},"Sort by Id"),a.a.createElement("button",{type:"button",onClick:function(){return t("by sex")}},"Sort by sex"),a.a.createElement("button",{type:"button",onClick:function(){return t("by birth year")}},"Sort by birth year"),a.a.createElement("button",{type:"button",onClick:function(){return t("by year of death")}},"Sort by year of death"),a.a.createElement("button",{type:"button",onClick:function(){return t("by age")}},"Sort by age"),a.a.createElement("button",{type:"button",onClick:function(){return t("by century")}},"Sort by century"))};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var O=Object(f.a)([function(e){return e.people},function(e){return e.filterStr.toLowerCase()},function(e){return e.sortMethod}],function(e,t,n){return function(e,t){var n=null;switch(t){case"by name":n=Object(m.a)(e).sort(function(e,t){return e.name.localeCompare(t.name)});break;case"by id":n=Object(m.a)(e);break;case"by sex":n=Object(m.a)(e).sort(function(e){return"f"===e.sex?1:-1});break;case"by birth year":n=Object(m.a)(e).sort(function(e,t){return e.born-t.born});break;case"by year of death":n=Object(m.a)(e).sort(function(e,t){return e.died-t.died});break;case"by age":n=Object(m.a)(e).sort(function(e,t){return e.age-t.age});break;case"by century":n=Object(m.a)(e).sort(function(e,t){return e.century-t.century})}return n}(function(e,t){return e.filter(function(e){return e.name.toLowerCase().includes(t)||(e.mother||"").toLowerCase().includes(t)||(e.father||"").toLowerCase().includes(t)})}(e,t),n)}),P=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={people:[],selectedPersonId:0,filterStr:"",sortMethod:"by id"},n.selectPerson=function(e){var t=e.currentTarget.id;n.setState({selectedPersonId:t})},n.changeFilter=function(e){n.setState({filterStr:e.target.value})},n.changeSortMethod=function(e){e!==n.state.sortMethod&&n.setState({sortMethod:e})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h().then(function(t){var n=0;e.setState({people:t.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({id:n+=1},e,{age:e.died-e.born,century:Math.ceil(e.died/100)})})})})}},{key:"render",value:function(){var e=this.state,t=e.selectedPersonId,n=e.filterStr,r=O(this.state);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,a.a.createElement("span",null,"Number of people: "),this.state.people.length),a.a.createElement("input",{type:"text",value:n,onChange:this.changeFilter,placeholder:"Filter the people"}),a.a.createElement(E,{changeSortMethod:this.changeSortMethod}),a.a.createElement(y,{people:r,selectPerson:this.selectPerson,selectedPersonId:t}))}}]),t}(a.a.Component);c.a.render(a.a.createElement(P,{test:123}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.8d59ed8c.chunk.js.map