(this.webpackJsonppolcompass=this.webpackJsonppolcompass||[]).push([[0],{131:function(e,t,i){},132:function(e,t,i){},429:function(e,t,i){},431:function(e,t,i){},432:function(e,t,i){},433:function(e,t,i){},434:function(e,t,i){"use strict";i.r(t);var n=i(2),o=i.n(n),s=i(22),c=i.n(s),a=(i(131),i(4)),r=i(18),u=i(19),d=i(21),l=i(20);i.p;i.p,i(132),i(38),i.p,i(429);var f=i(1),p=function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(u.a)(i,[{key:"render",value:function(){return Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"grid-area",children:Object(f.jsx)("div",{className:"pointElement",style:{fontSize:20,"line-height":"50%",textAlign:"center",top:"50%",bottom:"50%",transform:"translate("+1*this.props.socioeconomique+"%,"+-1*this.props.identite+"%)",paddingTop:"50.5%",paddingBottom:"49.5%",maxWidth:"100%!important"},children:"\ud83c\udfb1"})}),Object(f.jsxs)("div",{children:[this.props.socioeconomique," , ",this.props.identite," "]})]})}}]),i}(n.Component),m=(i(431),function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(u.a)(i,[{key:"render",value:function(){return Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:"question container-fluid",children:[this.props.questionString,Object(f.jsxs)("div",{className:"index",children:[this.props.index,"/44"]})]})})}}]),i}(n.Component)),h=i(31),b=(i(432),function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).clickHandler=function(){n.props.clickHandler(),n.props.updater()},n}return Object(u.a)(i,[{key:"render",value:function(){return Object(f.jsx)(n.Fragment,{children:Object(f.jsx)("div",{onClick:this.clickHandler,className:"answerButton",style:{backgroundColor:this.props.color},children:this.props.answer})})}}]),i}(n.Component)),q=(i(433),function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).updateHandler=function(e,t,i,o){n.infos={lastAffected:n.props.question.affects,lastDirection:Number(n.props.question.direction),lastIntensity:t,lastAnswer:e,canGoBack:!0},console.log("update")},n.chooseUpdateInfos=function(e,t){return n.updateInfos.bind(Object(h.a)(n),e,t)},n.updateInfos=function(e,t){n.infos={lastAffected:n.props.question.affects,lastDirection:Number(n.props.question.direction),lastIntensity:t,lastAnswer:e,canGoBack:!0}},n.updateInfosBack=function(){n.infos.canGoBack=!1},n.chooseAppropriateClickHandler=function(e,t){return n.props.clickHandlerFunctions[n.props.question.affects].bind(Object(h.a)(n),e*t*Number(n.props.question.direction),1)},n.backHandler=function(){return n.infos.canGoBack?n.props.clickHandlerFunctions[n.infos.lastAffected.toString()].bind(Object(h.a)(n),-1*n.infos.lastAnswer*n.infos.lastIntensity*Number(n.infos.lastDirection),-1):n.props.clickHandlerFunctions[n.infos.lastAffected.toString()].bind(Object(h.a)(n),0,0)},n.infos={lastAffected:"socioeconomique",lastDirection:0,lastIntensity:0,lastAnswer:1,canGoBack:!1},n}return Object(u.a)(i,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"questionArea",children:Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)(b,{answer:"Compl\xe8tement d'accord",color:"#81D799",clickHandler:this.chooseAppropriateClickHandler(1,2),updater:this.chooseUpdateInfos(1,2)}),Object(f.jsx)(b,{answer:"D'accord",clickHandler:this.chooseAppropriateClickHandler(1,1),color:"#BAE6C2",updater:this.chooseUpdateInfos(1,1)}),Object(f.jsx)(b,{answer:"Ne se prononce pas",clickHandler:this.chooseAppropriateClickHandler(0,0),updater:this.chooseUpdateInfos(0,0),color:"#EEE573"}),Object(f.jsx)(b,{answer:"En d\xe9saccord",color:"#FFADAB",clickHandler:this.chooseAppropriateClickHandler(-1,1),updater:this.chooseUpdateInfos(-1,1)}),Object(f.jsx)(b,{answer:"Compl\xe8tement en d\xe9saccord",color:"#EE7373",clickHandler:this.chooseAppropriateClickHandler(-1,2),updater:this.chooseUpdateInfos(-1,2)}),Object(f.jsx)(b,{answer:"Retour",color:"#ffa8d7",clickHandler:this.backHandler(),updater:this.updateInfosBack})]})}),Object(f.jsx)("div",{className:"questionAreaMobile",children:Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)(b,{answer:"\ud83d\ude03",color:"#81D799",clickHandler:this.chooseAppropriateClickHandler(1,2),updater:this.chooseUpdateInfos(1,2)}),Object(f.jsx)(b,{answer:"\ud83d\ude42",clickHandler:this.chooseAppropriateClickHandler(1,1),color:"#BAE6C2",updater:this.chooseUpdateInfos(1,1)}),Object(f.jsx)(b,{answer:"\ud83e\udd28",clickHandler:this.chooseAppropriateClickHandler(0,0),updater:this.chooseUpdateInfos(0,0),color:"#EEE573"}),Object(f.jsx)(b,{answer:"\u2639\ufe0f",color:"#FFADAB",clickHandler:this.chooseAppropriateClickHandler(-1,1),updater:this.chooseUpdateInfos(-1,1)}),Object(f.jsx)(b,{answer:"\ud83d\ude21",color:"#EE7373",clickHandler:this.chooseAppropriateClickHandler(-1,2),updater:this.chooseUpdateInfos(-1,2)}),Object(f.jsx)(b,{answer:"\u23ee",color:"#ffa8d7",clickHandler:this.backHandler(),updater:this.updateInfosBack})]})})]})}}]),i}(n.Component)),j=function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(e){var n,o;return Object(r.a)(this,i),(o=t.call(this,e)).changeidentiteStateBy=function(e,t){o.switchQuestion(t),o.setState({identite:o.state.identite+e}),console.log(o.state)},o.changesocioeconomiqueStateBy=function(e,t){o.switchQuestion(t),o.setState({socioeconomique:o.state.socioeconomique+e}),console.log(o.state)},o.switchQuestion=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;o.state.questionIndex<44&&(o.setState({questionIndex:o.state.questionIndex+e}),console.log("next"))},o.state={socioeconomique:0,identite:0,questionIndex:0},o.questions=(n={0:{question:"L'impot est une forme de  vol ",affects:"socioeconomique",direction:1},1:{question:"Le profit que les entreprise font sur le dos des travailleurs est un vol",affects:"socioeconomique",direction:-1},2:{question:"Aucun immigrant ne devrait entrer au Qu\xe9bec sans connaitre le francais, ou montrer une intention de l'apprendre",affects:"identite",direction:1},3:{question:"Les infirmier.\xe8res et les fonctionnaires de l'\xe9tat devraient avoir le droit de porter des signes religieux aux travail",affects:"identite",direction:-1},4:{question:"Les policiers.\xe8res, les juges et les enseignant.es devraient avoir le droit de porter des signes religieux aux travail",affects:"identite",direction:-1},5:{question:"Il faut nationaliser les mines de lithium",affects:"socioeconomique",direction:-1},6:{question:"Il faut privatiser Hydro-Qu\xe9bec et la SAQ",affects:"socioeconomique",direction:1},7:{question:"Afin de prot\xe9ger le francais, il faut investir plus dans des programmes de francisation pour les nouveaux arrivants",affects:"socioeconomique",direction:-1},8:{question:"Le Qu\xe9bec devrait \xeatre un pays ind\xe9pendant",affects:"identite",direction:1},9:{question:"Si le Qu\xe9bec devenait un pays, il devrait garder ses fronti\xe8res ouvertes avec le Canada et les \xc9tats-Unis",affects:"identite",direction:-1},10:{question:"J'accorde une grande importance \xe0 la protection de la langue francaise au Qu\xe9bec",affects:"identite",direction:1},11:{question:"Internet devrait \xeatre un service public accessible \xe0 tous",affects:"socioeconomique",direction:-1},12:{question:"Le mouvement woke menace notre facon de vivre",affects:"identite",direction:1},13:{question:"Je suis en faveur de mesures de tarification du carbone.",affects:"socioeconomique",direction:-1},14:{question:"Je suis pr\xeat \xe0 payer plus cher pour des biens et services s'ils sont plus \xe9cologiques",affects:"socioeconomique",direction:-1},15:{question:"Le montant allou\xe9 \xe0 l'aide sociale devrait \xeatre r\xe9duit",affects:"socioeconomique",direction:1},16:{question:"Je suis en faveur d'un revenu minimum garanti",affects:"socioeconomique",direction:-1},17:{question:"Le gouvernement doit r\xe9duire les impots avant de r\xe9investir dans les programmes sociaux",affects:"socioeconomique",direction:1},18:{question:"Les syndicats ont trop d'influence au Qu\xe9bec",affects:"socioeconomique",direction:1},19:{question:"Je suis en faveur de la d\xe9criminalisation de toutes les drogues",affects:"socioeconomique",direction:-1},20:{question:"La propri\xe9t\xe9 terrestre n'est pas une forme l\xe9gitime de propri\xe9t\xe9",affects:"socioeconomique",direction:-1},21:{question:"Les cours d'histoire au secondaire devraient \xeatre bonifi\xe9s",affects:"identite",direction:1},22:{question:"Toutes les classes du Qu\xe9bec devraient avoir notre drapeau national \xe0 l'int\xe9rieur",affects:"identite",direction:1},23:{question:"L'immigration est une menace pour la survie du peuple Qu\xe9b\xe9cois",affects:"identite",direction:1},24:{question:"Le gouvermenent devrait promouvoir la culture nationale de toute les fa\xe7ons",affects:"identite",direction:1},25:{question:"Tout service de webdiffusion devrait offrir un minumum de contenu culturel local",affects:"identite",direction:1},26:{question:"L'\xe9ducation doit se faire en fran\xe7ais seulement de la maternelle au baccalaur\xe9at, sauf pour la minorit\xe9 historique anglophone",affects:"identite",direction:1},27:{question:"L'augmentation de prix soudaine fa\xe7e \xe0 une p\xe9nurie est une r\xe9action naturelle et b\xe9n\xe9fique du march\xe9",affects:"socioeconomique",direction:1},28:{question:"Je suis en faveur des projets d'exploitations p\xe9troli\xe8re",affects:"socioeconomique",direction:1}},Object(a.a)(n,"28",{question:"Le gouvernement devrait cesser de subventionner les entreprises",affects:"socioeconomique",direction:1}),Object(a.a)(n,29,{question:"Le gouvernement devrait interdire la vente d'armes \xe0 des pays comme l'Arabie saoudite",affects:"socioeconomique",direction:-1}),Object(a.a)(n,30,{question:"Les entreprises doivent n\xe9gocier avec les premiers peuples avant d'exploiter les ressources naturelles du territoire ",affects:"socioeconomique",direction:-1}),Object(a.a)(n,31,{question:"Il y a du racisme syst\xe9mique au Qu\xe9bec",affects:"identite",direction:-1}),Object(a.a)(n,32,{question:"Les seuils d'immigrations devraient rester bas, afin qu'on puisse les int\xe9grer",affects:"identite",direction:1}),Object(a.a)(n,33,{question:"Le gouvernement devrait uniquement communiquer en fran\xe7ais ou dans une langue autochtone avec les citoyens",affects:"identite",direction:1}),Object(a.a)(n,34,{question:"La r\xe9gionalisation de l'immigration est importante car elle emp\xeache la formation de ghettos ethniques",affects:"identite",direction:1}),Object(a.a)(n,35,{question:"Les autres peuples n'ont pas \xe0 critiquer les d\xe9cisions que notre gouvernement met en place",affects:"identite",direction:1}),Object(a.a)(n,36,{question:"Une culture homog\xe8ne aide \xe0 r\xe9duire les tensions sociales",affects:"identite",direction:1}),Object(a.a)(n,37,{question:"Une nation est beaucoup plus que la somme d'individus vivant dans un territoire donn\xe9",affects:"identite",direction:1}),Object(a.a)(n,38,{question:"L'islamisation du Qu\xe9bec est un ph\xe9nom\xe8ne qui me pr\xe9occuoe",affects:"identite",direction:1}),Object(a.a)(n,39,{question:"L'appropriation culturelle est un probl\xe8me social r\xe9el",affects:"identite",direction:-1}),Object(a.a)(n,40,{question:"Les Qu\xe9b\xe9cois sont victimes de discrimination par la francophobie",affects:"identite",direction:1}),Object(a.a)(n,41,{question:"La dette publique montante me pr\xe9occupe",affects:"socioeconomique",direction:1}),Object(a.a)(n,"41",{question:"Il faut un moratoire sur l'exploitation de p\xe9trole au Qu\xe9bec",affects:"socioeconomique",direction:-1}),Object(a.a)(n,42,{question:"Les subventions aux \xe9coles priv\xe9s devraient \xeatre abolies",affects:"socioeconomique",direction:-1}),Object(a.a)(n,43,{question:"L'inflation n'est pas un danger tant que la main d'oeuvre nationale peut r\xe9pondre aux besoins nationaux, et que le gouvernement controle sa propre monnaie",affects:"socioeconomique",direction:-1}),Object(a.a)(n,44,{question:"Il existe une lutte perp\xe9tuelle entre les travailleurs et le patronnat",affects:"socioeconomique",direction:-1}),n),o}return Object(u.a)(i,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{id:"separator"}),Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-xl-5",children:Object(f.jsx)(p,{identite:this.state.identite,socioeconomique:this.state.socioeconomique})}),Object(f.jsx)("div",{className:"col-xl-7 qContainer",children:Object(f.jsx)(m,{questionString:this.questions[this.state.questionIndex].question,index:this.state.questionIndex})})]})}),Object(f.jsx)(q,{question:this.questions[this.state.questionIndex],questionHandler:this.switchQuestion,clickHandlerFunctions:{identite:this.changeidentiteStateBy,socioeconomique:this.changesocioeconomiqueStateBy},clickHandlerFunctionsII:{identite:this.changeidentiteStateBy,socioeconomique:this.changesocioeconomiqueStateBy}})]})}}]),i}(n.Component),v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,435)).then((function(t){var i=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),o(e),s(e),c(e)}))};c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root")),v()}},[[434,1,2]]]);
//# sourceMappingURL=main.ea69a8d3.chunk.js.map