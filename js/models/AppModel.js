var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideosCollection(),

      // first video on collection
      current_video: null,

      // either true or false //playing video
      video_loaded: false
      // fetch_videos: null
    }
  },

  initialize: function () {
    this.on('change:current_video', this._setVideosURL);
  },

  search: function (query) {
    // debugger
    this.get('videos').fetch({
      data: {
        chart: 'mostPopular',
        maxResults: 10,
        part: 'snippet',
        q: query,
        key: 'AIzaSyA2RmVe46fYmDIWAszOEg3EfFCFmNrgDSY',
      },
      success: function (data) {
        console.log('Data', data);
        // data.forEach(video => {
        //   appModel.get('videos').set({
        //     videoId: video.id.videoId,
        //     title: video.snippet.title,
        //     thumbnail: video.snippet.thumbnails.medium.url ,
        //     description: video.snippet.description
        //   })
        // });
        return data
      }
    });
  },

  _setReviewsUrl: function () {
    var video = this.get('current_video');
    var id = video.get('_id'); // Look for id

    video.get('https://www.youtube.com/embed/' + id)
  }
});