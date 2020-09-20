const price=13000;
function buttonStyleClicked(idButton ,month){

  for(let counter=0;counter<16;counter+=3){
    let setElement=counter.toString();
    document.getElementById(setElement).style.borderColor ="#dbdbdb";
    document.getElementById('icon'+setElement).style.display='none';
  }
  let elementClicked=idButton;
  document.getElementById(elementClicked.toString()).style.borderColor =" #1faa00";
  document.getElementById('icon'+elementClicked.toString()).style.display='block';
  setPrice(elementClicked , month);
}

function setPrice(elementClicked, month){
  let priceMonth;
  if( elementClicked === 15) {
    priceMonth = price * month -( ( price * month * 10 ) / 100 );
  } else {
    priceMonth = price * month;
  }

  let subscriptionRight = ( priceMonth * 70 ) /100 ;
  let ReceivedCharge = ( priceMonth * 30 ) / 100;
  document.getElementById("price").innerHTML=priceMonth.toString();
  document.getElementById("subscriptionRight").innerHTML=subscriptionRight.toString();
  document.getElementById("ReceivedCharge").innerHTML=ReceivedCharge.toString();

  /* switch(idMonthSubscription){
    case 0 :
      price=13000;
      subscriptionRight=(price*70)/100;
      ReceivedCharge=(price*30)/100
      document.getElementById("price").innerHTML=price.toString();
      document.getElementById("subscriptionRight").innerHTML=subscriptionRight.toString();
      document.getElementById("ReceivedCharge").innerHTML=ReceivedCharge.toString();
      break;
    case 3:
      price=13000*3;
      subscriptionRight=(price*70)/100;
      ReceivedCharge=(price*30)/100
      document.getElementById("price").innerHTML=price.toString();
      document.getElementById("subscriptionRight").innerHTML=subscriptionRight.toString();
      document.getElementById("ReceivedCharge").innerHTML=ReceivedCharge.toString();
      break;
    case 6:
      price = 13000 * 6;
      subscriptionRight = (price*70)/100;
      ReceivedCharge=(price*30)/100
      document.getElementById("price").innerHTML=price.toString();
      document.getElementById("subscriptionRight").innerHTML=subscriptionRight.toString();
      document.getElementById("ReceivedCharge").innerHTML=ReceivedCharge.toString();
      break;
    case 9:
      price=13000*9;
      subscriptionRight=(price*70)/100;
      ReceivedCharge=(price*30)/100
      document.getElementById("price").innerHTML=price.toString();
      document.getElementById("subscriptionRight").innerHTML=subscriptionRight.toString();
      document.getElementById("ReceivedCharge").innerHTML=ReceivedCharge.toString();
      break;
    case 12:
      price=13000*12;
      subscriptionRight=(price*70)/100;
      ReceivedCharge=(price*30)/100
      document.getElementById("price").innerHTML=price.toString();
      document.getElementById("subscriptionRight").innerHTML=subscriptionRight.toString();
      document.getElementById("ReceivedCharge").innerHTML=ReceivedCharge.toString();
      break;
    case 15:
      price = 13000 * 12-((price*12*10)/100);
      subscriptionRight=(price*70)/100;
      ReceivedCharge=(price*30)/100
      document.getElementById("price").innerHTML=price.toString();
      document.getElementById("subscriptionRight").innerHTML=subscriptionRight.toString();
      document.getElementById("ReceivedCharge").innerHTML=ReceivedCharge.toString();
      break;
  } */
}




