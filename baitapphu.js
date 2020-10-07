function convertMoney(){
    let money=document.getElementById('money').value;
    let from=document.getElementById('in').value;
    let to=document.getElementById('out').value;
    let tien = money*to/from
    document.getElementById('kq').innerHTML ="kq la" + tien }