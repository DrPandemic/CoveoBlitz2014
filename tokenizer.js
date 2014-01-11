

function extract_terms(str) {
  return str.toLowerCase().match(/[\-\wäöüáéíóúãâêîôûàèìòùçñ]*[a-zA-Z0-9äöüáéíóúãâêîôûàèìòùçñ]+[\-\wäöüáéíóúãâêîôûàèìòùçñ]*/g);
}

exports.extract_terms = extract_terms;