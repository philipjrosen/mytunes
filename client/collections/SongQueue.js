// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      if (this.length ===1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song){
      this.shift();
      if(this.length) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      this.remove(song);
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});
