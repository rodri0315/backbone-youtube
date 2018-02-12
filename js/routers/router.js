var VideoRouter = Backbone.Router.extend({
  routes: {
    // An application will usually have at least one route mapping a 
    // URL route to a function that determines what happens when a user 
    // reaches that route.
    'videos/:id': 'showVideo', //play video
    '*default': 'showVideos' // Load videos
  },

  showVideo: function (id) {
    var allVideos = appModel.get('id');

    var currentVideo = allVideos.findWhere({ id: id });

    appModel.set('current_video', currentVideo);
    // appModel.set('show_reviews', true);
  },

  showVideos: function () {
    var allVideos = appModel.get('id');
    appModel.set('fetch_videos', allVideos);
  }
});