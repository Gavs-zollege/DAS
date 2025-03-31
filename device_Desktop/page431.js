if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
tts_audio6265.rcdData.att_Desktop = 
{
	innerHtml:	"<div></div>",
	cssText:	"position: absolute; left: 0px; top: 15px; width: 0px; height: 0px; z-index: 0;",
	cssClasses:	"",
	id:		"6265",
	htmlId:		"tobj6265",
	bInsAnc:	false,
	stdHtml:	'<div id="sndSpacers" ></div><audio id="swftobj6265" name="swftobj6265" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741749379715.mp3" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741749379715.mp3',
	arEvents:	[{name:'Event 1', value:'4700',proc:false,actItem:function(){{cleanupTitle(''); trivExitPage('ObjLayerActionExit()',false);} 
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741749379715"
	},
	objData:	{"a":[0,131104,0,[0,15,0,0,24]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":15,"width":0,"height":0},"iDisplay":1,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741749379715.mp3","initHidden":false,"hasCaptions":false,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":false,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
og876.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og876",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image432.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj432Img\" src=\"images/image55.png\" alt=\"Google Shape;1774;p218\" title=\"Google Shape;1774;p218\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 339px; height: 337px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 333px; top: 113px; width: 339px; height: 337px; z-index: 1; border-radius: 0px;",
	cssClasses:	"",
	id:		"432",
	htmlId:		"tobj432",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1774;p218"
	},
	objData:	{"a":[0,288,0,[333,113,339,337]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":333,"y":113,"width":339,"height":337}}
};
rcdObj.rcdData.att_Desktop = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	54
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/image55.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 567px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#ffffff","",0,0,1];
