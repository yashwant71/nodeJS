const os= require('os');
 console.log("Architecture: " +os.arch())
 console.log("FREE RAM: "+os.freemem()/(1024*1024*1024))
 console.log("total ram: "+os.totalmem()/(1024*1024*1024))
 console.log("host name: "+os.hostname())
 console.log("platform: "+os.platform())
 console.log("user info: "+os.userInfo())
