(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{369:function(t,e,n){var content=n(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("12288d96",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n(372)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},372:function(t,e,n){var r=n(12),o=n(21),c=n(48),l=/"/g,d=function(t,e,n,r){var o=String(c(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(r).replace(l,"&quot;")+'"'),d+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},373:function(t,e,n){"use strict";var r=n(369);n.n(r).a},374:function(t,e,n){(e=n(14)(!1)).push([t.i,".page-content[data-v-774fb7f8]{position:relative;height:70px}.pagination[data-v-774fb7f8]{text-align:left}.pagination p[data-v-774fb7f8]{margin:0;cursor:pointer}.pagination[data-v-774fb7f8]{height:40px;padding:20px 0;position:absolute;left:45%;top:0;transform:translateX(-50%)}.pagination a[data-v-774fb7f8],p[data-v-774fb7f8]{display:inline-block;text-align:center;margin-right:6px;padding:0 12px;height:24px;border:1px solid #ccc;background:#fff;text-decoration:none;color:grey;font-size:12px;line-height:24px}.pagination a[data-v-774fb7f8]:hover{color:#00a8fe;background:#fff;border:1px solid #00a8fe}.pagination a.cur[data-v-774fb7f8]{border:none;background:#00a8fe;color:#fff}.pagination p[data-v-774fb7f8]{color:#bbb;border:1px solid #ccc;background:#fcfcfc;margin-right:8px}.pagination p.pageRemark[data-v-774fb7f8]{border-style:none;background:none;margin-right:0;padding:4px 0;color:#666}.pagination p.pageRemark b[data-v-774fb7f8]{color:red}.pagination p.pageEllipsis[data-v-774fb7f8]{border-style:none;background:none;padding:4px 0;color:grey}.dates li[data-v-774fb7f8]{font-size:14px;margin:20px 0}.dates li span[data-v-774fb7f8]{float:right}",""]),t.exports=e},375:function(t,e,n){"use strict";n(81),n(371);var r={props:["link","pageStr","size","total"],computed:{page:function(){return this.pageStr-0},totalpages:function(){var s=parseInt(this.size),t=parseInt(this.total);return parseInt(t/s)+(t%s>0?1:0)},list:function(){var p=parseInt(this.page),t=this.totalpages,ul=this.link,e=[],n=p-1>=1?p-1:1,r=p+1<=t?p+1:t,o=/\{.*?\}/g;e.push({page:1,state:1==p?"disable":"",href:ul.replace(o,1),title:"跳到首页",text:"首页"}),e.push({page:n,state:p<=1?"disable":"",href:ul.replace(o,n),title:"上一页",text:"上一页"});for(var i=1;i<=t;i++){if(t>4){if(Math.abs(p-i)>2)continue;if(2==Math.abs(p-i)){e.push({state:"disable",page:"...",href:"",title:"...",text:"..."});continue}}var c={page:i,state:i==p?"active":"",href:ul.replace(o,i),title:"跳到第"+i+"页",text:i};e.push(c)}return e.push({page:r,state:p+1>t?"disable":"",href:ul.replace(o,r),title:"下一页",text:"下一页"}),e.push({state:p==t?"disable":"",href:ul.replace(o,t),title:"跳到尾页",text:"尾页"}),e}},mounted:function(){this.page}},o=(n(373),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticClass:"page-content"},[n("div",{staticClass:"pagination"},[t._l(t.list,(function(e){return["disable"==e.state?n("p",{staticClass:"disable",attrs:{title:e.title}},[t._v(t._s(e.text))]):n("nuxt-link",{class:{cur:"active"==e.state},attrs:{to:e.href,title:e.title}},[t._v(t._s(e.text))])]}))],2)])])}),[],!1,null,"774fb7f8",null);e.a=component.exports},389:function(t,e,n){var content=n(594);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("75974b28",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";var r=n(389);n.n(r).a},594:function(t,e,n){(e=n(14)(!1)).push([t.i,".banner[data-v-05e65265]{box-sizing:border-box;padding:40px}.banner h1[data-v-05e65265]{font-size:24px}.content-empty[data-v-05e65265]{min-height:300px;box-sizing:border-box;padding:60px}.about-inner-wrap .inner-content[data-v-05e65265]{width:1000px;box-sizing:border-box;margin:20px auto 60px}.about-inner-wrap .inner-content .my-link[data-v-05e65265]{position:relative;display:block;text-decoration:none;width:100%;height:60px;padding:0 35px;text-align:left;color:#333;font-size:16px;line-height:60px;border-bottom:1px dashed #d9d9d9;transition:all .3s ease}.about-inner-wrap .inner-content .my-link[data-v-05e65265]:hover{color:#01a8ff}.about-inner-wrap .inner-content .my-link:hover span[data-v-05e65265]{background-color:#01a8ff}.about-inner-wrap .inner-content .my-link span[data-v-05e65265]{display:block;position:absolute;top:50%;left:7px;transform:translateY(-50%);width:8px;height:8px;border-radius:50%;background-color:#ccc;transition:all .3s ease}.about-inner-wrap .page-btn-wrap[data-v-05e65265]{height:80px;padding:20px 0;color:grey;font-size:12px;line-height:24px}.about-inner-wrap .page-btn-wrap p[data-v-05e65265]{cursor:pointer}.about-inner-wrap .page-btn-wrap a[data-v-05e65265],.about-inner-wrap .page-btn-wrap p[data-v-05e65265]{float:left;padding:0 12px;border:1px solid #ccc;background-color:#fcfcfc;margin-right:8px}.about-inner-wrap .page-btn-wrap a[data-v-05e65265]{text-decoration:none;color:grey}.about-inner-wrap .page-btn-wrap a[data-v-05e65265]:hover{color:#01a8ff;border:1px solid #01a8ff}.about-inner-wrap .page-btn-wrap .active[data-v-05e65265]{color:#fff;background-color:#01a8ff;border:1px solid #01a8ff}.about-inner-wrap .page-btn-wrap .active[data-v-05e65265]:hover{color:#fff}",""]),t.exports=e},707:function(t,e,n){"use strict";n.r(e);n(47);var r=n(9),o=n(3),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data,n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getHelpArticleList({code:"sys_article_news",page:1,pre_page:10,stringify:1,_oem:"default"});case 2:return e=t.sent,data=e.data,n=[],r=0,c=0,data.ret&&(n=data.ret.list,r=data.ret.total,c=data.ret.total_page),t.abrupt("return",{contentList:n,total:r,total_page:c});case 9:case"end":return t.stop()}}),t)})))()},scrollToTop:!0,head:function(){return{title:"最新资讯"}},data:function(){return{contentList:[],total:0,total_page:0}},watch:{routePath:function(t,e){var n=this;o.a.getHelpArticleList({code:"sys_article_news",page:t-0,pre_page:10,_oem:"default"}).then((function(t){var e=t.data.ret;n.contentList=e.list,n.total=e.total,n.total_page=e.total_page}))}},computed:{routePath:function(){return this.$route.query.page}},mounted:function(){var t=this;this.contentList&&0!=this.contentList.length||o.a.getHelpArticleList({code:"sys_article_news",page:1,pre_page:10,_oem:"default"}).then((function(e){var n=e.data.ret;t.contentList=n.list,t.total=n.total,t.total_page=n.total_page}))},components:{page:n(375).a}},l=(n(593),n(6)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"content"},[n("div",{staticClass:"about-inner-wrap"},[t.contentList&&t.contentList.length>0?n("div",{staticClass:"inner-content"},t._l(t.contentList,(function(e){return t.contentList&&t.contentList.length?n("nuxt-link",{key:e.id,staticClass:"my-link",attrs:{to:{path:"/news/",name:"news-id",params:{id:e.id}}}},[t._v("\n            "+t._s(e.name)+"\n            "),n("span")]):n("span",[t._v("暂无数据")])})),1):n("div",{staticClass:"inner-content content-empty"},[t._v("暂无资讯")]),t._v(" "),t.total_page>=1?[n("div",{staticClass:"page-btn-wrap"},[n("page",{attrs:{link:"/news?page={}",pageStr:t.routePath?t.routePath:1,size:"10",total:t.total}})],1)]:t._e()],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("h1",[this._v("海龟加速器最新资讯")])])}],!1,null,"05e65265",null);e.default=component.exports}}]);