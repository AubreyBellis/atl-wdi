// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
  
    if (timerValue <= 10) {
     numericDisplay.style.color = 'red';
     var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
     numericDisplay.style.fontSize = newSize + 'em';
    }
  },

  drawProgressBars: function(timerValue){
    
    var progress = 100 - timerValue;
    var bars = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < bars.length; i++) {
    bars[i].style.width = progress + '%';
    }
  },
  drawLitFuses: function(timerValue){
   
  var percentUnburnt = timerValue/100;
  var numFuses = document.getElementsByClassName('fuse').length;
  for (var i = 0; i < numFuses; i++){
  document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt*98 + '%';
  document.getElementsByClassName('burnt')[i].style.width = (1 - percentUnburnt)*98 + '%';
    }
  },
  drawCrawlers: function(timerValue){
    
    var timePassed = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timePassed*10) + 'px';
  }
};
