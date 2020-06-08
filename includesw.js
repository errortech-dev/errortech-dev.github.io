if ('serviceWorker' in navigator) {
   try{
        navigator.serviceWorker.register('sw.js');
       console.log('SW registered'); 
   }   catch(error){
   	console.log('SW registered');
   }
    };


var d = new Date();
var timestamp = d.getTime();
