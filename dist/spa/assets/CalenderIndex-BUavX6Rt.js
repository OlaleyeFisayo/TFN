import{c as M,a1 as et,a2 as qt,k as kt,r as F,w as re,h as g,Z as oe,g as Ot,x as Xe,a3 as It,C as jt,z as Vt,A as Tt,B as fe,f as He,E as $t,M as Ft}from"./index-LOuRdcfo.js";import{h as Et,Q as N}from"./QBtn-Bh1pJ0Pq.js";import{a as At,u as Nt,b as Zt,e as Bt,c as Rt}from"./private.use-form-dPUGvHx5.js";import{_ as Lt}from"./arrow-back-BD_7WHGM.js";import{c as zt}from"./stylesheet-tJbRLR7r.js";import{_ as pt}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Qt(){let e=Object.create(null);return{getCache:(r,i)=>e[r]===void 0?e[r]=typeof i=="function"?i():i:e[r],setCache(r,i){e[r]=i},hasCache(r){return Object.hasOwnProperty.call(e,r)},clearCache(r){r!==void 0?delete e[r]:e=Object.create(null)}}}const z=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Pt(e,r,i){return Object.prototype.toString.call(e)==="[object Date]"&&(i=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Wt(Ve(e,r,i))}function Je(e,r,i){return at(Ut(e,r,i))}function Xt(e){return Jt(e)===0}function he(e,r){return r<=6?31:r<=11||Xt(e)?30:29}function Jt(e){const r=z.length;let i=z[0],l,d,o,D,c;if(e<i||e>=z[r-1])throw new Error("Invalid Jalaali year "+e);for(c=1;c<r&&(l=z[c],d=l-i,!(e<l));c+=1)i=l;return D=e-i,d-D<6&&(D=D-d+x(d+4,33)*33),o=I(I(D+1,33)-1,4),o===-1&&(o=4),o}function tt(e,r){const i=z.length,l=e+621;let d=-14,o=z[0],D,c,m,S,f;if(e<o||e>=z[i-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<i&&(D=z[f],c=D-o,!(e<D));f+=1)d=d+x(c,33)*8+x(I(c,33),4),o=D;S=e-o,d=d+x(S,33)*8+x(I(S,33)+3,4),I(c,33)===4&&c-S===4&&(d+=1);const _=x(l,4)-x((x(l,100)+1)*3,4)-150,E=20+d-_;return r||(c-S<6&&(S=S-c+x(c+4,33)*33),m=I(I(S+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:l,march:E}}function Ut(e,r,i){const l=tt(e,!0);return Ve(l.gy,3,l.march)+(r-1)*31-x(r,7)*(r-7)+i-1}function Wt(e){const r=at(e).gy;let i=r-621,l,d,o;const D=tt(i,!1),c=Ve(r,3,D.march);if(o=e-c,o>=0){if(o<=185)return d=1+x(o,31),l=I(o,31)+1,{jy:i,jm:d,jd:l};o-=186}else i-=1,o+=179,D.leap===1&&(o+=1);return d=7+x(o,30),l=I(o,30)+1,{jy:i,jm:d,jd:l}}function Ve(e,r,i){let l=x((e+x(r-8,6)+100100)*1461,4)+x(153*I(r+9,12)+2,5)+i-34840408;return l=l-x(x(e+100100+x(r-8,6),100)*3,4)+752,l}function at(e){let r=4*e+139361631;r=r+x(x(4*e+183187720,146097)*3,4)*4-3908;const i=x(I(r,1461),4)*5+308,l=x(I(i,153),5)+1,d=I(x(i,153),12)+1;return{gy:x(r,1461)-100100+x(8-d,6),gm:d,gd:l}}function x(e,r){return~~(e/r)}function I(e,r){return e-~~(e/r)*r}function w(e,r=2,i="0"){if(e==null)return e;const l=""+e;return l.length>=r?l:new Array(r-l.length+1).join(i)+l}const Gt=["gregorian","persian"],Ue={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Gt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Kt=["update:modelValue"];function R(e){return e.year+"/"+w(e.month)+"/"+w(e.day)}function ea(e,r){const i=M(()=>e.disable!==!0&&e.readonly!==!0),l=M(()=>i.value===!0?0:-1),d=M(()=>{const c=[];return e.color!==void 0&&c.push(`bg-${e.color}`),e.textColor!==void 0&&c.push(`text-${e.textColor}`),c.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function D(c){const m=new Date,S=c===!0?null:0;if(e.calendar==="persian"){const f=Pt(m);return{year:f.jy,month:f.jm,day:f.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:S,minute:S,second:S,millisecond:S}}return{editable:i,tabindex:l,headerClass:d,getLocale:o,getCurrentDate:D}}const nt=864e5,ta=36e5,je=6e4,rt="YYYY-MM-DDTHH:mm:ss.SSSZ",aa=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,na=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,qe={};function ra(e,r){const i="("+r.days.join("|")+")",l=e+i;if(qe[l]!==void 0)return qe[l];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",D="("+r.monthsShort.join("|")+")",c={};let m=0;const S=e.replace(na,_=>{switch(m++,_){case"YY":return c.YY=m,"(-?\\d{1,2})";case"YYYY":return c.YYYY=m,"(-?\\d{1,4})";case"M":return c.M=m,"(\\d{1,2})";case"Mo":return c.M=m++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return c.M=m,"(\\d{2})";case"MMM":return c.MMM=m,D;case"MMMM":return c.MMMM=m,o;case"D":return c.D=m,"(\\d{1,2})";case"Do":return c.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return c.D=m,"(\\d{2})";case"H":return c.H=m,"(\\d{1,2})";case"HH":return c.H=m,"(\\d{2})";case"h":return c.h=m,"(\\d{1,2})";case"hh":return c.h=m,"(\\d{2})";case"m":return c.m=m,"(\\d{1,2})";case"mm":return c.m=m,"(\\d{2})";case"s":return c.s=m,"(\\d{1,2})";case"ss":return c.s=m,"(\\d{2})";case"S":return c.S=m,"(\\d{1})";case"SS":return c.S=m,"(\\d{2})";case"SSS":return c.S=m,"(\\d{3})";case"A":return c.A=m,"(AM|PM)";case"a":return c.a=m,"(am|pm)";case"aa":return c.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return i;case"Q":case"d":case"E":return"(\\d{1})";case"do":return m++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return m++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return m++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return c.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return c.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return c.X=m,"(-?\\d+)";case"x":return c.x=m,"(-?\\d{4,})";default:return m--,_[0]==="["&&(_=_.substring(1,_.length-1)),_.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:c,regex:new RegExp("^"+S)};return qe[l]=f,f}function ot(e,r){return e!==void 0?e:r!==void 0?r.date:qt.date}function We(e,r=""){const i=e>0?"-":"+",l=Math.abs(e),d=Math.floor(l/60),o=l%60;return i+w(d)+r+w(o)}function oa(e,r,i,l,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=rt);const D=ot(i,et.props),c=D.months,m=D.monthsShort,{regex:S,map:f}=ra(r,D),_=e.match(S);if(_===null)return o;let E="";if(f.X!==void 0||f.x!==void 0){const V=parseInt(_[f.X!==void 0?f.X:f.x],10);if(isNaN(V)===!0||V<0)return o;const T=new Date(V*(f.X!==void 0?1e3:1));o.year=T.getFullYear(),o.month=T.getMonth()+1,o.day=T.getDate(),o.hour=T.getHours(),o.minute=T.getMinutes(),o.second=T.getSeconds(),o.millisecond=T.getMilliseconds()}else{if(f.YYYY!==void 0)o.year=parseInt(_[f.YYYY],10);else if(f.YY!==void 0){const V=parseInt(_[f.YY],10);o.year=V<0?V:2e3+V}if(f.M!==void 0){if(o.month=parseInt(_[f.M],10),o.month<1||o.month>12)return o}else f.MMM!==void 0?o.month=m.indexOf(_[f.MMM])+1:f.MMMM!==void 0&&(o.month=c.indexOf(_[f.MMMM])+1);if(f.D!==void 0){if(o.day=parseInt(_[f.D],10),o.year===null||o.month===null||o.day<1)return o;const V=l!=="persian"?new Date(o.year,o.month,0).getDate():he(o.year,o.month);if(o.day>V)return o}f.H!==void 0?o.hour=parseInt(_[f.H],10)%24:f.h!==void 0&&(o.hour=parseInt(_[f.h],10)%12,(f.A&&_[f.A]==="PM"||f.a&&_[f.a]==="pm"||f.aa&&_[f.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),f.m!==void 0&&(o.minute=parseInt(_[f.m],10)%60),f.s!==void 0&&(o.second=parseInt(_[f.s],10)%60),f.S!==void 0&&(o.millisecond=parseInt(_[f.S],10)*10**(3-_[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(E=f.Z!==void 0?_[f.Z].replace(":",""):_[f.ZZ],o.timezoneOffset=(E[0]==="+"?-1:1)*(60*E.slice(1,3)+1*E.slice(3,5)))}return o.dateHash=w(o.year,6)+"/"+w(o.month)+"/"+w(o.day),o.timeHash=w(o.hour)+":"+w(o.minute)+":"+w(o.second)+E,o}function ke(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const i=new Date(r.getFullYear(),0,4);i.setDate(i.getDate()-(i.getDay()+6)%7+3);const l=r.getTimezoneOffset()-i.getTimezoneOffset();r.setHours(r.getHours()-l);const d=(r-i)/(nt*7);return 1+Math.floor(d)}function Z(e,r,i){const l=new Date(e),d=`set${i===!0?"UTC":""}`;switch(r){case"year":case"years":l[`${d}Month`](0);case"month":case"months":l[`${d}Date`](1);case"day":case"days":case"date":l[`${d}Hours`](0);case"hour":case"hours":l[`${d}Minutes`](0);case"minute":case"minutes":l[`${d}Seconds`](0);case"second":case"seconds":l[`${d}Milliseconds`](0)}return l}function me(e,r,i){return(e.getTime()-e.getTimezoneOffset()*je-(r.getTime()-r.getTimezoneOffset()*je))/i}function lt(e,r,i="days"){const l=new Date(e),d=new Date(r);switch(i){case"years":case"year":return l.getFullYear()-d.getFullYear();case"months":case"month":return(l.getFullYear()-d.getFullYear())*12+l.getMonth()-d.getMonth();case"days":case"day":case"date":return me(Z(l,"day"),Z(d,"day"),nt);case"hours":case"hour":return me(Z(l,"hour"),Z(d,"hour"),ta);case"minutes":case"minute":return me(Z(l,"minute"),Z(d,"minute"),je);case"seconds":case"second":return me(Z(l,"second"),Z(d,"second"),1e3)}}function Oe(e){return lt(e,Z(e,"year"),"days")+1}function K(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Ge={YY(e,r,i){const l=this.YYYY(e,r,i)%100;return l>=0?w(l):"-"+w(Math.abs(l))},YYYY(e,r,i){return i??e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return K(e.getMonth()+1)},MM(e){return w(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return K(this.Q(e))},D(e){return e.getDate()},Do(e){return K(e.getDate())},DD(e){return w(e.getDate())},DDD(e){return Oe(e)},DDDo(e){return K(Oe(e))},DDDD(e){return w(Oe(e),3)},d(e){return e.getDay()},do(e){return K(e.getDay())},dd(e,r){return r.days[e.getDay()].slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return ke(e)},wo(e){return K(ke(e))},ww(e){return w(ke(e))},H(e){return e.getHours()},HH(e){return w(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return w(this.h(e))},m(e){return e.getMinutes()},mm(e){return w(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return w(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return w(Math.floor(e.getMilliseconds()/10))},SSS(e){return w(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,r,i,l){const d=l??e.getTimezoneOffset();return We(d,":")},ZZ(e,r,i,l){const d=l??e.getTimezoneOffset();return We(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function la(e,r,i,l,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=rt);const D=ot(i,et.props);return r.replace(aa,(c,m)=>c in Ge?Ge[c](o,D,l,d):m===void 0?c:m.split("\\]").join("]"))}const X=20,ua=["Calendar","Years","Months"],Ke=e=>ua.includes(e),Ie=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" — ";function L(e){return e.year+"/"+w(e.month)}const sa=kt({name:"QDate",props:{...Ue,...At,...Nt,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...Ue.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ie},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ie},navigationMaxYearMonth:{type:String,validator:Ie},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ke}},emits:[...Kt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:i}){const{proxy:l}=Ot(),{$q:d}=l,o=Zt(e,d),{getCache:D}=Qt(),{tabindex:c,headerClass:m,getLocale:S,getCurrentDate:f}=ea(e,d);let _;const E=Bt(e),V=Rt(E),T=F(null),p=F(Be()),C=F(S()),ut=M(()=>Be()),st=M(()=>S()),A=M(()=>f()),h=F(Re(p.value,C.value)),O=F(e.defaultView),Te=M(()=>d.lang.rtl===!0?"right":"left"),le=F(Te.value),ge=F(Te.value),ye=h.value.year,ue=F(ye-ye%X-(ye<0?X:0)),k=F(null),it=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),Q=M(()=>e.color||"primary"),J=M(()=>e.textColor||"white"),se=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),Me=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),$=M(()=>Me.value.filter(t=>typeof t=="string").map(t=>we(t,p.value,C.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),U=M(()=>{const t=a=>we(a,p.value,C.value);return Me.value.filter(a=>It(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ie=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Je(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),De=M(()=>e.calendar==="persian"?R:(t,a,n)=>la(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?p.value:a,n===void 0?C.value:n,t.year,t.timezoneOffset)),te=M(()=>$.value.length+U.value.reduce((t,a)=>t+1+lt(ie.value(a.to),ie.value(a.from)),0)),$e=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(k.value!==null){const n=k.value.init,u=ie.value(n);return C.value.daysShort[u.getDay()]+", "+C.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(te.value===0)return ee;if(te.value>1)return`${te.value} ${C.value.pluralDay}`;const t=$.value[0],a=ie.value(t);return isNaN(a.valueOf())===!0?ee:C.value.headerTitle!==void 0?C.value.headerTitle(a,t):C.value.daysShort[a.getDay()]+", "+C.value.monthsShort[t.month-1]+" "+t.day}),ct=M(()=>$.value.concat(U.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),dt=M(()=>$.value.concat(U.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Fe=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(te.value===0)return ee;if(te.value>1){const t=ct.value,a=dt.value,n=C.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return $.value[0].year}),ce=M(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),Ee=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):C.value.firstDayOfWeek),vt=M(()=>{const t=C.value.daysShort,a=Ee.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),B=M(()=>{const t=h.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():he(t.year,t.month)}),ft=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),H=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),q=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),_e=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return H.value!==null&&H.value.year>=h.value.year&&(t.year.prev=!1,H.value.year===h.value.year&&H.value.month>=h.value.month&&(t.month.prev=!1)),q.value!==null&&q.value.year<=h.value.year&&(t.year.next=!1,q.value.year===h.value.year&&q.value.month<=h.value.month&&(t.month.next=!1)),t}),de=M(()=>{const t={};return $.value.forEach(a=>{const n=L(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Ae=M(()=>{const t={};return U.value.forEach(a=>{const n=L(a.from),u=L(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===u?a.to.day:void 0,range:a}),n<u){let s;const{year:b,month:v}=a.from,y=v<12?{year:b,month:v+1}:{year:b+1,month:1};for(;(s=L(y))<=u;)t[s]===void 0&&(t[s]=[]),t[s].push({from:void 0,to:s===u?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ae=M(()=>{if(k.value===null)return;const{init:t,initHash:a,final:n,finalHash:u}=k.value,[s,b]=a<=u?[t,n]:[n,t],v=L(s),y=L(b);if(v!==j.value&&y!==j.value)return;const Y={};return v===j.value?(Y.from=s.day,Y.includeFrom=!0):Y.from=1,y===j.value?(Y.to=b.day,Y.includeTo=!0):Y.to=B.value,Y}),j=M(()=>L(h.value)),mt=M(()=>{const t={};if(e.options===void 0){for(let n=1;n<=B.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=B.value;n++){const u=j.value+"/"+w(n);t[n]=a(u)}return t}),ht=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=B.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=B.value;n++){const u=j.value+"/"+w(n);t[n]=a(u)===!0&&ft.value(u)}}return t}),gt=M(()=>{let t,a;const{year:n,month:u}=h.value;if(e.calendar!=="persian")t=new Date(n,u-1,1),a=new Date(n,u-1,0).getDate();else{const s=Je(n,u,1);t=new Date(s.gy,s.gm-1,s.gd);let b=u-1,v=n;b===0&&(b=12,v--),a=he(v,b)}return{days:t.getDay()-Ee.value-1,endDay:a}}),Ne=M(()=>{const t=[],{days:a,endDay:n}=gt.value,u=a<0?a+7:a;if(u<6)for(let v=n-u;v<=n;v++)t.push({i:v,fill:!0});const s=t.length;for(let v=1;v<=B.value;v++){const y={i:v,event:ht.value[v],classes:[]};mt.value[v]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(de.value[j.value]!==void 0&&de.value[j.value].forEach(v=>{const y=s+v-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:Q.value,textColor:J.value})}),Ae.value[j.value]!==void 0&&Ae.value[j.value].forEach(v=>{if(v.from!==void 0){const y=s+v.from-1,Y=s+(v.to||B.value)-1;for(let ne=y;ne<=Y;ne++)Object.assign(t[ne],{range:v.range,unelevated:!0,color:Q.value,textColor:J.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),v.to!==void 0&&Object.assign(t[Y],{rangeTo:!0,flat:!1})}else if(v.to!==void 0){const y=s+v.to-1;for(let Y=s;Y<=y;Y++)Object.assign(t[Y],{range:v.range,unelevated:!0,color:Q.value,textColor:J.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=s+B.value-1;for(let Y=s;Y<=y;Y++)Object.assign(t[Y],{range:v.range,unelevated:!0,color:Q.value,textColor:J.value})}}),ae.value!==void 0){const v=s+ae.value.from-1,y=s+ae.value.to-1;for(let Y=v;Y<=y;Y++)t[Y].color=Q.value,t[Y].editRange=!0;ae.value.includeFrom===!0&&(t[v].editRangeFrom=!0),ae.value.includeTo===!0&&(t[y].editRangeTo=!0)}h.value.year===A.value.year&&h.value.month===A.value.month&&(t[s+A.value.day-1].today=!0);const b=t.length%7;if(b>0){const v=7-b;for(let y=1;y<=v;y++)t.push({i:y,fill:!0})}return t.forEach(v=>{let y="q-date__calendar-item ";v.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${v.in===!0?"in":"out"}`,v.range!==void 0&&(y+=` q-date__range${v.rangeTo===!0?"-to":v.rangeFrom===!0?"-from":""}`),v.editRange===!0&&(y+=` q-date__edit-range${v.editRangeFrom===!0?"-from":""}${v.editRangeTo===!0?"-to":""}`),(v.range!==void 0||v.editRange===!0)&&(y+=` text-${v.color}`)),v.classes=y}),t}),yt=M(()=>e.disable===!0?{"aria-disabled":"true"}:{});re(()=>e.modelValue,t=>{if(_===t)_=0;else{const a=Re(p.value,C.value);W(a.year,a.month,a)}}),re(O,()=>{T.value!==null&&l.$el.contains(document.activeElement)===!0&&T.value.focus()}),re(()=>h.value.year+"|"+h.value.month,()=>{i("navigation",{year:h.value.year,month:h.value.month})}),re(ut,t=>{Pe(t,C.value,"mask"),p.value=t}),re(st,t=>{Pe(p.value,t,"locale"),C.value=t});function Ze(){const{year:t,month:a,day:n}=A.value,u={...h.value,year:t,month:a,day:n},s=de.value[L(u)];(s===void 0||s.includes(u.day)===!1)&&xe(u),be(u.year,u.month)}function Mt(t){Ke(t)===!0&&(O.value=t)}function Dt(t,a){["month","year"].includes(t)&&(t==="month"?ze:Ye)(a===!0?-1:1)}function be(t,a){O.value="Calendar",W(t,a)}function _t(t,a){if(e.range===!1||!t){k.value=null;return}const n=Object.assign({...h.value},t),u=a!==void 0?Object.assign({...h.value},a):n;k.value={init:n,initHash:R(n),final:u,finalHash:R(u)},be(n.year,n.month)}function Be(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function we(t,a,n){return oa(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Re(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Le();const u=n[n.length-1],s=we(u.from!==void 0?u.from:u,t,a);return s.dateHash===null?Le():s}function Le(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=A.value!==void 0?A.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+w(a)+"/01"}}function ze(t){let a=h.value.year,n=Number(h.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),W(a,n),se.value===!0&&ve("month")}function Ye(t){const a=Number(h.value.year)+t;W(a,h.value.month),se.value===!0&&ve("year")}function bt(t){W(t,h.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",se.value===!0&&ve("year")}function wt(t){W(h.value.year,t),O.value="Calendar",se.value===!0&&ve("month")}function Yt(t,a){const n=de.value[a];(n!==void 0&&n.includes(t.day)===!0?Se:xe)(t)}function P(t){return{year:t.year,month:t.month,day:t.day}}function W(t,a,n){if(H.value!==null&&t<=H.value.year&&((a<H.value.month||t<H.value.year)&&(a=H.value.month),t=H.value.year),q.value!==null&&t>=q.value.year&&((a>q.value.month||t>q.value.year)&&(a=q.value.month),t=q.value.year),n!==void 0){const{hour:s,minute:b,second:v,millisecond:y,timezoneOffset:Y,timeHash:ne}=n;Object.assign(h.value,{hour:s,minute:b,second:v,millisecond:y,timezoneOffset:Y,timeHash:ne})}const u=t+"/"+w(a)+"/01";u!==h.value.dateHash&&(le.value=h.value.dateHash<u==(d.lang.rtl!==!0)?"left":"right",t!==h.value.year&&(ge.value=le.value),Xe(()=>{ue.value=t-t%X-(t<0?X:0),Object.assign(h.value,{year:t,month:a,day:1,dateHash:u})}))}function pe(t,a,n){const u=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;_=u;const{reason:s,details:b}=Qe(a,n);i("update:modelValue",u,s,b)}function ve(t){const a=$.value[0]!==void 0&&$.value[0].dateHash!==null?{...$.value[0]}:{...h.value};Xe(()=>{a.year=h.value.year,a.month=h.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():he(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const u=G(a);_=u;const{details:s}=Qe("",a);i("update:modelValue",u,t,s)})}function Qe(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...P(a.target),from:P(a.from),to:P(a.to)}}:{reason:`${t}-day`,details:P(a)}}function G(t,a,n){return t.from!==void 0?{from:De.value(t.from,a,n),to:De.value(t.to,a,n)}:De.value(t,a,n)}function xe(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=R(t.from),u=R(t.to),s=$.value.filter(v=>v.dateHash<n||v.dateHash>u),b=U.value.filter(({from:v,to:y})=>y.dateHash<n||v.dateHash>u);a=s.concat(b).concat(t).map(v=>G(v))}else{const n=Me.value.slice();n.push(G(t)),a=n}else a=G(t);pe(a,"add",t)}function Se(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=G(t);t.from!==void 0?a=e.modelValue.filter(u=>u.from!==void 0?u.from!==n.from&&u.to!==n.to:!0):a=e.modelValue.filter(u=>u!==n),a.length===0&&(a=null)}pe(a,"remove",t)}function Pe(t,a,n){const u=$.value.concat(U.value).map(s=>G(s,t,a)).filter(s=>s.from!==void 0?s.from.dateHash!==null&&s.to.dateHash!==null:s.dateHash!==null);i("update:modelValue",(e.multiple===!0?u:u[0])||null,n)}function xt(){if(e.minimal!==!0)return g("div",{class:"q-date__header "+m.value},[g("div",{class:"relative-position"},[g(oe,{name:"q-transition--fade"},()=>g("div",{key:"h-yr-"+Fe.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:c.value,...D("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[Fe.value]))]),g("div",{class:"q-date__header-title relative-position flex no-wrap"},[g("div",{class:"relative-position col"},[g(oe,{name:"q-transition--fade"},()=>g("div",{key:"h-sub"+$e.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:c.value,...D("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[$e.value]))]),e.todayBtn===!0?g(N,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:c.value,onClick:Ze}):null])])}function Ce({label:t,type:a,key:n,dir:u,goTo:s,boundaries:b,cls:v}){return[g("div",{class:"row items-center q-date__arrow"},[g(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ce.value[0],tabindex:c.value,disable:b.prev===!1,...D("go-#"+a,{onClick(){s(-1)}})})]),g("div",{class:"relative-position overflow-hidden flex flex-center"+v},[g(oe,{name:"q-transition--jump-"+u},()=>g("div",{key:n},[g(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:c.value,...D("view#"+a,{onClick:()=>{O.value=a}})})]))]),g("div",{class:"row items-center q-date__arrow"},[g(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ce.value[1],tabindex:c.value,disable:b.next===!1,...D("go+#"+a,{onClick(){s(1)}})})])]}const St={Calendar:()=>[g("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[g("div",{class:"q-date__navigation row items-center no-wrap"},Ce({label:C.value.months[h.value.month-1],type:"Months",key:h.value.month,dir:le.value,goTo:ze,boundaries:_e.value.month,cls:" col"}).concat(Ce({label:h.value.year,type:"Years",key:h.value.year,dir:ge.value,goTo:Ye,boundaries:_e.value.year,cls:""}))),g("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},vt.value.map(t=>g("div",{class:"q-date__calendar-item"},[g("div",t)]))),g("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[g(oe,{name:"q-transition--slide-"+le.value},()=>g("div",{key:j.value,class:"q-date__calendar-days fit"},Ne.value.map(t=>g("div",{class:t.classes},[t.in===!0?g(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:c.value,...D("day#"+t.i,{onClick:()=>{Ct(t.i)},onMouseover:()=>{Ht(t.i)}})},t.event!==!1?()=>g("div",{class:"q-date__event bg-"+t.event}):null):g("div",""+t.i)]))))])])],Months(){const t=h.value.year===A.value.year,a=u=>H.value!==null&&h.value.year===H.value.year&&H.value.month>u||q.value!==null&&h.value.year===q.value.year&&q.value.month<u,n=C.value.monthsShort.map((u,s)=>{const b=h.value.month===s+1;return g("div",{class:"q-date__months-item flex flex-center"},[g(N,{class:t===!0&&A.value.month===s+1?"q-date__today":null,flat:b!==!0,label:u,unelevated:b,color:b===!0?Q.value:null,textColor:b===!0?J.value:null,tabindex:c.value,disable:a(s+1),...D("month#"+s,{onClick:()=>{wt(s+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(g("div",{class:"row no-wrap full-width"},[Ce({label:h.value.year,type:"Years",key:h.value.year,dir:ge.value,goTo:Ye,boundaries:_e.value.year,cls:" col"})])),g("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=ue.value,a=t+X,n=[],u=s=>H.value!==null&&H.value.year>s||q.value!==null&&q.value.year<s;for(let s=t;s<=a;s++){const b=h.value.year===s;n.push(g("div",{class:"q-date__years-item flex flex-center"},[g(N,{key:"yr"+s,class:A.value.year===s?"q-date__today":null,flat:!b,label:s,dense:!0,unelevated:b,color:b===!0?Q.value:null,textColor:b===!0?J.value:null,tabindex:c.value,disable:u(s),...D("yr#"+s,{onClick:()=>{bt(s)}})})]))}return g("div",{class:"q-date__view q-date__years flex flex-center"},[g("div",{class:"col-auto"},[g(N,{round:!0,dense:!0,flat:!0,icon:ce.value[0],tabindex:c.value,disable:u(t),...D("y-",{onClick:()=>{ue.value-=X}})})]),g("div",{class:"q-date__years-content col self-stretch row items-center"},n),g("div",{class:"col-auto"},[g(N,{round:!0,dense:!0,flat:!0,icon:ce.value[1],tabindex:c.value,disable:u(a),...D("y+",{onClick:()=>{ue.value+=X}})})])])}};function Ct(t){const a={...h.value,day:t};if(e.range===!1){Yt(a,j.value);return}if(k.value===null){const n=Ne.value.find(s=>s.fill!==!0&&s.i===t);if(e.noUnset!==!0&&n.range!==void 0){Se({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Se(a);return}const u=R(a);k.value={init:a,initHash:u,final:a,finalHash:u},i("rangeStart",P(a))}else{const n=k.value.initHash,u=R(a),s=n<=u?{from:k.value.init,to:a}:{from:a,to:k.value.init};k.value=null,xe(n===u?a:{target:a,...s}),i("rangeEnd",{from:P(s.from),to:P(s.to)})}}function Ht(t){if(k.value!==null){const a={...h.value,day:t};Object.assign(k.value,{final:a,finalHash:R(a)})}}return Object.assign(l,{setToday:Ze,setView:Mt,offsetCalendar:Dt,setCalendarTo:be,setEditingRange:_t}),()=>{const t=[g("div",{class:"q-date__content col relative-position"},[g(oe,{name:"q-transition--fade"},St[O.value])])],a=Et(r.default);return a!==void 0&&t.push(g("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&V(t,"push"),g("div",{class:it.value,...yt.value},[xt(),g("div",{ref:T,class:"q-date__main col column",tabindex:-1},t)])}}}),ia={class:"calender-section"},ca={class:"calender-topbar"},da={class:"calender-main"},va={__name:"CalenderIndex",setup(e){const r=F("");return(i,l)=>{const d=jt("RouterLink");return Vt(),Tt("section",ia,[fe("nav",ca,[He(d,{to:"/",class:"backarrow-button"},{default:$t(()=>[He(Lt)]),_:1}),l[1]||(l[1]=fe("h3",null,"Calender",-1)),l[2]||(l[2]=fe("div",null,null,-1))]),fe("main",da,[He(sa,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=o=>r.value=o),minimal:"",color:Ft(zt).wine},null,8,["modelValue","color"])])])}}},Da=pt(va,[["__scopeId","data-v-e61dffc2"]]);export{Da as default};
