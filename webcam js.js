(function()
{
    var canvas=document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    video= document.getElementById('video'),
    vendorurl=window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia(
        {
            video:true,
            audio:false
        
        }, function(stream){
            video.srcObject = stream; video.play();
 
        },function(error){

        });
    
}) ();