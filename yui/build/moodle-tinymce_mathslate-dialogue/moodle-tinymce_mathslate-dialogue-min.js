YUI.add("moodle-tinymce_mathslate-dialogue",function(e,t){M.tinymce_mathslate=M.tinymce_mathslate||{},M.tinymce_mathslate={dialogue:null,selection:null,config:null,init:function(t){M.tinymce_mathslate.config=t.config||M.local_mathslate.config;var n=e.one("#"+t.elementid),r=n.one(".mathslate-container").generateID(),i=new M.local_mathslate.Editor("#"+r,M.tinymce_mathslate.config),s=e.one("#"+r).appendChild(e.Node.create("<button>"+M.util.get_string("cancel","tinymce_mathslate")+"</button>")),o=e.one("#"+r).appendChild(e.Node.create("<button>"+M.util.get_string("display","tinymce_mathslate")+"</button>")),u=e.one("#"+r).appendChild(e.Node.create("<button>"+M.util.get_string("inline","tinymce_mathslate")+"</button>"));o.on("click",function(){tinyMCEPopup.editor.execCommand("mceInsertContent",!1,"\\["+i.output("tex")+"\\]"),tinyMCEPopup.close()}),u.on("click",function(){tinyMCEPopup.editor.execCommand("mceInsertContent",!1,"\\("+i.output("tex")+"\\)"),tinyMCEPopup.close()}),s.on("click",function(){tinyMCEPopup.close()}),MathJax&&MathJax.Hub.Queue(["Typeset",MathJax.Hub,i.node.generateID()]),M.tinymce_mathslate.dialogue=n}}},"@VERSION@",{requires:["escape","moodle-local_mathslate-editor"]});
