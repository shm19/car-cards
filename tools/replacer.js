const fs = require('fs');

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/cars.json`));

const htmlCard = fs.readFileSync(
  `${__dirname}/../public/html/card.html`,
  'utf-8'
);
const html = fs.readFileSync(`${__dirname}/../public/html/index.html`, 'utf-8');
const profile = fs.readFileSync(
  `${__dirname}/../public/html/profile.html`,
  'utf-8'
);

exports.html = (pageNumber) => {
  const htmlCards = [];
  const cardsNumber = 6;
  for (let i = 0, j = (pageNumber - 1) * 6; i < cardsNumber; i++, j++) {
    let result = replace(htmlCard, cars[j]);
    htmlCards.push(result);
  }
  return html.replace(/%{HTML_CARDS}%/g, htmlCards.join(''));
};
exports.profileHtml = (id) => {
  let result = replace(profile, cars[id - 1]);
  return result;
};

function replace(text, data) {
  let output = text.replace(
    /%{CAR_NAME_IMG}%/g,
    data.Name.split(' ').join('-')
  );
  output = output.replace(/%{CAR_NAME}%/g, data.Name);
  output = output.replace(/%{MILES_PER_GALLON}%/g, data.Miles_per_Gallon);
  output = output.replace(/%{CYLINDERS}%/g, data.Cylinders);
  output = output.replace(/%{HORSEPOWER}%/g, data.Horsepower);
  output = output.replace(/%{WEIGHT}%/g, data.Weight_in_lbs);
  output = output.replace(/%{COUNTRY}%/g, data.Origin);
  output = output.replace(/%{PRODUCTION_YEAR}%/g, data.Year);
  output = output.replace(/%{ID}%/g, data.id);
  return output;
}
