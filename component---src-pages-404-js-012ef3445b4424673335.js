(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(159),c=n(155),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=s;var u="1097489062"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return g});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(148),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(150),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(162),r=n.n(a),i=n(163),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var c=l.rhythm,s=l.scale},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(52),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e,t){e.exports="data:image/png;base64,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"},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," ","and customized by"," ",o.a.createElement("a",{href:"https://rafaeldavis.me"},"Rafael Davis H.")))},t}(i.Component);t.a=l},155:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(164),s=n.n(c),u=n(149);function p(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var d="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Ceremi",description:"CEREMI, es un ministerio cristiano evangélico en apoyo a las denominaciones, agencias misioneras locales, en beneficio particular de pastores, misioneros y líderes hispanos de carrera en el ministerio cristiano con tres programas: Prevención, Renovación y Restauración.",author:"Lic. Orlando A. Baldelomar"}}}}},157:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(153),c=n.n(l),s=n(149),u={color:"#21539e",display:"inline-block",margin:"0 1rem",padding:"0.25rem",textDecoration:"none",boxShadow:"none",textTransform:"uppercase"},p=function(e){var t=e.children,n=e.to;return o.a.createElement(s.Link,{to:n,style:u,partiallyActive:!0,activeStyle:{textDecoration:"underline"}},t)},d=n(160),g=d.a.div.withConfig({displayName:"Header__Container",componentId:"sc-5ltj5t-0"})(["position:absolute;left:0;right:0;top:0;background:transparent;z-index:999;display:flex;margin:auto;width:85%;flex-direction:row;align-items:center;justify-content:center;height:120px;"]),h=d.a.div.withConfig({displayName:"Header__Col",componentId:"sc-5ltj5t-1"})(["padding:25px 30px;flex:1 auto;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(g,null,o.a.createElement(h,null,o.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textTransform:"uppercase"}},o.a.createElement("img",{style:{margin:"0"},src:c.a,alt:"Ceremi Logo",Width:"40"}),o.a.createElement("span",{style:{fontSize:"1.3rem",fontWeight:"600",lineHeight:"1.4rem",paddingLeft:"20px",margin:"0"}},"Ministerio CEREMI"))),o.a.createElement(h,null,o.a.createElement(p,{to:"/"},"Inicio"),o.a.createElement(p,{to:"/blog"},"Notas Pastorales"),o.a.createElement("a",{style:{textDecoration:"none",display:"inline-block",color:"#21539e",margin:"0 1rem",padding:"0.25rem",boxShadow:"none",textTransform:"uppercase"},href:"https://www.facebook.com/CeremiInternacional/",target:"_blank"},"Facebook")),o.a.createElement(h,null,"Donate button"))},t}(i.Component);t.a=m},159:function(e,t,n){"use strict";n(73),n(74);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(157),c=n(154),s=(n(151),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=(e.title,e.children),a=(t.pathname,t.pathname.split("/").filter(Boolean).pop());a&&Boolean(a.match(/^[0-9]+$/));return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"100%"}},o.a.createElement(l.a,null),n,o.a.createElement(c.a,null))},t}(o.a.Component));t.a=s}}]);
//# sourceMappingURL=component---src-pages-404-js-012ef3445b4424673335.js.map