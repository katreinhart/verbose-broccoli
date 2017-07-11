import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: 'Loading...'
  });
});

app.use(express.static('public'));

app.listen(8000, () => {
  console.log("Express listening on port 8000");
})
