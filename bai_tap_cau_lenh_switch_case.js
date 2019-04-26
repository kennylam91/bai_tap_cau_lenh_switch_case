function dayCalculator() {
    let month = parseInt(document.getElementById('month').value);
    let result;
    if (month>0&&month<13) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                result = "31 ngay";
                break;
            case 2:
                result = "28 hoac 29 ngay";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                result = "30 ngay"
        }
        document.getElementById('result').innerHTML = "Thang " + month + " co " + result;
        console.log("Thang" + month + "co" + result);
        console.log(month);
    } else {
        document.getElementById('result').innerHTML = "Vui long nhap lai";
    }


}