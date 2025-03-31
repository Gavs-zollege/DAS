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
shape4575.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj4575inner\"><svg viewBox=\"0 0 390 163\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(195 81.5)\" style=\"\">\n	<path d=\"M 0 0 L 390 0 L 390 163 L 0 163 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(238, 238, 238); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-195, -81.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(195 81.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.84217e-14px; top: 114px; width: 390px; height: 163px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4575",
	htmlId:		"tobj4575",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[-2.842170943040401e-14,114.00000000000004,390,163]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":146,"width":501,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
og6515.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6515",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6516.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj6516inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_237_14385\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14385&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 703px; top: 76px; width: 31px; height: 31px; z-index: 18; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6516",
	htmlId:		"tobj6516",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_back",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page231.html',false,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[703,76,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":903,"y":98,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14385\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14385&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14387\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14387&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14389\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14389&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14391\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14391&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14393\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14393&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14395\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAASZJREFUSEvt1L0rhVEcB/DPXWQ1WxSDsjBZDUryJ8huYJSyMXorTHYiGf0JZmWShcHGYpO85J46T11lOOc893GX+8zn9/s8v+95aenB1+qBqY82mno/3px4xzCN09SiuvGO4gKTWMR5ClwHHcINRiK0ht0m0XFcYgKf2MI23ptCh3EVI/3CHtZTsGpNbrwBvI6RfmMD+/hoCg2RnnVMGOLcTI2086dyJg2HZioWH2M5Z7pSdAVHsfgJc7grgXMmDf0DHA7OAJ4xH69Nlp2LhuarOGjvZ6h9i5Hf56glaAUfRuixfaJn8ZAKl6JV1DsYxCtmcJsC10FDbdjjauITLDWNVv3DHi9E8OW/0BTn15o68WZjpW9vMVT6InUFDE368XYtyr8a/QBCGykePZXEYwAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14395&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6518.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj6518inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_237_14397\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14397&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 740px; top: 76px; width: 31px; height: 31px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6518",
	htmlId:		"tobj6518",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page256.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[740,76,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":951,"y":98,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14397\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14397&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14399\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14399&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14401\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14401&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14403\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14403&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14405\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14405&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_14407\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_14407&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
shape4508.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj4508inner\"><svg viewBox=\"0 0 395 163\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(197.5 81.5)\" style=\"\">\n	<path d=\"M 0 0 L 395 0 L 395 163 L 0 163 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(238, 238, 238); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-197.5, -81.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(197.5 81.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 390px; top: 277px; width: 395px; height: 163px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4508",
	htmlId:		"tobj4508",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[390,277.00000000000006,395,163]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":501,"y":356,"width":508,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
shape4313.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj4313inner\"><svg viewBox=\"0 0 395 163\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(197.5 81.5)\" style=\"\">\n	<path d=\"M 0 0 L 395 0 L 395 163 L 0 163 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-197.5, -81.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(197.5 81.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 390px; top: 114px; width: 395px; height: 163px; z-index: 2; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4313",
	htmlId:		"tobj4313",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[390,114.00000000000004,395,163]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":501,"y":146,"width":508,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
shape4220.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj4220inner\"><svg viewBox=\"0 0 389 163\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(194.5 81.5)\" style=\"\">\n	<path d=\"M 0 0 L 389 0 L 389 163 L 0 163 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-194.5, -81.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(194.5 81.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.84217e-14px; top: 278px; width: 389px; height: 163px; z-index: 3; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4220",
	htmlId:		"tobj4220",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[-2.842170943040401e-14,278.00000000000006,389,163]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":357,"width":500,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
text238.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 684px; min-height: 83px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 676px; min-height: 75px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#073763;font-size:32pt;top:-6px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">4. Organs and Systems Relevant to Dentistry </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#073763;font-size:32pt;top:-6px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">​ </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#073763;font-size:32pt;top:-6px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">​ </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 24px; width: 684px; height: 83px; z-index: 4;",
	cssClasses:	"",
	id:		"238",
	htmlId:		"tobj238",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1534;p191"
	},
	objData:	{"a":[0,32,0,[40,24,684,83]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":31,"width":879,"height":107},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text239.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 278px; min-height: 113px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 260px; min-height: 95px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Facilitates jaw movements (chewing, speaking). </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 440px; top: 164px; width: 278px; height: 113px; z-index: 5;",
	cssClasses:	"",
	id:		"239",
	htmlId:		"tobj239",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1535;p191"
	},
	objData:	{"a":[0,32,0,[440,164,278,113]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":211,"width":357,"height":145},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text240.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 182px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 182px; min-height: 78px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Muscular System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 440px; top: 135px; width: 182px; height: 78px; z-index: 6;",
	cssClasses:	"",
	id:		"240",
	htmlId:		"tobj240",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1536;p191"
	},
	objData:	{"a":[0,32,0,[440,135,182,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":174,"width":234,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text241.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 272px; min-height: 44px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 254px; min-height: 26px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Defends against oral infections. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 428px; top: 335px; width: 272px; height: 44px; z-index: 7;",
	cssClasses:	"",
	id:		"241",
	htmlId:		"tobj241",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1537;p191"
	},
	objData:	{"a":[0,32,0,[428,335,272,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":550,"y":431,"width":350,"height":56},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text242.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 294px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 294px; min-height: 78px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Lymphatic/Immune System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 419px; top: 296px; width: 294px; height: 78px; z-index: 8;",
	cssClasses:	"",
	id:		"242",
	htmlId:		"tobj242",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1538;p191"
	},
	objData:	{"a":[0,32,0,[419,296,294,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":538,"y":381,"width":378,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text243.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 281px; min-height: 82px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 263px; min-height: 64px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Provides structure and protection. </span></li> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Supports dental procedures like implants. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 170px; width: 281px; height: 82px; z-index: 9;",
	cssClasses:	"",
	id:		"243",
	htmlId:		"tobj243",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1539;p191"
	},
	objData:	{"a":[0,32,0,[40,170,281,82]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":218,"width":361,"height":105},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text244.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 166px; min-height: 68px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 166px; min-height: 68px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Skeletal System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 135px; width: 166px; height: 68px; z-index: 10;",
	cssClasses:	"",
	id:		"244",
	htmlId:		"tobj244",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1540;p191"
	},
	objData:	{"a":[0,32,0,[40,135,166,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":174,"width":214,"height":87},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text245.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 279px; min-height: 112px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 261px; min-height: 94px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#ffffff; font-weight:normal; font-style:normal; text-decoration:normal;\">Supplies oxygen and nutrients; essential for healing. </span></li> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#ffffff; font-weight:normal; font-style:normal; text-decoration:normal;\">Special considerations for patients with heart conditions. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 37px; top: 329px; width: 279px; height: 112px; z-index: 11;",
	cssClasses:	"",
	id:		"245",
	htmlId:		"tobj245",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1541;p191"
	},
	objData:	{"a":[0,32,0,[37,329,279,112]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":47,"y":423,"width":359,"height":144},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text246.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 233px; min-height: 78px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 233px; min-height: 78px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Cardiovascular System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 296px; width: 233px; height: 78px; z-index: 12;",
	cssClasses:	"",
	id:		"246",
	htmlId:		"tobj246",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1542;p191"
	},
	objData:	{"a":[0,32,0,[40,296,233,78]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":381,"width":299,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image248.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj248Img\" src=\"images/image20.png\" alt=\"Google Shape;1544;p191\" title=\"Google Shape;1544;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 71px; height: 146px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 316px; top: 122px; width: 71px; height: 146px; z-index: 13; border-radius: 0px;",
	cssClasses:	"",
	id:		"248",
	htmlId:		"tobj248",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1544;p191"
	},
	objData:	{"a":[0,288,0,[316,122,71,146]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":157,"width":91,"height":188}}
};
image250.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj250Img\" src=\"images/image21.png\" alt=\"Google Shape;1545;p191\" title=\"Google Shape;1545;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 71px; height: 146px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 700px; top: 122px; width: 71px; height: 146px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"250",
	htmlId:		"tobj250",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1545;p191"
	},
	objData:	{"a":[0,288,0,[700,122,71,146]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":157,"width":91,"height":188}}
};
image252.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj252Img\" src=\"images/image22.png\" alt=\"Google Shape;1546;p191\" title=\"Google Shape;1546;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 71px; height: 146px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 700px; top: 288px; width: 71px; height: 146px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"252",
	htmlId:		"tobj252",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1546;p191"
	},
	objData:	{"a":[0,288,0,[700,288,71,146]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":370,"width":91,"height":188}}
};
image254.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj254Img\" src=\"images/image23.png\" alt=\"Google Shape;1547;p191\" title=\"Google Shape;1547;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 71px; height: 146px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 316px; top: 286px; width: 71px; height: 146px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"254",
	htmlId:		"tobj254",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1547;p191"
	},
	objData:	{"a":[0,288,0,[316,286,71,146]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":367,"width":91,"height":188}}
};
tts_audio4759.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"sndtobj4759\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 440px; top: 385px; width: 300px; height: 68px; z-index: 17;",
	cssClasses:	"",
	id:		"4759",
	htmlId:		"tobj4759",
	bInsAnc:	false,
	stdHtml:	'<audio id="swftobj4759" name="swftobj4759" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741730147769.mp3" /><track kind="subtitles" src=Matthew_text_1741730147769.json.vtt srclang="en" label="On" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741730147769.mp3',
	arEvents:	[{name:'Event 1', value:'65379.99999999999',proc:false,actItem:function(){trivExitPage('page256.html',true,false);
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741730147769"
	},
	objData:	{"a":[0,16908320,0,[440,385,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":566,"y":495,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741730147769.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
og606.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og606",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/image20.png","images/image21.png","images/image22.png","images/image23.png","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 548px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","",0,0,1];
