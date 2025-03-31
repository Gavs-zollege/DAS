﻿
		/*
 * Copyright (C) 2025 ELB Learning
 */

	
function ButtonTrackingObj(A,B,C,D){this.VarTrivBtnTracking=new Variable('VarTrivBtnTracking',null,0,C,D,A,B,true);this.title=null;};ButtonTrackingObj.codeToStateMap={'N':BTN_STATE_NORMAL,'O':BTN_STATE_OVER,'D':BTN_STATE_DOWN,'A':BTN_STATE_DISABLED,'V':BTN_STATE_VISITED,'S':BTN_STATE_SELECTED};ButtonTrackingObj.stateToCodeMap={};for (var key in ButtonTrackingObj.codeToStateMap) ButtonTrackingObj.stateToCodeMap[ButtonTrackingObj.codeToStateMap[key]]=key;ButtonTrackingObj.prototype.InitPageTracking=function (){var A=this.VarTrivBtnTracking.getValue();try {if (A&&A.length>0&&A!='~~~null~~~'){var B=A.split('#');if (B&&B.length>1){var C=B[0].split(',');var D=B[1].split(',');for(var i=0;i<C.length;i++){var E=parseInt('0x'+C[i]);var F=D[i];var G=this.FindNode(this.title,E);if(G) G.v=ButtonTrackingObj.codeToStateMap[F]||F;}}}} catch (e) { }};ButtonTrackingObj.prototype.FindNode=function(A,B){if(A.id==B) return A;var C=null;if(typeof(A.c)!='undefined'){for(var i=0;i<A.c.length;i++){C=this.FindNode(A.c[i],B);if(C!=null) break;}};return C;};ButtonTrackingObj.prototype.InternalGetRangeStatus=function(A){if(A==null) return-1;if(typeof(A.c)=='undefined'){return A.v;}else{return 'normal';}};ButtonTrackingObj.prototype.GetRangeStatus=function(A,B){var C=-1;if (B) this.InitPageTracking();C=this.InternalGetRangeStatus(this.FindNode(this.title,A));return C;};ButtonTrackingObj.prototype.InternalSetRangeStatus=function(A,B){if(A==null) return;A.v=B;if(B==0&&typeof(A.c)!='undefined'){for(var i=0;i<A.c.length;i++) this.InternalSetRangeStatus(A.c[i],B);}};ButtonTrackingObj.prototype.SetRangeStatus=function(A,B){this.InternalSetRangeStatus(this.FindNode(this.title,A),B);this.SavePageTracking();};ButtonTrackingObj.prototype.IterateTree=function(A){var B=[];B.push(this.title);var i=0;while(B.length>0){var C=B.shift();if(typeof(C.c)!='undefined') B=C.c.concat(B);A(C,i,B);i++;}};ButtonTrackingObj.prototype.SavePageTracking=function(){var A=window.jsWndTextButton&&jsWndTextButton.isSaveState||function () { return false;};var B='';var C=[];var D=[];this.IterateTree(function(E,i,F){if (A(E.v)){C.push(E.id);D.push(E.v);}});for(var i=0;i<C.length;i++) B+=(i>0?',':'')+C[i].toString(16);B+=(C.length>0?'#':'');for (var i=0;i<D.length;i++) B+=(i>0?',':'')+(ButtonTrackingObj.stateToCodeMap[D[i]]||D[i]);if (B.length>0||(myTop.suspendDataCache&&myTop.suspendDataCache.indexOf('VarTrivBtnTracking')>=0)||!this.VarTrivBtnTracking.bSCORM) this.VarTrivBtnTracking.set(B);};
