var debounce = require('mout/function/debounce');

module.exports = React.createClass({

  onWidthChange: function (e) {
    this.props.onWidthChange(e.target.value);
  },

  onHeightChange: function (e) {
    this.props.onHeightChange(e.target.value);
  },

  onLocationChange: function (item) {
    this.props.onLocationChange(item);
  },

  onCategoriesChange: function (field, e) {
    this.props.onCategoriesChange(field, e);
    // var nextState = {};
    // nextState[field] = e.target.checked;
    // this.setState(nextState);
  },
  
  // TODO: generate these in template as well.
  // <div style={{margin: 0, padding: 0, display: 'inline'}}>
  // <input name="utf8" type="hidden" value="✓"/>
  // <input name="_method" type="hidden" value="put"/>
  // <input name="authenticity_token" type="hidden" value="ngHe6Fhv4/YgCQW/6Jh+seYArHZbGC2AoALgmk4dPko="/></div>
  render: function () {
    return (
      <div className="user-form">
        <form acceptCharset="UTF-8"
              className="form-horizontal formtastic widget"
              id="edit_widget" noValidate="novalidate">
          <fieldset className="inputs">
            <legend>
              <Translation
                scope={'users.profile.widget.legends.settings'}>
              </Translation>
            </legend>


            <Photon url={'http://photon.komoot.de/api/'}
              lang={Translation.locale} limit={10}
              onLocationChange={this.onLocationChange}></Photon>

            <div className="number input optional numeric stringish form-group"
              id="widget_width_input">
              <label className=" control-label" htmlFor="widget_width">
                <Translation
                  scope={'users.profile.widget.width'}>
                </Translation>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_width"
                  name="widget[height]" step="any" type="number"
                  value={this.props.width} onChange={this.onWidthChange}/>
              </span>
            </div>
            <div className="number input optional numeric stringish form-group"
              id="widget_height_input">
              <label className=" control-label" htmlFor="widget_height">
                <Translation
                  scope={'users.profile.widget.height'}>
                </Translation>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_height"
                  name="widget[height]" step="any" type="number"
                  value={this.props.height}
                  onChange={this.onHeightChange}/>
              </span>
            </div>

            <div className="number input optional numeric stringish form-group"
              id="widget_providers_input">
              <label className=" control-label" htmlFor="widget_providers">
                <Translation
                  scope={'users.profile.widget.providers'}>
                </Translation>
              </label>
              <Dropdown items={this.props.providers}></Dropdown>
            </div>

            <div className="number input optional numeric stringish form-group"
              id="widget_categories_input">
              <label className=" control-label" htmlFor="widget_categories">
                <Translation
                  scope={'users.profile.widget.categories'}>
                </Translation>
              </label>
              <span className="form-wrapper">
                <input className="form-control" id="widget_categories"
                  name="widget[categories]" type="checkbox"
                  checked={this.props.categories}
                  onChange={this.onCategoriesChange.bind(this, 'categories')}/>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
});