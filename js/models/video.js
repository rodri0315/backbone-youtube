var VideoModel = Backbone.Model.extend({
  defaults: {
    videoId: '',
    title: '',
    thumbnail: '',
    description: '',
    selected: false
  },
  parse: function (data) {
    return {
      videoId: data.id.videoId,
      title: data.snippet.title,
      thumbnail: data.snippet.thumbnails.medium.url,
      description: data.snippet.description}
  },

});