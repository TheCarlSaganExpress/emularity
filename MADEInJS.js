
  
  var halo = {emuDriver: "a2600", emuJS: "mamea2600.js", gameFile: "atari_2600_halo_2600.bin", configFile: "a2600.cfg"  };
	var curEmulator; 
    //These should be make into JSON files instead
    var temp = { "games":[{"emuDriver": "a2600", "emuJS": "mamea2600.js", "gameFile": "atari_2600_halo_2600.bin", "configFile": "a2600.cfg" },
                          {"emuDriver": "a2600", "emuJS": "mamea2600.js", "gameFile": "Space Invaders (1980) (Atari, Richard Maurer - Sears) (CX2632 - 49-75153).bin", "configFile": "a2600.cfg" },
                          {"emuDriver": "a2600", "emuJS": "mamea2600.js", "gameFile": "River Raid (1982) (Activision, Carol Shaw) (AX-020, AX-020-04).bin", "configFile": "a2600.cfg" },]};
	function myFunction(gameNum){

	if(curEmulator == null){
        curEmulator = new Emulator(document.querySelector("#canvas"),
                            null,
                            new MAMELoader(MAMELoader.driver(temp.games[gameNum].emuDriver), //jsonContent.games[0].emuDriver
                                            MAMELoader.nativeResolution(256, 256),
                                            MAMELoader.emulatorJS("emulators/jsmess/" + temp.games[gameNum].emuJS),
                                            MAMELoader.mountFile(temp.games[gameNum].gameFile,
                                                                MAMELoader.fetchFile("Game File",
                                                                                        "examples/"+ temp.games[gameNum].gameFile)),
                                                                                        MAMELoader.mountFile(temp.games[gameNum].configFile,
                                                                MAMELoader.fetchFile("Config File",
                                                                                        "examples/" + temp.games[gameNum].configFile)),
                                            MAMELoader.peripheral("cart", temp.games[gameNum].gameFile)))
        curEmulator.setScale(2);
        curEmulator.start({ waitAfterDownloading: true });
    }
  }