function hbsubmit(ele) {
    var id = ele.id.replace("_"," ");
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML
            += id;
        }