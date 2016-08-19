define([
    "coreJS/adapt",
    './backgroundVideoView'
], function(Adapt, BackgroundVideoView) {

    Adapt.on('blockView:postRender', function(view) {
        var model = view.model;
        var theme = model.get("_theme");
        if (theme && theme._backgroundVideo) {
            view.$el.addClass('backgroundVideo').prepend(new BackgroundVideoView({ model: model }).$el);
        }

    });
});
