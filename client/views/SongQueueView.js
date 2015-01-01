// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('enqueue', function(song) {
      debugger;
      this.render();
    }, this);

    this.collection.on('dequeue', function(song) {
      this.render();
    }, this);
  },

  render: function() {
    //this.$el.children().detach();

    return this.$el.html('<th>Up Next</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
