navigator.mediaDevices.getUserMedia({ audio: true, video: true })
.then(function(stream) {
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  microphone = audioContext.createMediaStreamSource(stream);
  javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

  analyser.smoothingTimeConstant = 0.8;
  analyser.fftSize = 1024;

  microphone.connect(analyser);
  analyser.connect(javascriptNode);
  javascriptNode.connect(audioContext.destination);
  javascriptNode.onaudioprocess = function() {
      var array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      var values = 0;

      var length = array.length;
      for (var i = 0; i < length; i++) {
        values += (array[i]);
      }

      var average = values / length;

    console.log(Math.round(average));
    colorPids(average);
  }
  })
  .catch(function(err) {
    /* handle the error */
});

function colorPids(vol) {
  // debugger
    let all_pids = $('.pid');
    let amout_of_pids = Math.round(vol/10);
    let elem_range = all_pids.slice(0, amout_of_pids)
    
    // for (var i = 0; i < all_pids.length; i++) {
      
    //  // all_pids[i].style.backgroundColor="#e6e7e8";
    // }

    $(".pid").css("background","#e6e7e8");


    if(amout_of_pids <= 3){
      $(".pid-0").css("background","blue");
    }

    if(amout_of_pids > 3 && amout_of_pids <= 8){// Manter Verde 
    //  elem_range[i].style.backgroundColor="green";
      $(".pid-0").css("background","blue");
      $(".pid-1").css("background","green");
    }

    if(amout_of_pids > 8 && amout_of_pids <= 9){
      // Manter amarelinho
   //   elem_range[i].style.backgroundColor="";
      $(".pid-0").css("background","blue");
      $(".pid-1").css("background","green");
      $(".pid-2").css("background","green");
    }

    if(amout_of_pids > 9 && amout_of_pids <= 10){
      // Manter vermelho
     // elem_range[i].style.backgroundColor="red";
      $(".pid-0").css("background","blue");
      $(".pid-1").css("background","green");
      $(".pid-2").css("background","green");
      $(".pid-3").css("background","yellow");
    }

    if(amout_of_pids > 10){
      // Manter vermelho
     // elem_range[i].style.backgroundColor="red";
      $(".pid-0").css("background","blue");
      $(".pid-1").css("background","green");
      $(".pid-2").css("background","green");
      $(".pid-3").css("background","green");
      $(".pid-4").css("background","yellow");
      $(".pid-5").css("background","red");
    }

    // for (var i = 0; i < elem_range.length; i++) {
  
    //   // console.log(elem_range[i]);
      
    //   if(amout_of_pids <= 3){  // Volume baixo  Azulzinho
    //     // elem_range[i].style.backgroundColor="blue";
    //     //$('.pid').style.backgroundColor="blue"
    //     // $('.colun').style.backgroundColor="blue";
    //     // element_range[".colun"].style.backgroundColor="blue"

        
    //     elem_range[i].style.backgroundColor="blue";
    //   }

    //   if(amout_of_pids > 3 && amout_of_pids <= 8){// Manter Verde 
    //     elem_range[i].style.backgroundColor="green";
    //   }

    //   if(amout_of_pids > 8 && amout_of_pids <= 9){
    //     // Manter amarelinho
    //     elem_range[i].style.backgroundColor="yellow";
    //   }

    //   if(amout_of_pids > 9){
    //     // Manter vermelho
    //     elem_range[i].style.backgroundColor="red";
    //   }
    //   // elem_range[i].style.backgroundColor="#69ce2b";


    // }
  }