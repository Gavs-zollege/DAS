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
shape4575.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj4575inner\"><svg viewBox=\"0 0 501 210\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(250.5 105)\" style=\"\">\n	<path d=\"M 0 0 L 501 0 L 501 210 L 0 210 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(238, 238, 238); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-250.5, -105) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(250.5 105)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.84217e-14px; top: 146px; width: 501px; height: 210px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4575",
	htmlId:		"tobj4575",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[-2.842170943040401e-14,146.00000000000006,501,210]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":146,"width":501,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
og6515.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6515",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6516.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6516inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_237_13221\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13221&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 903px; top: 98px; width: 40px; height: 40px; z-index: 18; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[903,98,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":903,"y":98,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13221\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13221&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13223\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13223&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13225\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13225&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13227\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13227&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13229\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13229&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13231\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13231&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6518.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6518inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_237_13233\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13233&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 951px; top: 98px; width: 40px; height: 40px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[951,98,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":951,"y":98,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13233\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13233&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13235\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13235&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13237\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13237&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13239\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13239&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13241\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13241&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_237_13243\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_237_13243&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
shape4508.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj4508inner\"><svg viewBox=\"0 0 508 210\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(254 105)\" style=\"\">\n	<path d=\"M 0 0 L 508 0 L 508 210 L 0 210 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(238, 238, 238); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-254, -105) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(254 105)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 501px; top: 356px; width: 508px; height: 210px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4508",
	htmlId:		"tobj4508",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[501,356.00000000000006,508,210]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":501,"y":356,"width":508,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
shape4313.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj4313inner\"><svg viewBox=\"0 0 508 210\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(254 105)\" style=\"\">\n	<path d=\"M 0 0 L 508 0 L 508 210 L 0 210 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-254, -105) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(254 105)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 501px; top: 146px; width: 508px; height: 210px; z-index: 2; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4313",
	htmlId:		"tobj4313",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[501,146.00000000000006,508,210]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":501,"y":146,"width":508,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
shape4220.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj4220inner\"><svg viewBox=\"0 0 500 210\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(250 105)\" style=\"\">\n	<path d=\"M 0 0 L 500 0 L 500 210 L 0 210 L 0 0 Z\" style=\"stroke: rgb(1, 0, 0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(0, 0, 0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-250, -105) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(250 105)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: -2.84217e-14px; top: 357px; width: 500px; height: 210px; z-index: 3; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"4220",
	htmlId:		"tobj4220",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[-2.842170943040401e-14,357.00000000000006,500,210]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":357,"width":500,"height":210},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Rectangle","titleValue":"Rectangle"}
};
text238.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 879px; min-height: 107px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 871px; min-height: 99px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#073763;font-size:32pt;top:-6px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">4. Organs and Systems Relevant to Dentistry </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#073763;font-size:32pt;top:-6px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">​ </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#073763;font-size:32pt;top:-6px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">​ </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 52px; top: 31px; width: 879px; height: 107px; z-index: 4;",
	cssClasses:	"",
	id:		"238",
	htmlId:		"tobj238",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1534;p191"
	},
	objData:	{"a":[0,32,0,[52,31,879,107]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":31,"width":879,"height":107},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text239.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 357px; min-height: 145px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 339px; min-height: 127px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Facilitates jaw movements (chewing, speaking). </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 566px; top: 211px; width: 357px; height: 145px; z-index: 5;",
	cssClasses:	"",
	id:		"239",
	htmlId:		"tobj239",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1535;p191"
	},
	objData:	{"a":[0,32,0,[566,211,357,145]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":211,"width":357,"height":145},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text240.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 234px; min-height: 100px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 234px; min-height: 100px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Muscular System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 566px; top: 174px; width: 234px; height: 100px; z-index: 6;",
	cssClasses:	"",
	id:		"240",
	htmlId:		"tobj240",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1536;p191"
	},
	objData:	{"a":[0,32,0,[566,174,234,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":174,"width":234,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text241.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 350px; min-height: 56px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 332px; min-height: 38px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Defends against oral infections. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 550px; top: 431px; width: 350px; height: 56px; z-index: 7;",
	cssClasses:	"",
	id:		"241",
	htmlId:		"tobj241",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1537;p191"
	},
	objData:	{"a":[0,32,0,[550,431,350,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":550,"y":431,"width":350,"height":56},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text242.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 378px; min-height: 100px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 100px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Lymphatic/Immune System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 538px; top: 381px; width: 378px; height: 100px; z-index: 8;",
	cssClasses:	"",
	id:		"242",
	htmlId:		"tobj242",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1538;p191"
	},
	objData:	{"a":[0,32,0,[538,381,378,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":538,"y":381,"width":378,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text243.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 361px; min-height: 105px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 343px; min-height: 87px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Provides structure and protection. </span></li> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#000000; font-weight:normal; font-style:normal; text-decoration:normal;\">Supports dental procedures like implants. </span></li> \n</ul> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.661;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-weight:normal;text-decoration:normal;font-size:14pt;font-style:normal;top:-5px;font-family:\'@Malgun Gothic\', sans-serif;\">​</span><span style=\"color:#000000;top:-5px;font-weight:normal;text-decoration:normal;font-size:14pt;font-family:\'@Malgun Gothic\', sans-serif;font-style:normal;\"> </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 52px; top: 218px; width: 361px; height: 105px; z-index: 9;",
	cssClasses:	"",
	id:		"243",
	htmlId:		"tobj243",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1539;p191"
	},
	objData:	{"a":[0,32,0,[52,218,361,105]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":218,"width":361,"height":105},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text244.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 214px; min-height: 87px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 214px; min-height: 87px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Skeletal System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 52px; top: 174px; width: 214px; height: 87px; z-index: 10;",
	cssClasses:	"",
	id:		"244",
	htmlId:		"tobj244",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1540;p191"
	},
	objData:	{"a":[0,32,0,[52,174,214,87]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":174,"width":214,"height":87},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text245.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 359px; min-height: 144px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 9px; top: 9px; width: 341px; min-height: 126px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:16px;text-align:left;\"> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#ffffff; font-weight:normal; font-style:normal; text-decoration:normal;\">Supplies oxygen and nutrients; essential for healing. </span></li> \n <li style=\"padding-left:7px;line-height:1.107;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'@Malgun Gothic\', sans-serif; color:#ffffff; font-weight:normal; font-style:normal; text-decoration:normal;\">Special considerations for patients with heart conditions. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 47px; top: 423px; width: 359px; height: 144px; z-index: 11;",
	cssClasses:	"",
	id:		"245",
	htmlId:		"tobj245",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1541;p191"
	},
	objData:	{"a":[0,32,0,[47,423,359,144]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":47,"y":423,"width":359,"height":144},"dwTextFlags":0,"bgColor":"transparent","marginSize":9,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text246.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 299px; min-height: 100px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 299px; min-height: 100px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#ffffff;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Cardiovascular System: </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 52px; top: 381px; width: 299px; height: 100px; z-index: 12;",
	cssClasses:	"",
	id:		"246",
	htmlId:		"tobj246",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1542;p191"
	},
	objData:	{"a":[0,32,0,[52,381,299,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":381,"width":299,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image248.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj248Img\" src=\"images/image20.png\" alt=\"Google Shape;1544;p191\" title=\"Google Shape;1544;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 91px; height: 188px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 406px; top: 157px; width: 91px; height: 188px; z-index: 13; border-radius: 0px;",
	cssClasses:	"",
	id:		"248",
	htmlId:		"tobj248",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1544;p191"
	},
	objData:	{"a":[0,288,0,[406,157,91,188]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":157,"width":91,"height":188}}
};
image250.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj250Img\" src=\"images/image21.png\" alt=\"Google Shape;1545;p191\" title=\"Google Shape;1545;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 91px; height: 188px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 900px; top: 157px; width: 91px; height: 188px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"250",
	htmlId:		"tobj250",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1545;p191"
	},
	objData:	{"a":[0,288,0,[900,157,91,188]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":157,"width":91,"height":188}}
};
image252.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj252Img\" src=\"images/image22.png\" alt=\"Google Shape;1546;p191\" title=\"Google Shape;1546;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 91px; height: 188px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 900px; top: 370px; width: 91px; height: 188px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"252",
	htmlId:		"tobj252",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1546;p191"
	},
	objData:	{"a":[0,288,0,[900,370,91,188]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":370,"width":91,"height":188}}
};
image254.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj254Img\" src=\"images/image23.png\" alt=\"Google Shape;1547;p191\" title=\"Google Shape;1547;p191\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 91px; height: 188px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 406px; top: 367px; width: 91px; height: 188px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"254",
	htmlId:		"tobj254",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1547;p191"
	},
	objData:	{"a":[0,288,0,[406,367,91,188]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":406,"y":367,"width":91,"height":188}}
};
tts_audio4759.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"sndtobj4759\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 566px; top: 495px; width: 300px; height: 68px; z-index: 17;",
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
	objData:	{"a":[0,16908320,0,[566,495,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":566,"y":495,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741730147769.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
og606.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og606",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/image20.png","images/image21.png","images/image22.png","images/image23.png","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];
