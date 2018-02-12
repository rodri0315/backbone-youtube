var AppView = Backbone.View.extend({

  el: $('.main-page'),

  events: {
    'click .search': 'searchVideos'
    // Handle click on a video thumbnail
  },

  template: Handlebars.compile($('#video-template').html()),

  initialize: function() {

    this.$mainVideo = this.$('.main-video');
    this.$sideBar = this.$('#sidebar');
    this.$input = this.$('#search-query');
    // this.$videoList = this.$('.video-list');


    this.listenTo(this.model.get('videos'), 'add', this.renderVideos)
    this.listenTo(this.model, 'change:current_video', this.render)
    // this.listenTo(this.model, 'chnage:', this.renderVideos)
    // this.listenTo(this.model, 'chnage:L', this.renderVideos)
    // this.listenTo(this.videoCollection, 'add', this.addVideo)
    // this.listenTo(appModel.get('videos'), 'reset', this.render)
  },

  render: function() {
    this.video = this.model.get('videos')
    console.log('JORGE', this.video);
    this.$mainVideo.append(this.template(this.video))
    return this
  },
  
  renderVideos: function(video) {
    // this.model.get('videos').at(0).set('video_loaded', true)
    // this.model.get('videos')

    var videoView = new VideoView();
    // this.$sideBar.append(videoView.render().el);
    videoView.render(this.model.get('videos'))
  },
  renderSingleVideo: function () {
    
  }
  ,

  searchVideos: function() {
    console.log('clicked');
    var query = this.$('#search-query').val();
    this.model.search(query);
    this.renderVideos();
    // debugger
    // debugger
    // this.videoCollection.set(getVideos)
    // console.log(this.videoCollection);
  }
  
})