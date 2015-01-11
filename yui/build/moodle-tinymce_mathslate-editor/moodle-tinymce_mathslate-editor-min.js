YUI.add("moodle-tinymce_mathslate-editor",function(e,t){M&&(M.tinymce_mathslate=M.tinymce_mathslate||{});var n=M&&M.tinymce_mathslate||{},r={TOOLBOX:"mathslate-toolbox",DRAGNODE:"mathslate-toolbox-drag",UNDO:"mathslate-undo-button",REDO:"mathslate-redo-button",CLEAR:"mathslate-clear-button",HELP:"mathslate-help-button"};n.Editor=function(t,i){var s=this;this.node=e.one(t),this.node.setHTML(M.util.get_string("nomathjax","tinymce_mathslate"));if(typeof MathJax=="undefined")return;var o=e.guid(),u=e.guid();this.node.addClass(r.EDITOR),this.node.setHTML('<div id="'+o+'" class="'+r.TOOLBOX+'">'+'<div style="background-color: white; color: green; height: 300px; line-height: 75px; font-size: 18px; text-align:center"><br />Mathslate Mathematics Editor<br />'+'Version 1.1 Beta</div><script type="math/tex">\\quad</script><math> <mo> </mo></math></div>'+'<div id="'+u+'" ></div>');var a=new n.MathJaxEditor("#"+u),f={tools:[],Tool:function(t){function n(t){Array.isArray(t[2])&&t[2].forEach(function(r){Array.isArray(r)?n(r):r==="[]"&&(newID=e.guid(),t[2][t[2].indexOf(r)]=["mn",{},"[]"])})}function r(e){if(typeof e=="string")return e;if(typeof e[1]=="undefined")return"";var t="";return typeof e[1].tex!="undefined"?(e[1].tex.forEach(function(n){typeof n=="string"?t+=n:t+=r(e[2][n])}),t):typeof e[2]=="string"?e[2]:typeof e[2]=="undefined"?"":(e[2].forEach(function(e){t+=r(e)}),t)}this.id=e.guid(),this.json=JSON.stringify(t),this.HTMLsnippet=[["span",{id:this.id,title:r(t)},[["math",{},[t]]]]],n(t),f.tools.push(this)},fillToolBox:function(t,r){var i={children:[]},o;return MathJax.Hub.Register.StartupHook("TeX Jax Config",function(){MathJax.Ajax.Require("[MathJax]/extensions/toMathML.js"),i.children.push({label:'<span title="TeX"><math><mi>T</mi><mspace width="-.14em"/><mpadded height="-.5ex" depth="+.5ex" voffset="-.5ex"><mrow class="MJX-TeXAtom-ORD"><mi>E</mi></mrow></mpadded><mspace width="-.115em" /> <mi>X</mi> </math></span>',content:"<span id='latex-input'></span>"})}),MathJax.Hub.Register.StartupHook("End",function(){t.forEach(function(t){var n=e.Node.create("<p></p>");t.tools.forEach(function(e){if(e[0]&&e[0]==="br"){n.append("<br />");return}var t=new f.Tool(e);n.append("<span> "+a.toMathML(t.HTMLsnippet)+" </span>")}),i.children.push({label:t.label,content:n.getHTML()})}),o=new e.TabView(i),s.output=function(e){return a.output(e)},e.one("#"+r)&&(e.one("#"+r).setHTML(""),o.render("#"+r),e.one("#latex-input")&&new n.TeXTool("#latex-input",function(e){a.addMath(e)})),MathJax.Hub.Queue(["Typeset",MathJax.Hub,r]),MathJax.Hub.Queue(function(){f.tools.forEach(function(t){e.one("#"+r)&&e.one("#"+r).one("#"+t.id)&&f.registerTool(t)})})}),o},getToolByID:function(e){var t;return this.tools.forEach(function(n){n.id&&n.id===e&&(t=n)}),t},registerTool:function(t){if(!e.one("#"+t.id))return;var n=new e.DD.Drag({node:"#"+t.id});n.set("data",t.json),n.on("drag:start",function(){this.get("dragNode").addClass(r.DRAGNODE)}),n.on("drag:end",function(){this.get("node").setStyle("top","0"),this.get("node").setStyle("left","0"),this.get("node").removeClass(r.DRAGNODE)})}};MathJax.Hub.Queue(["Typeset",MathJax.Hub,o]);var l;e.on("io:success",function(t,n){l.id===t&&MathJax.Hub.Queue(["fillToolBox",f,e.JSON.parse(n.response),o])}),i===undefined?l=e.io(n.config):l=e.io(i),this.tbox=f,this.mje=a,a.canvas.on("drop:hit",function(e){e.drag.get("data")&&a.addMath(e.drag.get("data"))}),e.one("#"+o).delegate("click",function(){var e=f.getToolByID(this.getAttribute("id"));e&&a.addMath(e.json)},"span .yui3-dd-draggable")}},"@VERSION@",{requires:["dd-drag","dd-proxy","dd-drop","event","tabview","io-base","json","moodle-tinymce_mathslate-textool","moodle-tinymce_mathslate-mathjaxeditor"]});
