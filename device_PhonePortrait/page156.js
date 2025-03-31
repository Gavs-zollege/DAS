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
og6443.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6443",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6444.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj6444inner\"><svg viewBox=\"0 0 19 19\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(9.5 9.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_156_4863\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4863&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9.5 9.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 420px; top: 507px; width: 19px; height: 19px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[420,507,19,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":507,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4863\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4863&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4865\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4865&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4867\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4867&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4869\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4869&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4871\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4871&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4873\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI5JREFUOE/V0yEOwkAQBdDXI9VzABJSiyLBYkGDKRo8lgSFJCHBcwCORCrGwXazren6efnzd7cy0qlGckwbmuH9r4rc1bY4Y4PLLywHCuSJRWmiHU5IIh2eShRJPqj7nkkKOmKPF+ZDoG42sBtWKSyn7BYH3LEsLTvmItka19Lrj7kGj6GJ+rqe+KdNrvcFIOsSEyYRH2oAAAAASUVORK5CYII=\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4873&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6446.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj6446inner\"><svg viewBox=\"0 0 19 19\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(9.5 9.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_156_4875\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4875&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9.5 9.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 443px; top: 507px; width: 19px; height: 19px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[443,507,19,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":931,"y":507,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4875\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4875&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4877\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4877&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4879\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4879&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4881\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4881&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4883\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4883&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_4885\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_4885&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio2273.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"sndtobj2273\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 24px; top: 473px; width: 300px; height: 68px; z-index: 0;",
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
	objData:	{"a":[0,16908320,0,[24,473,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":51,"y":473,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741638397323.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
og526.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og526",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text157.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Autonomy </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 41px; top: 287px; width: 73px; height: 24px; z-index: 1;",
	cssClasses:	"",
	id:		"157",
	htmlId:		"tobj157",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1444;p183"
	},
	objData:	{"a":[0,32,0,[41,287,73,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text158.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 28px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Respecting the patient decisions </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 41px; top: 315px; width: 73px; height: 28px; z-index: 2;",
	cssClasses:	"",
	id:		"158",
	htmlId:		"tobj158",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1445;p183"
	},
	objData:	{"a":[0,32,0,[41,315,73,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":315,"width":153,"height":59},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image6755.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj6755Img\" src=\"images/image5.png\" alt=\"Google Shape;1461;p183\" title=\"Google Shape;1461;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 100px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 370px; top: 57px; width: 69px; height: 100px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"6755",
	htmlId:		"tobj6755",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1461;p183"
	},
	objData:	{"a":[0,288,0,[370,57,69,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":777,"y":57,"width":144,"height":211}}
};
text164.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 156px; min-height: 38px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 156px; min-height: 38px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Example: </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Respecting a patient’s refusal for X-rays but informing them of the risks. </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 288px; top: 446px; width: 156px; height: 38px; z-index: 4;",
	cssClasses:	"",
	id:		"164",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1451;p183"
	},
	objData:	{"a":[0,32,0,[288,446,156,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":446,"width":328,"height":79},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text165.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 245px; min-height: 32px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 245px; min-height: 32px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.430;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:25pt;top:-5px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">7. Ethical Foundations in Dentistry </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 205px; top: 387px; width: 245px; height: 32px; z-index: 5;",
	cssClasses:	"",
	id:		"165",
	htmlId:		"tobj165",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1452;p183"
	},
	objData:	{"a":[0,32,0,[205,387,245,32]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":431,"y":387,"width":516,"height":67},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text166.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Beneficence </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 123px; top: 287px; width: 73px; height: 24px; z-index: 6;",
	cssClasses:	"",
	id:		"166",
	htmlId:		"tobj166",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1453;p183"
	},
	objData:	{"a":[0,32,0,[123,287,73,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text167.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 42px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Acting in the patient\'s best interest </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 123px; top: 315px; width: 73px; height: 42px; z-index: 7;",
	cssClasses:	"",
	id:		"167",
	htmlId:		"tobj167",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1454;p183"
	},
	objData:	{"a":[0,32,0,[123,315,73,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":315,"width":153,"height":88},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text168.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 48px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.384;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:14pt;top:-2px;font-family:\'@Yu Gothic UI\', sans-serif;\">Non-Maleficence </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 205px; top: 287px; width: 73px; height: 48px; z-index: 8;",
	cssClasses:	"",
	id:		"168",
	htmlId:		"tobj168",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1455;p183"
	},
	objData:	{"a":[0,32,0,[205,287,73,48]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":287,"width":153,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text169.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 15px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 15px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Avoiding harm </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 205px; top: 316px; width: 73px; height: 15px; z-index: 9;",
	cssClasses:	"",
	id:		"169",
	htmlId:		"tobj169",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1456;p183"
	},
	objData:	{"a":[0,32,0,[205,316,73,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":316,"width":153,"height":31},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text170.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Justice </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 288px; top: 287px; width: 73px; height: 24px; z-index: 10;",
	cssClasses:	"",
	id:		"170",
	htmlId:		"tobj170",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1457;p183"
	},
	objData:	{"a":[0,32,0,[288,287,73,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text171.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 28px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Fair and unbiased treatment </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 288px; top: 315px; width: 73px; height: 28px; z-index: 11;",
	cssClasses:	"",
	id:		"171",
	htmlId:		"tobj171",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1458;p183"
	},
	objData:	{"a":[0,32,0,[288,315,73,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":315,"width":153,"height":59},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text172.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 24px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Confidentiality </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 371px; top: 287px; width: 73px; height: 24px; z-index: 12;",
	cssClasses:	"",
	id:		"172",
	htmlId:		"tobj172",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1459;p183"
	},
	objData:	{"a":[0,32,0,[371,287,73,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":780,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text173.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 73px; min-height: 42px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 73px; min-height: 42px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Protecting the patients information </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 371px; top: 315px; width: 73px; height: 42px; z-index: 13;",
	cssClasses:	"",
	id:		"173",
	htmlId:		"tobj173",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1460;p183"
	},
	objData:	{"a":[0,32,0,[371,315,73,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":780,"y":315,"width":153,"height":88},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image174.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj174Img\" src=\"images/image5.png\" alt=\"Google Shape;1461;p183\" title=\"Google Shape;1461;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 100px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 370px; top: 57px; width: 69px; height: 100px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"174",
	htmlId:		"tobj174",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1461;p183"
	},
	objData:	{"a":[0,288,0,[370,57,69,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":777,"y":57,"width":144,"height":211}}
};
image176.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj176Img\" src=\"images/image6.png\" alt=\"Google Shape;1462;p183\" title=\"Google Shape;1462;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 100px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 57px; width: 69px; height: 100px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"176",
	htmlId:		"tobj176",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1462;p183"
	},
	objData:	{"a":[0,288,0,[40,57,69,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":85,"y":57,"width":144,"height":211}}
};
image178.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj178Img\" src=\"images/image7.png\" alt=\"Google Shape;1463;p183\" title=\"Google Shape;1463;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 100px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 123px; top: 57px; width: 69px; height: 100px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"178",
	htmlId:		"tobj178",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1463;p183"
	},
	objData:	{"a":[0,288,0,[123,57,69,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":258,"y":57,"width":144,"height":211}}
};
image180.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj180Img\" src=\"images/image8.png\" alt=\"Google Shape;1464;p183\" title=\"Google Shape;1464;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 100px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 205px; top: 57px; width: 69px; height: 100px; z-index: 17; border-radius: 0px;",
	cssClasses:	"",
	id:		"180",
	htmlId:		"tobj180",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1464;p183"
	},
	objData:	{"a":[0,288,0,[205,57,69,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":431,"y":57,"width":144,"height":211}}
};
image182.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj182Img\" src=\"images/image9.png\" alt=\"Google Shape;1465;p183\" title=\"Google Shape;1465;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 69px; height: 100px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 288px; top: 57px; width: 69px; height: 100px; z-index: 18; border-radius: 0px;",
	cssClasses:	"",
	id:		"182",
	htmlId:		"tobj182",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1465;p183"
	},
	objData:	{"a":[0,288,0,[288,57,69,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":57,"width":144,"height":211}}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/image5.png","images/image6.png","images/image7.png","images/image8.png","images/image9.png","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#EFEFEF","",0,0,1];
