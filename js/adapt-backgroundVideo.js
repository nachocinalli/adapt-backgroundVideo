import Adapt from 'core/js/adapt';
import BackgroundVideoView from './backgroundVideoView';
class BackgroundVideo extends Backbone.Controller {
  initialize() {
    this.listenTo(Adapt, 'app:dataReady', this._onDataReady);
  }

  _onDataReady() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.listenTo(Adapt, {
      'menuView:postRender pageView:postRender blockView:postRender': this.onPostRender
    });

  }

  onPostRender(view) {
    const viewModel = view.model;

    if (!this.checkIsEnabled(viewModel)) return;
    const backgroundVideoModel = new Backbone.Model(viewModel.get('_backgroundVideo'));
    const backgroundVideoView = new BackgroundVideoView({ model: viewModel });
    const _selector = backgroundVideoModel.get('_selector');
    const el = _.isEmpty(_selector) ? view.$el : $(_selector);
    const minHeight = backgroundVideoModel.get('_minHeight') || 0;
    el.prepend(backgroundVideoView.el).addClass('has-backgroundvideo').css('min-height', minHeight + 'px');

  }

  checkIsEnabled(model) {
    const _backgroundVideoModel = model.get('_backgroundVideo');
    if (!_backgroundVideoModel || !_backgroundVideoModel._isEnabled) return false;
    return true;
  }
}
export default new BackgroundVideo();
