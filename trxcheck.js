var getHost = window.location.protocol + "//" + window.location.host;

function checkPaymentStatus() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      if (obj.rescode == 0) {
        document.getElementById("payment-status").className = "final_success";
        window.location = getHost + "/shop/";
      } else {
        document.getElementById("payment-status").className = "error";
      }
      document.getElementById("payment-status").innerHTML = obj.resmsg;
    }
  };

  //xhttp.open("POST", getHost+"/wp-content/plugins/woocommerce_mpesa/callback_scanner.php", true);
  xhttp.open("POST", getHost + "/?scanner_action=1", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
}



function makePayment() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj2 = JSON.parse(this.responseText);
      if (obj2.rescode == 0) {
        document.getElementById("payment-status").className = "waiting_success";
      } else {
        document.getElementById("payment-status").className = "error";
      }
      document.getElementById("payment-status").innerHTML = obj2.resmsg;
    }
  };
  //xhttp.open("POST", getHost+"/wp-content/plugins/woocommerce_mpesa/callback_scanner.php", true);
  xhttp.open("POST", getHost + "/?payment_action=1", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("type=STK");
}
