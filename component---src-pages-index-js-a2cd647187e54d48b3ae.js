(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(149),c=(a(73),a(74),a(153)),s=a(154),l=(a(151),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=(e.title,e.children),n=(t.pathname,t.pathname.split("/").filter(Boolean).pop());n&&Boolean(n.match(/^[0-9]+$/));return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"100%"}},i.a.createElement(c.a,null),a,i.a.createElement(s.a,null))},t}(i.a.Component)),d=a(191),u=a(159),p=a(192),m=a.n(p),g=a(193),f=a.n(g),b=Object(u.a)(function(e){e.className;return i.a.createElement(o.StaticQuery,{query:"3695921618",render:function(e){var t=e.desktop.childImageSharp.fluid;return i.a.createElement("div",null,i.a.createElement(f.a,{Tag:"section",className:m.a.hero,fluid:t}),i.a.createElement("div",{className:m.a.bgOverlay}),i.a.createElement("div",{className:m.a.poly}))},data:d})}).withConfig({displayName:"Hero__StyledBackgroundHero",componentId:"sc-1lkveee-0"})([""]),h=a(155);a.d(t,"pageQuery",function(){return y});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title;e.allMarkdownRemark.edges;return i.a.createElement(l,{location:this.props.location,title:t},i.a.createElement(b,null),i.a.createElement(h.a,{title:"Rafael Davis H."}),i.a.createElement(o.Link,{to:"/blog"},"Blog"))},t}(i.a.Component),y=(t.default=E,"2785444898")},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(148),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(150),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(161),r=a.n(n),A=a(162),i=a.n(A);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var c=o.rhythm,s=o.scale},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(52),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,a){"use strict";var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(159),c=o.a.div.withConfig({displayName:"Header__Container",componentId:"sc-5ltj5t-0"})(["position:absolute;left:0;right:0;top:0;background:transparent;z-index:999;display:flex;margin:auto;width:85%;flex-direction:row;align-items:center;justify-content:center;"]),s=o.a.div.withConfig({displayName:"Header__Col",componentId:"sc-5ltj5t-1"})(["border:solid 1px red;padding:25px 30px;flex:1 auto;"]),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c,null,i.a.createElement(s,null,"Logo"),i.a.createElement(s,null,"Nav List"),i.a.createElement(s,null,"Donate button"))},t}(A.Component);t.a=l},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," ","and customized by"," ",i.a.createElement("a",{href:"https://rafaeldavis.me"},"Rafael Davis H.")))},t}(A.Component);t.a=o},155:function(e,t,a){"use strict";var n=a(156),r=a(0),A=a.n(r),i=a(4),o=a.n(i),c=a(163),s=a.n(c),l=a(149);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return A.a.createElement(l.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return A.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Ceremi",description:"CEREMI, es un ministerio cristiano evangélico en apoyo a las denominaciones, agencias misioneras locales, en beneficio particular de pastores, misioneros y líderes hispanos de carrera en el ministerio cristiano con tres programas: Prevención, Renovación y Restauración.",author:"Lic. Orlando A. Baldelomar"}}}}},191:function(e){e.exports={data:{desktop:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHTSRHCgf/EABsQAAIBBQAAAAAAAAAAAAAAAAABEQIDEhMx/9oACAEBAAEFAqr8Pe5zOiUI/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAwEBAAAAAAAAAAAAAAAAARARACH/2gAIAQEABj8Ck3BXAv/EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhMXH/2gAIAQEAAT8h6b7LmakE9iApIVRRj//aAAwDAQACAAMAAAAQFO//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMUFRgf/aAAgBAQABPxBlL0bGId0wBg9gw0vmtRgBEpgYYFAQQMBP/9k=",aspectRatio:1.5,src:"/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/77e5b/hero-bg.jpg",srcSet:"/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/3dd8a/hero-bg.jpg 480w,\n/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/ef220/hero-bg.jpg 960w,\n/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/77e5b/hero-bg.jpg 1920w",srcWebp:"/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/290e9/hero-bg.webp",srcSetWebp:"/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/09081/hero-bg.webp 480w,\n/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/9790f/hero-bg.webp 960w,\n/Ceremi-rebuild/static/2b5bd3a996db33a1d1e8bfad7e994351/290e9/hero-bg.webp 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}}}}},192:function(e,t,a){e.exports={hero:"hero-module--hero--1vYnM",bgOverlay:"hero-module--bgOverlay--1V8Rj",poly:"hero-module--poly--lOSqG"}}}]);
//# sourceMappingURL=component---src-pages-index-js-a2cd647187e54d48b3ae.js.map