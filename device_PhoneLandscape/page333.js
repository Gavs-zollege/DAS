if (window.VarCurrentView) VarCurrentView.set('PhoneLandscape');
function init_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
og6683.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6683",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6684.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj6684inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_333_14697\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14697&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 686px; top: 388px; width: 31px; height: 31px; z-index: 17; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6684",
	htmlId:		"tobj6684",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_back",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page328.html',false,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[686,388,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":882,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14697\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14697&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14699\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14699&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14701\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14701&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14703\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14703&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14705\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14705&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14707\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14707&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6686.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj6686inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_333_14709\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14709&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 724px; top: 388px; width: 31px; height: 31px; z-index: 18; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6686",
	htmlId:		"tobj6686",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page352.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[724,388,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14709\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14709&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14711\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14711&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14713\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14713&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14715\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14715&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14717\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14717&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_14719\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_14719&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio6192.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"sndtobj6192\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 148px; top: 383px; width: 300px; height: 68px; z-index: 0;",
	cssClasses:	"",
	id:		"6192",
	htmlId:		"tobj6192",
	bInsAnc:	false,
	stdHtml:	'<audio id="swftobj6192" name="swftobj6192" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741742413228.mp3" /><track kind="subtitles" src=Matthew_text_1741742413228.vtt srclang="en" label="On" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741742413228.mp3',
	arEvents:	[{name:'Event 1', value:'91270',proc:false,actItem:function(){trivExitPage('page352.html',true,false);
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741742413228"
	},
	objData:	{"a":[0,16908320,0,[148,383,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":190,"y":492,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741742413228.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
image6188.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj6188Img\" src=\"images/desktop_crop6188.png\" alt=\"Image003_bmp.jpg\" title=\"Image003_bmp.jpg\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 392px; height: 442px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 393px; top: 0px; width: 392px; height: 442px; z-index: 1; border-radius: 0px;",
	cssClasses:	"",
	id:		"6188",
	htmlId:		"tobj6188",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Image"
	},
	objData:	{"a":[0,288,0,[393,0,392,442]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":505,"y":0,"width":504,"height":568}}
};
og736.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og736",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text334.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 175px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 167px; min-height: 37px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Facial </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 109px; width: 175px; height: 45px; z-index: 2;",
	cssClasses:	"",
	id:		"334",
	htmlId:		"tobj334",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1653;p204"
	},
	objData:	{"a":[0,32,0,[60,109,175,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":140,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text335.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 175px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 167px; min-height: 37px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Lingual </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 163px; width: 175px; height: 45px; z-index: 3;",
	cssClasses:	"",
	id:		"335",
	htmlId:		"tobj335",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1654;p204"
	},
	objData:	{"a":[0,32,0,[60,163,175,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":210,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text336.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 175px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 167px; min-height: 37px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Masticatory </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 221px; width: 175px; height: 45px; z-index: 4;",
	cssClasses:	"",
	id:		"336",
	htmlId:		"tobj336",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1655;p204"
	},
	objData:	{"a":[0,32,0,[60,221,175,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":284,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text337.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 175px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 167px; min-height: 37px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Mesial </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 279px; width: 175px; height: 45px; z-index: 5;",
	cssClasses:	"",
	id:		"337",
	htmlId:		"tobj337",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1656;p204"
	},
	objData:	{"a":[0,32,0,[60,279,175,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":358,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text338.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 282px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 274px; min-height: 69px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Closest to the face (labial for lips, buccal for cheeks). </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 97px; width: 282px; height: 77px; z-index: 6;",
	cssClasses:	"",
	id:		"338",
	htmlId:		"tobj338",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1657;p204"
	},
	objData:	{"a":[0,32,0,[200,97,282,77]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":125,"width":363,"height":99},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text339.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 413px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 405px; min-height: 46px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Closest to the tongue. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 159px; width: 413px; height: 54px; z-index: 7;",
	cssClasses:	"",
	id:		"339",
	htmlId:		"tobj339",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1658;p204"
	},
	objData:	{"a":[0,32,0,[200,159,413,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":205,"width":531,"height":69},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text340.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 306px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 298px; min-height: 69px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Biting surface (incisal for anterior teeth, occlusal for posterior teeth). </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 213px; width: 306px; height: 77px; z-index: 8;",
	cssClasses:	"",
	id:		"340",
	htmlId:		"tobj340",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1659;p204"
	},
	objData:	{"a":[0,32,0,[200,213,306,77]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":274,"width":393,"height":99},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text341.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 412px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 404px; min-height: 46px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Closest to the midline. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 279px; width: 412px; height: 54px; z-index: 9;",
	cssClasses:	"",
	id:		"341",
	htmlId:		"tobj341",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1660;p204"
	},
	objData:	{"a":[0,32,0,[200,279,412,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":358,"width":530,"height":69},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape343.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj343inner\"><svg viewBox=\"0 0 433 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(216.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 432 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-216, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(216.5 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.82962930888889\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 39.5px; top: 151.5px; width: 433px; height: 2px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"343",
	htmlId:		"tobj343",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1662;p204"
	},
	objData:	{"a":[0,32,0,[39.5,151.50000000000006,433,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":196,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1662;p204","titleValue":"Google Shape;1662;p204"}
};
shape344.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj344inner\"><svg viewBox=\"0 0 433 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(216.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 432 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-216, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(216.5 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.82962930888889\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 39.5px; top: 209.5px; width: 433px; height: 2px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"344",
	htmlId:		"tobj344",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1663;p204"
	},
	objData:	{"a":[0,32,0,[39.5,209.50000000000006,433,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":270,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1663;p204","titleValue":"Google Shape;1663;p204"}
};
shape345.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj345inner\"><svg viewBox=\"0 0 433 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(216.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 432 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-216, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(216.5 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.82962930888889\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 39.5px; top: 264.5px; width: 433px; height: 2px; z-index: 12; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"345",
	htmlId:		"tobj345",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1664;p204"
	},
	objData:	{"a":[0,32,0,[39.5,264.50000000000006,433,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":341,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1664;p204","titleValue":"Google Shape;1664;p204"}
};
shape346.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj346inner\"><svg viewBox=\"0 0 433 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(216.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 432 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-216, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(216.5 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.82962930888889\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 39.5px; top: 321.5px; width: 433px; height: 2px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"346",
	htmlId:		"tobj346",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1665;p204"
	},
	objData:	{"a":[0,32,0,[39.5,321.50000000000006,433,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":414,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1665;p204","titleValue":"Google Shape;1665;p204"}
};
text347.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 308px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 300px; min-height: 61px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:36pt;top:-7px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">6. Tooth Surfaces </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 27px; width: 308px; height: 69px; z-index: 14;",
	cssClasses:	"",
	id:		"347",
	htmlId:		"tobj347",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1666;p204"
	},
	objData:	{"a":[0,32,0,[60,27,308,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":35,"width":396,"height":89},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text349.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 175px; min-height: 45px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 167px; min-height: 37px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Distal </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 338px; width: 175px; height: 45px; z-index: 15;",
	cssClasses:	"",
	id:		"349",
	htmlId:		"tobj349",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1668;p204"
	},
	objData:	{"a":[0,32,0,[60,338,175,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":434,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text350.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 413px; min-height: 54px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 405px; min-height: 46px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Farthest from the midline. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 332px; width: 413px; height: 54px; z-index: 16;",
	cssClasses:	"",
	id:		"350",
	htmlId:		"tobj350",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1669;p204"
	},
	objData:	{"a":[0,32,0,[200,332,413,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":427,"width":531,"height":69},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/Image003_bmp.jpg","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 546px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","",0,0,1];
