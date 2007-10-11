function wExecute( wCommand )
{

	/* ::: Fix the directory service and local file interface to the winampcc executable ::: */
	var directoryService=Components.classes['@mozilla.org/file/directory_service;1'].getService(Components.interfaces.nsIProperties);
	var wFile = directoryService.get('ProfD', Components.interfaces.nsILocalFile);
                                       	
	/* ::: Define the path do the exe ::: */
	wFile.append("extensions");
	wFile.append("{BD383794-1BB4-4a67-BC47-EE35403776FB}");
	if (wCommand=='Ghost')
	wFile.append("Ghostfox_be.exe");
	else
	wFile.append("Ghostfox_kill.exe");


	/* ::: Inititate the process ::: */
	var wProcess = Components.classes["@mozilla.org/process/util;1"].getService(Components.interfaces.nsIProcess);
	wProcess.init(wFile);
	
	/* ::: Just do it.. :) ::: */
	wCommand = "a";
	
	
		wProcess.run(false,[wCommand],1);
	
}
