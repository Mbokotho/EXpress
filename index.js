const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsBill = require('./SettingsBill');
const Set = SettingsBill();

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res){

  res.render('home');
});

app.post('/settings', function(req, res) {
  let smsCost = req.body.smsCost;
  let callCost = req.body.callCost;
  let critical = req.body.criticalLevel;
  let warning = req.body.warningLevel;

   Set.Callprice(callCost);
   Set.Smsprice(smsCost);
   Set.criticalLevel(critical);
   Set.warningLevel(warning);

  console.log(Set.Callprice(callCost));
  console.log(Set.Smsprice(smsCost));
  console.log(Set.warningLevel(warning));
  console.log(Set.criticalLevel(critical));


    // let call= Set.Callprice(callCost);
    // let sms = Set.Smsprice(smsCost);
    // let Total= Set.Billtype();
    // let criticalLevel=Set.criticalLevel(critical);
    // let warningLevel=Set.criticalLevel(critical);


  res.render('home');
  // res.redirect('/');
});

app.post('/action', function(req, res){


     // let smsCost = req.body.smsCost;
     // let callCost = req.body.callCost;
     // let critical = req.body.criticalLevel;
     // let warning = req.body.warningLevel;

      Set.Billtype(req.body.costType);

        //
        // Set.Callprice(callCost);
        // Set.Smsprice(smsCost);
        // Set.criticalLevel(critical);
        // Set.warningLevel(warning);

        let calls =  Set.Calltotal();
        let smses = Set.Smstotal();
        let grandTotal = Set.TTTotal();

          res.render('home', {calls,smses, grandTotal});

   });



let PORT = process.env.PORT || 3009;

app.listen(PORT, function() {
  console.log('App starting on port', PORT);
});
