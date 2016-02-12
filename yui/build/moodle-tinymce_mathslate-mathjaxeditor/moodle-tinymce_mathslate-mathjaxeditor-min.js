YUI.add("moodle-tinymce_mathslate-mathjaxeditor",function(e,t){M.tinymce_mathslate=M.tinymce_mathslate||{};var n=M&&M.tinymce_mathslate||{},r=window.MathJax,i=!0,s={SELECTED:"mathslate-selected",WORKSPACE:"mathslate-workspace",PREVIEW:"mathslate-preview",HIGHLIGHT:"mathslate-highlight",DRAGNODE:"mathslate-workspace-drag",DRAGGEDNODE:"mathslate-workspace-dragged",HELPBOX:"mathslate-help-box",PANEL:"mathslate-bottom-panel"},o={SELECTED:"."+s.SELECTED,HIGHLIGHT:"."+s.HIGHLIGHT};n.MathJaxEditor=function(t){r.Ajax.Require("[Mathslate]/snippeteditor.js"),this.math=[];var u,a,f;this.workspace=e.one(t).append('<div id="canvas" class="'+s.WORKSPACE+'"/>'),this.toolbar=e.one(t).appendChild(e.Node.create("<form></form>"));var l=e.one(t).appendChild(e.Node.create('<div class="'+s.PANEL+'"/>'));l.delegate("click",function(e){f.one("#"+this.getAttribute("id")).handleClick(e)},"div");var c=new e.DD.Drop({node:this.workspace.one("#canvas")});this.canvas=c,this.canvas.get("node").on("click",function(){u.select(),this.render()},this);var h=document.createElement("button");h.type="button",h.title=M.util.get_string("redo","tinymce_mathslate"),h["class"]=s.UNDO,h.innerHTML="<math><mo>&#x25C1;</mo></math>",h=e.one(h);var p=document.createElement("button");p.type="button",p.title=M.util.get_string("redo","tinymce_mathslate"),p["class"]=s.REDO,p.innerHTML="<math><mo>&#x25B7;</mo></math>",p=e.one(p);var d=document.createElement("button");d.type="button",d.title=M.util.get_string("clear","tinymce_mathslate"),d["class"]=s.CLEAR,d.innerHTML="<math><mi>&#x2718;</mi></math>",d=e.one(d);var v=document.createElement("button");v.type="button",v.title=M.util.get_string("help","tinymce_mathslate"),v["class"]=s.HELP,v.innerHTML="<math><mi>&#xE47C;</mi></math>",v=e.one(v),this.toolbar.appendChild(d),this.toolbar.appendChild(h),this.toolbar.appendChild(p),this.toolbar.appendChild(v),this.render=function(){u.rekey();var e=r.Hub.getAllJax(c.get("node").getDOMNode())[0];e?r.Hub.Queue(["Text",e,"<math>"+this.toMathML(this.math)+"</math>"]):(c.get("node").setHTML(""),r.Hub.Queue(["addElement",r.HTML,c.get("node").getDOMNode(),"math",{display:"block"},this.math]),r.Hub.Queue(["Typeset",r.Hub,c.get("node").getDOMNode()])),r.Hub.Queue(["makeDraggable",this])},this.toMathML=function(e){if(typeof e!="object")return e;var t="";return e.forEach(function(e){var n;if(typeof e!="object")return;t+="<"+e[0];if(e[1]&&typeof e[1]=="object")for(n in e[1])typeof e[1][n]!="object"&&(t+=" "+n+'="'+e[1][n]+'"');t+=">",e[2]&&(t+=this.toMathML(e[2])),t+="</"+e[0]+">"},this),t},this.addMath=function(n){if(!n)return;e.one(t+" "+o.SELECTED)?u.insertSnippet(e.one(t+" "+o.SELECTED).getAttribute("id"),u.createItem(n)):u.append(u.createItem(n)),this.render()},this.clear=function(){e.one(t+" "+o.SELECTED)?u.removeSnippet(e.one(t+" "+o.SELECTED).getAttribute("id")):(this.math=[],u.next=new r.Mathslate.mSlots,u.next.previous=u,u=u.next,u.slots.push(this.math)),this.render()},this.output=function(t){function n(e){if(typeof e!="object")return e;var t=e.slice(0);return t.forEach(function(e,r){if(typeof e!="object")return;if(e[1]&&e[1]["class"]){t[r]="[]";return}e[1]&&e[1].id&&delete e[1].id,e[2]&&(e[2]=n(e[2]))}),t}switch(t){case"MathML":return c.get("node").one("script").getHTML();case"HTML":return c.get("node").one("span").getHTML();case"JSON":return e.JSON.stringify(n(this.math));default:return u.output(t)}},this.getHTML=function(){return c.get("node").one("span").getHTML()},this.redo=function(){u=u.redo(),this.math=u.slots[0],this.render()},this.undo=function(){u=u.undo(),this.math=u.slots[0],this.render()},this.updatePreview=function(){l.setHTML('<div class="'+s.PREVIEW+'">'+u.preview("tex")+"</div>"),u.getSelected()&&l.one("#"+u.getSelected())&&(c.get("node").one("#"+u.getSelected()).addClass(s.SELECTED),c.get("node").one("#"+u.getSelected()).setAttribute("mathcolor","green"),c.get("node").one("#"+u.getSelected()).setAttribute("stroke","green"),c.get("node").one("#"+u.getSelected()).setAttribute("fill","green"),l.one("#"+u.getSelected()).addClass(s.SELECTED))},this.doDD=function(n){var r=f.one("#"+n[1].id);if(!r)return;r.handleClick=function(e){var t=f.one("#"+u.getSelected());if(!t){e.stopPropagation(),u.select(this.getAttribute("id"));return}if(t===this){if(l.one("#"+this.getAttribute("id")).test("."+s.PREVIEW+" >")){u.select();return}this.removeClass(s.SELECTED),l.one("#"+this.getAttribute("id")).removeClass(s.SELECTED),c.get("node").one("#"+u.getSelected()).removeAttribute("mathcolor"),c.get("node").one("#"+u.getSelected()).removeAttribute("stroke"),c.get("node").one("#"+u.getSelected()).removeAttribute("fill"),u.select();return}if(t.one("#"+this.getAttribute("id")))return;e.stopPropagation(),u.insertSnippet(this.getAttribute("id"),u.removeSnippet(t.getAttribute("id"))),u.select(),context.render()},r.on("click",function(e){});var a=f.one("#"+u.getSelected());if(!i)return;if((!n[1]||!n[1]["class"]||n[1]["class"]!=="blank")&&(!a||!l.one("#"+u.getSelected()).one("#"+n[1].id))){var h=new e.DD.Drag({node:r,moveOnEnd:!1});h.on("drag:start",function(){c.get("node").one("#"+u.getSelected())&&(l.one("#"+u.getSelected()).removeClass(s.SELECTED),c.get("node").one("#"+u.getSelected()).removeClass(s.SELECTED),c.get("node").one("#"+u.getSelected()).removeAttribute("mathcolor"),c.get("node").one("#"+u.getSelected()).removeAttribute("stroke"),c.get("node").one("#"+u.getSelected()).removeAttribute("fill"),u.select()),this.get("node").addClass(s.DRAGGEDNODE),this.get("node").setAttribute("mathcolor","red"),f.one("#"+n[1].id).setAttribute("mathcolor","red"),f.one("#"+n[1].id).setAttribute("stroke","red"),this.get("dragNode").addClass(s.DRAGNODE),this.get("dragNode").all("> span").pop().setStyle("opacity","1")}),h.on("drag:end",function(){this.get("node").removeClass(s.DRAGGEDNODE),this.get("node").removeAttribute("mathcolor"),this.get("node").removeAttribute("stroke"),this.get("dragNode").all("> span").pop().setStyle("opacity","0"),this.get("dragNode").setStyles({top:0,left
:0})})}var p=new e.DD.Drop({node:r});p.on("drop:hit",function(e){var t=e.drag.get("node").get("id");e.drag.get("data")?u.insertSnippet(n[1].id,u.createItem(e.drag.get("data"))):t!==n[1].id&&u.isItem(t)&&!l.one("#"+t).one("#"+n[1].id)&&u.insertSnippet(e.drop.get("node").get("id"),u.removeSnippet(t)),this.render()},this),p.on("drop:enter",function(e){e.stopPropagation(),f.all(t+" "+o.HIGHLIGHT).each(function(e){e.removeClass(s.HIGHLIGHT);var t=e.getAttribute("id");c.get("node").one(t)&&(c.get("node").one(t).removeClass(s.HIGHLIGHT),c.get("node").one(t).removeAttribute("mathcolor"),c.get("node").one(t).removeAttribute("stroke"),c.get("node").one(t).removeAttribute("fill"))}),f.one("#"+n[1].id).addClass(s.HIGHLIGHT),c.get("node").one("#"+n[1].id).addClass(s.HIGHLIGHT),c.get("node").one("#"+n[1].id).setAttribute("mathcolor","yellow"),c.get("node").one("#"+n[1].id).setAttribute("stroke","yellow"),c.get("node").one("#"+n[1].id).setAttribute("fill","yellow")}),p.on("drop:exit",function(e){e.stopPropagation(),this.get("node").removeClass(s.HIGHLIGHT),c.get("node").one("#"+n[1].id).removeClass(s.HIGHLIGHT),c.get("node").one("#"+n[1].id).removeAttribute("mathcolor"),c.get("node").one("#"+n[1].id).removeAttribute("stroke"),c.get("node").one("#"+n[1].id).removeAttribute("fill")})},this.setTitle=function(e){var t=f.one("#"+e[1].id);if(!t)return;t.setAttribute("expressionId",e[1].id),t.setAttribute("title",l.one("#"+e[1].id).getHTML().replace(/<div *[^>]*>|<\/div>|<br>/g,"")),t.addClass("mathslate_dnd")},this.makeDraggable=function(){a&&a.remove(),this.makeDrops(),f=a,this.updatePreview(),u.forEach(this.doDD,this)},this.makeDraggable=function(){a&&a.remove(),this.makeDrops(),f=a,this.updatePreview(),u.forEach(this.setTitle,this),u.forEach(this.doDD,this),f.delegate("click",function(e){var t=f.one("#"+u.getSelected());if(!t){e.stopPropagation(),u.select(e.currentTarget.getAttribute("id")),this.render();return}if(t===e.currentTarget){if(l.one("#"+e.currentTarget.getAttribute("id")).test("."+s.PREVIEW+" >")){u.select(),this.render();return}e.currentTarget.removeClass(s.SELECTED),l.one("#"+e.currentTarget.getAttribute("id")).removeClass(s.SELECTED),c.get("node").one("#"+u.getSelected()).removeAttribute("mathcolor"),c.get("node").one("#"+u.getSelected()).removeAttribute("stroke"),c.get("node").one("#"+u.getSelected()).removeAttribute("fill"),u.select();return}if(t.one("#"+e.currentTarget.getAttribute("id")))return;e.stopPropagation(),u.insertSnippet(e.currentTarget.getAttribute("id"),u.removeSnippet(t.getAttribute("id"))),u.select(),this.render()},".mathslate_dnd",this)},this.makeDrops=function(){a=e.Node.create("<span></span>"),a.setHTML(u.preview().replace(/div/g,"span").replace(/<\/*br>/g,"")),e.one(t).appendChild(a),a.all("span").each(function(t){if(!c.get("node").one("#"+t.getAttribute("id")))return;t.appendChild('<span style="position: relative; opacity: 0"><math display="inline">'+this.toMathML([e.JSON.parse(u.getItemByID(t.getAttribute("id")))]).replace(/id="[^"]*"/,"")+"</math></span>"),t.setAttribute("style","position: absolute; top: 0; left: 0; margin: 0px; z-index: +1")},this),a.all("span").each(function(e){if(!c.get("node").one("#"+e.getAttribute("id")))return;var t=c.get("node").one("#"+e.getAttribute("id")).getDOMNode().getBoundingClientRect(),n=e.getDOMNode().getBoundingClientRect();e.setStyle("top",t.top-n.top),e.setStyle("left",t.left-n.left),e.setStyle("width",t.width),e.setStyle("height",t.height)}),r.Hub.Queue(["Typeset",r.Hub,a.getDOMNode()])},this.makeDrops=function(){a=document.createElement("span"),a.innerHTML=u.preview().replace(/div/g,"span").replace(/<\/*br>/g,""),e.one(t).appendChild(a);var n=a.getElementsByTagName("span");for(var i=0;i<n.length;i++){var s=n.item(i);if(c.get("node").one("#"+s.id)){var o=document.createElement("span");o.setAttribute("style","position: relative; opacity: 0"),o.innerHTML='<math display="inline">'+this.toMathML([e.JSON.parse(u.getItemByID(s.getAttribute("id")))]).replace(/id="[^"]*"/,"")+"</math>",s.appendChild(o),s.setAttribute("style","position: absolute; top: 4.75px; left: 1.25px; margin: 0px; z-index: +1");var f=c.get("node").one("#"+s.id).getDOMNode().getBoundingClientRect(),l=s.getBoundingClientRect();s.setAttribute("style","position: absolute; top: "+(f.top-l.top).toString()+"px; left: "+(f.left-l.left).toString()+"px; z-index: +1")}}r.Hub.Queue(["Typeset",r.Hub,a]),a=e.one(a)},r.Hub.Register.StartupHook("Snippet Editor Ready",[function(e){u=new r.Mathslate.mSlots,u.slots.push(e.math),e.render()},this]),p.on("click",this.redo,this),h.on("click",this.undo,this),d.on("click",this.clear,this),v.on("click",function(){l.setHTML('<iframe src="'+n.help+'" style="width: '+l.getStyle("width")+'" class="'+s.HELPBOX+'"/>')})}},"@VERSION@",{requires:["dd-drop"]});
