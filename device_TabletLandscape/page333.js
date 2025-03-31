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
og6683.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6683",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6684.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6684inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_333_1875\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1875&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 882px; top: 499px; width: 40px; height: 40px; z-index: 17; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6684",
	htmlId:		"tobj6684",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_back",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page328.html',false,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[882,499,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":882,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1875\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1875&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1877\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1877&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1879\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1879&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1881\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1881&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1883\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1883&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1885\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1885&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6686.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6686inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_333_1887\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1887&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 930px; top: 499px; width: 40px; height: 40px; z-index: 18; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6686",
	htmlId:		"tobj6686",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page352.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[930,499,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1887\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1887&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1889\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1889&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1891\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1891&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1893\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1893&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1895\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1895&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_333_1897\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_333_1897&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio6192.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"sndtobj6192\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 190px; top: 492px; width: 300px; height: 68px; z-index: 0;",
	cssClasses:	"",
	id:		"6192",
	htmlId:		"tobj6192",
	bInsAnc:	false,
	stdHtml:	'<audio id="swftobj6192" name="swftobj6192" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741742413228.mp3" /><track kind="subtitles" src=Matthew_text_1741742413228.vtt srclang="en" label="On" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741742413228.mp3',
	arEvents:	[{name:'Event 1', value:'91270',proc:false,actItem:function(){trivExitPage('page352.html',true,false);
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741742413228"
	},
	objData:	{"a":[0,16908320,0,[190,492,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":190,"y":492,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741742413228.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
image6188.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj6188Img\" src=\"images/desktop_crop6188.png\" alt=\"Image003_bmp.jpg\" title=\"Image003_bmp.jpg\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 504px; height: 568px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 505px; top: 0px; width: 504px; height: 568px; z-index: 1; border-radius: 0px;",
	cssClasses:	"",
	id:		"6188",
	htmlId:		"tobj6188",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Image"
	},
	objData:	{"a":[0,288,0,[505,0,504,568]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":505,"y":0,"width":504,"height":568}}
};
og736.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og736",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text334.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 225px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 217px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Facial </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 140px; width: 225px; height: 58px; z-index: 2;",
	cssClasses:	"",
	id:		"334",
	htmlId:		"tobj334",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1653;p204"
	},
	objData:	{"a":[0,32,0,[77,140,225,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":140,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text335.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 225px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 217px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Lingual </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 210px; width: 225px; height: 58px; z-index: 3;",
	cssClasses:	"",
	id:		"335",
	htmlId:		"tobj335",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1654;p204"
	},
	objData:	{"a":[0,32,0,[77,210,225,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":210,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text336.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 225px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 217px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Masticatory </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 284px; width: 225px; height: 58px; z-index: 4;",
	cssClasses:	"",
	id:		"336",
	htmlId:		"tobj336",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1655;p204"
	},
	objData:	{"a":[0,32,0,[77,284,225,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":284,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text337.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 225px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 217px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Mesial </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 358px; width: 225px; height: 58px; z-index: 5;",
	cssClasses:	"",
	id:		"337",
	htmlId:		"tobj337",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1656;p204"
	},
	objData:	{"a":[0,32,0,[77,358,225,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":358,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text338.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 363px; min-height: 99px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 355px; min-height: 91px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Closest to the face (labial for lips, buccal for cheeks). </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 257px; top: 125px; width: 363px; height: 99px; z-index: 6;",
	cssClasses:	"",
	id:		"338",
	htmlId:		"tobj338",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1657;p204"
	},
	objData:	{"a":[0,32,0,[257,125,363,99]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":125,"width":363,"height":99},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text339.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 531px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 523px; min-height: 61px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Closest to the tongue. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 257px; top: 205px; width: 531px; height: 69px; z-index: 7;",
	cssClasses:	"",
	id:		"339",
	htmlId:		"tobj339",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1658;p204"
	},
	objData:	{"a":[0,32,0,[257,205,531,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":205,"width":531,"height":69},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text340.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 393px; min-height: 99px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 385px; min-height: 91px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Biting surface (incisal for anterior teeth, occlusal for posterior teeth). </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 257px; top: 274px; width: 393px; height: 99px; z-index: 8;",
	cssClasses:	"",
	id:		"340",
	htmlId:		"tobj340",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1659;p204"
	},
	objData:	{"a":[0,32,0,[257,274,393,99]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":274,"width":393,"height":99},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text341.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 530px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 522px; min-height: 61px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Closest to the midline. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 257px; top: 358px; width: 530px; height: 69px; z-index: 9;",
	cssClasses:	"",
	id:		"341",
	htmlId:		"tobj341",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1660;p204"
	},
	objData:	{"a":[0,32,0,[257,358,530,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":358,"width":530,"height":69},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
shape343.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj343inner\"><svg viewBox=\"0 0 556 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(278 1)\" style=\"\">\n	<path d=\"M 0 0 L 555 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-277.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(278 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.02882842810811\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51.5px; top: 195.5px; width: 556px; height: 2px; z-index: 10; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"343",
	htmlId:		"tobj343",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1662;p204"
	},
	objData:	{"a":[0,32,0,[51.5,195.50000000000006,556,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":196,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1662;p204","titleValue":"Google Shape;1662;p204"}
};
shape344.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj344inner\"><svg viewBox=\"0 0 556 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(278 1)\" style=\"\">\n	<path d=\"M 0 0 L 555 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-277.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(278 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.02882842810811\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51.5px; top: 269.5px; width: 556px; height: 2px; z-index: 11; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"344",
	htmlId:		"tobj344",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1663;p204"
	},
	objData:	{"a":[0,32,0,[51.5,269.50000000000006,556,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":270,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1663;p204","titleValue":"Google Shape;1663;p204"}
};
shape345.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj345inner\"><svg viewBox=\"0 0 556 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(278 1)\" style=\"\">\n	<path d=\"M 0 0 L 555 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-277.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(278 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.02882842810811\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51.5px; top: 340.5px; width: 556px; height: 2px; z-index: 12; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"345",
	htmlId:		"tobj345",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1664;p204"
	},
	objData:	{"a":[0,32,0,[51.5,340.50000000000006,556,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":341,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1664;p204","titleValue":"Google Shape;1664;p204"}
};
shape346.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj346inner\"><svg viewBox=\"0 0 556 2\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(278 1)\" style=\"\">\n	<path d=\"M 0 0 L 555 1\" style=\"stroke: rgb(153, 153, 153); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(153, 153, 153); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-277.5, -0.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(278 7.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"16.02882842810811\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.05\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 51.5px; top: 413.5px; width: 556px; height: 2px; z-index: 13; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"346",
	htmlId:		"tobj346",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1665;p204"
	},
	objData:	{"a":[0,32,0,[51.5,413.50000000000006,556,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":414,"width":556,"height":2},"bTriggerScreenRdrOnShow":false,"bDiscoverable":false,"altValue":"Google Shape;1665;p204","titleValue":"Google Shape;1665;p204"}
};
text347.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 89px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 388px; min-height: 81px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.433;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:36pt;top:-7px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">6. Tooth Surfaces </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 35px; width: 396px; height: 89px; z-index: 14;",
	cssClasses:	"",
	id:		"347",
	htmlId:		"tobj347",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1666;p204"
	},
	objData:	{"a":[0,32,0,[77,35,396,89]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":35,"width":396,"height":89},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text349.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 225px; min-height: 58px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 217px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.467;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:22pt;top:-4px;font-family:\'@Yu Gothic UI\', sans-serif;\">Distal </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 434px; width: 225px; height: 58px; z-index: 15;",
	cssClasses:	"",
	id:		"349",
	htmlId:		"tobj349",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1668;p204"
	},
	objData:	{"a":[0,32,0,[77,434,225,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":434,"width":225,"height":58},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text350.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 531px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 523px; min-height: 61px;\"><ul style=\"padding:0 0 0 1px;list-style-position:outside;margin-left:17px;text-align:left;\"> \n <li style=\"padding-left:6px;line-height:1.192;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:16pt; font-family:\'Malgun Gothic\', sans-serif; color:#073763; font-weight:normal; font-style:normal; text-decoration:normal;\">Farthest from the midline. </span></li> \n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 257px; top: 427px; width: 531px; height: 69px; z-index: 16;",
	cssClasses:	"",
	id:		"350",
	htmlId:		"tobj350",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1669;p204"
	},
	objData:	{"a":[0,32,0,[257,427,531,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":257,"y":427,"width":531,"height":69},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/Image003_bmp.jpg","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];
