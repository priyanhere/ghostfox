function wExecute( wCommand )
{

	/* ::: Fix the directory service and local file interface to the winampcc executable ::: */
	var directoryService=Components.classes['@mozilla.org/file/directory_service;1'].getService(Components.interfaces.nsIProperties);
	var wFile = directoryService.get('ProfD', Components.interfaces.nsILocalFile);
                                       	
	var prefservice = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService);
	var prefs = prefservice.getBranch("browser.");
	var prefsDom = prefservice.getBranch("dom.");
	
	//ReadAllSettings
	var anchorColor = 	prefs.getCharPref("anchor_color");
	var displayForeColor = 	prefs.getCharPref("display.foreground_color");
	var visitedColor = 	prefs.getCharPref("visited_color");
	var docColor = 	prefs.getBoolPref("display.use_document_colors");
	var disableImageSrc = 	prefsDom.getBoolPref("disable_image_src_set");	

	
	/* ::: Define the path do the exe ::: */
	wFile.append("extensions");
	wFile.append("{BD383794-1BB4-4a67-BC47-EE35403776FB}");
	if (wCommand=='Ghost')
	{
		prefs.setCharPref("anchor_color", "#999999");
		prefs.setCharPref("display.foreground_color", "#999999");
		prefs.setCharPref("visited_color", "#C0C0C0");	
		prefs.setBoolPref("display.use_document_colors", false);
		prefsDom.setBoolPref("disable_image_src_set", true);
		prefservice.setIntPref("network.image.imageBehavior", 2);
		prefservice.setIntPref("permissions.default.image", 2);
		prefservice.setCharPref("image.animation_mode", "none");
		
		
	wFile.append("Ghostfox_be.exe");
	}
	else
	{
	wFile.append("Ghostfox_kill.exe");
		prefs.setCharPref("anchor_color", "#0000EE");
		prefs.setCharPref("display.foreground_color", "#000000");
		prefs.setCharPref("visited_color", "#551A8B");
		prefs.setBoolPref("display.use_document_colors", true);
		prefsDom.setBoolPref("disable_image_src_set", false);
		prefservice.setIntPref("network.image.imageBehavior", 0);
		prefservice.setIntPref("permissions.default.image", 1);
		prefservice.setCharPref("image.animation_mode", "normal");
	}


	/* ::: Inititate the process ::: */
	var wProcess = Components.classes["@mozilla.org/process/util;1"].getService(Components.interfaces.nsIProcess);
	wProcess.init(wFile);
	
	/* ::: Just do it.. :) ::: */
	wCommand = "a";
	
	
		wProcess.run(false,[wCommand],1);
	
}
