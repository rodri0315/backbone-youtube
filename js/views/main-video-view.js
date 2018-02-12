// Associated video, Video Model, current VideoModel

// TODO: Sidebar View, and have a videoView(Thumbnail)

var VideoView = Backbone.View.extend({
  el: $('#sidebar'),
  // className: 'row',
  events:{
    //listen for clicks on thumbnail. when clicked, set mainVideo to true. find previous mainVideo and set to false.
    'click .img': 'changeMainVideo'
  },
  initialize: function(){
    //if mainVideo attribute changes, show or hide thumbnail
    this.listenTo(this.model, 'change:selected', this.toggleHide)
    //if model is removed, remove view
    this.listenTo(this.model, 'remove', this.removeVideoView)
  },
  template: Handlebars.compile($('#sidebar-template').html()),

  removeVideoView: function(){
    this.remove();
  },
  render: function(videoCollection){
    this.$el.html(this.template({videos: videoCollection.toJSON()}))
    //if this video is set as main, hide its thumbnail
    // if(this.model.get('mainVideo')){
    //   this.$el.addClass('d-none')
    // }
    return this;
  },

  toggleHide: function(){
    this.$el.toggleClass('d-none');
  },

  changeMainVideo: function(){
    //first, change existing mainVideo to false, if a mainVideo exists
    this.current_video = appModel.get('videos').findWhere({selected:true})
      if (current_video){
      current_video.set('selected', false);
    }
    console.log('Current Video', this.current_video);
    // TODO: Not sure, need to load selected video
    var videoView = new VideoView();
    videoView.renderSingleVideo(this.current_video)
    //then change clicked video's mainVideo attribute to true
    this.model.set('selected', true);
  }

});