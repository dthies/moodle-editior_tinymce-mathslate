YUI.add("moodle-tinymce_mathslate-config",function(e,t){M&&(M.tinymce_mathslate=M.tinymce_mathslate||{});var n=M&&M.tinymce_mathslate||{},r={EDITOR:"mathslate-tinymce",TOOLBOX:"mathslate-toolbox",DRAGNODE:"mathslate-toolbox-drag",UNDO:"mathslate-undo-button",REDO:"mathslate-redo-button",CLEAR:"mathslate-clear-button",HELP:"mathslate-help-button"};n.TabEditor=function(t,i){var s=this;this.node=e.one(t),this.node.setHTML(M.util.get_string("nomathjax","tinymce_mathslate"));if(typeof MathJax=="undefined")return;var o=e.guid(),u=e.guid();this.node.addClass(r.EDITOR),this.node.setHTML('<div id="'+o+'" class="'+r.TOOLBOX+'">'+'<div style="background-color: white; color: green; height: 300px; line-height: 75px; font-size: 18px; text-align:center"><br />Mathslate Mathematics Editor<br />'+'</div><script type="math/tex">\\quad</script><math> <mo> </mo></math></div>'+'<div id="'+u+'" ></div>');var a={tools:[],Tool:function(t){function n(t){Array.isArray(t[2])&&t[2].forEach(function(r){Array.isArray(r)?n(r):r==="[]"&&(newID=e.guid(),t[2][t[2].indexOf(r)]=["mn",{},"[]"])})}function r(e){if(typeof e=="string")return e;if(typeof e[1]=="undefined")return"";var t="";return typeof e[1].tex!="undefined"?(e[1].tex.forEach(function(n){typeof n=="string"?t+=n:t+=r(e[2][n])}),t):typeof e[2]=="string"?e[2]:typeof e[2]=="undefined"?"":(e[2].forEach(function(e){t+=r(e)}),t)}this.id=e.guid(),this.json=JSON.stringify(t),this.HTMLsnippet=[["span",{id:this.id,title:r(t)},[["math",{},[t]]]]],this.remove=function(){return this.parent.splice(this.parent.indexOf(t),1)},n(t),a.tools.push(this)},fillToolBox:function(n){this.tabs=n,this.tools=[];var r={children:[]};this.outputJSON=function(){var r="[",i=[];n.forEach(function(r){var s=[];if(!e.one(t).one(".yui3-tabview-content").get("children").item(0).get("children").item(n.indexOf(r)))return;var o=e.one(t).one(".yui3-tabview-content").get("children").item(0).get("children").item(n.indexOf(r)).one("a").getAttribute("id");e.one(t).one(".yui3-tabview-content").get("children").item(1).one('[aria-labelledby="'+o+'"]').all(".yui3-dd-drop").each(function(e){s.push("\n            "+a.getToolByID(e.getAttribute("id")).json)}),i.push('\n    {"label": "'+r.label+'",\n        "tools": ['+s.join(",")+"]\n    }")}),r+=i.join(",")+"\n]",e.one("#json-data").getDOMNode().value=r},MathJax.Hub.Register.StartupHook("End",function(){function s(){a.tools.forEach(a.makeToolDraggable),e.one("#"+o).all("li").each(function(e){a.registerTab(e)})}n.forEach(function(t){var n=e.Node.create("<p></p>");t.tools.forEach(function(e){var r=new a.Tool(e);r.parent=t.tools,MathJax.HTML.addElement(n.getDOMNode(),"span",{},[" ",["span",{},r.HTMLsnippet]," "]),e[0]&&e[0]!=="br"&&!1&&n.append("&thinsp; &thinsp;")}),r.children.push({label:t.label,content:n.getHTML()})});var i=new e.TabView(r);e.one("#label-remove").on("click",function(){var n=e.one(t).one("ul").get("children").indexOf(e.one(t).one(".yui3-tab-selected"));i.remove(n),a.tabs.splice(n,1),a.outputJSON()}),e.one("#label-add").on("click",function(){var n="title",r="label",s=e.one(t).one("ul").get("children").indexOf(e.one(t).one(".yui3-tab-selected"));i.add({childType:"Tab",label:"<span title='"+n+"'>"+r+"</span>",content:"<span id='latex-input'></span>"},s),a.tabs.splice(s,0,{label:"<span title='"+n+"'>"+r+"</span>",content:"",tools:[]}),a.outputJSON(),a.registerTab(e.one(t).one("ul").get("children").item(s))}),a.selectTab=function(e){i.selectChild(e)},a.shiftTab=function(n){var r=e.one(t).one("ul").get("children").item(n),s=r.get("parentNode").get("parentNode").get("children").item(1).one('[aria-labelledby="'+r.one("a").getAttribute("id")+'"]');i.add({childType:"Tab",label:a.tabs[n].label,content:""},n-1),r=e.one(t).one("ul").get("children").item(n-1);var o=r.get("parentNode").get("parentNode").get("children").item(1).one('[aria-labelledby="'+r.one("a").getAttribute("id")+'"]');s.get("children").each(function(e){o.appendChild(e)}),i.remove(n+1),a.tabs.splice(n-1,0,a.tabs.splice(n,1)[0]),a.registerTab(e.one(t).one("ul").get("children").item(n-1)),a.outputJSON()},e.one("#mathslate-tab-label").on("click",function(){var n=e.one(t).one(".yui3-tab-selected"),r=e.one(t).one("ul").get("children").indexOf(e.one(t).one(".yui3-tab-selected")),i=e.Node.create(a.tabs[r].label),s=e.Node.create('<input type="text" value="'+i.getHTML()+'"></input>');e.one("#mathslate-tab-text").appendChild(s),s.focus(),s.on("blur",function(){this.remove()}),s.on("change",function(){i.setHTML(this.getDOMNode().value),n.one("a").setHTML(""),n.one("a").appendChild(i),a.tabs[r].label="<span title='"+i.getAttribute("title")+"'>"+i.getHTML()+"</span>",MathJax.Hub.Queue(["Typeset",MathJax.Hub,n.getDOMNode()]),a.outputJSON()})}),e.one("#mathslate-tab-title").on("click",function(){var n=e.one(t).one(".yui3-tab-selected"),r=e.one(t).one("ul").get("children").indexOf(e.one(t).one(".yui3-tab-selected")),i=e.Node.create(a.tabs[r].label),s=e.Node.create('<input type="text" value="'+i.getAttribute("title")+'"></input>');e.one("#mathslate-tab-text").appendChild(s),s.focus(),s.on("blur",function(){this.remove()}),s.on("change",function(){i.setAttribute("title",this.getDOMNode().value),n.one("a").setHTML(""),n.one("a").appendChild(i),a.tabs[r].label="<span title='"+this.getDOMNode().value+"'>"+i.getHTML()+"</span>",MathJax.Hub.Queue(["Typeset",MathJax.Hub,n.getDOMNode()]),a.outputJSON()})}),e.one("#"+o)&&(e.one("#"+o).setHTML(""),i.render("#"+o),e.one("#latex-input")),MathJax.Hub.Queue(["Typeset",MathJax.Hub,o]),a.registerTab=function(t){var r=new e.DD.Drop({node:t});r.on("drop:hit",function(r){var i=r.drag.get("node").getAttribute("id"),s=t.get("parentNode").get("children").indexOf(t),o=a.getToolByID(i);n[s].tools.push(o.remove()),o.parent=n[s].tools,t.get("parentNode").get("parentNode").get("children").item(1).one('[aria-labelledby="'+t.one("a").getAttribute("id")+'"]').appendChild(e.one("#"+i).get("parentNode").get("parentNode")),a.outputJSON()})},MathJax.Hub.Queue(s)})},makeToolDraggable:function(t){e
.one("#"+t.id).on("dblclick",function(){a.tools.splice(a.tools.indexOf(t),1),this.get("parentNode").get("parentNode").remove(),t.remove(),a.outputJSON()});var n=new e.DD.Drop({node:"#"+t.id});n.on("drop:hit",function(n){var r=null,i=e.one("#"+n.drag.get("node").get("id")).get("parentNode").get("parentNode");a.tools.forEach(function(e){e.id===n.drag.get("node").get("id")&&(r=e)}),this.get("node").get("parentNode").get("parentNode").get("parentNode").insertBefore(i,this.get("node").get("parentNode").get("parentNode")),t.parent.splice(t.parent.indexOf(t),0,r.remove),a.outputJSON()});var i=new e.DD.Drag({node:"#"+t.id});i.set("data",t.json),i.on("drag:start",function(){this.get("dragNode").addClass(r.DRAGNODE)}),i.on("drag:end",function(){this.get("node").setStyle("top","0"),this.get("node").setStyle("left","0"),this.get("node").removeClass(r.DRAGNODE)})},getToolByID:function(e){var t;return this.tools.forEach(function(n){n.id&&n.id===e&&(t=n)}),t}};MathJax.Hub.Queue(["Typeset",MathJax.Hub,o]),e.on("io:success",function(t,n){a.tools.length===0&&(e.one("#json-data").getDOMNode().value=n.response,MathJax.Hub.Queue(["fillToolBox",a,e.JSON.parse(n.response)]))}),this.addTool=function(n){var r=e.one(t).one(".yui3-tab-panel-selected"),i=new a.Tool(["mrow",{},e.JSON.parse(n)]),s=e.one(t).one("ul").get("children").indexOf(e.one(t).one(".yui3-tab-selected"));i.parent=a.tabs[s].tools,MathJax.HTML.addElement(r.getDOMNode(),"span",{},[" ",["span",{},i.HTMLsnippet]," "]),MathJax.Hub.Queue(["Typeset",MathJax.Hub,r.getDOMNode()]),MathJax.Hub.Queue(["makeToolDraggable",a,i]),MathJax.Hub.Queue(["outputJSON",a])},i===undefined?e.io(n.config):e.io(i),e.one("#json-data").on("change",function(){MathJax.Hub.Queue(["fillToolBox",a,e.JSON.parse(this.getDOMNode().value)])}),e.one("#mathslate-tab-left").on("click",function(){var n=e.one(t).one("ul").get("children").indexOf(e.one(t).one(".yui3-tab-selected"));if(n<1)return;a.shiftTab(n),a.selectTab(n-1)}),e.one("#mathslate-tab-right").on("click",function(){var n=e.one(t).one("ul").get("children").indexOf(e.one(t).one(".yui3-tab-selected"))+1;if(n>=a.tabs.length)return;a.shiftTab(n),a.selectTab(n)})}},"@VERSION@",{requires:["dd-drag","dd-proxy","dd-drop","event","event-delegate","event-valuechange","tabview","io-base","json","moodle-tinymce_mathslate-textool","moodle-tinymce_mathslate-mathjaxeditor"]});
