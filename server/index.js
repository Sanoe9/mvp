const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/naps', (req, res) => {
  const query1 = `SELECT id FROM types WHERE activity='${req.body.event}'`;
  console.log('query1', query1);
  db.query(query1, (err, data) => {
    if (err) {
      console.log('error in db inserting query1', err);
    } else {
      console.log('successfully inserted data in db query1', data);
      const query2 = `INSERT INTO events(type_id, note, time) VALUES (${data[0].id}, '${req.body.duration}', '${req.body.time}')`;
      console.log('query2', query2);
      db.query(query2, (err, data) => {
        if (err) {
          console.log('error in inserting query2', err);
        } else {
          console.log('successfully inserted query2');
          res.status(200).send('OK');
        }
      });
    }
  });
});

app.post('/diapers', (req, res) => {
  const query1 = `SELECT id FROM types WHERE activity='${req.body.event}'`;
  console.log('query1', query1);
  db.query(query1, (err, data) => {
    if (err) {
      console.log('error in db inserting query1', err);
    } else {
      console.log('successfully inserted data in db query1', data);
      const query2 = `INSERT INTO events(type_id, note, time) VALUES (${data[0].id}, '${req.body.number}', '${req.body.time}')`;
      console.log('query2', query2);
      db.query(query2, (err, data) => {
        if (err) {
          console.log('error in inserting query2', err);
        } else {
          console.log('successfully inserted query2');
          res.status(200).send('OK');
        }
      });
    }
  });
});

app.post('/feedings', (req, res) => {
  const query1 = `SELECT id FROM types WHERE activity='${req.body.event}'`;
  console.log('query1', query1);
  db.query(query1, (err, data) => {
    if (err) {
      console.log('error in db inserting query1', err);
    } else {
      console.log('successfully inserted data in db query1', data);
      const query2 = `INSERT INTO events(type_id, note, time) VALUES (${data[0].id}, '${req.body.ounces}', '${req.body.time}')`;
      console.log('query2', query2);
      db.query(query2, (err, data) => {
        if (err) {
          console.log('error in inserting query2', err);
        } else {
          console.log('successfully inserted query2');
          res.status(200).send('OK');
        }
      });
    }
  });
});

app.get('/weebairns', (req, res) => {
  console.log('getting to app.get')
  const query = `SELECT * FROM events`;
  db.query(query, (err, data) => {
    if (err) {
      console.log('error in selecting data from db', err);
    } else {
      console.log('successfully selected data from db', data);
      res.status(200).send(data);
    }
  })
});

app.post('/deletepls', (req, res) => {
  console.log('🐾', req.body)
  const query = `DELETE FROM events WHERE note='${req.body.note}' AND time LIKE '%${req.body.time}%'`;
  db.query(query, (err, data) => {
    if (err) {
      console.log('error in deleting from db', err);
    } else {
      console.log('successfully deleted from db', data);
      res.status(200).send('cool');
    }
  })
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});