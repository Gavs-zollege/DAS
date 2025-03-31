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
og6443.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6443",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6444.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6444inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_156_13029\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13029&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 883px; top: 507px; width: 40px; height: 40px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[883,507,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":507,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13029\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13029&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13031\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13031&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13033\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13033&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13035\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13035&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13037\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13037&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13039\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13039&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6446.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6446inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_156_13041\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13041&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 931px; top: 507px; width: 40px; height: 40px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33587552,0,[931,507,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":931,"y":507,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13041\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13041&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13043\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13043&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13045\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13045&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13047\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13047&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13049\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13049&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_156_13051\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_156_13051&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio2273.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"sndtobj2273\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 68px;\"></div>",
	cssText:	"position: absolute; left: 51px; top: 473px; width: 300px; height: 68px; z-index: 0;",
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
	objData:	{"a":[0,16908320,0,[51,473,300,68,-44]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":51,"y":473,"width":300,"height":68},"iDisplay":2,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741638397323.mp3","initHidden":false,"hasCaptions":true,"cssSkin":"trivantis-nemesis-skin.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":28}
};
og526.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og526",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text157.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Autonomy </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 87px; top: 287px; width: 153px; height: 50px; z-index: 1;",
	cssClasses:	"",
	id:		"157",
	htmlId:		"tobj157",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1444;p183"
	},
	objData:	{"a":[0,32,0,[87,287,153,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text158.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 59px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 59px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Respecting the patient decisions </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 87px; top: 315px; width: 153px; height: 59px; z-index: 2;",
	cssClasses:	"",
	id:		"158",
	htmlId:		"tobj158",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1445;p183"
	},
	objData:	{"a":[0,32,0,[87,315,153,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":87,"y":315,"width":153,"height":59},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image6755.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj6755Img\" src=\"images/image5.png\" alt=\"Google Shape;1461;p183\" title=\"Google Shape;1461;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 144px; height: 211px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 777px; top: 57px; width: 144px; height: 211px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"6755",
	htmlId:		"tobj6755",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1461;p183"
	},
	objData:	{"a":[0,288,0,[777,57,144,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":777,"y":57,"width":144,"height":211}}
};
text164.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 328px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 328px; min-height: 79px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Example: </span></p> \n<p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Respecting a patient’s refusal for X-rays but informing them of the risks. </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 446px; width: 328px; height: 79px; z-index: 4;",
	cssClasses:	"",
	id:		"164",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1451;p183"
	},
	objData:	{"a":[0,32,0,[605,446,328,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":446,"width":328,"height":79},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text165.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 516px; min-height: 67px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 516px; min-height: 67px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.430;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#085394;font-size:25pt;top:-5px;font-family:\'@Yu Gothic UI Semibold\', sans-serif;\">7. Ethical Foundations in Dentistry </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 431px; top: 387px; width: 516px; height: 67px; z-index: 5;",
	cssClasses:	"",
	id:		"165",
	htmlId:		"tobj165",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1452;p183"
	},
	objData:	{"a":[0,32,0,[431,387,516,67]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":431,"y":387,"width":516,"height":67},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text166.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Beneficence </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 259px; top: 287px; width: 153px; height: 50px; z-index: 6;",
	cssClasses:	"",
	id:		"166",
	htmlId:		"tobj166",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1453;p183"
	},
	objData:	{"a":[0,32,0,[259,287,153,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text167.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 88px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Acting in the patient\'s best interest </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 259px; top: 315px; width: 153px; height: 88px; z-index: 7;",
	cssClasses:	"",
	id:		"167",
	htmlId:		"tobj167",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1454;p183"
	},
	objData:	{"a":[0,32,0,[259,315,153,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":315,"width":153,"height":88},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text168.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 100px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 100px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.384;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:14pt;top:-2px;font-family:\'@Yu Gothic UI\', sans-serif;\">Non-Maleficence </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 430px; top: 287px; width: 153px; height: 100px; z-index: 8;",
	cssClasses:	"",
	id:		"168",
	htmlId:		"tobj168",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1455;p183"
	},
	objData:	{"a":[0,32,0,[430,287,153,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":287,"width":153,"height":100},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text169.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 31px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 31px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Avoiding harm </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 430px; top: 316px; width: 153px; height: 31px; z-index: 9;",
	cssClasses:	"",
	id:		"169",
	htmlId:		"tobj169",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1456;p183"
	},
	objData:	{"a":[0,32,0,[430,316,153,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":316,"width":153,"height":31},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text170.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Justice </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 287px; width: 153px; height: 50px; z-index: 10;",
	cssClasses:	"",
	id:		"170",
	htmlId:		"tobj170",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1457;p183"
	},
	objData:	{"a":[0,32,0,[605,287,153,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text171.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 59px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 59px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Fair and unbiased treatment </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 315px; width: 153px; height: 59px; z-index: 11;",
	cssClasses:	"",
	id:		"171",
	htmlId:		"tobj171",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1458;p183"
	},
	objData:	{"a":[0,32,0,[605,315,153,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":315,"width":153,"height":59},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text172.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 50px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.490;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:16pt;top:-3px;font-family:\'@Yu Gothic UI\', sans-serif;\">Confidentiality </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 780px; top: 287px; width: 153px; height: 50px; z-index: 12;",
	cssClasses:	"",
	id:		"172",
	htmlId:		"tobj172",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1459;p183"
	},
	objData:	{"a":[0,32,0,[780,287,153,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":780,"y":287,"width":153,"height":50},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
text173.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 153px; min-height: 88px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 153px; min-height: 88px;\"><p style=\"margin-left:0px;text-indent:0px;line-height:1.409;margin-top:0px;margin-bottom:0px;\" align=\"left\"> <span style=\"color:#000000;font-size:12pt;top:-2px;font-family:\'Malgun Gothic\', sans-serif;\">Protecting the patients information </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 780px; top: 315px; width: 153px; height: 88px; z-index: 13;",
	cssClasses:	"",
	id:		"173",
	htmlId:		"tobj173",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1460;p183"
	},
	objData:	{"a":[0,32,0,[780,315,153,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":780,"y":315,"width":153,"height":88},"dwTextFlags":0,"bgColor":"transparent","marginSize":0,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
image174.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj174Img\" src=\"images/image5.png\" alt=\"Google Shape;1461;p183\" title=\"Google Shape;1461;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 144px; height: 211px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 777px; top: 57px; width: 144px; height: 211px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"174",
	htmlId:		"tobj174",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1461;p183"
	},
	objData:	{"a":[0,288,0,[777,57,144,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":777,"y":57,"width":144,"height":211}}
};
image176.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj176Img\" src=\"images/image6.png\" alt=\"Google Shape;1462;p183\" title=\"Google Shape;1462;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 144px; height: 211px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 85px; top: 57px; width: 144px; height: 211px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"176",
	htmlId:		"tobj176",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1462;p183"
	},
	objData:	{"a":[0,288,0,[85,57,144,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":85,"y":57,"width":144,"height":211}}
};
image178.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj178Img\" src=\"images/image7.png\" alt=\"Google Shape;1463;p183\" title=\"Google Shape;1463;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 144px; height: 211px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 258px; top: 57px; width: 144px; height: 211px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"178",
	htmlId:		"tobj178",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1463;p183"
	},
	objData:	{"a":[0,288,0,[258,57,144,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":258,"y":57,"width":144,"height":211}}
};
image180.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj180Img\" src=\"images/image8.png\" alt=\"Google Shape;1464;p183\" title=\"Google Shape;1464;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 144px; height: 211px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 431px; top: 57px; width: 144px; height: 211px; z-index: 17; border-radius: 0px;",
	cssClasses:	"",
	id:		"180",
	htmlId:		"tobj180",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1464;p183"
	},
	objData:	{"a":[0,288,0,[431,57,144,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":431,"y":57,"width":144,"height":211}}
};
image182.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj182Img\" src=\"images/image9.png\" alt=\"Google Shape;1465;p183\" title=\"Google Shape;1465;p183\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 144px; height: 211px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 605px; top: 57px; width: 144px; height: 211px; z-index: 18; border-radius: 0px;",
	cssClasses:	"",
	id:		"182",
	htmlId:		"tobj182",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1465;p183"
	},
	objData:	{"a":[0,288,0,[605,57,144,211]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":57,"width":144,"height":211}}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/image5.png","images/image6.png","images/image7.png","images/image8.png","images/image9.png","images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#EFEFEF","",0,0,1];
