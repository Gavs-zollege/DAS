if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try {
		if ( window.initGEV ) {
			initGEV(0, swipeLeft, swipeRight);
		}
	}
	catch ( e ) { if ( window.console ) window.console.log(e); }

}
image7109.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj7109Img\" src=\"images/image55.png\" alt=\"Google Shape;1774;p218\" title=\"Google Shape;1774;p218\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 339px; height: 337px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 114px; width: 339px; height: 337px; z-index: 0; border-radius: 0px;",
	cssClasses:	"",
	id:		"7109",
	htmlId:		"tobj7109",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1774;p218"
	},
	objData:	{"a":[0,288,0,[605,114,339,337]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":114,"width":339,"height":337}}
};
og6739.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6739",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6742.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6742inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_58_12825\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_12825&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 930px; top: 499px; width: 40px; height: 40px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[930,499,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_12825\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_12825&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_12827\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_12827&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_12829\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_12829&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_12831\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_12831&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_12833\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_12833&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_58_12835\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_58_12835&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio436.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div></div>",
	cssText:	"position: absolute; left: 354px; top: 271px; width: 300px; height: 24px; z-index: 1;",
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
	objData:	{"a":[0,16908320,0,[354,271,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":354,"y":271,"width":300,"height":24},"iDisplay":1,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741751562164.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","skinHeight":24}
};
og3177.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og3177",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text59.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 571px; min-height: 255px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 563px; min-height: 247px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.445;margin-top:0px;margin-bottom:0px;\" align=\"center\"> <span style=\"color:#ffffff;font-size:48pt;top:-9px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">Dental Assistant Program </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 34px; top: 118px; width: 571px; height: 255px; z-index: 2;",
	cssClasses:	"",
	id:		"59",
	htmlId:		"tobj59",
	bInsAnc:	0,
	cwObj:		{
		"name":	"title"
	},
	objData:	{"a":[0,32,0,[34,118,571,255]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":118,"width":571,"height":255},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text60.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 571px; min-height: 115px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 563px; min-height: 107px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.446;margin-top:0px;margin-bottom:0px;\" align=\"center\"> <span style=\"color:#ffffff;font-size:24pt;top:-5px;font-family:\'@Yu Gothic UI\', sans-serif;\">Week 1 Slides </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.446;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-size:24pt;top:-5px;font-family:\'@Yu Gothic UI\', sans-serif;\">​ </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 34px; top: 393px; width: 571px; height: 115px; z-index: 3;",
	cssClasses:	"",
	id:		"60",
	htmlId:		"tobj60",
	bInsAnc:	0,
	cwObj:		{
		"name":	"week1"
	},
	objData:	{"a":[0,32,0,[34,393,571,115]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":393,"width":571,"height":115},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape63.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj63inner\"><svg viewBox=\"0 0 530 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(265 1)\" style=\"\">\n	<path d=\"M 0 0 L 529 1\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-264.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(265 7.5) matrix(-1 0 0 1 0 0) \">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.03024534593573\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 54.5px; top: 377.5px; width: 530px; height: 2px; z-index: 4; transform: rotate(180deg) scaleX(-1); overflow: visible; pointer-events: none;; behavior:url(-ms-transform.htc); -moz-transform:rotate(180deg)  ScaleX(-1); -webkit-transform:rotate(180deg)  ScaleX(-1); -o-transform:rotate(180deg)  ScaleX(-1); -ms-transform:rotate(180deg)  ScaleX(-1); filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ; -ms-filter: fliph progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=-1, M12=-1.2246467991473532e-16, M21=1.2246467991473532e-16, M22=-1) ",
	cssClasses:	"",
	id:		"63",
	htmlId:		"tobj63",
	bInsAnc:	0,
	cwObj:		{
		"name":	"line"
	},
	objData:	{"a":[0,32,0,[54.5,377.50000000000006,530,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":180,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":378,"width":530,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"line","titleValue":"line"}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/image55.png","images/arrow2_next.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#000000","",0,0,1];
