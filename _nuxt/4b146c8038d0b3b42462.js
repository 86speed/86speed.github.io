(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{393:function(t,e,n){var content=n(602);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("68f6884c",content,!0,{sourceMap:!1})},601:function(t,e,n){"use strict";var r=n(393);n.n(r).a},602:function(t,e,n){(e=n(14)(!1)).push([t.i,"a[data-v-772c51b2]{text-decoration:none;color:#666}.detail-wrap[data-v-772c51b2]{width:1200px;background-color:#f7f7f7;display:flex;justify-content:space-between}.detail-wrap .left-nav[data-v-772c51b2]{width:230px;flex:0 0 auto;box-sizing:border-box}.detail-wrap .left-nav .item[data-v-772c51b2]{width:230px;background-color:#fff;padding:22px 20px 20px 29px;text-align:left;margin-top:20px;box-sizing:border-box}.detail-wrap .left-nav .item .title[data-v-772c51b2]{display:block;height:20px;line-height:20px;position:relative;margin-bottom:8px}.detail-wrap .left-nav .item .title .more[data-v-772c51b2]{float:right}.detail-wrap .left-nav .item .title .left-border[data-v-772c51b2]{width:4px;height:20px;background-color:#03a9ff;border-radius:2px;position:absolute;top:0;left:-20px}.detail-wrap .left-nav .item .alist-wrap .my-left-link[data-v-772c51b2]{position:relative;display:block;width:181px;padding-left:15px;height:30px;font-size:14px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .3s ease}.detail-wrap .left-nav .item .alist-wrap .my-left-link[data-v-772c51b2]:hover{color:#01a8ff}.detail-wrap .left-nav .item .alist-wrap .my-left-link:hover span[data-v-772c51b2]{background-color:#01a8ff}.detail-wrap .left-nav .item .alist-wrap .my-left-link span[data-v-772c51b2]{display:block;position:absolute;z-index:1;top:50%;left:0;transform:translateY(-50%);width:6px;height:6px;border-radius:50%;background-color:#4c4c4c;transition:all .3s ease}.detail-wrap .left-nav .item .alist-wrap .active[data-v-772c51b2]{color:#01a8ff}.detail-wrap .left-nav .item .alist-wrap .active span[data-v-772c51b2]{background-color:#01a8ff}.detail-wrap .right-content[data-v-772c51b2]{background-color:#fff;width:950px;margin-top:20px}.detail-wrap .right-content .content-main[data-v-772c51b2]{box-sizing:border-box;width:950px;flex:0 0 auto;padding:18px 75px 140px;text-align:left}.detail-wrap .right-content .content-main .top[data-v-772c51b2]{height:56px;line-height:56px;color:#666}.detail-wrap .right-content .content-main .top a[data-v-772c51b2]{font-size:22px}.detail-wrap .right-content .content-main .top span[data-v-772c51b2]{font-size:16px}.detail-wrap .right-content .content-main .top .icon[data-v-772c51b2]{display:inline-block;width:26px;height:14px;background-size:cover}.detail-wrap .right-content .content-main .title[data-v-772c51b2]{font-size:38px;color:#000;padding:15px 0;text-align:center}.detail-wrap .right-content .content-main .main[data-v-772c51b2]{min-height:356px}.detail-wrap .right-content .page-bot[data-v-772c51b2]{padding:12px 75px 10px;border-top:1px solid #e6e6e6;text-align:left}.detail-wrap .right-content .page-bot .mylink[data-v-772c51b2]{display:block;line-height:40px;font-size:#333;text-decoration:none}.detail-wrap .right-content .page-bot .mylink[data-v-772c51b2]:hover{color:#01a8ff}",""]),t.exports=e},711:function(t,e,n){"use strict";n.r(e);n(28),n(47);var r=n(9),l=n(3),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data,c,pre,d,h,f,v,_,m,x,w,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.id,e.next=4,l.a.getHelpArticleInfo({id:r});case 4:return o=e.sent,data=o.data,c={name:""},pre={},d={},data.ret&&(c=data.ret.info,pre=data.ret.pre_next.pre,d=data.ret.pre_next.next),h=[],e.next=13,l.a.getHelpArticleList({code:"sys_article_help_common",page:1,pre_page:10});case 13:return(f=e.sent).data.ret&&(h=f.data.ret.list.splice(0,4)),v=[],e.next=18,l.a.getHelpArticleList({code:"sys_article_help_insall",page:1,pre_page:10});case 18:return(_=e.sent).data.ret&&(v=_.data.ret.list.splice(0,4)),m=[],e.next=23,l.a.getHelpArticleList({code:"sys_article_help_net",page:1,pre_page:10});case 23:return(x=e.sent).data.ret&&(m=x.data.ret.list.splice(0,4)),w=[],e.next=28,l.a.getHelpArticleList({code:"sys_article_about",page:1,pre_page:10});case 28:return(y=e.sent).data.ret&&(w=y.data.ret.list.splice(0,4)),e.abrupt("return",{id:r,info:c,pre:pre,next:d,problemList:h,installList:v,teachList:m,aboutList:w});case 31:case"end":return e.stop()}}),e)})))()},scrollToTop:!0,head:function(){return{title:this.info.name}},data:function(){return{id:0,info:{name:""},pre:{},next:{},problemList:[],installList:[],teachList:[],aboutList:[]}},methods:{getPage:function(t){var e=this;l.a.getHelpArticleInfo({id:t}).then((function(t){e.info=t.data.ret.info;var n=t.data.ret.pre_next,pre=n.pre,r=n.next;e.pre=pre,e.next=r}))}},watch:{id:function(t){this.getPage(t)}},computed:{prePath:function(){var t=this.pre.code;return"sys_article_help_insall"==t?"/tutorial/":"sys_article_help_common"==t?"/problem/":"sys_article_help_net"==t?"/novice/":"/about/"},nextPath:function(){var t=this.next.code;return"sys_article_help_insall"==t?"/tutorial/":"sys_article_help_common"==t?"/problem/":"sys_article_help_net"==t?"/novice/":"/about/"}},mounted:function(){var t=this;this.$store.commit("app/changeNavShowIndex",4);var e=this.$route.params.id;this.info&&!this.info.name&&l.a.getHelpArticleInfo({id:e}).then((function(e){t.info=e.data.ret.info;var n=e.data.ret.pre_next,pre=n.pre,r=n.next;t.pre=pre,t.next=r})),this.problemList&&0==this.problemList.length&&l.a.getHelpArticleList({code:"sys_article_help_common",page:1,pre_page:10}).then((function(e){t.problemList=e.data.ret.list.splice(0,4)})),this.installList&&0==this.installList.length&&l.a.getHelpArticleList({code:"sys_article_help_insall",page:1,pre_page:10}).then((function(e){t.installList=e.data.ret.list.splice(0,4)})),this.teachList&&0==this.teachList.length&&l.a.getHelpArticleList({code:"sys_article_help_net",page:1,pre_page:10}).then((function(e){t.teachList=e.data.ret.list.splice(0,4)})),this.aboutList&&0==this.aboutList.length&&l.a.getHelpArticleList({code:"sys_article_about",page:1,pre_page:10}).then((function(e){t.aboutList=e.data.ret.list.splice(0,4)}))}},c=(n(601),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrap"},[n("div",{staticClass:"left-nav"},[n("div",{staticClass:"item"},[t._m(0),t._v(" "),n("div",{staticClass:"alist-wrap"},t._l(t.problemList,(function(e){return n("nuxt-link",{key:e.id,staticClass:"my-left-link",class:{active:e.id==t.id},attrs:{to:{path:"/problem/",name:"problem-id",params:{id:e.id}}}},[t._v("\n          "+t._s(e.name)+"\n          "),n("span")])})),1)]),t._v(" "),n("div",{staticClass:"item"},[t._m(1),t._v(" "),n("div",{staticClass:"alist-wrap"},t._l(t.installList,(function(e){return n("nuxt-link",{key:e.id,staticClass:"my-left-link",class:{active:e.id==t.id},attrs:{to:{path:"/tutorial",name:"tutorial-id",params:{id:e.id}}}},[t._v("\n          "+t._s(e.name)+"\n          "),n("span")])})),1)]),t._v(" "),n("div",{staticClass:"item"},[t._m(2),t._v(" "),n("div",{staticClass:"alist-wrap"},t._l(t.teachList,(function(e){return n("nuxt-link",{key:e.id,staticClass:"my-left-link",class:{active:e.id==t.id},attrs:{to:{path:"/novice",name:"novice-id",params:{id:e.id}}}},[t._v("\n          "+t._s(e.name)+"\n          "),n("span")])})),1)]),t._v(" "),n("div",{staticClass:"item"},[t._m(3),t._v(" "),n("div",{staticClass:"alist-wrap"},t._l(t.aboutList,(function(e){return n("nuxt-link",{key:e.id,staticClass:"my-left-link",class:{active:e.id==t.id},attrs:{to:{path:"/about",name:"about-id",params:{id:e.id}}}},[t._v("\n          "+t._s(e.name)+"\n          "),n("span")])})),1)])]),t._v(" "),n("div",{staticClass:"right-content"},[n("div",{staticClass:"content-main"},[n("div",{staticClass:"top"},[n("a",{attrs:{href:"/about"}},[t._v("关于海龟")]),t._v(" "),n("span",{staticClass:"icon",staticStyle:{background:"url(/img/help/right.png) no-repeat center"}}),t._v(" "),n("span",[t._v(t._s(t.info.name))])]),t._v(" "),t.info.name?[n("p",{staticClass:"title"},[t._v(t._s(t.info.name))]),t._v(" "),n("div",{staticClass:"main",domProps:{innerHTML:t._s(t.info.content_html)}})]:t._e()],2),t._v(" "),n("div",{staticClass:"page-bot"},[n("nuxt-link",{staticClass:"pre mylink",attrs:{to:{path:t.prePath,name:"novice-id",params:{id:t.pre.id}}}},[t._v("上一篇: "+t._s(t.pre.name))]),t._v(" "),n("nuxt-link",{staticClass:"next mylink",attrs:{to:{path:t.nextPath,name:"novice-id",params:{id:t.next.id}}}},[t._v("下一篇: "+t._s(t.next.name))])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"title",attrs:{href:"/problem"}},[this._v("\n        常见问题\n        "),e("span",{staticClass:"left-border"}),this._v(" "),e("span",{staticClass:"more"},[this._v("更多>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"title",attrs:{href:"/tutorial"}},[this._v("\n        安装教程\n        "),e("span",{staticClass:"left-border"}),this._v(" "),e("span",{staticClass:"more"},[this._v("更多>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"title",attrs:{href:"/novice"}},[this._v("\n        上网教程\n        "),e("span",{staticClass:"left-border"}),this._v(" "),e("span",{staticClass:"more"},[this._v("更多>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"title",attrs:{href:"/about"}},[this._v("\n        关于海龟\n        "),e("span",{staticClass:"left-border"}),this._v(" "),e("span",{staticClass:"more"},[this._v("更多>")])])}],!1,null,"772c51b2",null);e.default=component.exports}}]);