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
og6731.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og6731",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
textbutton6732.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6732inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_292_13389\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13389&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 882px; top: 499px; width: 40px; height: 40px; z-index: 2; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6732",
	htmlId:		"tobj6732",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_back",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page287.html',false,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[882,499,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":882,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13389\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13389&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13391\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13391&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13393\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13393&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13395\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13395&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13397\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13397&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13399\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWVJREFUWEft1j9KJzEYh/GP7BXE2mKxUO8hKOsJvIOFopWLipWFYqGohQgiNhaeQLyNyP6z10JemIFh/DVJRmZgJ3Vm8uR5v2+SKQMdUwPlMoKlVmY0NhpLNZA6/7/L2Dxm8JRqqp7/FcbmcIxFrOMhB65rsGlcY6WCecYaHlPhugSbxQlWK4h33GALv/sCW8AhliuAN1xgLwcq/tGFse+VqSV8Q0CdVVD/Uk11Ff7I1BV+NEzdYhN/cqFKjYWpowZUZCqgtvFSAlUC1s5UQJ1jH79KoXLBovtOUWcqoC6xg79dQHUN9rM0V81N5XblpFKGtd0+S1lvbFL476rwx4lfNHKN1Yu2j4u6MzdKy1oKFoCTDtjo0Mjca662LsBi7UmZi8496PNKqqW0L/G4miJzUdbeLvFm5gb37Knhmg/FsHWfk7OuMtZee5BP6xxBn775KmPFcCNYqsLR2Ggs1UDq/MFm7AM6v0Qn2MhvOQAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13399&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_back","titleValue":"arrow2_back"}
};
textbutton6734.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj6734inner\"><svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_292_13401\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13401&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 930px; top: 499px; width: 40px; height: 40px; z-index: 3; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"6734",
	htmlId:		"tobj6734",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type: 6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('page294.html',true,false);
		if ( typeof pF == 'function' ) pF(); }}
	]
	},
	objData:	{"a":[4,33587552,0,[930,499,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":930,"y":499,"width":40,"height":40},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13401\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13401&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateNormal":{"outlineWidth":0},"svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(233, 242, 254); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13403\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13403&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateOver":{"outlineWidth":0},"svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(99, 153, 226); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13405\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13405&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDown":{"outlineWidth":0},"svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13407\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13407&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateDisabled":{"outlineWidth":0},"svgDataVisited":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13409\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13409&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateVisited":{"outlineWidth":0},"svgDataSelected":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(159, 197, 248); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_292_13411\" x=\"0.025000000000000022\" y=\"0.025000000000000022\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"38\" height=\"38\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAWtJREFUWEft1j1KHWEUxvHfBWOrJhHBzWhvkQVEJdgofiBaWKkhqaKxsnAJLsAQwX2ohVhYh2xBcA7MwOUWXt55B3yRmXbOzPnznOd8DBT6DArl0oOlVqZXrFcsVYHU+HfrsUX8w32qIuPicxRbwgVusYeHcclS3rcFW8Al5utkf/EN/1OSvxbbFuwzfmEVH+oEV9itAJ+6gGsLFrk/4bDy2CYma5hrHOAuFy4HLHJP4Rg7tXLPuKmVe8yBywWL3B/xGytDZf2DtRzPdQEWcLNDnpuolQq4fbRSriuwYImGaDzXNERrz3UJFnAz+IkNhHKN57ZSu7VrsPDbj9LAopTfsT7UBG9eyjmc4Gtdwijrm5s/yndWdd9ySeNiujL4UTWvtuvpX8SADaUCKjouezyMbom2XRl78nRk2hexxIs9e0L5L9WePC/tUGwsUeRpnXPVjP22rfnH/jg3oAdLVbBXrFcsVYHU+GI99gKwiz4nCMU7lgAAAABJRU5ErkJggg==\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 10 0 L 30 0 A 10 10 0 0 1 40 10 L 40 30 A 10 10 0 0 1 30 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_292_13411&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","stateSelected":{"outlineWidth":0},"btnState":"normal","bDiscoverable":true,"altValue":"arrow2_next","titleValue":"arrow2_next"}
};
tts_audio5475.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div></div>",
	cssText:	"position: absolute; left: 354px; top: 271px; width: 300px; height: 24px; z-index: 0;",
	cssClasses:	"",
	id:		"5475",
	htmlId:		"tobj5475",
	bInsAnc:	false,
	stdHtml:	'<div id="sndSpacers" ></div><audio id="swftobj5475" name="swftobj5475" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/Matthew_text_1741732099157.mp3" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/Matthew_text_1741732099157.mp3',
	arEvents:	[{name:'Event 2', value:'3474',proc:false,actItem:function(){trivExitPage('page294.html',true,false);
		if ( typeof pF == 'function' ) pF();}}],
	cwObj:		{
		"name":	"Matthew_text_1741732099157"
	},
	objData:	{"a":[0,16908320,0,[354,271,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":354,"y":271,"width":300,"height":24},"iDisplay":1,"sndFile":"","hasEvents":1,"supportsEvents":true,"linkName":"media/Matthew_text_1741732099157.mp3","initHidden":false,"hasCaptions":false,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":false,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"speedCtrl":true,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
og676.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og676",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text293.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 939px; min-height: 117px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 4px; top: 4px; width: 931px; min-height: 109px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;line-height:1.439;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(255, 255, 255); font-family: Arial, sans-serif; font-size:72pt;\">DENTAL ANATOMY </span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 34px; top: 279px; width: 939px; height: 117px; z-index: 1;",
	cssClasses:	"",
	id:		"293",
	htmlId:		"tobj293",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Google Shape;1601;p198"
	},
	objData:	{"a":[0,32,0,[34,279,939,117]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":34,"y":279,"width":939,"height":117},"dwTextFlags":0,"bgColor":"transparent","marginSize":4,"textPublishLang":"Inherit","bHideFromScrRdr":false,"bTriggerScreenRdrOnShow":false,"bTriggerScreenRdrOnShowDelay":0}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	transId:	35,
	transDur:	3,
	font:	{"bold":0,"italic":0,"underline":0,"size":"24","color":"#000000","bgColor":"#ffffff","name":"Arial,sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	55
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/arrow2_back.png","images/arrow2_next.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; -webkit-print-color-adjust: exact; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#000000","",0,0,1];
