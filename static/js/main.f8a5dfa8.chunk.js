(this.webpackJsonppolcompass=this.webpackJsonppolcompass||[]).push([[0],{130:function(e,t,o){},131:function(e,t,o){},428:function(e,t,o){},430:function(e,t,o){},431:function(e,t,o){},432:function(e,t,o){},433:function(e,t,o){"use strict";o.r(t);var n=o(2),i=o.n(n),s=o(21),c=o.n(s),a=(o(130),o(17)),r=o(18),l=o(20),u=o(19);o.p;o.p,o(131),o(36),o.p,o(428);var d=o(1),h=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){return Object(a.a)(this,o),t.call(this,e)}return Object(r.a)(o,[{key:"render",value:function(){return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"grid-area",children:Object(d.jsx)("div",{className:"pointElement",style:{fontSize:14,"line-height":"50%",textAlign:"center",top:"50%",transform:"translate("+.5*this.props.economic+"%,"+-.5*this.props.social+"%)",paddingTop:"50.5%",paddingBottom:"49.5%"},children:"\ud83c\udfb1"})}),Object(d.jsxs)("div",{children:[this.props.economic," , ",this.props.social," "]})]})}}]),o}(n.Component),f=(o(430),function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){return Object(a.a)(this,o),t.call(this,e)}return Object(r.a)(o,[{key:"render",value:function(){return Object(d.jsx)(n.Fragment,{children:Object(d.jsxs)("div",{className:"question container-fluid",children:[this.props.questionString,Object(d.jsxs)("div",{className:"index",children:[this.props.index,"/31"]})]})})}}]),o}(n.Component)),p=o(55),b=(o(431),function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){return Object(a.a)(this,o),t.call(this,e)}return Object(r.a)(o,[{key:"render",value:function(){return Object(d.jsx)(n.Fragment,{children:Object(d.jsx)("div",{onClick:this.props.clickHandler,className:"answerButton",style:{backgroundColor:this.props.color},children:this.props.answer})})}}]),o}(n.Component)),m=(o(432),function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(a.a)(this,o),(n=t.call(this,e)).chooseAppropriateClickHandler=function(e,t){return n.props.clickHandlerFunctions[n.props.question.affects].bind(Object(p.a)(n),e*t*Number(n.props.question.direction))},n}return Object(r.a)(o,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"questionArea",children:Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(b,{answer:"Totally agree",questionHandler:this.nextQuestion,color:"#81D799",clickHandler:this.chooseAppropriateClickHandler(1,2)}),Object(d.jsx)(b,{answer:"Agree",questionHandler:this.nextQuestion,clickHandler:this.chooseAppropriateClickHandler(1,1),color:"#BAE6C2"}),Object(d.jsx)(b,{answer:"Unsure/Neutral",questionHandler:this.nextQuestion,color:"#EEE573"}),Object(d.jsx)(b,{answer:"Disagree",questionHandler:this.nextQuestion,color:"#FFADAB",clickHandler:this.chooseAppropriateClickHandler(-1,1)}),Object(d.jsx)(b,{answer:"Totally Disagree",questionHandler:this.nextQuestion,color:"#EE7373",clickHandler:this.chooseAppropriateClickHandler(-1,2)})]})})}}]),o}(n.Component)),j=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(a.a)(this,o),(n=t.call(this,e)).changeEconomicStateBy=function(e){n.nextQuestion(),n.setState({economic:n.state.economic+e})},n.changeSocialStateBy=function(e){n.nextQuestion(),n.setState({social:n.state.social+e})},n.nextQuestion=function(){n.state.questionIndex<31&&(n.setState({questionIndex:n.state.questionIndex+1}),console.log("next"))},n.state={social:0,economic:0,questionIndex:0},n.questions={0:{question:"Taxation is theft",affects:"economic",direction:1},1:{question:"The state should jail people for possessing illegal drugs",affects:"social",direction:1},2:{question:"I support a carbon tax",affects:"economic",direction:-1},3:{question:"It would be better if the governement controlled the economy",affects:"economic",direction:-1},4:{question:"Sex work involving consenting adults should be legal",affects:"social",direction:-1},5:{question:"Countries like China are doing a better job at governing than countries like the United States or Canada",affects:"social",direction:1},6:{question:"A minimum wage set by the gouvernment is a bad idea : let people negotiate wages on their own",affects:"economic",direction:1},7:{question:"Gay couples should be able to adopt",affects:"social",direction:-1},8:{question:"Women dresses today are too revealing",affects:"social",direction:1},9:{question:"Corporations are unfairly exploiting their workers",affects:"economic",direction:-1},10:{question:"Charter schools are a better solution than a public education system",affects:"economic",direction:1},11:{question:"People who say things I consider objectionable should be punished",affects:"social",direction:1},12:{question:"Trans people should live by the gender they want and be legally recognized as it ",affects:"social",direction:-1},13:{question:"The government should ensure everyone gets enough to live",affects:"economic",direction:-1},14:{question:"Rent control is a good idea",affects:"economic",direction:-1},15:{question:"If you have nothing to hide, you have nothing to fear",affects:"social",direction:1},16:{question:"Access to abortion should be restricted ",affects:"social",direction:1},17:{question:"We should welcome immigrants and refugees",affects:"social",direction:-1},18:{question:"Government should never subisize businesses",affects:"economic",direction:1},19:{question:"The government should restrict the sales of weapons",affects:"social",direction:1},20:{question:"It would be better if there were less things in the way of our government and our police officiers",affects:"social",direction:1},21:{question:"I support universal healthcare",affects:"economic",direction:-1},22:{question:"If someone else's house burns, it is not my problem and I should not pay for the carelessness of others",affects:"economic",direction:1},23:{question:"The police and the courts should be handled by the free markets and paid for by voluntarily individuals",affects:"economic",direction:1},24:{question:"Black lives matter",affects:"social",direction:-1},25:{question:"Land property isn't a legitimate form of property",affects:"economic",direction:-1},26:{question:"Food supply should be managed by the state",affects:"economic",direction:-1},27:{question:"Sick and suffering people should be able to seek medical assistance to end their own lives",affects:"social",direction:-1},28:{question:"Young boys should not be circumcised until they are mature to make this decision for themselves",affects:"social",direction:-1},29:{question:"Forcing children to hug or kiss relatives is not okay",affects:"social",direction:-1},30:{question:"Felons should not be able to vote",affects:"social",direction:1},31:{question:"Boycotts are a better way to hold coroporations accountable than government regulation",affects:"economic",direction:1}},n}return Object(r.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xl-5",children:Object(d.jsx)(h,{economic:this.state.economic,social:this.state.social})}),Object(d.jsx)("div",{className:"col-xl-7 qContainer",children:Object(d.jsx)(f,{questionString:this.questions[this.state.questionIndex].question,index:this.state.questionIndex})})]})}),Object(d.jsx)(m,{question:this.questions[this.state.questionIndex],questionHandler:this.nextQuestion,clickHandlerFunctions:{economic:this.changeEconomicStateBy,social:this.changeSocialStateBy}})]})}}]),o}(n.Component),g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,434)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;o(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),g()}},[[433,1,2]]]);
//# sourceMappingURL=main.f8a5dfa8.chunk.js.map