(this.webpackJsonppolcompass=this.webpackJsonppolcompass||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},428:function(e,t,n){},430:function(e,t,n){},431:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o),s=n(21),c=n.n(s),a=(n(130),n(17)),r=n(18),l=n(20),u=n(19);n.p;n.p,n(131),n(36),n.p,n(428);var d=n(1),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:"grid-area",children:Object(d.jsx)("div",{className:"pointElement",style:{fontSize:14,"line-height":"50%",textAlign:"center",top:"50%",transform:"translate("+.5*this.props.economic+"%,"+-.5*this.props.social+"%)",paddingTop:"50.5%",paddingBottom:"49.5%"},children:"\ud83c\udfb1"})}),Object(d.jsxs)("div",{children:[this.props.economic," , ",this.props.social," "]})]})}}]),n}(o.Component),f=(n(430),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)(o.Fragment,{children:Object(d.jsxs)("div",{className:"question container-fluid",children:[this.props.questionString,Object(d.jsxs)("div",{className:"index",children:[this.props.index,"/24"]})]})})}}]),n}(o.Component)),p=n(55),b=(n(431),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)(o.Fragment,{children:Object(d.jsx)("div",{onClick:this.props.clickHandler,className:"answerButton",style:{backgroundColor:this.props.color},children:this.props.answer})})}}]),n}(o.Component)),j=(n(432),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).chooseAppropriateClickHandler=function(e,t){return o.props.clickHandlerFunctions[o.props.question.affects].bind(Object(p.a)(o),e*t*Number(o.props.question.direction))},o}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"questionArea",children:Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)(b,{answer:"Totally agree",questionHandler:this.nextQuestion,color:"seagreen",clickHandler:this.chooseAppropriateClickHandler(1,2)}),Object(d.jsx)(b,{answer:"Agree",questionHandler:this.nextQuestion,clickHandler:this.chooseAppropriateClickHandler(1,1),color:"darkseagreen"}),Object(d.jsx)(b,{answer:"Unsure/Neutral",questionHandler:this.nextQuestion,color:"sandybrown"}),Object(d.jsx)(b,{answer:"Disagree",questionHandler:this.nextQuestion,color:"lightcoral",clickHandler:this.chooseAppropriateClickHandler(-1,1)}),Object(d.jsx)(b,{answer:"Totally Disagree",questionHandler:this.nextQuestion,color:"indianred",clickHandler:this.chooseAppropriateClickHandler(-1,2)})]})})}}]),n}(o.Component)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).changeEconomicStateBy=function(e){o.nextQuestion(),o.setState({economic:o.state.economic+e})},o.changeSocialStateBy=function(e){o.nextQuestion(),o.setState({social:o.state.social+e})},o.nextQuestion=function(){o.state.questionIndex<24&&(o.setState({questionIndex:o.state.questionIndex+1}),console.log("next"))},o.state={social:0,economic:0,questionIndex:0},o.questions={0:{question:"Taxation is theft",affects:"economic",direction:1},1:{question:"The state should jail people for possessing illegal drugs",affects:"social",direction:1},2:{question:"I support a carbon tax",affects:"economic",direction:-1},3:{question:"It would be better if the governement controlled the economy",affects:"economic",direction:-1},4:{question:"Sex work involving consenting adults should be legal",affects:"social",direction:-1},5:{question:"Countries like China are doing a better job at governing than countries like the United States or Canada",affects:"social",direction:1},6:{question:"A minimum wage set by the gouvernment is a bad idea : let people negotiate wages on their own",affects:"economic",direction:1},7:{question:"Gay couples should be able to adopt",affects:"social",direction:-1},8:{question:"Women dresses today are too revealing",affects:"social",direction:1},9:{question:"Corporations are unfairly exploiting their workers",affects:"economic",direction:-1},10:{question:"Charter schools are a better solution than a public education system",affects:"economic",direction:1},11:{question:"People who say things I consider objectionable should be punished",affects:"social",direction:1},12:{question:"Trans people should live by the gender they want and be legally recognized as it ",affects:"social",direction:-1},13:{question:"The government should ensure everyone gets enough to live",affects:"economic",direction:-1},14:{question:"Rent control is a good idea",affects:"economic",direction:-1},15:{question:"If you have nothing to hide, you have nothing to fear",affects:"social",direction:1},16:{question:"Access to abortion should be restricted ",affects:"social",direction:1},17:{question:"We should welcome immigrants and refugees",affects:"social",direction:-1},18:{question:"Government should never subisize businesses",affects:"economic",direction:1},19:{question:"The government should restrict the sales of weapons",affects:"social",direction:1},20:{question:"It would be better if there were less things in the way of our government and our police officiers",affects:"social",direction:1},21:{question:"I support universal healthcare",affects:"economic",direction:-1},22:{question:"If someone else's house burns, it is not my problem and I should not pay for the carelessness of others",affects:"economic",direction:1},23:{question:"The police and the courts should be handled by the free markets and paid for by voluntarily individuals",affects:"economic",direction:1},24:{question:"Black lives matter",affects:"social",direction:-1}},o}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xl-5",children:Object(d.jsx)(h,{economic:this.state.economic,social:this.state.social})}),Object(d.jsx)("div",{className:"col-xl-7 qContainer",children:Object(d.jsx)(f,{questionString:this.questions[this.state.questionIndex].question,index:this.state.questionIndex})})]})}),Object(d.jsx)(j,{question:this.questions[this.state.questionIndex],questionHandler:this.nextQuestion,clickHandlerFunctions:{economic:this.changeEconomicStateBy,social:this.changeSocialStateBy}})]})}}]),n}(o.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,434)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),g()}},[[433,1,2]]]);
//# sourceMappingURL=main.12ef57e8.chunk.js.map