(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{157:function(e,a,t){"use strict";t.r(a);var n=t(9),l=t.n(n),i=t(0),r=t.n(i),o=t(3),p=t.n(o),m=t(65),u=m.a.PhonationToTableClass,s=["ipa","letter","phonation","example","meaning"],c=["ipa","letter","example","meaning"],h=["IPA","Letter","Consonantal Class","Example","Meaning"],g=["IPA","Letter","Example","Meaning"],d=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.renderRows=function(){for(var e=this.props.children,a=e.length,t=new Array(a),n=this.props.isGuiliu?c:s,l=a,i=a-1;i>=0;i--)i>0&&e[i].ipa===e[i-1].ipa?t[i]=-1:(t[i]=l-i,l=i);return e.map(function(e,a){for(var l=n.length,i=[],o=0;o<l;o++){var p=e[n[o]];0===o?t[a]>-1&&i.push(r.a.createElement("th",{key:n[o],rowSpan:t[a]},p)):i.push(r.a.createElement("th",{key:n[o]},p))}var m=e.phonation,s=u[m];return r.a.createElement("tr",{key:a,className:s},i)})},t.render=function(){var e=this.props.isGuiliu?"table table-striped":"table",a=this.props.isGuiliu?g:h;return r.a.createElement("table",{className:e},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e){return r.a.createElement("th",{key:e},e)}))),r.a.createElement("tbody",null,this.renderRows()))},a}(r.a.Component);d.propTypes={isGuiliu:p.a.bool,children:p.a.arrayOf(p.a.object)},d.defaultProps={isGuiliu:!1,children:[]};var f=t(161),y=(t(30),["ipa","letter","example","meaning"]),x=["Main Vowel","D Tone","IPA","Letter","Example","Meaning"],E=["empty","j","w","m","n","ŋ","p","t","k"],w=["a","ey","ew","ow","uy","o","u"],b={width:"10%"},k=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.renderRow=function(e){return y.map(function(a){var t=null;return"letter"===a&&(w.includes(e.letter)?t="danger":"oa/oh"===e.letter&&(t="info")),r.a.createElement("th",{key:a,className:t},e[a])})},t.renderRows=function(){var e=this;return this.props.children.map(function(a){var t=E.map(function(e){return a[e]}).filter(function(e){return e});return t.map(function(n,l){return r.a.createElement("tr",{key:l},0===l&&[r.a.createElement("th",{rowSpan:t.length,className:a.long?"warning":"success"},a.main),r.a.createElement("th",{rowSpan:t.length,className:a.long?"warning":"success"},a.long?"Long":"Short")],e.renderRow(n))})})},t.render=function(){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("col",{style:b}),r.a.createElement("col",{style:b}),r.a.createElement("thead",null,r.a.createElement("tr",null,x.map(function(e){return r.a.createElement("th",{key:e},e)}))),r.a.createElement("tbody",null,this.renderRows()))},a}(r.a.Component);k.propTypes={children:p.a.arrayOf(p.a.object)},k.defaultProps={children:[]};var v=m.a.PhonationToTableClass;var j=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){return r.a.createElement("tr",null,r.a.createElement("th",{className:v[this.props.title]},this.props.title),this.props.children.map(function(e,a){return r.a.createElement("th",{key:a,style:(t=e,n=parseInt(t[0])-1,l=parseInt(t[1])-1,{backgroundColor:"rgb("+(191+16*(n-l))+", "+(127+32*n)+", "+(127+32*l)+")"})},e);var t,n,l}))},a}(r.a.Component);j.propTypes={title:p.a.string,children:p.a.arrayOf(p.a.string)},j.defaultProps={title:"",children:[]};var _=["A","B","C","DL","DS"],T=["1A","1U","1G","2"],N=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){var e=[this.props.title].concat(_);return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.map(function(e){return r.a.createElement("th",{key:e},e)}))),r.a.createElement("tbody",null,this.props.children.map(function(e,a){return r.a.createElement(j,{key:a,title:T[a]},e)})))},a}(r.a.Component);N.propTypes={title:p.a.string,children:p.a.arrayOf(p.a.arrayOf(p.a.string))},N.defaultProps={title:"",children:[]};var C=t(165),R=t(166),G=t(167);t.d(a,"default",function(){return I});var P=G.tai,U=G.guiliu,I=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.renderInitialsIntro=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Initials"),r.a.createElement("p",null,"There are 4 types of initials in Yang Zhuang, namely simple initials, labialized initials, palatalized initials and initials for Guiliu Mandarin loanwords. Simple initials are written with simple initial letters while the other initials are written with combinations of simple initial letters. Each simple initial letter has a consonantal class which affects the tone of the syllable. Some initial phonemes are represented by more than one letters which have different consonantal classes."),r.a.createElement("p",null,"There are 4 consonantal classes. Consonantal classes are only applicable to native Tai words but not Guiliu Mandarin loanwords. The spelling rules of these two categories of words will be explained at the bottom."),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,"Consonantal Classes"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Meaning"))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"warning"},r.a.createElement("th",null,"1A"),r.a.createElement("th",null,"From proto voiceless aspirated consonants")),r.a.createElement("tr",{className:"danger"},r.a.createElement("th",null,"1U"),r.a.createElement("th",null,"From proto voiceless unaspirated stops or continuants")),r.a.createElement("tr",{className:"success"},r.a.createElement("th",null,"1G"),r.a.createElement("th",null,"From proto glottalized consonants")),r.a.createElement("tr",{className:"info"},r.a.createElement("th",null,"2"),r.a.createElement("th",null,"From proto voiced consonants"))))))},t.renderInitialsBody=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"The following list shows all Yang Zhuang initials and their corresponding letters. There are 23 simple initial phonemes and 37 simple initial letters."),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",{id:"diu"},"Simple Initials"),r.a.createElement(d,null,C.simple)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,"Labialized Initials"),r.a.createElement(d,null,C.labialized),r.a.createElement("h3",null,"Palatalized Initials"),r.a.createElement(d,null,C.palatalized),r.a.createElement("h3",null,"Initials for Guiliu Mandarin loanwords"),r.a.createElement(d,{isGuiliu:!0},C.guiliu)))},t.renderRimes=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Rimes"),r.a.createElement("p",null,"Yang Zhuang has 12 vowel phonemes and 14 basic vowel letters. Each vowel letter carries a D-Value, which is either long or short. D-Value only affects the tone of syllables ending with -p, -t and -k and it does not affect the quality of the vowel. All vowels except /ə/ and /ʊ/ are either long or short. These vowels only have one representation. As /ə/ and /ʊ/ can be both long or short, there are two representations for their long and short counterparts respectively."),r.a.createElement(k,null,R),r.a.createElement("h4",null,"Notes"),r.a.createElement("p",{class:"bg-danger",style:{padding:"15px"}},"Red cells: Double vowel letters are shortened to single."),r.a.createElement("p",{class:"bg-info",style:{padding:"15px"}},"Blue cell:",r.a.createElement("ul",null,r.a.createElement("li",null,"oh: This letter combination is from 'o (main vowel) + h (Guiliu loanword marker)'. It is not pronounced as /o/ as in usual rules but /ɔ/."),r.a.createElement("li",null,"oa: It is pronounced as either /ɔ/ or /a/ depending on the dialect. This letter combination will be explained below."))),r.a.createElement("h3",null,"Speical Vowel Letters: oa, oaa"),r.a.createElement("p",null,"There are two special vowel letters, 'oa' and 'oaa'. They represent words with labialized initials in the proto language. Nowadays, the labialization is lost in most dialects and have different reflexes across dialects."),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Dialect"),r.a.createElement("th",null,"-oa- equivalent to"),r.a.createElement("th",null,"-oaa- equivalent to"),r.a.createElement("th",null,"Rule"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Debao mainstream"),r.a.createElement("th",{className:"danger"},"-o-"),r.a.createElement("th",null,"-o-"),r.a.createElement("th",null,"Delete all 'a'")),r.a.createElement("tr",null,r.a.createElement("th",null,"Jingxi, Napo"),r.a.createElement("th",null,"-a-"),r.a.createElement("th",null,"-aa-"),r.a.createElement("th",null,"Delete all 'o'")),r.a.createElement("tr",null,r.a.createElement("th",null,"Debao Nalei-Ronghua, Tiandeng Longming, Cao Bằng"),r.a.createElement("th",null,"-wa-"),r.a.createElement("th",null,"-waa-"),r.a.createElement("th",null,"Change 'o' to 'w'")))),r.a.createElement("p",{class:"bg-danger",style:{padding:"15px"}},"In Debao mainstream dialects, the rule applies except when the syllable ends with -oa. In this case, it does not simplify into -o but should be pronounced as /ɔ/."),r.a.createElement("h4",null,"Examples"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Syllable"),r.a.createElement("th",null,"Debao mainstream equivalent"),r.a.createElement("th",null,"Jingxi equivalent"),r.a.createElement("th",null,"Meaning"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"zloa"),r.a.createElement("th",null,"zloa (oa pronounced as /ɔ/)"),r.a.createElement("th",null,"zla"),r.a.createElement("th",null,"canoe")),r.a.createElement("tr",null,r.a.createElement("th",null,"zloáay"),r.a.createElement("th",null,"zlóy"),r.a.createElement("th",null,"zláay"),r.a.createElement("th",null,"left side")),r.a.createElement("tr",null,r.a.createElement("th",null,"phoan"),r.a.createElement("th",null,"phon"),r.a.createElement("th",null,"phan"),r.a.createElement("th",null,"dream")),r.a.createElement("tr",null,r.a.createElement("th",null,"toàan"),r.a.createElement("th",null,"tòn"),r.a.createElement("th",null,"tàan"),r.a.createElement("th",null,"folk song festival")),r.a.createElement("tr",null,r.a.createElement("th",null,"sloaak"),r.a.createElement("th",null,"slok"),r.a.createElement("th",null,"slaak"),r.a.createElement("th",null,"clear (a.)")),r.a.createElement("tr",{class:"danger"},r.a.createElement("th",null,"ngwoan"),r.a.createElement("th",null,"won"),r.a.createElement("th",null,"wan"),r.a.createElement("th",null,"daytime (Napo: ngon)")),r.a.createElement("tr",{class:"danger"},r.a.createElement("th",null,"khwoan"),r.a.createElement("th",null,"khon"),r.a.createElement("th",null,"khwan"),r.a.createElement("th",null,"soul")))))},t.renderToneBoxes=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Tones"),r.a.createElement("h3",null,"Tone Boxes for Tai words"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(N,{title:"Debao Urban"},P.debao_urban),r.a.createElement(N,{title:"Debao Ma-ai"},P.debao_maai),r.a.createElement(N,{title:"Debao Suburb"},P.debao_suburb)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(N,{title:"Jingxi Urban"},P.jingxi_urban),r.a.createElement(N,{title:"Jingxi Hurun"},P.jingxi_hurun),r.a.createElement(N,{title:"Napo Urban"},P.napo_urban)),r.a.createElement("h3",null,"Tone Boxes for Guiliu words"),this.renderGuiliuToneBox())},t.renderGuiliuToneBox=function(){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Dialect"),["1","2","3","4"].map(function(e){return r.a.createElement("th",{key:e},"Guiliu Tone "+e)}))),r.a.createElement("tbody",null,r.a.createElement(j,{title:"Debao Urban"},U.debao_urban),r.a.createElement(j,{title:"Debao Ma-ai"},U.debao_maai),r.a.createElement(j,{title:"Debao Jingde"},U.debao_jingde),r.a.createElement(j,{title:"Jingxi Urban"},U.jingxi_urban),r.a.createElement(j,{title:"Napo Urban"},U.napo_urban)))},t.render=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{subpage:"/documentation"}),r.a.createElement("hr",null),this.renderInitialsIntro(),this.renderInitialsBody(),r.a.createElement("hr",null),this.renderRimes(),r.a.createElement("hr",null),this.renderToneBoxes(),r.a.createElement("hr",null))},a}(r.a.Component)},158:function(e,a,t){"use strict";var n=t(11);a.__esModule=!0,a.withPrefix=h,a.navigateTo=a.replace=a.push=a.navigate=a.default=void 0;var l=n(t(162)),i=n(t(163)),r=n(t(9)),o=n(t(63)),p=n(t(64)),m=n(t(3)),u=n(t(0)),s=t(28),c=t(159);function h(e){return function(e){return e.replace(/\/+/g,"/")}("/YangZhuang/"+e)}var g={activeClassName:m.default.string,activeStyle:m.default.object},d=function(e){function a(a){var t;t=e.call(this,a)||this,(0,p.default)((0,o.default)((0,o.default)(t)),"defaultGetProps",function(e){return e.isCurrent?{className:[t.props.className,t.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},t.props.style,t.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),t.state={IOSupported:n},t.handleRef=t.handleRef.bind((0,o.default)((0,o.default)(t))),t}(0,r.default)(a,e);var t=a.prototype;return t.componentDidUpdate=function(e,a){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,c.parsePath)(this.props.to).pathname)},t.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,c.parsePath)(this.props.to).pathname)},t.handleRef=function(e){var a,t,n,l=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(a=e,t=function(){___loader.enqueue((0,c.parsePath)(l.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(a),n.disconnect(),t())})})).observe(a))},t.render=function(){var e=this,a=this.props,t=a.to,n=a.getProps,r=void 0===n?this.defaultGetProps:n,o=a.onClick,p=a.onMouseEnter,m=(a.activeClassName,a.activeStyle,a.innerRef,a.state),g=a.replace,d=(0,l.default)(a,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var f=h(t);return u.default.createElement(s.Link,(0,i.default)({to:f,state:m,getProps:r,innerRef:this.handleRef,onMouseEnter:function(e){p&&p(e),___loader.hovering((0,c.parsePath)(t).pathname)},onClick:function(a){return o&&o(a),0!==a.button||e.props.target||a.defaultPrevented||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||(a.preventDefault(),y(t,{state:m,replace:g})),!0}},d))},a}(u.default.Component);d.propTypes=(0,i.default)({},g,{innerRef:m.default.func,onClick:m.default.func,to:m.default.string.isRequired,replace:m.default.bool});var f=u.default.forwardRef(function(e,a){return u.default.createElement(d,(0,i.default)({innerRef:a},e))});a.default=f;var y=function(e,a){window.___navigate(h(e),a)};a.navigate=y;var x=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(h(e))};a.push=x;a.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(h(e))};a.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),x(e)}},159:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return c}),t.d(a,"StaticQuery",function(){return h});var n=t(0),l=t.n(n),i=t(3),r=t.n(i),o=t(158),p=t.n(o);t.d(a,"Link",function(){return p.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var m=t(160),u=t.n(m);t.d(a,"PageRenderer",function(){return u.a});var s=t(39);t.d(a,"parsePath",function(){return s.a});var c=l.a.createContext({}),h=function(e){return l.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},160:function(e,a,t){var n;e.exports=(n=t(164))&&n.default||n},161:function(e,a,t){"use strict";var n=t(9),l=t.n(n),i=t(159),r=t(3),o=t.n(r),p=t(0),m=t.n(p),u=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.renderLink=function(e,a){var t=this.props.subpage===e;return m.a.createElement("li",{className:t?"active":""},m.a.createElement(i.Link,{to:e},a))},t.render=function(){return m.a.createElement("div",{className:"container"},m.a.createElement("h2",null,"Yang Zhuang Orthography Converter"),m.a.createElement("p",null,"This tool converts between Liao and Lee orthography. The latter orthography has not been finalised and is subject to change."),m.a.createElement("ul",{className:"nav nav-tabs"},this.renderLink("","Converter"),this.renderLink("/documentation","Documentation")))},a}(m.a.Component);u.propTypes={subpage:o.a.string},a.a=u},162:function(e,a){e.exports=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}},163:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}e.exports=t},164:function(e,a,t){"use strict";t.r(a);t(17);var n=t(0),l=t.n(n),i=t(3),r=t.n(i),o=t(66),p=t(4),m=function(e){var a=e.location,t=p.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=m},165:function(e){e.exports={simple:[{ipa:"p",letter:"p",phonation:"1U",example:"pay",meaning:"to go"},{ipa:"p",letter:"b",phonation:"2",example:"ba",meaning:"wife"},{ipa:"pʰ",letter:"ph",phonation:"1A",example:"phon",meaning:"rain"},{ipa:"ˀb/ɓ (m)",letter:"mb",phonation:"1G",example:"mbàaw",meaning:"male"},{ipa:"m",letter:"m",phonation:"2",example:"ma",meaning:"to come"},{ipa:"m",letter:"mh",phonation:"1U",example:"mha",meaning:"dog"},{ipa:"f",letter:"f",phonation:"1U",example:"fan",meaning:"cent"},{ipa:"f",letter:"v",phonation:"2",example:"vay",meaning:"fire"},{ipa:"t",letter:"t",phonation:"1U",example:"tóy",meaning:"under"},{ipa:"t",letter:"d",phonation:"2",example:"dèy",meaning:"a place"},{ipa:"tʰ",letter:"th",phonation:"1A",example:"thang",meaning:"to arrive"},{ipa:"ˀd/ɗ (n)",letter:"nd",phonation:"1G",example:"nday",meaning:"good"},{ipa:"n",letter:"n",phonation:"2",example:"na",meaning:"field"},{ipa:"n",letter:"nh",phonation:"1U",example:"nha",meaning:"thick"},{ipa:"l",letter:"l",phonation:"2",example:"laay",meaning:"to write, pattern"},{ipa:"l",letter:"lh",phonation:"1U",example:"lhaay",meaning:"many"},{ipa:"ɹ̥/ɹ/ð (l)",letter:"r",phonation:"2",example:"roy",meaning:"which"},{ipa:"ɹ̥/ɹ/ð (l)",letter:"rh",phonation:"1U",example:"rhang",meaning:"what"},{ipa:"ɬ/θ",letter:"sl",phonation:"1U",example:"slaaw",meaning:"female"},{ipa:"ɬ/θ",letter:"zl",phonation:"2",example:"zloéy",meaning:"to buy"},{ipa:"t͡s/t͡ɕ",letter:"c",phonation:"1U",example:"ców",meaning:"to touch"},{ipa:"t͡s/t͡ɕ",letter:"j",phonation:"2",example:"joèy",meaning:"to be"},{ipa:"s/ɕ",letter:"s",phonation:"1A",example:"sat",meaning:"paint"},{ipa:"s/ɕ",letter:"z",phonation:"2",example:"zat",meaning:"actual, tight"},{ipa:"k",letter:"k",phonation:"1U",example:"kày",meaning:"chicken"},{ipa:"k",letter:"g",phonation:"2",example:"gòw",meaning:"pair"},{ipa:"kʰ",letter:"kh",phonation:"1A",example:"kha",meaning:"leg"},{ipa:"ŋ",letter:"ng",phonation:"2",example:"ngaay",meaning:"afternoon"},{ipa:"ŋ",letter:"ngh",phonation:"1U",example:"nghàam",meaning:"a moment ago"},{ipa:"w",letter:"w",phonation:"2",example:"waam",meaning:"word"},{ipa:"w",letter:"wh",phonation:"1U",example:"wha",meaning:"flower"},{ipa:"ˀw (ʋ)",letter:"qw",phonation:"1G",example:"qwa",meaning:"rainbow"},{ipa:"j",letter:"y",phonation:"2",example:"yaw",meaning:"straight"},{ipa:"j",letter:"yh",phonation:"1U",example:"yhaw",meaning:"move slowly"},{ipa:"ˀj (j)",letter:"qy",phonation:"1G",example:"qyòw",meaning:"to be at"},{ipa:"h",letter:"h",phonation:"1A",example:"há",meaning:"five"},{ipa:"ʔ",letter:"none",phonation:"1G",example:"aw",meaning:"to get"}],labialized:[{ipa:"kw",letter:"kw",phonation:"1U",example:"kway",meaning:"far"},{ipa:"kw",letter:"gw",phonation:"2",example:"gwa",meaning:"rake"},{ipa:"kʰw",letter:"khw",phonation:"1A",example:"khwà",meaning:"pants"},{ipa:"ŋw (ʋ)",letter:"ngw",phonation:"2",example:"ngwa",meaning:"yesterday"}],palatalized:[{ipa:"pj",letter:"py",phonation:"1U",example:"pya",meaning:"fish"},{ipa:"pj",letter:"by",phonation:"2",example:"byouk",meaning:"tomorrow"},{ipa:"pʰj",letter:"phy",phonation:"1A",example:"phya",meaning:"stone hill"},{ipa:"mj",letter:"my",phonation:"2",example:"mya",meaning:"broken"},{ipa:"mj",letter:"mhy",phonation:"1U",example:"mhyán",meaning:"arm wrestling"},{ipa:"kj",letter:"ky",phonation:"1U",example:"kya",meaning:"to add"},{ipa:"kj",letter:"gy",phonation:"2",example:"gya",meaning:"tea"},{ipa:"kʰj",letter:"khy",phonation:"1A",example:"khya",meaning:"to look for"},{ipa:"ŋj (j)",letter:"ngy",phonation:"2",example:"ngyam",meaning:"fast"},{ipa:"ŋj (j)",letter:"nghy",phonation:"1U",example:"nghyòy",meaning:"big"}],guiliu:[{ipa:"͡tsʰ/͡tɕʰ/s/ɕ",letter:"ch",example:"kènh châh",meaning:"檢查"},{ipa:"tj",letter:"ty",example:"tyáawh châh",meaning:"調查"},{ipa:"tʰj",letter:"thy",example:"thyâawh kéenh",meaning:"條件"},{ipa:"sj/ɕj",letter:"sy",example:"kîh syâangh",meaning:"吉祥"},{ipa:"͡tsj/͡tɕj",letter:"cy",example:"cyàangh coáangh",meaning:"獎狀"},{ipa:"͡tsʰj/͡tɕʰj/sj/ɕj",letter:"chy",example:"chyâangh cìh",meaning:"牆紙"},{ipa:"θj/ɬj",letter:"sly",example:"slyàawh hyôh",meaning:"小學"},{ipa:"nj",letter:"ny",example:"nyáawh slúh",meaning:"尿素"},{ipa:"lj",letter:"ly",example:"cîh lyáangh",meaning:"質量"},{ipa:"hj (j)",letter:"hy",example:"hyáawh kòh",meaning:"效果"},{ipa:"hw (ʋ)",letter:"hw",example:"cungh hwâh",meaning:"中華"}]}},166:function(e){e.exports=[{main:"a",long:!0,empty:{ipa:"a",letter:"a",example:"ka",meaning:"烏鴉"},j:{ipa:"aj",letter:"aay",example:"thaay",meaning:"死"},w:{ipa:"aw",letter:"aaw",example:"daaw",meaning:"桃"},m:{ipa:"am",letter:"aam",example:"jaam",meaning:"蠶"},n:{ipa:"an",letter:"aan",example:"mbáan",meaning:"村"},"ŋ":{ipa:"aŋ",letter:"aang",example:"hàang",meaning:"墟"},p:{ipa:"ap",letter:"aap",example:"aap",meaning:"浴"},t:{ipa:"at",letter:"aat",example:"taat",meaning:"崖"},k:{ipa:"ak",letter:"aak",example:"gaak",meaning:"自己"}},{main:"ɐ",long:!1,j:{ipa:"ɐj",letter:"ay",example:"pay",meaning:"去"},w:{ipa:"ɐw",letter:"aw",example:"kaw",meaning:"我"},m:{ipa:"ɐm",letter:"am",example:"nhám",meaning:"想"},n:{ipa:"ɐn",letter:"an",example:"ndàn",meaning:"嬲"},"ŋ":{ipa:"ɐŋ",letter:"ang",example:"lhang",meaning:"後"},p:{ipa:"ɐp",letter:"ap",example:"tap",meaning:"肝"},t:{ipa:"ɐt",letter:"at",example:"at",meaning:"一"},k:{ipa:"ɐk",letter:"ak",example:"nhak",meaning:"重"}},{main:"e",long:!0,empty:{ipa:"e",letter:"ee",example:"tee",meaning:"佢"},j:{ipa:"ej/əj",letter:"ey",example:"dèy",meaning:"地"},w:{ipa:"ew",letter:"ew",example:"mew",meaning:"貓"},m:{ipa:"em",letter:"eem",example:"téem",meaning:"點燈"},n:{ipa:"en",letter:"een",example:"mèen",meaning:"啱"},"ŋ":{ipa:"eŋ",letter:"eeng",example:"eeng",meaning:"細路"},p:{ipa:"ep",letter:"eep",example:"keep",meaning:"片"},t:{ipa:"et",letter:"eet",example:"peet",meaning:"八"},k:{ipa:"ek",letter:"eek",example:"peek",meaning:"陌生"}},{main:"ø",long:!0,empty:{ipa:"ø",letter:"oe",example:"lhoè",meaning:"大"},j:{ipa:"øɥ",letter:"oey",example:"zloéy",meaning:"買"},m:{ipa:"øm",letter:"oem",example:"zloem",meaning:"囉"},n:{ipa:"øn",letter:"oen",example:"khoênh",meaning:"權"},t:{ipa:"øt",letter:"oet",example:"coet",meaning:"濺"}},{main:"i",long:!0,empty:{ipa:"i",letter:"i",example:"dí",meaning:"背負"},w:{ipa:"iw",letter:"iw",example:"mìw",meaning:"廟"},m:{ipa:"im",letter:"im",example:"tím",meaning:"點"},n:{ipa:"in",letter:"in",example:"nhin",meaning:"思念"},"ŋ":{ipa:"iŋ",letter:"ing",example:"thing",meaning:"亭"},p:{ipa:"ip",letter:"ip",example:"ip",meaning:"踩"},t:{ipa:"it",letter:"it",example:"bit",meaning:"竹籮"},k:{ipa:"ik",letter:"ik",example:"rik",meaning:"叫"}},{main:"ə",long:!1,empty:{ipa:"ə",letter:"e",example:"têh",meaning:"德"},m:{ipa:"əm",letter:"em",example:"èm",meaning:"飽"},n:{ipa:"ən",letter:"en",example:"ten",meaning:"腳板"},"ŋ":{ipa:"əŋ",letter:"eng",example:"leng",meaning:"馬騮"},p:{ipa:"əp",letter:"ep",example:"slep",meaning:"十"},t:{ipa:"ət",letter:"et",example:"pet",meaning:"筆"},k:{ipa:"ək",letter:"ek",example:"cek",meaning:"值"}},{main:"ə",long:!0,p:{ipa:"əp",letter:"iep",example:"khiep",meaning:"火鋏"},t:{ipa:"ət",letter:"iet",example:"miet",meaning:"匕首"},k:{ipa:"ək",letter:"iek",example:"piek",meaning:"翼"}},{main:"y",long:!0,empty:{ipa:"y",letter:"oi",example:"koi",meaning:"鹽"},m:{ipa:"ym",letter:"oim",example:"ngoim",meaning:"岩洞"},n:{ipa:"yn",letter:"oin",example:"joìn",meaning:"便宜"},"ŋ":{ipa:"yŋ",letter:"oing",example:"thoing",meaning:"糖"},t:{ipa:"yt",letter:"oit",example:"joit",meaning:"絕"},k:{ipa:"yk",letter:"oik",example:"loik",meaning:"揀"}},{main:"o",long:!0,empty:{ipa:"o",letter:"o",example:"mo",meaning:"黃牛"},j:{ipa:"oj",letter:"ooy",example:"kooy",meaning:"睇"},w:{ipa:"ow/əw",letter:"ow",example:"mhow",meaning:"豬"},m:{ipa:"om",letter:"oom",example:"toom",meaning:"繡球"},n:{ipa:"on",letter:"oon",example:"óon",meaning:"嗲"},"ŋ":{ipa:"oŋ",letter:"oong",example:"doong",meaning:"銅"},p:{ipa:"op",letter:"oop",example:"coop",meaning:"蘑菇"},t:{ipa:"ot",letter:"oot",example:"doot",meaning:"丢"},k:{ipa:"ok",letter:"ook",example:"ook",meaning:"出"}},{main:"ɔ",long:!1,empty:{ipa:"ɔ",letter:"oa/oh",example:"sloa",meaning:"右"},j:{ipa:"ɔɥ/ɔj",letter:"oy",example:"moy",meaning:"你"},m:{ipa:"ɔm",letter:"om",example:"tom",meaning:"泥"},n:{ipa:"ɔn",letter:"on",example:"gon",meaning:"人"},"ŋ":{ipa:"ɔŋ",letter:"ong",example:"long",meaning:"落"},p:{ipa:"ɔp",letter:"op",example:"kop",meaning:"青蛙"},t:{ipa:"ɔt",letter:"ot",example:"hot",meaning:"縮"},k:{ipa:"ɔk",letter:"ok",example:"khyok",meaning:"六"}},{main:"u",long:!0,empty:{ipa:"u",letter:"u",example:"tu",meaning:"隻"},j:{ipa:"uj",letter:"uy",example:"kúy",meaning:"蕉"},m:{ipa:"um",letter:"uum",example:"thúum",meaning:"淹沒"},n:{ipa:"un",letter:"uun",example:"kúun",meaning:"管"},"ŋ":{ipa:"uŋ",letter:"uung",example:"lhuung",meaning:"大"},p:{ipa:"up",letter:"uup",example:"cuup",meaning:"吻"},t:{ipa:"ut",letter:"uut",example:"ruut",meaning:"淋"},k:{ipa:"uk",letter:"uuk",example:"kuuk",meaning:"國"}},{main:"ʊ",long:!1,m:{ipa:"ʊm",letter:"um",example:"lum",meaning:"忘"},n:{ipa:"ʊn",letter:"un",example:"khún",meaning:"上(動)"},"ŋ":{ipa:"ʊŋ",letter:"ung",example:"mung",meaning:"手"},p:{ipa:"ʊp",letter:"up",example:"zlup",meaning:"承襲"},t:{ipa:"ʊt",letter:"ut",example:"cut",meaning:"淡"},k:{ipa:"ʊk",letter:"uk",example:"sluk",meaning:"熟"}},{main:"ʊ",long:!0,p:{ipa:"ʊp",letter:"oup",example:"loup",meaning:"撫摸"},t:{ipa:"ʊt",letter:"out",example:"lout",meaning:"拆"},k:{ipa:"ʊk",letter:"ouk",example:"louk",meaning:"仔女"}},{main:"ɯ",long:!0,empty:{ipa:"ɯ",letter:"ui",example:"sluîh",meaning:"詞"}}]},167:function(e){e.exports={tai:{debao_urban:[["453","33","24ʔ","33","55"],["453","55","24ʔ","55","55"],["31","33","24ʔ","33","55"],["31","33","213ʔ","33","33"]],debao_maai:[["31","332","24ʔ","33","45"],["53","454","24ʔ","45","45"],["31","332","24ʔ","33","45"],["31","332","213ʔ","33","21"]],debao_suburb:[["31","33","24ʔ","33","55"],["453","55","24ʔ","55","55"],["31","33","24ʔ","33","55"],["31","33","213ʔ","33","33"]],jingxi_urban:[["53","453","33ʔ","45","33"],["53","453","33ʔ","45","33"],["53","453","33ʔ","45","33"],["31","131","213ʔ","13","21"]],jingxi_hurun:[["51","445","45ʔ","44","55"],["51","445","45ʔ","44","55"],["31","445","45ʔ","44","55"],["31","334","13ʔ","33","13"]],napo_urban:[["354","221","44ʔ","22","44"],["354","221","44ʔ","22","44"],["354","221","44ʔ","22","44"],["553","31","41ʔ","31","41"]]},guiliu:{debao_urban:["24ʔ","31","55","213ʔ"],debao_maai:["454","31","53","213ʔ"],debao_jingde:["55","31","55","213ʔ"],jingxi_urban:["453","31","453","33ʔ / 213ʔ"],napo_urban:["354","31","44ʔ","221"]}}}}]);
//# sourceMappingURL=component---src-pages-documentation-js-0b7556158ef3dcf7a042.js.map