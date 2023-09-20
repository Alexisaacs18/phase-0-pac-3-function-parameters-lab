function introduction(name) {
    return `Hi, my name is ${name}.`;
  }

  console.log(introduction('Aki'))
  console.log(introduction('Samip'))

  function introductionWithLanguage(name, language) {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
  }

  console.log(introductionWithLanguage('Avi', 'Ember.js.'));
  console.log(introductionWithLanguage('Samip', 'React'));

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
  }

  console.log(introductionWithLanguageOptional('Gracie'))