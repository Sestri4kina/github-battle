var React = require('react');

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
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    //console.log('Up here: ', this);
    return (
      <ul className='languages'>
        {languages.map((lang) => {
          //console.log('Down here: ', this)
          return (
            <li
              style={ lang === this.state.selectedLang ? {color: '#d0021b'} : null}
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          );
        })}
      </ul>
    );
  }
}

module.exports = Popular;
