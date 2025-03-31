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
textbutton7088.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj7088inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_7019_16293\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_16293&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 724px; top: 499px; width: 31px; height: 31px; z-index: 2; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"7088",
	htmlId:		"tobj7088",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page431.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[724,499,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_16293\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_16293&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_16295\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_16295&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_16297\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_16297&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_16299\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_16299&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_16301\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_16301&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_16303\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_16303&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
text7082.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 700px; min-height: 104px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 690px; min-height: 94px;\"><p style=\"text-align: center;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size:26pt;\">Thank you for taking the time to complete our survey!&nbsp;</span></p>\n\n<p style=\"text-align: center;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size:26pt;\">​</span></p>\n\n<p style=\"text-align: center;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size:26pt;\">Your participation makes a difference!</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 26px; top: 422px; width: 700px; height: 104px; z-index: 0;",
	cssClasses:	"",
	id:		"7082",
	htmlId:		"tobj7082",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[26,422,700,104]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":422,"width":900,"height":134},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image7284.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<img id=\"tobj7284Img\" src=\"images/pasteImage7283.png\" alt=\"pasteImage7283\" title=\"pasteImage7283\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 661px; height: 441px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 661px; height: 441px; z-index: 1; border-radius: 0px;",
	cssClasses:	"",
	id:		"7284",
	htmlId:		"tobj7284",
	bInsAnc:	0,
	cwObj:		{
		"name":	"pasteImage7283"
	},
	objData:	{"a":[0,288,0,[0,0,661,441]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":850,"height":567}}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/arrow2_next.png","images/pasteImage7283.png"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1000px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletPortrait = ["#FFFFFF","",0,0,1];
