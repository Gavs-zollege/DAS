﻿
		/*
 * Copyright (C) 2025 ELB Learning
 */

	
var INC_dlgMsgBox="<div class='DLG_Triv_window_old ##0'><div id='divContent'><table role='presentation' border='0' width='100%'><tr valign=center height=10px><td colspan=2></td></tr><tr valign=center height='100%'><td colspan=2><table width='100%' height='100%' border=0><tr valign=center height=*><td align=center width=10px>&nbsp;</td><td align=center width=*><span id='mb_message_div_myid'></span></td><td align=center width=10px>&nbsp;</td></tr></table></td></tr><tr valign=center height=10px><td colspan=2></td></tr><tr valign=center height=20px><td colspan=2 align=center><div id='mb_button_div_myid'>&nbsp;</div></td></tr><tr valign=center height=10px><td colspan=2></td></tr></table></div></div>";var INC_dlgPromptBox="<div class='DLG_Triv_window_old ##0'><div id='divContent'><table border='0' width='100%'><tr valign=center height=10px><td colspan=2></td></tr><tr valign=center height='100%'><td colspan=2><table width='100%' height='100%' border=0><tr valign=center height=*><td align=center width=10px>&nbsp;</td><td align=center width=*><span id='mb_message_div_myid'></span></td><td align=center width=10px>&nbsp;</td></tr><tr valign=center height=*><td align=center width=10px>&nbsp;</td><td align=center width=*><input type='text' id='in' value=''/></td><td align=center width=10px>&nbsp;</td></tr></table></td></tr><tr valign=center height=10px><td colspan=2></td></tr><tr valign=center height=20px><td colspan=2 align=center><div id='mb_button_div_myid'>&nbsp;</div></td></tr><tr valign=center height=10px><td colspan=2></td></tr></table></div></div>";var zidx=99500;jsTrivDialog.winIdx=1;function jsTrivDialog(A){var B=this;B.winId=A+'-'+jsTrivDialog.winIdx++;B.contentHTML='';B.initialized=false;B.isModal=false;B.isDragable=true;B.isScrollable=true;B.isResizable=false;B.isAutoRsz=false;B.isClosable=true;B.bVisible=false;B.title='Dialog';B.state='normal';B.setXPos(-1);B.setYPos(-1);B.minWidth=200;B.maxWidth=2000;B.minHeight=100;B.maxHeight=20000;B.titleHt=17;B.titleHtAdj=1;B.setWidth(400);B.setHeight(400);B.isIframe=false;B.lBtnDn=false;B.rtMMove=-1;B.rtMUp=-1;B.callbackFunc=null;B.doc=document;B.closed=false;B.lBtnDnRsz=false;B.rtRszMMove=-1;B.rtRszMUp=-1;if (window.winW&&winW<450) B.setWidth(winW-20);};jsTrivDialog.makeCssStr=function(A){var B=A;if (typeof rcdObj!=='undefined'){switch (rcdObj.view){case 'PhonePortrait':B+=' '+A+'PP';case 'TabletPortrait':B+=' '+A+'TP';break;case 'PhoneLandscape':B+=' '+A+'PL';case 'TabletLandscape':B+=' '+A+'TL';break;}};return B;};jsTrivDialog.prototype.create=function(A){var B=this;if (A) B.setDoc(A);else if (isOPAPub()) B.setDoc(getDisplayDocument());B.bCreated=true;if (window.titleData&&window.titleData.mode==2) B.previewMode=true;B.createDivEles();var w=B.width;var h=B.height;B.width=0;B.height=0;B.rszWinBy(w,h);B.divEleTitle_txt.innerHTML=B.title;B.showHideBtnEles();B.setInitWinPos();B.showDivEles();if (B.isIframe){B.divEleContent.src=B.contentHTML;B.divEleContent.contentWindow.window.name="Trivantis_Dlg_"+B.winId;B.divEleContent.contentWindow.window.focus();if (isOPAPub()){B.divEleContent.onload=function(){var C=this.contentDocument;var D=window.parent.document.head.getElementsByTagName('link');for (var i=0;i<D.length;i++){var E=D[i];if (E.rel=='stylesheet'){var F=C.createElement('link');F.rel='stylesheet';F.type='text/css';F.href=E.href;C.head.appendChild(F);}}};}else{}}else{if (B.contentHTML) B.divEleContent.innerHTML=B.contentHTML.replace(/myid/g,B.winId);};B.onInitDialog();};jsTrivDialog.prototype.showDivEles=function(){this.divEle.style.display='block';if (this.isModal) this.divModal.style.display='block';};jsTrivDialog.prototype.createDivEles=function(){var A=this;var B=getDisplayDocument();A.divModal=A.doc.createElement('DIV');A.divModal.id='DLG_ModalDiv_'+A.winId;A.divModal.className='DLG_Triv_modalDiv';A.divModal.style.zIndex=zidx;zidx=zidx+2;if (A.previewMode) B.getElementById('athenaView').appendChild(A.divModal);else A.doc.body.appendChild(A.divModal);jsTrivDialog.resizeModalDiv(A.divModal,f,A.previewMode?'athenaView':n);A.divEle=A.doc.createElement('DIV');A.divEle.id='DLG_Div_'+A.winId;A.divEle.className='DLG_Triv_window'+(theApp.isAccessible?' fInd':'');A.divEle.style.zIndex=zidx;zidx++;if (A.previewMode) B.getElementById('athenaView').appendChild(A.divEle);else A.doc.body.appendChild(A.divEle);A.divEleInner=A.doc.createElement('DIV');A.divEleInner.id='DLG_innerDiv_'+A.winId;A.divEleInner.className='DLG_Triv_innerDiv';A.divEle.appendChild(A.divEleInner);A.createTitleBar();if (A.isIframe){A.divEleContent=A.doc.createElement('iframe');if (A.isDragable){A.divDrg=A.doc.createElement('DIV');A.divDrg.id='DLG_dragDiv_'+A.winId;A.divDrg.className='DLG_Triv_dragDiv';A.divDrg.style.left='0px';A.divDrg.style.top=(A.titleHt+A.titleHtAdj)+'px';A.divDrg.style.zIndex=zidx-2;A.divEleInner.appendChild(A.divDrg);}}else{A.divEleContent=A.doc.createElement('DIV');};A.divEleContent.id='DLG_content_'+A.winId;A.divEleContent.className='DLG_Triv_content';if (!A.isScrollable){A.divEleContent.style.overflow='hidden';A.divEleContent.scrolling='no';};A.divEleInner.appendChild(A.divEleContent);if (A.isIframe){A.divHiddenClose=A.doc.createElement('DIV');A.divHiddenClose.id='DLG_hiddenClose';A.divHiddenClose.style.visibility='hidden';A.divHiddenClose.onclick=function(e){ return A.onCancel(e);};A.divEleInner.appendChild(A.divHiddenClose);};if (A.isResizable){A.divRsz=A.doc.createElement('DIV');A.divRsz.id='DLG_resizeHandle_'+A.winId;A.divRsz.className='DLG_Triv_resizeHandle';A.divEleInner.appendChild(A.divRsz);A.divRsz.onmouseover=function(e){ return A.onRszMOver(e);};A.divRsz.onmouseout=function(e){ return A.onRszMOut(e);};A.divRsz.onmousedown=function(e){ return A.onRszMDown(e);};A.divRsz.onmouseup=function(e){ return A.onRszMUp(e);};}};jsTrivDialog.resizeModalDiv=function(A,B){var C=getDisplayDocument();if (!A){var D=C.getElementsByTagName('div');for (var i=0;i<D.length;i++){if (D[i].id&&D[i].id.match('DLG_ModalDiv_[0-9]*')){A=D[i];break;}}};if (A){if (B){var E=C.getElementById(B);A.style.width=Math.max(E.scrollWidth,E.clientWidth)+"px";A.style.height=Math.max(E.scrollHeight,E.clientHeight)+"px";}else{var F=C.body;var G=C.documentElement;A.style.width=Math.max(G["clientWidth"],F["scrollWidth"],G["scrollWidth"],F["offsetWidth"],G["offsetWidth"])+"px";A.style.height=Math.max(G["clientHeight"],F["scrollHeight"],G["scrollHeight"],F["offsetHeight"],G["offsetHeight"])+"px";}}};jsTrivDialog.prototype.createTitleBar=function(){var A=this;if (A.divTitleBar) return;A.divTitleBar=A.doc.createElement('DIV');A.divTitleBar.className='DLG_Triv_titleBarLine '+jsTrivDialog.makeCssStr("TrivDlgTitleText");if (A.isDragable){A.divTitleBar.onmouseover=function(e){ return A.onMOver(e);};A.divTitleBar.onmouseout=function(e){ if (A.onMOut) return A.onMOut(e);};A.divTitleBar.onmousedown=function(e){ return A.onMDown(e);};A.divTitleBar.onmouseup=function(e){ return A.onMUp(e);};};A.divEleInner.appendChild(A.divTitleBar);var B=A.doc.createElement('DIV');B.className='DLG_Triv_titleBtns';A.divTitleBar.appendChild(B);A.divCloseBtn=A.doc.createElement('BUTTON');A.divCloseBtn.id="closeBtn";A.divCloseBtn.innerHTML='X';A.divCloseBtn.className='DLG_Triv_titleCloseBtn TrivDlgBtn';A.divCloseBtn.onmouseover=function(e) { return A.onMOverBtn(e);};A.divCloseBtn.onmouseout=function(e) { if (A.onMOutBtn) return A.onMOutBtn(e);};A.divCloseBtn.onclick=function(e) { return A.onCancel(e);};A.divCloseBtn.setAttribute("aria-label",theApp.getPubStr('trivstrCloseWindow'));if (!A.isClosable)	A.divCloseBtn.style.display='none';B.appendChild(A.divCloseBtn);A.divEleTitle_txt=A.doc.createElement('DIV');A.divEleTitle_txt.className='DLG_Triv_titleText '+jsTrivDialog.makeCssStr("TrivDlgTitleText");A.divTitleBar.appendChild(A.divEleTitle_txt);var C=parseInt(triv$(A.divEleTitle_txt).css('font-size'));A.divCloseBtn.style.fontSize=Math.min(C,20)+'px';};jsTrivDialog.prototype.onInitDialog=function(){var A=this;aria.Utils.IgnoreUtilFocusChanges=true;var B=A.divEleContent.getElementsByTagName('DIV');if (B) for (var C=0;C<B.length;C++){if (B[C].id==='IDOK_'+A.winId){A.okBtn=B[C].firstChild;A.okBtn.onclick=function(e) { A.onOK(e);};}else if (B[C].id==='IDCAN_'+A.winId){A.cancelBtn=B[C].firstChild;A.cancelBtn.onclick=function(e) { A.onCancel(e);};};if (B[C].className=='DLG_Triv_edittext'&&B[C].style.width){var D=B[C].firstChild;if (D&&(D.type=='text'||D.type=='textarea')){B[C].style.overflow='auto';if (B[C].style.width&&B[C].style.width.EndsWith('px')) D.style.width=(parseInt(B[C].style.width)-8)+"px";if (B[C].style.height&&B[C].style.height.EndsWith('px')) D.style.height=(parseInt(B[C].style.height)-8)+"px";}}};var E=document.createElement('div');A.preNode=A.divEle.parentNode.insertBefore(E,A.divEle);A.preNode.tabIndex=0;var F=document.createElement('div');A.postNode=A.divEle.parentNode.insertBefore(F,A.divEle.nextSibling);A.postNode.tabIndex=0;A.addListeners();aria.OpenDialogList.push(A);aria.Utils.IgnoreUtilFocusChanges=false;A.initialized=t;return true;};jsTrivDialog.prototype.setInitWinPos=function(){var A=this;var B=A.divEle.style;var C=getDisplayWindow();var D=getDisplayDocument();B.position='absolute';B.width=A.width+5+'px';B.height=(A.isAutoRsz?'auto':A.height+5+'px');var E;var F;var G=A.previewMode?wndPage.div.parentNode:null;if (G){E=G.clientWidth;F=G.clientHeight;}else{if (typeof C.innerWidth!='undefined'){E=C.innerWidth;F=C.innerHeight;}else if (typeof D.documentElement!='undefined'&&typeof D.documentElement.clientWidth!='undefined'&&D.documentElement.clientWidth!=0){E=D.documentElement.clientWidth;F=D.documentElement.clientHeight;}else{E=D.getElementsByTagName('body')[0].clientWidth;F=D.getElementsByTagName('body')[0].clientHeight;}};var H=G?G.scrollTop:Math.max(A.doc.body.scrollTop,A.doc.documentElement.scrollTop);var I=G?G.scrollLeft:Math.max(A.doc.body.scrollLeft,A.doc.documentElement.scrollLeft);var J=-1;var K=-1;J=(A.xPos<0?(Math.ceil((E-(A.width+8))/2)+I):A.xPos);K=(A.yPos<0?(Math.ceil((F-A.height)/2)+H):A.yPos);if (J<0) J=0;if (K<0) K=0;if (J<I) J=I;if (K<H) K=H;if (!G&&theApp.is.iOS) K=C.top.pageYOffset+25;A.xPos=J;A.yPos=K;B.left=J+'px';B.top=K+'px';};jsTrivDialog.prototype.moveWinPosBy=function(x,y){var A=this;A.xPos+=x;A.yPos+=y;A.divEle.style.left=A.xPos+'px';A.divEle.style.top=A.yPos+'px';};jsTrivDialog.prototype.rszWinBy=function(A,B){var C=this;C.width+=A;C.height+=B;if (C.width<60) C.width=60;if (C.height<40) C.height=40;C.divEle.style.width=C.width+'px';C.divEle.style.height=C.height+'px';C.divEleContent.style.width=C.width+5+"px";C.divEleContent.style.height=(C.isAutoRsz?'':(C.height-C.titleHt-C.titleHtAdj)+5+"px");};jsTrivDialog.prototype.setTitleStr=function(A){this.divEleTitle_txt.innerHTML=A;};jsTrivDialog.prototype.deleteWin=function(){this.divEle.style.display='none';};jsTrivDialog.prototype.showHideBtnEles=function(){if (this.isClosable) this.divCloseBtn.style.display='block';else this.divCloseBtn.style.display='none';};jsTrivDialog.prototype.onMOverBtn=function(e){if (this.doc.all) e=event;var A=null;if (e.target) A=e.target;else if (e.srcElement) A=e.srcElement;if (A.nodeType==3) A=A.parentNode;if (A==null||A.tagName!='DIV') return false;A.className=A.className+' DLG_Triv_winBtnOver';return false;};jsTrivDialog.prototype.onMOutBtn=function(e){if (this.doc.all) e=event;var A=null;if (e.target) A=e.target;else if (e.srcElement) A=e.srcElement;if (A.nodeType==3) A=A.parentNode;if (A==null||A.tagName!='DIV') return false;A.className=A.className.replace(' DLG_Triv_winBtnOver','');};jsTrivDialog.prototype.setWidth=function(A){var B=this;if (B.minWidth&&(A/1)<(B.minWidth/1)) A=B.minWidth;if (B.maxWidth&&(A/1)>(B.maxWidth/1)) A=B.maxWidth;B.width=A;};jsTrivDialog.prototype.setHeight=function(A){var B=this;if (B.minHeight&&(A/1)<(B.minHeight/1)) A=B.minHeight;if (B.maxHeight&&(A/1)>(B.maxHeight/1)) A=B.maxHeight;B.height=A+B.titleHt+B.titleHtAdj;};jsTrivDialog.prototype.setXPos=function(A){this.xPos=A;};jsTrivDialog.prototype.setYPos=function(A){this.yPos=A;};jsTrivDialog.prototype.onCancel=function(e){if (this.lBtnDn==true) this.onMUp(e);var A=this.cbFunc;this.endDialog();if (A) return A(e,1);return 1;};jsTrivDialog.prototype.onOK=function(e){var A=this.cbFunc;this.endDialog();if (A) return A(e,0);return 0;};jsTrivDialog.prototype.endDialog=function(){var A=this;A.closed=t;A.removeListeners();var B=aria.OpenDialogList.indexOf(A);if (B>-1) aria.OpenDialogList.splice(B,1);A.destroy();if (theApp.lastActiveElement) setTimeout(function() { theApp.lastActiveElement.focus();},200);};jsTrivDialog.prototype.destroy=function(){var A=this;if (A.divEleContent){var B=n;try{B=(A.isIframe?A.divEleContent.contentWindow.locWndPage:n);}catch (e) {};if (B) B.clearPage();if (A.isIframe){A.divEleContent.src='';}else A.divEleContent.innerHTML=null;triv$(A.divEleContent).remove();};triv$(A.preNode).remove();triv$(A.postNode).remove();triv$(A.divModal).remove();triv$(A.divEle).remove();for (var C in A){if (A[C]&&A[C].destroy&&(typeof A[C].destroy==='function')) A[C].destroy();A[C]=null;};return true;};jsTrivDialog.prototype.onMOver=function(e){this.divTitleBar.style.cursor='move';return;};jsTrivDialog.prototype.onMOut=function(e){if (!this.lBtnDn) this.divTitleBar.style.cursor='';return;};jsTrivDialog.prototype.onMDown=function(e){var A=this;var B=getDisplayDocument();var C=B.getElementById('DHTMLSuite_pane_west');var D=B.getElementById('DHTMLSuite_paneContentnorth');var E=(D?D.clientHeight:0);var F=(C?C.clientWidth:0);var G=A.divEle.parentNode;var H=G.clientHeight;if (H<=0){var I=trivPage?trivPage.getDisplayPageDiv():n;H=I?I.clientHeight:0;};A.margins={top:E,bottom:H+E,left:F,right:G.clientWidth+F};if (A.doc.all) e=event;if (A.lBtnDn==true) A.onMUp(e);A.lBtnDn=true;if (theApp.is.ie10orLess&&e.srcElement.id!=A.divCloseBtn.id) A.makeDragCoverDiv(2);if (A.doc.captureEvents) A.doc.captureEvents(Event.MOUSEMOVE);if (A.doc.captureEvents) A.doc.captureEvents(Event.MOUSEUP);A.rtMMove=A.doc.onmousemove;A.rtMUp=A.doc.onmouseup;A.doc.onmousemove=function(e){ return A.onMMove(e);};A.doc.onmouseup=function(e){ return A.onMUp(e);};if (A.isIframe) A.divDrg.style.display='block';A.curX=e.pageX?e.pageX:e.clientX;A.curY=e.pageY?e.pageY:e.clientY;return;};jsTrivDialog.prototype.onMUp=function(e){var A=this;var B=getDisplayDocument();A.lBtnDn=false;if (theApp.is.ie10orLess){var C=B.getElementById('DragCover');if (C) B.body.removeChild(C);};if (A.rtMMove!=-1){if (A.doc.releaseEvents) A.doc.releaseEvents(Event.MOUSEMOVE);if (A.doc.releaseEvents) A.doc.releaseEvents(Event.MOUSEUP);A.doc.onmousemove=A.rtMMove;A.doc.onmouseup=A.rtMUp;A.rtMMove=-1;A.rtMUp=-1;if (A.isIframe) A.divDrg.style.display='none';};return;};jsTrivDialog.prototype.onMMove=function(e){var A=this;if (A.doc.all) e=event;var B=A.doc.body.clientHeight;if (B<=0){var C=trivPage?trivPage.getDisplayPageDiv():n;B=C?C.clientHeight:0;};x=e.pageX?e.pageX:e.clientX;y=e.pageY?e.pageY:e.clientY;if (x<A.doc.body.offsetLeft) x=A.doc.body.offsetLeft;else if (x>A.doc.body.clientWidth) x=A.doc.body.clientWidth;if (y<A.doc.body.offsetTop) y=A.doc.body.offsetTop;else if (y>B) y=B;var D=A.margins;if (x>D.left&&x<D.right&&y>D.top&&y<D.bottom){A.moveWinPosBy(x-A.curX,y-A.curY);A.curX=x;A.curY=y;};return;};jsTrivDialog.prototype.setDoc=function(A){this.doc=A;};jsTrivDialog.prototype.setClosable=function(A){this.isClosable=A;};jsTrivDialog.prototype.close=function(){this.onCancel(null);};jsTrivDialog.prototype.onRszMOver=function(e){this.divRsz.style.cursor='se-resize';return;};jsTrivDialog.prototype.onRszMOut=function(e){if (!this.lBtnDnRsz) this.divRsz.style.cursor='';return;};jsTrivDialog.prototype.onRszMDown=function(e){var A=this;if (A.doc.all) e=event;if (A.lBtnDnRsz==true) A.onRszMUp(e);A.lBtnDnRsz=true;if (theApp.is.ie10orLess) A.makeDragCoverDiv(1);if (A.doc.captureEvents) A.doc.captureEvents(Event.MOUSEMOVE);if (A.doc.captureEvents) A.doc.captureEvents(Event.MOUSEUP);A.rtRszMMove=A.doc.onmousemove;A.rtRszMUp=A.doc.onmouseup;A.doc.onmousemove=function(e){ return A.onRszMMove(e);};A.doc.onmouseup=function(e){ return A.onRszMUp(e);};if (A.isIframe) A.divDrg.style.display='block';A.curDW=e.pageX?e.pageX:e.clientX;A.curDH=e.pageY?e.pageY:e.clientY;return;};jsTrivDialog.prototype.onRszMUp=function(e){var A=this;var B=getDisplayDocument();A.lBtnDnRsz=false;if (theApp.is.ie10orLess){var C=B.getElementById('DragCover');if (C) B.body.removeChild(C);};if (A.rtRszMMove!=-1){if (A.doc.releaseEvents) A.doc.releaseEvents(Event.MOUSEMOVE);if (A.doc.releaseEvents) A.doc.releaseEvents(Event.MOUSEUP);A.doc.onmousemove=A.rtRszMMove;A.doc.onmouseup=A.rtRszMUp;A.rtRszMMove=-1;A.rtRszMUp=-1;if (A.isIframe) A.divDrg.style.display='none';};return;};jsTrivDialog.prototype.onRszMMove=function(e){var A=this;if (A.doc.all) e=event;dw=e.pageX?e.pageX:e.clientX;dh=e.pageY?e.pageY:e.clientY;A.rszWinBy(dw-A.curDW,dh-A.curDH);A.curDW=dw;A.curDH=dh;return;};jsTrivDialog.prototype.makeDragCoverDiv=function(A){var B=this;var C=getDisplayDocument();var D=C.createElement('DIV');D.id='DragCover';var E=D.style;E.width=C.body.clientWidth;E.height=C.body.clientHeight;E.top=0;E.left=0;E.position='absolute';E.zIndex=99999;E.backgroundColor='green';E.filter='alpha(opacity=0)';if (A==1){D.onmousemove=function(e){ return B.onRszMMove(e);};D.onmouseup=function(e){ return B.onRszMUp(e);};}else{D.onmousemove=function(e){ return B.onMMove(e);};D.onmouseup=function(e){ return B.onMUp(e);};};C.body.appendChild(D);};jsTrivDialog.prototype.addListeners=function (){getDisplayDocument().addEventListener('focus',this.trapFocus,true);getDisplayDocument().addEventListener('keyup',aria.handleEscape,true);};jsTrivDialog.prototype.removeListeners=function (){getDisplayDocument().removeEventListener('focus',this.trapFocus,true);getDisplayDocument().removeEventListener('keyup',aria.handleEscape,true);};jsTrivDialog.prototype.trapFocus=function (A){if (aria.Utils.IgnoreUtilFocusChanges){return;};var B=aria.getCurrentDialog().divEle;if (B&&B.contains(A.target)){B.lastFocus=A.target;}else{aria.Utils.focusFirstDescendant(B);if (B.lastFocus==document.activeElement){aria.Utils.focusLastDescendant(B);};B.lastFocus=document.activeElement;}};jsTrivDialog.prototype.setPrevFocus=function(A){this.prevFocus=A;};function jsTrivDlgMsgBox(A,B,C,D,E,F,G){var H=this;jsTrivDialog.prototype.constructor.call(H,A);var I=jsTrivDialog.makeCssStr("TrivDlgText");var J=jsTrivDialog.makeCssStr("TrivDlgBtn");H.contentHTML=getLocStr(INC_dlgMsgBox,I);H.title=B?B:'';H.text=(typeof C!='undefined'?C.toString():'');H.buttonSet=D?D:0;if (E) H.cbFunc=E;if (F) H.setWidth(F);if (G) H.setHeight(G);H.isAutoRsz=true;H.isModal=true;H.elements={};H.EID_MSG_DIV="mb_message_div_"+H.winId;H.EID_BTN_DIV="mb_button_div_"+H.winId;H.btnHTML="<input type='button' class='"+J+"' style='width:80px;' ";H.btnSpaceHTML="&nbsp;&nbsp;&nbsp;";};jsTrivDlgMsgBox.prototype=new jsTrivDialog();jsTrivDlgMsgBox.prototype.create=function(A){jsTrivDialog.prototype.create.call(this,A);};jsTrivDlgMsgBox.prototype.onInitDialog=function(){var A=this;aria.Utils.IgnoreUtilFocusChanges=true;A.getEles();var B="<table width=100% height=100% border=0><tr valign='middle'>";B+="<td align='center' width=*>";A.elements[A.EID_MSG_DIV].innerHTML=B+A.text.replace(/\n/g,"<br>")+"</td></tr></table>";var C="";switch (A.buttonSet){case 0:C=A.getBtnHTML(0);break;case 1:C=A.getBtnHTML(0)+A.btnSpaceHTML+A.getBtnHTML(1);break;};A.elements[A.EID_BTN_DIV].innerHTML=C;var D=A.doc.getElementById('IDOK_'+A.winId);if (D) D.onclick=function(e) { return A.onBtn(e,0);};if (D&&!is.iOS) D.focus();D=A.doc.getElementById('IDCAN_'+A.winId);if (D) D.onclick=function(e) { return A.onBtn(e,1);};A.divEle.setAttribute('role',"alertdialog");A.divEle.setAttribute('aria-describedby',A.EID_MSG_DIV);if (triv$('#divContent').length>0){setTimeout(function() { triv$('#'+A.EID_MSG_DIV).parent().html(triv$('#'+A.EID_MSG_DIV).parent().html());},50);};return jsTrivDialog.prototype.onInitDialog.call(A);};jsTrivDlgMsgBox.prototype.getEles=function(A){var B=new RegExp('^'+(A?A:'EID_'));for (var C in this){if (C.match(B)) this.elements[this[C]]=this.doc.getElementById(this[C]);}};jsTrivDlgMsgBox.prototype.getBtnHTML=function(A){var n=null;var v=null;var B='NoId';switch (A){case 0:n=v=theApp.getPubStr('trivstrOK');B='IDOK_'+this.winId;break;case 1:n=v=theApp.getPubStr('trivstrCancel');B='IDCAN_'+this.winId;break;};return(this.btnHTML+"id='"+B+"' name='"+n+"' value='"+v+"' onclick='alert(this.value);'/>");};jsTrivDlgMsgBox.prototype.onBtn=function(e,A){var B=this.cbFunc;this.endDialog();if (B) return B(e,A);return A;};function jsDlgPromptBox(A,B,C,D,E,F,G){var H=this;jsTrivDialog.prototype.constructor.call(H,A);var I=jsTrivDialog.makeCssStr("TrivDlgText");H.contentHTML=getLocStr(INC_dlgPromptBox,I);H.title=B?B:'';H.text=C?C:'';H.deftxt=D?D:'';H.buttonSet=1;if (E) H.cbFunc=E;if (F) H.setWidth(F);if (G) H.setHeight(G);H.isAutoRsz=true;H.isModal=true;H.elements={};H.EID_MSG_DIV="mb_message_div_"+H.winId;H.EID_BTN_DIV="mb_button_div_"+H.winId;H.btnHTML="<input type='button' style='width:80px;' ";H.btnSpaceHTML="&nbsp;&nbsp;&nbsp;";};jsDlgPromptBox.prototype=new jsTrivDialog();jsDlgPromptBox.prototype.create=function(A){jsTrivDialog.prototype.create.call(this,A);};jsDlgPromptBox.prototype.onInitDialog=function(){var A=this;aria.Utils.IgnoreUtilFocusChanges=true;A.getEles();var B="<table width=100% height=100% border=0><tr valign='middle'>";B+="<td align='center' width=*>";var C=A.doc.getElementById('IDOK_'+A.winId);A.inEle=A.doc.getElementById('in');A.inEle.value=A.deftxt;A.inEle.focus();A.elements[A.EID_MSG_DIV].innerHTML=B+A.text+"</td></tr></table>";var D="";switch (A.buttonSet){case 0:D=A.getBtnHTML(0);break;case 1:D=A.getBtnHTML(0)+A.btnSpaceHTML+A.getBtnHTML(1);break;};A.elements[A.EID_BTN_DIV].innerHTML=D;var C=A.doc.getElementById('IDOK_'+A.winId);if (C) C.onclick=function(e) { return A.onBtn(e,0);};C=A.doc.getElementById('IDCAN_'+A.winId);if (C) C.onclick=function(e) { return A.onBtn(e,1);};return jsTrivDialog.prototype.onInitDialog.call(A);};jsDlgPromptBox.prototype.getEles=function(A){var B=new RegExp('^'+(A?A:'EID_'));for (var C in this){if (C.match(B)) this.elements[this[C]]=this.doc.getElementById(this[C]);}};jsDlgPromptBox.prototype.getBtnHTML=function(A){var n=null;var v=null;var B='NoId';switch (A){case 0:n=v=trivstrOK;B='IDOK_'+this.winId;break;case 1:n=v=trivstrCancel;B='IDCAN_'+this.winId;break;};return(this.btnHTML+"id='"+B+"' name='"+n+"' value='"+v+"' onclick='alert(this.value);'/>");};jsDlgPromptBox.prototype.onBtn=function(e,A){var B=this.cbFunc;var C=this.inEle.value;this.endDialog();if (B) return B(e,A,C);if (A==0) return C;else return null;};function jsDlgBox(A,B,C,D,E,F,x,y,G,H){var I=this;jsTrivDialog.prototype.constructor.call(I,A);I.title=B?B:'';I.contentHTML=C;I.isIframe=true;I.isAutoRsz=false;I.isModal=true;if (D) I.cbFunc=D;if (E) I.setWidth(E);if (F) I.setHeight(F);if (x!=null&&typeof x!='undefined') I.setXPos(x);if (y!=null&&typeof y!='undefined') I.setYPos(y);if (typeof G!='undefined') I.isScrollable=!G;if (typeof H!='undefined') I.isResizable=!H;};jsDlgBox.prototype=new jsTrivDialog();jsDlgBox.prototype.create=function(A){jsTrivDialog.prototype.create.call(this,A);};jsDlgBox.cb=function() { trivNewWnd=null;};jsDlgBox.cbImmFeedback=function() { trivWndImmFeedback=null;};jsDlgBox.cbFeedback=function(){setTimeout('checkLeavePage()',100);};
