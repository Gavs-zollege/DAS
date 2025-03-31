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
image7109.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj7109Img\" src=\"images/image55.png\" alt=\"Google Shape;1774;p218\" title=\"Google Shape;1774;p218\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 161px; height: 160px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 288px; top: 114px; width: 161px; height: 160px; z-index: 0; border-radius: 0px;",
	cssClasses:	"",
	id:		"7109",
	htmlId:		"tobj7109",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1774;p218"
	},
	objData:	{"a":[0,288,0,[288,114,161,160]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":114,"width":339,"height":337}}
};
og6739.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6739",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6742.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj6742inner\"><svg viewBox=\"0 0 19 19\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(9.5 9.5)\" style=\"\">\n	<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_58_4659\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_4659&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(9.5 9.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 442px; top: 499px; width: 19px; height: 19px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[442,499,19,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_4659\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_4659&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_4661\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_4661&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_4663\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_4663&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_4665\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_4665&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_4667\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_4667&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(9.5 9.5)\" style=\"\">\n\t<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_4669\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"18\" height=\"18\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAI1JREFUOE/V0jEOAVEQBuBvz+UECjqFYgu9xAloOIBEtlUoFDqRuIF7yRM63kxkm536zZf/n7xGT9P05BgeNMIjU79WbYYLdlhHWHSjIxYZLIJKkDPmEZaBCnbHGFtsvtXMQie06LD8Fzq8l38iBY4S7bGqJfmkq0FTXDNIJtEEt+gPZaCM8XoT3WjA0BM4ixITT8pNhgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 4.75 0 L 14.25 0 A 4.75 4.75 0 0 1 19 4.75 L 19 14.25 A 4.75 4.75 0 0 1 14.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_4669&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-9.5, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(9.5 9.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio436.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div></div>",
	cssText:	"position: absolute; left: 168px; top: 271px; width: 300px; height: 24px; z-index: 1;",
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
	objData:	{"a":[0,16908320,0,[168,271,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":354,"y":271,"width":300,"height":24},"iDisplay":1,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741751562164.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
og3177.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og3177",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text59.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 272px; min-height: 121px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 264px; min-height: 113px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.445;margin-top:0px;margin-bottom:0px;\" align=\"center\"> <span style=\"color:#ffffff;font-size:48pt;top:-9px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">Dental Assistant Program </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 16px; top: 118px; width: 272px; height: 121px; z-index: 2;",
	cssClasses:	"",
	id:		"59",
	htmlId:		"tobj59",
	bInsAnc:	0,
	cwObj:		{
		"name":	"title"
	},
	objData:	{"a":[0,32,0,[16,118,272,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":118,"width":571,"height":255},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text60.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 272px; min-height: 55px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 264px; min-height: 47px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.446;margin-top:0px;margin-bottom:0px;\" align=\"center\"> <span style=\"color:#ffffff;font-size:24pt;top:-5px;font-family:\'@Yu Gothic UI\', sans-serif;\">Week 1 Slides </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.446;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-size:24pt;top:-5px;font-family:\'@Yu Gothic UI\', sans-serif;\">​ </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 16px; top: 393px; width: 272px; height: 55px; z-index: 3;",
	cssClasses:	"",
	id:		"60",
	htmlId:		"tobj60",
	bInsAnc:	0,
	cwObj:		{
		"name":	"week1"
	},
	objData:	{"a":[0,32,0,[16,393,272,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":393,"width":571,"height":115},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape63.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"tobj63inner\"><svg viewBox=\"0 0 253 1\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(126.5 0.5)\" style=\"\">\n	<path d=\"M 0 0 L 252 0\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-126, 0) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(126.5 7.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"8.031745830952381\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.53\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 25.5px; top: 377.5px; width: 253px; height: 1px; z-index: 4; transform: rotate(180deg) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg)  ScaleX(-1); -webkit-transform:rotate(180deg)  ScaleX(-1); -o-transform:rotate(180deg)  ScaleX(-1); -ms-transform:rotate(180deg)  ScaleX(-1); filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	id:		"63",
	htmlId:		"tobj63",
	bInsAnc:	0,
	cwObj:		{
		"name":	"line"
	},
	objData:	{"a":[0,32,0,[25.5,377.50000000000006,253,1]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":378,"width":530,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"line","titleValue":"line"}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/image55.png","images/arrow2_next.png"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#000000","",0,0,1];
