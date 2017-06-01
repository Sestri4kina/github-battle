var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component {
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li
              style={ lang === this.props.selectedLang ? {color: '#d0021b'} : null}
              onClick={this.props.onSelect.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          );
        })}
      </ul>
    );
  }
}

SelectLanguage.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return { selectedLang: lang }
    });
  }

  render () {
    return (
      <div>
        <SelectLanguage
          selectedLang={this.state.selectedLang}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

module.exports = Popular;
