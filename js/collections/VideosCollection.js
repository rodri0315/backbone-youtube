var VideosCollection = Backbone.Collection.extend({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&
  q=messi`,
  model: VideoModel,
  // initialize: function () {
  //   this.search();
  // },
  // parse: function (data) {
  //   console.log('parsing...', data.items);
  //   return data.items
  // },
  parse: function (data) {
    console.log('parsing...', data.items);
    appModel.set({current_video: data.items[0].id.videoId})
    // video.set({selected: true})
    // appModel.get('videos').add(data.items)
    console.log(appModel);
    return data.items
  },
  

})