if (window.VarCurrentView) VarCurrentView.set('TabletPortrait');
function init_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
og6443.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6443",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6444.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj6444inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_156_15357\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15357&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 687px; top: 507px; width: 31px; height: 31px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6444",
	htmlId:		"tobj6444",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_back",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page151.html',false,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[687,507,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":507,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15357\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15357&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15359\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15359&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15361\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15361&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15363\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15363&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15365\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15365&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15367\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15367&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6446.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj6446inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_156_15369\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15369&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 724px; top: 507px; width: 31px; height: 31px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6446",
	htmlId:		"tobj6446",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page185.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[724,507,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":931,"y":507,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15369\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15369&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15371\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15371&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15373\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15373&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15375\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15375&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15377\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15377&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_15379\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_15379&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio2273.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"sndtobj2273\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 40px; top: 473px; width: 300px; height: 68px; z-index: 0;",
	cssClasses:	"",
	id:		"2273",
	htmlId:		"tobj2273",
	bInsAnc:	false,
	stdHtml:	'<audio id="swftobj2273" name="swftobj2273" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741638397323.mp3" /><track kind="subtitles" src=Matthew_text_1741638397323.json.vtt srclang="en" label="On" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741638397323.mp3',
	arEvents:	[{name:'Event 2', value:'92160',proc:false,actItem:function(){trivExitPage('page185.html',true,false);
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741638397323"
	},
	objData:	{"a":[0,16908320,0,[40,473,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":51,"y":473,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741638397323.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
og526.rcdData.att_TabletPortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og526",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text157.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 39px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Autonomy </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 68px; top: 287px; width: 119px; height: 39px; z-index: 1;",
	cssClasses:	"",
	id:		"157",
	htmlId:		"tobj157",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1444;p183"
	},
	objData:	{"a":[0,32,0,[68,287,119,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text158.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 46px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 46px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Respecting the patient decisions </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 68px; top: 315px; width: 119px; height: 46px; z-index: 2;",
	cssClasses:	"",
	id:		"158",
	htmlId:		"tobj158",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1445;p183"
	},
	objData:	{"a":[0,32,0,[68,315,119,46]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":315,"width":153,"height":59},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image6755.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj6755Img\" src=\"images/image5.png\" alt=\"Google Shape;1461;p183\" title=\"Google Shape;1461;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 112px; height: 164px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 57px; width: 112px; height: 164px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"6755",
	htmlId:		"tobj6755",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1461;p183"
	},
	objData:	{"a":[0,288,0,[605,57,112,164]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":777,"y":57,"width":144,"height":211}}
};
text164.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 255px; min-height: 61px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 255px; min-height: 61px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Example: </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Respecting a patient’s refusal for X-rays but informing them of the risks. </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 471px; top: 446px; width: 255px; height: 61px; z-index: 4;",
	cssClasses:	"",
	id:		"164",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1451;p183"
	},
	objData:	{"a":[0,32,0,[471,446,255,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":446,"width":328,"height":79},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text165.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 401px; min-height: 52px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 401px; min-height: 52px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.430;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:25pt;top:-5px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">7. Ethical Foundations in Dentistry </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 335px; top: 387px; width: 401px; height: 52px; z-index: 5;",
	cssClasses:	"",
	id:		"165",
	htmlId:		"tobj165",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1452;p183"
	},
	objData:	{"a":[0,32,0,[335,387,401,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":431,"y":387,"width":516,"height":67},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text166.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 39px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Beneficence </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 202px; top: 287px; width: 119px; height: 39px; z-index: 6;",
	cssClasses:	"",
	id:		"166",
	htmlId:		"tobj166",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1453;p183"
	},
	objData:	{"a":[0,32,0,[202,287,119,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text167.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 68px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 68px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Acting in the patient\'s best interest </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 202px; top: 315px; width: 119px; height: 68px; z-index: 7;",
	cssClasses:	"",
	id:		"167",
	htmlId:		"tobj167",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1454;p183"
	},
	objData:	{"a":[0,32,0,[202,315,119,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":315,"width":153,"height":88},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text168.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 78px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.384;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:14pt;top:-2px;font-family:\'@Yu Gothic UI\', sans-serif;\">Non-Maleficence </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 335px; top: 287px; width: 119px; height: 78px; z-index: 8;",
	cssClasses:	"",
	id:		"168",
	htmlId:		"tobj168",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1455;p183"
	},
	objData:	{"a":[0,32,0,[335,287,119,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":287,"width":153,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text169.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Avoiding harm </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 335px; top: 316px; width: 119px; height: 24px; z-index: 9;",
	cssClasses:	"",
	id:		"169",
	htmlId:		"tobj169",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1456;p183"
	},
	objData:	{"a":[0,32,0,[335,316,119,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":316,"width":153,"height":31},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text170.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 39px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Justice </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 471px; top: 287px; width: 119px; height: 39px; z-index: 10;",
	cssClasses:	"",
	id:		"170",
	htmlId:		"tobj170",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1457;p183"
	},
	objData:	{"a":[0,32,0,[471,287,119,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text171.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 46px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 46px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Fair and unbiased treatment </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 471px; top: 315px; width: 119px; height: 46px; z-index: 11;",
	cssClasses:	"",
	id:		"171",
	htmlId:		"tobj171",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1458;p183"
	},
	objData:	{"a":[0,32,0,[471,315,119,46]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":315,"width":153,"height":59},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text172.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 39px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Confidentiality </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 607px; top: 287px; width: 119px; height: 39px; z-index: 12;",
	cssClasses:	"",
	id:		"172",
	htmlId:		"tobj172",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1459;p183"
	},
	objData:	{"a":[0,32,0,[607,287,119,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":780,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text173.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 119px; min-height: 68px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 119px; min-height: 68px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Protecting the patients information </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 607px; top: 315px; width: 119px; height: 68px; z-index: 13;",
	cssClasses:	"",
	id:		"173",
	htmlId:		"tobj173",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1460;p183"
	},
	objData:	{"a":[0,32,0,[607,315,119,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":780,"y":315,"width":153,"height":88},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image174.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj174Img\" src=\"images/image5.png\" alt=\"Google Shape;1461;p183\" title=\"Google Shape;1461;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 112px; height: 164px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 57px; width: 112px; height: 164px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"174",
	htmlId:		"tobj174",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1461;p183"
	},
	objData:	{"a":[0,288,0,[605,57,112,164]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":777,"y":57,"width":144,"height":211}}
};
image176.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj176Img\" src=\"images/image6.png\" alt=\"Google Shape;1462;p183\" title=\"Google Shape;1462;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 112px; height: 164px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 66px; top: 57px; width: 112px; height: 164px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"176",
	htmlId:		"tobj176",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1462;p183"
	},
	objData:	{"a":[0,288,0,[66,57,112,164]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":85,"y":57,"width":144,"height":211}}
};
image178.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj178Img\" src=\"images/image7.png\" alt=\"Google Shape;1463;p183\" title=\"Google Shape;1463;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 112px; height: 164px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 201px; top: 57px; width: 112px; height: 164px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"178",
	htmlId:		"tobj178",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1463;p183"
	},
	objData:	{"a":[0,288,0,[201,57,112,164]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":258,"y":57,"width":144,"height":211}}
};
image180.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj180Img\" src=\"images/image8.png\" alt=\"Google Shape;1464;p183\" title=\"Google Shape;1464;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 112px; height: 164px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 335px; top: 57px; width: 112px; height: 164px; z-index: 17; border-radius: 0px;",
	cssClasses:	"",
	id:		"180",
	htmlId:		"tobj180",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1464;p183"
	},
	objData:	{"a":[0,288,0,[335,57,112,164]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":431,"y":57,"width":144,"height":211}}
};
image182.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj182Img\" src=\"images/image9.png\" alt=\"Google Shape;1465;p183\" title=\"Google Shape;1465;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 112px; height: 164px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 471px; top: 57px; width: 112px; height: 164px; z-index: 18; border-radius: 0px;",
	cssClasses:	"",
	id:		"182",
	htmlId:		"tobj182",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1465;p183"
	},
	objData:	{"a":[0,288,0,[471,57,112,164]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":57,"width":144,"height":211}}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/image5.png","images/image6.png","images/image7.png","images/image8.png","images/image9.png","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1000px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletPortrait = ["#EFEFEF","",0,0,1];
