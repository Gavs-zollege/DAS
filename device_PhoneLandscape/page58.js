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
image7109.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj7109Img\" src=\"images/image55.png\" alt=\"Google Shape;1774;p218\" title=\"Google Shape;1774;p218\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 264px; height: 262px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 471px; top: 89px; width: 264px; height: 262px; z-index: 0; border-radius: 0px;",
	cssClasses:	"",
	id:		"7109",
	htmlId:		"tobj7109",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1774;p218"
	},
	objData:	{"a":[0,288,0,[471,89,264,262]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":114,"width":339,"height":337}}
};
og6739.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6739",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6742.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj6742inner\"><svg viewBox=\"0 0 31 31\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(15.5 15.5)\" style=\"\">\n	<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_58_13989\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_13989&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(15.5 15.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 724px; top: 388px; width: 31px; height: 31px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6742",
	htmlId:		"tobj6742",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page64.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[724,388,31,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_13989\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_13989&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_13991\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_13991&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_13993\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_13993&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_13995\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_13995&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_13997\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_13997&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(15.5 15.5)\" style=\"\">\n\t<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_13999\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"29\" height=\"29\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAStJREFUSEvt070uBFEYBuBnSYQEpYQChUpoXYCgUSkU/gpRSCRoXIDOBZCoVLgEBSqNCJ1bEJVeQsOe5KxCstk5Z3azzUwy1cx3nrzvN1PThavWBVOFdrT1qt5m9Y5gCVdl+k+pdwyXmMcBTnPhFHQCrxjGDw5z4RQ0BJvFLUbxhSOcpSZORcP5U7jHZMT2U+EcNFjTeMIQvmPiwjvORQM8gxuMp+64DNrY8TP6Y9WbuG614zJoHy6wjh48YBUfnUIHcYK9CL5gBe+twPA8J2mYOcduBAI4VwRrvJOKht0FcAu9sdKNoglz0IH60HH8PcIOQ8LlIjv830JK0gXcxZU8YhGfKbXmJA0za9jGTv1+ywFzP6Rc628upd7SWG69bYGrpG2psdkhXan3FweqJh4H6e1MAAAAAElFTkSuQmCC\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 7.75 0 L 23.25 0 A 7.75 7.75 0 0 1 31 7.75 L 31 23.25 A 7.75 7.75 0 0 1 23.25 31 L 7.75 31 A 7.75 7.75 0 0 1 0 23.25 L 0 7.75 A 7.75 7.75 0 0 1 7.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_13999&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-15.5, -15.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(15.5 15.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio436.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div></div>",
	cssText:	"position: absolute; left: 275px; top: 211px; width: 300px; height: 24px; z-index: 1;",
	cssClasses:	"",
	id:		"436",
	htmlId:		"tobj436",
	bInsAnc:	false,
	stdHtml:	'<div id="sndSpacers" ></div><audio id="swftobj436" name="swftobj436" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741751562164.mp3" /><track kind="subtitles" src=Matthew_text_1741751562164.vtt srclang="en" label="On" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741751562164.mp3',
	arEvents:	[{name:'Event 1', value:'12720',proc:false,actItem:function(){trivExitPage('page64.html',true,false);
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741751562164"
	},
	objData:	{"a":[0,16908320,0,[275,211,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":354,"y":271,"width":300,"height":24},"iDisplay":1,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741751562164.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
og3177.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og3177",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text59.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 444px; min-height: 198px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 436px; min-height: 190px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.445;margin-top:0px;margin-bottom:0px;\" align=\"center\"> <span style=\"color:#ffffff;font-size:48pt;top:-9px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">Dental Assistant Program </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 26px; top: 92px; width: 444px; height: 198px; z-index: 2;",
	cssClasses:	"",
	id:		"59",
	htmlId:		"tobj59",
	bInsAnc:	0,
	cwObj:		{
		"name":	"title"
	},
	objData:	{"a":[0,32,0,[26,92,444,198]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":118,"width":571,"height":255},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text60.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 444px; min-height: 89px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 436px; min-height: 81px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.446;margin-top:0px;margin-bottom:0px;\" align=\"center\"> <span style=\"color:#ffffff;font-size:24pt;top:-5px;font-family:\'@Yu Gothic UI\', sans-serif;\">Week 1 Slides </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.446;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-size:24pt;top:-5px;font-family:\'@Yu Gothic UI\', sans-serif;\">​ </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 26px; top: 306px; width: 444px; height: 89px; z-index: 3;",
	cssClasses:	"",
	id:		"60",
	htmlId:		"tobj60",
	bInsAnc:	0,
	cwObj:		{
		"name":	"week1"
	},
	objData:	{"a":[0,32,0,[26,306,444,89]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":393,"width":571,"height":115},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape63.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj63inner\"><svg viewBox=\"0 0 413 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(206.5 1)\" style=\"\">\n	<path d=\"M 0 0 L 412 1\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-206, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(206.5 7.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"12.831067640388353\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 42.5px; top: 293.5px; width: 413px; height: 2px; z-index: 4; transform: rotate(180deg) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg)  ScaleX(-1); -webkit-transform:rotate(180deg)  ScaleX(-1); -o-transform:rotate(180deg)  ScaleX(-1); -ms-transform:rotate(180deg)  ScaleX(-1); filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	id:		"63",
	htmlId:		"tobj63",
	bInsAnc:	0,
	cwObj:		{
		"name":	"line"
	},
	objData:	{"a":[0,32,0,[42.5,293.50000000000006,413,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":378,"width":530,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"line","titleValue":"line"}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/image55.png","images/arrow2_next.png"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 450px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#000000","",0,0,1];
