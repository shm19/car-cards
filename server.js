const app = require('./app');

let port = 5000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
