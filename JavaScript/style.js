"use strict"

// console.log(regions)

function optionQoshish() {
    provencie.sort();
    provencie.forEach((item) => {
        const option = createElement("option", "option", item)
        $("#select").appendChild(option)
    })
}
optionQoshish()

async function regionQoshish(select = "Toshkent") {
    const response = await fetch(`https://islomapi.uz/api/present/day?region=${select}`)
    const result = await response.json()
    console.log(result);
   renderData(result)
}
regionQoshish()
$("#select").addEventListener("change", (e) => {
    $(".mintext").innerHTML = e.target.value;
    switch (e.target.value.toLowerCase()) {
        case "qashqadaryo": regionQoshish("qarshi"); break
        case "farg'ona": regionQoshish("qo'qon"); break
        case "buxoro": regionQoshish("qоrоvulbоzоr"); break
        case "sirdaryo": regionQoshish("guliston"); break
        case "surxondaryo": regionQoshish("termiz"); break
        case "samarqand": regionQoshish("urgut"); break
        case "navoiy": regionQoshish("nurоta"); break
        case "jizzax": regionQoshish("jizzax"); break
         case "andijon": regionQoshish("andijon");break
          case "namangan": regionQoshish("namangan");break
        case "xorazm": regionQoshish("urganch"); break
        case "toshkent": regionQoshish("angren");break
    }
})
function renderData(result) {
    const { times: { asr, hufton, peshin, quyosh, shom_iftor, tong_saharlik } } = result;
    $a(".namozVaqti")[0].textContent = tong_saharlik;
    $a(".namozVaqti")[1].textContent = quyosh;
    $a(".namozVaqti")[2].textContent = peshin;
    $a(".namozVaqti")[3].textContent = asr;
    $a(".namozVaqti")[4].textContent = shom_iftor;
    $a(".namozVaqti")[5].textContent = hufton;
}
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var sessionn = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        sessionn = "PM"
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ": " + s + " " + sessionn;
    document.getElementById("soat").innerText = time;
    document.getElementById("soat").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();