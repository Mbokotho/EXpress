
module.exports = function(){
  var criticallevel = 0;
  var warningLevels= 0;
  var callCost = 0;
  var smsCost = 0 ;

  var call_cost=0;
  var sms_cost =0;

  var sms = 0.0;
  var call = 0.0;
  var Total = 0.0;


function Callprice(call_cost){
    callCost = parseFloat(call_cost);

return callCost;
}

function Smsprice(sms_cost){
  smsCost = parseFloat(sms_cost);

  return smsCost;
}

function criticalLevel(critical_level){
  criticalLevel = parseFloat(critical_level);
  return criticalLevel;
}


function warningLevel(warning_level){
  warningLevels = parseFloat(warning_level);
    return warningLevels;
}




function Billtype(costType){

  var billTypeEntered = costType;



if (billTypeEntered === "call"){
    call += callCost;
}
else if (billTypeEntered === "sms"){
    sms += smsCost;
}


  return  Total = sms + call ;

}

      function Calltotal(){
        return call ;
      }

      function Smstotal(){
        return sms;
      }

      function TTTotal(){
        return Total;
       }

       return {
         Billtype,
         Calltotal,
         Smstotal,
         TTTotal,
         Smsprice ,
         Callprice,
         warningLevel,
         criticalLevel
   }


}
