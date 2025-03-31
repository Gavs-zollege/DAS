if (window.VarCurrentView) VarCurrentView.set('PhonePortrait');
function init_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
og6699.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6699",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6700.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj6700inner\"><svg viewBox=\"0 0 19 19\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(9.5 9.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_309_16977\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16977&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9.5 9.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 269px; top: 70px; width: 19px; height: 19px; z-index: 18; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6700",
	htmlId:		"tobj6700",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_back",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page304.html',false,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[269,70,19,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":70,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16977\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16977&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16979\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16979&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16981\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16981&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16983\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16983&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16985\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16985&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16987\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16987&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6702.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj6702inner\"><svg viewBox=\"0 0 19 19\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(9.5 9.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_309_16989\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16989&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9.5 9.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 292px; top: 70px; width: 19px; height: 19px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6702",
	htmlId:		"tobj6702",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page328.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[292,70,19,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":613,"y":70,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16989\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16989&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16991\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16991&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16993\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16993&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16995\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16995&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16997\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16997&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_309_16999\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_309_16999&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio6056.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"sndtobj6056\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 317px; top: 56px; width: 300px; height: 68px; z-index: 0;",
	cssClasses:	"",
	id:		"6056",
	htmlId:		"tobj6056",
	bInsAnc:	false,
	stdHtml:	'<audio id="swftobj6056" name="swftobj6056" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741733352560.mp3" /><track kind="subtitles" src=Matthew_text_1741733352560.json.vtt srclang="en" label="On" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741733352560.mp3',
	arEvents:	[{name:'Event 1', value:'108460',proc:false,actItem:function(){trivExitPage('page328.html',true,false);
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741733352560"
	},
	objData:	{"a":[0,16908320,0,[317,56,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":667,"y":56,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741733352560.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
shape5786.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj5786inner\"><svg viewBox=\"0 0 238 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(119 50)\" style=\"\">\n	<path d=\"M 0 0 L 238 0 L 238 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(238, 238, 238); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(119 50)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -1.42109e-14px; top: 146px; width: 238px; height: 100px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"5786",
	htmlId:		"tobj5786",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[-1.4210854715202004e-14,146.00000000000003,238,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":146,"width":501,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
shape5784.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj5784inner\"><svg viewBox=\"0 0 242 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(121 50)\" style=\"\">\n	<path d=\"M 0 0 L 242 0 L 242 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(238, 238, 238); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-121, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(121 50)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 238px; top: 356px; width: 242px; height: 100px; z-index: 2; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"5784",
	htmlId:		"tobj5784",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[238,356,242,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":501,"y":356,"width":508,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
shape5782.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj5782inner\"><svg viewBox=\"0 0 242 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(121 50)\" style=\"\">\n	<path d=\"M 0 0 L 242 0 L 242 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-121, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(121 50)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 238px; top: 146px; width: 242px; height: 100px; z-index: 3; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"5782",
	htmlId:		"tobj5782",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[238,146.00000000000003,242,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":501,"y":146,"width":508,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
shape5780.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj5780inner\"><svg viewBox=\"0 0 238 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(119 50)\" style=\"\">\n	<path d=\"M 0 0 L 238 0 L 238 100 L 0 100 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-119, -50) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(119 50)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -1.42109e-14px; top: 357px; width: 238px; height: 100px; z-index: 4; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"5780",
	htmlId:		"tobj5780",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[-1.4210854715202004e-14,357,238,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":357,"width":500,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
og716.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og716",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text310.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 248px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 240px; min-height: 34px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#45818e;font-size:36pt;top:-7px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">4. Types of Teeth </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 25px; top: 31px; width: 248px; height: 42px; z-index: 5;",
	cssClasses:	"",
	id:		"310",
	htmlId:		"tobj310",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1628;p202"
	},
	objData:	{"a":[0,32,0,[25,31,248,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":31,"width":522,"height":89},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text311.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 170px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 152px; min-height: 70px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Characteristics: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Pointed cusps; long roots. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Function: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Tearing food. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.691;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-4px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-4px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.691;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-4px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-4px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 276px; top: 210px; width: 170px; height: 88px; z-index: 6;",
	cssClasses:	"",
	id:		"311",
	htmlId:		"tobj311",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1629;p202"
	},
	objData:	{"a":[0,32,0,[276,210,170,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":581,"y":210,"width":357,"height":186},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text312.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Canines </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 276px; top: 174px; width: 102px; height: 24px; z-index: 7;",
	cssClasses:	"",
	id:		"312",
	htmlId:		"tobj312",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1630;p202"
	},
	objData:	{"a":[0,32,0,[276,174,102,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":581,"y":174,"width":214,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text313.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 167px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 149px; min-height: 51px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Characteristics: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Large crowns, multiple cusps. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Function: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Grinding food. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 276px; top: 421px; width: 167px; height: 69px; z-index: 8;",
	cssClasses:	"",
	id:		"313",
	htmlId:		"tobj313",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1631;p202"
	},
	objData:	{"a":[0,32,0,[276,421,167,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":581,"y":421,"width":350,"height":144},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text314.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Molars </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 276px; top: 385px; width: 102px; height: 24px; z-index: 9;",
	cssClasses:	"",
	id:		"314",
	htmlId:		"tobj314",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1632;p202"
	},
	objData:	{"a":[0,32,0,[276,385,102,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":581,"y":385,"width":214,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text315.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 172px; min-height: 71px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 154px; min-height: 53px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Characteristics: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Sharp, thin edges; located at the front. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Function: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Cutting food &nbsp; </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-2px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 41px; top: 210px; width: 172px; height: 71px; z-index: 10;",
	cssClasses:	"",
	id:		"315",
	htmlId:		"tobj315",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1633;p202"
	},
	objData:	{"a":[0,32,0,[41,210,172,71]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":210,"width":361,"height":149},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text316.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Incisors </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 36px; top: 167px; width: 102px; height: 24px; z-index: 11;",
	cssClasses:	"",
	id:		"316",
	htmlId:		"tobj316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1634;p202"
	},
	objData:	{"a":[0,32,0,[36,167,102,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":75,"y":167,"width":214,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text317.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 172px; min-height: 127px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 154px; min-height: 109px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Characteristics: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#ffffff; font-weight:normal; font-style:normal; text-decoration:normal;\">Broader surface with cusps. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Function: </span></p> \n<ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:15px;text-align:left;\"> \n <li style=\"padding-left:8px;line-height:1.409;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:12pt; font-family:\'Malgun Gothic\', sans-serif; color:#ffffff; font-weight:normal; font-style:normal; text-decoration:normal;\">Grasping, tearing, and chewing. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#ffffff;top:-2px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.691;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-4px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#ffffff;top:-4px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.691;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-4px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#ffffff;top:-4px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.691;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-4px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#ffffff;top:-4px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.691;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-weight:normal;text-decoration:normal;font-size:12pt;font-style:normal;top:-4px;font-family:\'Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#ffffff;top:-4px;font-weight:normal;text-decoration:normal;font-size:12pt;font-family:\'Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 41px; top: 421px; width: 172px; height: 127px; z-index: 12;",
	cssClasses:	"",
	id:		"317",
	htmlId:		"tobj317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1635;p202"
	},
	objData:	{"a":[0,32,0,[41,421,172,127]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":421,"width":361,"height":266},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text318.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 102px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 102px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Premolars </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 41px; top: 385px; width: 102px; height: 24px; z-index: 13;",
	cssClasses:	"",
	id:		"318",
	htmlId:		"tobj318",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1636;p202"
	},
	objData:	{"a":[0,32,0,[41,385,102,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":385,"width":214,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image320.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj320Img\" src=\"images/image31.png\" alt=\"Google Shape;1638;p202\" title=\"Google Shape;1638;p202\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 43px; height: 87px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 191px; top: 158px; width: 43px; height: 87px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"320",
	htmlId:		"tobj320",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1638;p202"
	},
	objData:	{"a":[0,288,0,[191,158,43,87]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":402,"y":158,"width":91,"height":182}}
};
image322.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj322Img\" src=\"images/image32.png\" alt=\"Google Shape;1639;p202\" title=\"Google Shape;1639;p202\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 87px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 420px; top: 158px; width: 48px; height: 87px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"322",
	htmlId:		"tobj322",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1639;p202"
	},
	objData:	{"a":[0,288,0,[420,158,48,87]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":882,"y":158,"width":101,"height":182}}
};
image324.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj324Img\" src=\"images/image33.png\" alt=\"Google Shape;1640;p202\" title=\"Google Shape;1640;p202\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 43px; height: 87px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 191px; top: 372px; width: 43px; height: 87px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"324",
	htmlId:		"tobj324",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1640;p202"
	},
	objData:	{"a":[0,288,0,[191,372,43,87]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":402,"y":372,"width":91,"height":182}}
};
image326.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj326Img\" src=\"images/image34.png\" alt=\"Google Shape;1641;p202\" title=\"Google Shape;1641;p202\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 65px; height: 87px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 411px; top: 372px; width: 65px; height: 87px; z-index: 17; border-radius: 0px;",
	cssClasses:	"",
	id:		"326",
	htmlId:		"tobj326",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1641;p202"
	},
	objData:	{"a":[0,288,0,[411,372,65,87]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":864,"y":372,"width":137,"height":182}}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/image31.png","images/image32.png","images/image33.png","images/image34.png","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","",0,0,1];
