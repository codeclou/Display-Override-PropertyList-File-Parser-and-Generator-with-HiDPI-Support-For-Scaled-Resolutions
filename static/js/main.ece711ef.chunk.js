(this["webpackJsonpdisplay-overrides-plist-parser-hidpi"]=this["webpackJsonpdisplay-overrides-plist-parser-hidpi"]||[]).push([[0],{15:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));var l=a(4),n=a(7),i=function(){function t(){Object(l.a)(this,t)}return Object(n.a)(t,[{key:"deepCopyOrReturnEmptyObject",value:function(e){if(void 0===e||null===e)return{};try{return JSON.parse(JSON.stringify(e))}catch(t){return{}}}},{key:"intToHex",value:function(e){return void 0!==e&&null!==e?Number(e).toString(16):""}},{key:"intToHexPrefixedWithZerosTo8Bit",value:function(e){for(var t=this.intToHex(e),a=8-t.length,l="",n=0;n<a;n++)l="0".concat(l);return"".concat(l).concat(t)}},{key:"hexToInt",value:function(e){return parseInt(e,16)}},{key:"base64ToHexStringSpaced",value:function(t){return void 0===t||null===t||""===t?"":new e(t,"base64").toString("hex").replace(/(.{8})/g,"$1 ").trim()}},{key:"base64ToDecimalStringSpaced",value:function(t){if(void 0===t||null===t||""===t)return"";for(var a=new e(t,"base64").toString("hex").replace(/(.{8})/g,"$1 ").trim().split(" "),l="",n=0;n<a.length;n++)l="".concat(l).concat(this.hexToInt(a[n])," ");return l.trim()}},{key:"hexToBase64",value:function(t){return void 0===t||null===t||""===t?"":new e(t,"hex").toString("base64")}}]),t}()}).call(this,a(36).Buffer)},17:function(e,t,a){e.exports={field:"AspectRatioCalculator_field__3STgK"}},2:function(e,t,a){e.exports={app:"App_app__1Ztm_",warning:"App_warning__2tsBH",warningIcon:"App_warningIcon__2S3eI",numberedList:"App_numberedList__2JumD",howtoHeaderH3:"App_howtoHeaderH3__37ExU",howtoHeaderH5:"App_howtoHeaderH5__3cU5C",numberedListFirst:"App_numberedListFirst__1jgkW",numberedListSecond:"App_numberedListSecond__2KLoh",numberedListThird:"App_numberedListThird__21CjC",numberedListFourth:"App_numberedListFourth__V2u0d",numberedListFifth:"App_numberedListFifth__WUzZu",csBox:"App_csBox__1JAKt",howTo:"App_howTo__121JB",codeBox:"App_codeBox__2XKjG",bigSurMessage:"App_bigSurMessage__3M2-_"}},23:function(e,t,a){e.exports=a.p+"static/media/logo-scaled-resolutions.64f60ba8.svg"},25:function(e,t,a){e.exports=a(40)},3:function(e,t,a){e.exports={filename:"PlistForm_filename__BpIK3",field:"PlistForm_field__13Qra",hexField:"PlistForm_hexField__1uOOu",hexColumn:"PlistForm_hexColumn__mfWMu",resolutionBox:"PlistForm_resolutionBox__1Wt4X",resolutionSettingsHeading:"PlistForm_resolutionSettingsHeading__3HKDf",resolutionListHeading:"PlistForm_resolutionListHeading__3O2jF",resolutionListTd:"PlistForm_resolutionListTd__2600J",resolutionList:"PlistForm_resolutionList__18lXd",resolutionField:"PlistForm_resolutionField__y52tm",resolutionButton:"PlistForm_resolutionButton__25wtv",resolutionButtonAdd:"PlistForm_resolutionButtonAdd__woxAk",resolutionButtonRemove:"PlistForm_resolutionButtonRemove__buC1b",hexCode:"PlistForm_hexCode__2YRiQ"}},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(21),r=a.n(i),o=a(6),s=a.n(o),c=(a(31),a(32),a(33),a(34),a(4)),d=a(7),m=a(10),u=a(9),p=a(12),h=a(11),g=a(22);s.a.logPosition("top right");var y=function(e){var t=e.plistXmlString,a=e.updatePlistXmlString;return n.a.createElement("div",null,n.a.createElement(g.Controlled,{value:t,options:{mode:"xml",theme:"material",lineNumbers:!0},onBeforeChange:function(e,t,l){a(l)},onChange:function(e,t,a){}}))},E={plistXmlHeader:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">',plistXmlFooter:"</plist>",plistXmlString:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n  <key>DisplayProductName</key>\n  <string>DELL U2515H</string>\n  <key>DisplayProductID</key>\n  <integer>53358</integer>\n  <key>DisplayVendorID</key>\n  <integer>4268</integer>\n  <key>scale-resolutions</key>\n  <array>\n    <data>AAAKAAAABaAAAAABACAAAA==</data>\n    <data>AAAFAAAAAtAAAAABACAAAA==</data>\n    <data>AAAPAAAACHAAAAABACAAAA==</data>\n    <data>AAAHgAAABDgAAAABACAAAA==</data>\n    <data>AAAMgAAABwgAAAABACAAAA==</data>\n    <data>AAAGQAAAA4QAAAABACAAAA==</data>\n    <data>AAAKAgAABaAAAAABACAAAA==</data>\n    <data>AAAKrAAABgAAAAABACAAAA==</data>\n    <data>AAAFVgAAAwAAAAABACAAAA==</data>\n  </array>\n</dict>\n</plist>',defaultResolutionForAddNew:{base64String:"AAAFAAAAAtAAAAABACAAAA==",decoded:{decimalStringSpaced:"1280 720 1",hexStringSpaced:"00000500 000002d0 00000001 00200000"},decimal:{width:"1280",height:"720",hidpi:!0}}},v=a(13),A=a(15),f=a(24),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this)).message=e,l.stack=(new Error).stack,l.name=l.constructor.name,l}return a}(Object(f.a)(Error)),b=function(){function e(){if(Object(c.a)(this,e),this.encHelp=new A.a,"undefined"!==typeof window.DOMParser)this.parseXmlIntern=function(e){return(new window.DOMParser).parseFromString(e,"text/xml")};else{if("undefined"===typeof window.ActiveXObject||!new window.ActiveXObject("Microsoft.XMLDOM"))throw new w("No XML parser found");this.parseXmlIntern=function(e){var t=new window.ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t}}}return Object(d.a)(e,[{key:"parseXml",value:function(e){return this.parseXmlIntern(e)}},{key:"generateBase64String",value:function(e){var t=[];t.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(e.width)),t.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(e.height)),!0===e.hidpi&&(t.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(1)),t.push(this.encHelp.intToHexPrefixedWithZerosTo8Bit(2097152)));var a=t.join("");return this.encHelp.hexToBase64(a)}},{key:"generateDecodedScaleResolutionObject",value:function(e,t){var a={};return!0===e.hidpi?a.decimalStringSpaced="".concat(e.width," ").concat(e.height," ").concat(e.hidpi):a.decimalStringSpaced="".concat(e.width," ").concat(e.height),a.hexStringSpaced=this.encHelp.base64ToHexStringSpaced(t),a}},{key:"generateDecimalScaleResolutionObject",value:function(e){var t=this.encHelp.base64ToDecimalStringSpaced(e).split(" "),a={width:t[0],height:t[1],hidpi:!1};return t.length>2&&1===Number(t[2])&&(a.hidpi=!0),a}},{key:"generatePlistXml",value:function(e){var t=[];return t.push(E.plistXmlHeader),t.push("<dict>"),t.push("  <key>DisplayProductName</key>"),t.push("  <string>".concat(e.displayProductName,"</string>")),t.push("  <key>DisplayProductID</key>"),t.push("  <integer>".concat(e.displayProductId,"</integer>")),t.push("  <key>DisplayVendorID</key>"),t.push("  <integer>".concat(e.displayVendorId,"</integer>")),t.push("  <key>scale-resolutions</key>"),t.push("  <array>"),e.scaleResolutions.forEach((function(e){t.push("    <data>".concat(e.base64String,"</data>"))})),t.push("  </array>"),t.push("</dict>"),t.push(E.plistXmlFooter),t.join("\n")}},{key:"parsePlistXml",value:function(e){var t={};try{t=this.parseXml(e)}catch(u){throw new w("invalid xml 001")}if(t.getElementsByTagName("parsererror").length>0)throw new w("invalid xml 002");var a={displayProductName:"",displayProductId:"",displayVendorId:"",scaleResolutions:[]};try{for(var l=t.documentElement.childNodes,n=0;n<l.length;n++)if("dict"===l[n].nodeName)for(var i=l[n].childNodes,r=0;r<i.length;r++){var o=i[r].nodeName,s="";if(void 0!==i[r].childNodes[0]&&(s=i[r].childNodes[0].nodeValue),"key"===o&&"DisplayProductName"===s&&(a.displayProductName=i[r+2].childNodes[0].nodeValue),"key"===o&&"DisplayProductID"===s&&(a.displayProductId=i[r+2].childNodes[0].nodeValue),"key"===o&&"DisplayVendorID"===s&&(a.displayVendorId=i[r+2].childNodes[0].nodeValue),"key"===o&&"scale-resolutions"===s)for(var c=i[r+2].childNodes,d=0;d<c.length;d++)if("data"===c[d].nodeName){var m={};m.base64String=c[d].childNodes[0].nodeValue,m.decimal=this.generateDecimalScaleResolutionObject(m.base64String),m.decoded=this.generateDecodedScaleResolutionObject(m.decimal,m.base64String),a.scaleResolutions.push(m)}}}catch(u){throw new w("invalid xml 003")}return a}}]),e}(),N=a(3),x=a.n(N),P=a(1),_=a.n(P),S=a(5);s.a.logPosition("top right");var H=new A.a,I=new b,D=function(e){var t=function(e){return!!e.match(/^[a-f0-9]+$/)||(s.a.error("Please enter only HEX values [a-f0-9]+"),!1)},a=function(e){return!!e.match(/^[0-9]+$/)||(s.a.error("Please enter only digits [0-9]+"),!1)},l=function(t){var l=t.target.getAttribute("data-index"),n=Array.from(e.plist.scaleResolutions),i=H.deepCopyOrReturnEmptyObject(n[l]);if("decimal_width"===t.target.name){if(!a(t.target.value))return;i.decimal.width=t.target.value}if("decimal_height"===t.target.name){if(!a(t.target.value))return;i.decimal.height=t.target.value}"decimal_hidpi"===t.target.name&&(i.decimal.hidpi=t.target.checked);try{var r=I.generateBase64String(i.decimal);n[l]={base64String:r,decoded:I.generateDecodedScaleResolutionObject(i.decimal,r),decimal:H.deepCopyOrReturnEmptyObject(i.decimal)},e.handleChange(Object(v.a)({},e.plist,{},{scaleResolutions:n}))}catch(o){s.a.error("Invalid Input. ".concat(o))}},i=function(a){"displayProductName"===a.target.name&&e.handleChange(Object(v.a)({},e.plist,{},{displayProductName:a.target.value})),"displayProductIdHex"===a.target.name&&t(a.target.value)&&e.handleChange(Object(v.a)({},e.plist,{},{displayProductId:H.hexToInt(a.target.value)})),"displayVendorIdHex"===a.target.name&&t(a.target.value)&&e.handleChange(Object(v.a)({},e.plist,{},{displayVendorId:H.hexToInt(a.target.value)}))};return n.a.createElement("div",{className:_()(x.a.resolutionBox)},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("p",{className:_()(x.a.resolutionSettingsHeading)},"DisplayProductName"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("input",{className:_()(x.a.field),type:"text",name:"displayProductName",value:e.plist.displayProductName,onChange:i}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("p",{className:_()(x.a.resolutionSettingsHeading)},"DisplayProductID"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:_()(x.a.hexColumn)},"(0x",n.a.createElement("input",{className:_()(x.a.hexField),style:{width:"".concat(11*H.intToHex(e.plist.displayProductId).length,"px")},type:"text",name:"displayProductIdHex",value:H.intToHex(e.plist.displayProductId),onChange:i}),")",n.a.createElement("sub",null,"16")," = (",e.plist.displayProductId,")",n.a.createElement("sub",null,"10")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("p",{className:_()(x.a.resolutionSettingsHeading)},"DisplayVendorID"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:_()(x.a.hexColumn)},"(0x",n.a.createElement("input",{className:_()(x.a.hexField),style:{width:"".concat(11*H.intToHex(e.plist.displayVendorId).length,"px")},type:"text",name:"displayVendorIdHex",value:H.intToHex(e.plist.displayVendorId),onChange:i}),")",n.a.createElement("sub",null,"16")," = (",e.plist.displayVendorId,")",n.a.createElement("sub",null,"10")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("p",{className:_()(x.a.resolutionSettingsHeading)},"Scale Resolutions"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:_()(x.a.resolutionListTd)},n.a.createElement("div",null,n.a.createElement("div",{className:_()(x.a.resolutionList)},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:_()(x.a.resolutionListHeading,"col-2")},"HiDPI"),n.a.createElement("div",{className:_()(x.a.resolutionListHeading,"col-7")},"Resolution"),n.a.createElement("div",{className:_()(x.a.resolutionListHeading,"col-3","text-right")},"Remove")),e.plist.scaleResolutions.map((function(t,a){return n.a.createElement("div",{key:a,className:_()(x.a.resolutionListItem)},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("input",{type:"checkbox",name:"decimal_hidpi",onChange:l,"data-index":a,checked:t.decimal.hidpi})),n.a.createElement("div",{className:"col-7"},n.a.createElement("input",{className:_()(x.a.resolutionField),type:"text",name:"decimal_width",value:t.decimal.width,onChange:l,"data-index":a}),"\xa0 x \xa0",n.a.createElement("input",{className:_()(x.a.resolutionField),type:"text",name:"decimal_height",value:t.decimal.height,onChange:l,"data-index":a})),n.a.createElement("div",{className:"col-3 d-flex flex-row-reverse text-right"},n.a.createElement("div",null,n.a.createElement("a",{href:"#delete",className:_()(x.a.resolutionButton,x.a.resolutionButtonRemove),onClick:function(t){var l;t.preventDefault(),l=a,e.handleChange(Object(v.a)({},e.plist,{},{scaleResolutions:e.plist.scaleResolutions.filter((function(e,t){return t!==l}))}))}},n.a.createElement(S.h,null))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"}),n.a.createElement("div",{className:"col-10"},n.a.createElement("code",{className:x.a.hexCode},"<",t.decoded.hexStringSpaced,">"))))})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"}),n.a.createElement("div",{className:_()(x.a.resolutionListItem,"col-8")},n.a.createElement("a",{href:"#add",onClick:function(t){t.preventDefault(),function(){var t=Array.from(e.plist.scaleResolutions);t.push(H.deepCopyOrReturnEmptyObject(E.defaultResolutionForAddNew)),e.handleChange(Object(v.a)({},e.plist,{},{scaleResolutions:t}))}()},className:x.a.resolutionButtonAdd},n.a.createElement(S.g,null)," Add new")),n.a.createElement("div",{className:"col-2"}))))))))},C=a(8),k=a.n(C),O=a(2),B=a.n(O),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).handlePlistParserChange=l.handlePlistParserChange.bind(Object(h.a)(l)),l.handlePlistFormChange=l.handlePlistFormChange.bind(Object(h.a)(l)),l.downloadPlistAsFile=l.downloadPlistAsFile.bind(Object(h.a)(l)),l.parser=new b,l.encHelp=new A.a,l.state={plistXmlString:E.plistXmlString,plist:l.parser.parsePlistXml(E.plistXmlString),xmlParseError:!1},s.a.logPosition("top right"),l}return Object(d.a)(a,[{key:"handlePlistParserChange",value:function(e){var t={};try{t=this.parser.parsePlistXml(e),this.setState({plistXmlString:e,plist:t,xmlParseError:!1})}catch(a){this.setState({plistXmlString:e,xmlParseError:!0})}}},{key:"handlePlistFormChange",value:function(e){var t=this.parser.generatePlistXml(e);this.setState({plistXmlString:t,plist:e,xmlParseError:!1})}},{key:"getPlistFilename",value:function(){return"DisplayProductID-".concat(this.encHelp.intToHex(this.state.plist.displayProductId),".plist")}},{key:"getFullPlistFilename",value:function(){return"".concat("/System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID","-").concat(this.encHelp.intToHex(this.state.plist.displayVendorId),"/DisplayProductID-").concat(this.encHelp.intToHex(this.state.plist.displayProductId))}},{key:"downloadPlistAsFile",value:function(){var e=new Blob([this.state.plistXmlString],{type:"text/plain"}),t=this.getPlistFilename(),a=document.createElement("a");a.download=t,a.innerHTML="Download File",null!=window.webkitURL?a.href=window.webkitURL.createObjectURL(e):(a.href=window.URL.createObjectURL(e),a.onclick=function(e){return document.body.removeChild(e.target)},a.style.display="none",document.body.appendChild(a)),a.click()}},{key:"render",value:function(){var e,t,a=this,l=_()((e={},Object(p.a)(e,"".concat(k.a.xmlValid),!this.state.xmlParseError),Object(p.a)(e,"".concat(k.a.xmlInvalid),this.state.xmlParseError),e));return t=this.state.xmlParseError?n.a.createElement("span",null,n.a.createElement(S.b,null)," xml invalid"):n.a.createElement("span",null,n.a.createElement(S.a,null)," xml valid"),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:_()("col-sm-12","col-md-12","col-lg-12","col-xl-4")},n.a.createElement(D,{plist:this.state.plist,handleChange:this.handlePlistFormChange})),n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12 col-xl-1"}),n.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-12 col-xl-7"},n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("p",{className:_()(k.a.resolutionSettingsHeading)},"Display PropertyList Filename"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("span",{className:_()(k.a.filename)},this.getFullPlistFilename())))),n.a.createElement("div",{className:l},t),n.a.createElement(y,{plistXmlString:this.state.plistXmlString,updatePlistXmlString:this.handlePlistParserChange}),n.a.createElement("div",{className:_()("row",k.a.buttonBarFooter)},n.a.createElement("div",{className:"col-md-12 text-right"},n.a.createElement("a",{className:k.a.resetButton,href:"./"},n.a.createElement(S.h,null)," Reset Plist"),n.a.createElement("a",{className:k.a.downloadButton,href:"#download",onClick:function(e){e.preventDefault(),a.downloadPlistAsFile()}},n.a.createElement(S.c,null),"\xa0","DisplayProductID-"+this.encHelp.intToHex(this.state.plist.displayProductId)),n.a.createElement("span",{className:k.a.downloadNote},n.a.createElement("br",null),"(only Chrome and Firefox)"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"my-5"},"\xa0"),n.a.createElement("hr",null),n.a.createElement("div",{className:_()("row",B.a.howTo)},n.a.createElement("div",{className:"col-md-2"}),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("h3",{className:"howtoHeaderH3"},"How to use Scale Resolutions"),n.a.createElement("div",null,n.a.createElement("p",null,"Follow the steps below to learn how to use Scale Resolutions. See the awesome"," ",n.a.createElement("a",{href:"http://www.tonymacx86.com/threads/adding-using-hidpi-custom-resolutions.133254/"},"tonymacx86.com forum")," ","for more details."),n.a.createElement("div",{className:B.a.warning},n.a.createElement("div",{className:B.a.warningIcon},n.a.createElement(S.f,{style:{marginRight:"10px"},size:"30"})),n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("strong",null,"This tool is provided without warranty"),". codeclou is not responsible for damages to your system. It is heavily discouraged to edit files in ",n.a.createElement("em",null,"/System/")," directory. You are doing it at your own risk.")))),n.a.createElement("h5",{className:_()(B.a.numberedList,B.a.numberedListFirst,B.a.howtoHeaderH5)},"Enable HiDPI Mode"),n.a.createElement("p",null,"Open your terminal and copy/paste the following command to enable HiDPI mode:"),n.a.createElement("div",{className:B.a.codeBox},"sudo defaults write /Library/Preferences/com.apple.windowserver.plist DisplayResolutionEnabled -bool true"),n.a.createElement("h5",{className:_()(B.a.numberedList,B.a.numberedListSecond,B.a.howtoHeaderH5)},"Detect your Display"),n.a.createElement("p",null,"To detect your display copy/paste the following command into your terminal:"),n.a.createElement("div",{className:B.a.codeBox},"ioreg -lw0 | grep IODisplayPrefsKey"),n.a.createElement("p",null,"The output on a Mac should look like so:"),n.a.createElement("div",{className:B.a.codeBox},'"IODisplayPrefsKey" = "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/IGPU@2/AppleIntelFramebuffer@0/display0/AppleBacklightDisplay-610-a019"',n.a.createElement("br",null),'"IODisplayPrefsKey" = "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/IGPU@2/AppleIntelFramebuffer@2/display0/AppleDisplay-10ac-d06e"'),n.a.createElement("p",null,"All external monitors are identified by ",n.a.createElement("em",null,"AppleDisplay")," and internal monitors by ",n.a.createElement("em",null,"AppleBacklightDisplay"),". So if you want to set scale resolutions for your external monitor you will need to look at the second line. Identify at the end of the line your ",n.a.createElement("strong",null,"DisplayVendorId")," as"," ",n.a.createElement("code",null,this.encHelp.intToHex(this.state.plist.displayVendorId))," and your"," ",n.a.createElement("strong",null,"DisplayProductID")," as"," ",n.a.createElement("code",null,this.encHelp.intToHex(this.state.plist.displayProductId))," and note these values. Now insert them into the corresponding input fields on the top left and the generator will generate a basic plist file for you."),n.a.createElement("h5",{className:_()(B.a.numberedList,B.a.numberedListThird,B.a.howtoHeaderH5)},"Customize your Resolutions"),n.a.createElement("p",null,"Now you can customize the ",n.a.createElement("strong",null,"Scale Resolutions"),". For example you could enter ",n.a.createElement("strong",null,"2560x1440")," and enable ",n.a.createElement("strong",null,"HiDPI"),". Be aware that the generator does not do any sanity checks for you, what you enter is just getting encoded. Please be aware that depending on your monitor and internal mac-checkups during startup some resolutions might not work. ",n.a.createElement("br",null)),n.a.createElement("h5",{className:_()(B.a.numberedList,B.a.numberedListFourth,B.a.howtoHeaderH5)},"Download plist and copy to System folder"),n.a.createElement("p",null,"Once you have configured all your resolutions click the download button. A file called ",n.a.createElement("code",null,"DisplayProductID-*.plist")," will download."),n.a.createElement("p",null,"Now copy this file to the destination that has been calculated on the top right under ",n.a.createElement("strong",null,"Display PropertyList Filename"),". Example for a DELL Monitor:"),n.a.createElement("div",{className:B.a.codeBox},"sudo cp ~/Downloads/DisplayProductID-".concat(this.encHelp.intToHex(this.state.plist.displayProductId),".plist "),"/System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-".concat(this.encHelp.intToHex(this.state.plist.displayVendorId),"/DisplayProductID-").concat(this.encHelp.intToHex(this.state.plist.displayProductId))),n.a.createElement("p",null,n.a.createElement("strong",null,"NOTE:")," That you might need to"," ",n.a.createElement("a",{href:"http://osxdaily.com/2015/10/05/disable-rootless-system-integrity-protection-mac-os-x/"},"disable System Integrity Protection")," ","(at your own risk) to copy files to ",n.a.createElement("code",null,"/System/"),". If you are running macOS Catalina or above, see the note below."),n.a.createElement("p",null,n.a.createElement("strong",null,"NOTE:")," On macOS Catalina systems (or"," ",n.a.createElement("a",{href:"https://developer.apple.com/forums/thread/649832"},"above"),"), the"," ",n.a.createElement("code",null,"/System/")," folder is mounted read-only, so instead you should copy the file to"," ",n.a.createElement("code",null,"/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-".concat(this.encHelp.intToHex(this.state.plist.displayVendorId),"/DisplayProductID-").concat(this.encHelp.intToHex(this.state.plist.displayProductId))),". This can be done without disabling System Integrity Protection. If the file path does not exist, create it with"," ",n.a.createElement("code",null,"sudo mkdir -p /Library/Displays/Contents/Resources/Overrides/DisplayVendorID-".concat(this.encHelp.intToHex(this.state.plist.displayVendorId)))),n.a.createElement("h5",{className:_()(B.a.numberedList,B.a.numberedListFifth,B.a.howtoHeaderH5)},"Restart Mac and use Resolutions"),n.a.createElement("p",null,"Now you can change your resolution to the ones you entered (if macOS did not disable them during boot check-ups)"),n.a.createElement("p",null,"A very handy"," ",n.a.createElement("a",{href:"https://github.com/avibrazil/RDM"},"tool to enable resolutions is RDM"),".",n.a.createElement("br",null),"If you are more into commandline tools you might like"," ",n.a.createElement("a",{href:"https://github.com/jhford/screenresolution"},"screenresolutions"),".",n.a.createElement("br",null),"And if you are willing to pay a small amount"," ",n.a.createElement("a",{href:"http://www.madrau.com/"},"SwitchResX")," is also a great tool.")),n.a.createElement("div",{className:"col-md-2"}))))}}]),a}(l.Component),T=a(17),L=a.n(T),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).recalculate=l.recalculate.bind(Object(h.a)(l)),l.state={width:1920,height:1080,ratioWidth:16,ratioHeight:9},l}return Object(d.a)(a,[{key:"recalculate",value:function(e){this.setState(Object(p.a)({},"".concat(e.target.name),e.target.value));var t=this.state.ratioWidth/this.state.ratioHeight;"width"===e.target.name&&this.setState({height:e.target.value/t}),"height"===e.target.name&&this.setState({width:e.target.value*t}),"ratioWidth"===e.target.name&&this.setState({width:this.state.height*(e.target.value/this.state.ratioHeight)}),"ratioHeight"===e.target.name&&this.setState({height:this.state.width/(this.state.ratioWidth/e.target.value)})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Aspect Ratio"),n.a.createElement("td",null,n.a.createElement("input",{className:_()(L.a.field),type:"text",name:"ratioWidth",value:this.state.ratioWidth,onChange:this.recalculate})," ",":",n.a.createElement("input",{className:_()(L.a.field),type:"text",name:"ratioHeight",value:this.state.ratioHeight,onChange:this.recalculate}))),n.a.createElement("tr",null,n.a.createElement("th",null,"Resolution"),n.a.createElement("td",null,n.a.createElement("input",{className:_()(L.a.field),type:"text",name:"width",value:this.state.width,onChange:this.recalculate}),"x",n.a.createElement("input",{className:_()(L.a.field),type:"text",name:"height",value:this.state.height,onChange:this.recalculate}))))))}}]),a}(n.a.Component),R=a(23),X=a.n(R),V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).foo="bar",l}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid cs-header"},n.a.createElement("div",{className:"cs-header-inner"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-2"}),n.a.createElement("div",{className:"col-sm-12 col-md-4 col-xl-3 d-flex justify-content-center"},n.a.createElement("div",{className:"cs-header__logo"},n.a.createElement("img",{src:X.a,className:"text-center",style:{maxWidth:"300px"},alt:"Scaled Resolutions your MacBooks external Monitor"}))),n.a.createElement("div",{className:"col-sm-12 col-md-8 col-xl-5"},n.a.createElement("h1",{className:"cs-header__h1"},"Scaled Resolutions"),n.a.createElement("h2",{className:"cs-header__h2"},"for your MacBooks external Monitor"),n.a.createElement("h4",{className:"cs-header__h4"},"Display Override PropertyList File Parser and Generator with HiDPI support"),n.a.createElement("div",{className:"cs-header__star"},n.a.createElement("a",{href:"https://github.com/codeclou/Display-Override-PropertyList-File-Parser-and-Generator-with-HiDPI-Support-For-Scaled-Resolutions",className:"cs-header__starlink",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(S.e,null)," star on github"))),n.a.createElement("div",{className:"col-xl-2"})))),n.a.createElement("div",{className:B.a.bigSurMessage},"This solution might not work with macOS Big Sur. We do not provide end user support."),n.a.createElement("div",{className:"container-fluid cs-body"},n.a.createElement("div",{className:B.a.app},n.a.createElement(F,null),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-md-5 mt-5",style:{backgroundColor:"#f4f5f7"}},n.a.createElement("div",{className:B.a.csBox},n.a.createElement("h4",null,"Aspect Ratio Calculator"),n.a.createElement("p",null,"Use this calculator to calculcate horizontal and vertical resolution based on given Aspect Ratio."),n.a.createElement(j,null))),n.a.createElement("div",{className:"col-sm-12 col-md-2"},"\xa0"),n.a.createElement("div",{className:"col-md-5 mt-5",style:{backgroundColor:"#f4f5f7"}},n.a.createElement("div",{className:B.a.csBox},n.a.createElement("h4",null,"We like code!"),n.a.createElement("p",null,"..."),n.a.createElement("p",null)))))),n.a.createElement("div",{className:"container-fluid cs-footer"},n.a.createElement("div",{className:"cs-footer-inner"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"}),n.a.createElement("div",{className:"col-md-4 text-center"},n.a.createElement("strong",null,"Made with ",n.a.createElement(S.d,null)," and ",n.a.createElement("a",{href:"https://facebook.github.io/react/"},"React")," ","by"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://codeclou.io"},"codeclou GmbH")),n.a.createElement("div",{className:"col-md-4"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"}),n.a.createElement("div",{className:"col-md-4 d-flex justify-content-center"},n.a.createElement("a",{href:"https://codeclou.io/legal/en/imprint"},n.a.createElement("span",{style:{fontSsize:"0.8rem"}},"Imprint")),"\xa0\xa0\xa0",n.a.createElement("a",{href:"https://codeclou.io/legal/en/privacy/github-pages"},n.a.createElement("span",{style:{fontSsize:"0.8rem"}},"Data Privacy"))),n.a.createElement("div",{className:"col-md-4"})))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.logPosition("top right"),r.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={xmlValid:"PlistContainer_xmlValid__3k3sN",xmlInvalid:"PlistContainer_xmlInvalid__UwzL0",buttonBarFooter:"PlistContainer_buttonBarFooter__1zapf",resetButton:"PlistContainer_resetButton__3QKL1",downloadButton:"PlistContainer_downloadButton___odUp",downloadNote:"PlistContainer_downloadNote__222JQ",resolutionSettingsHeading:"PlistContainer_resolutionSettingsHeading__3hWWl",filename:"PlistContainer_filename__1fgjC"}}},[[25,1,2]]]);
//# sourceMappingURL=main.ece711ef.chunk.js.map