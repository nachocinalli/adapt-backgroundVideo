define([
    'coreJS/adapt',
    'coreViews/componentView'
], function(Adapt, ComponentView) {

    var BackgroundVideoView = Backbone.View.extend({
        el: function() {
            return Handlebars.templates['backgroundVideo'](this.model.toJSON());
        },
    });
    return BackgroundVideoView;
});
