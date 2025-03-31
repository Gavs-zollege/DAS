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
textbutton7088.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"tobj7088inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_7019_24463\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_24463&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 930px; top: 499px; width: 40px; height: 40px; z-index: 2; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[930,499,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_24463\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_24463&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_24465\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_24465&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_24467\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_24467&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_24469\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_24469&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_24471\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_24471&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_7019_24473\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_7019_24473&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
text7082.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 900px; min-height: 134px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 890px; min-height: 124px;\"><p style=\"text-align: center;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size:26pt;\">Thank you for taking the time to complete our survey!&nbsp;</span></p>\n\n<p style=\"text-align: center;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size:26pt;\">​</span></p>\n\n<p style=\"text-align: center;\"><span style=\"font-family: Arial, sans-serif; color: rgb(0, 0, 0); font-size:26pt;\">Your participation makes a difference!</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 33px; top: 422px; width: 900px; height: 134px; z-index: 0;",
	cssClasses:	"",
	id:		"7082",
	htmlId:		"tobj7082",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[33,422,900,134]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":33,"y":422,"width":900,"height":134},"dwTextFlags":0,"bgColor":"transparent","marginSize":5,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image7284.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj7284Img\" src=\"images/pasteImage7283.png\" alt=\"pasteImage7283\" title=\"pasteImage7283\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 850px; height: 567px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 850px; height: 567px; z-index: 1; border-radius: 0px;",
	cssClasses:	"",
	id:		"7284",
	htmlId:		"tobj7284",
	bInsAnc:	0,
	cwObj:		{
		"name":	"pasteImage7283"
	},
	objData:	{"a":[0,288,0,[0,0,850,567]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":850,"height":567}}
};
rcdObj.rcdData.att_Desktop = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	52
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/arrow2_next.png","images/pasteImage7283.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 567px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#ffffff","",0,0,1];
