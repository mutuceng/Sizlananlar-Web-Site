$(document).ready(function () 
{
    var tip = localStorage.getItem("tip",tip);
    if (tip == "firma")
    {
        
    }
    var baslik = localStorage.getItem("baslik",baslik);
    var kullanici_adi = localStorage.getItem("kullanici_adi",kullanici_adi);
    var sizlan = localStorage.getItem("sizlan",sizlan);
    var secilenFirma = localStorage.getItem("secilenFirma",secilenFirma);
    var tarih = localStorage.getItem("tarih",tarih);
    var sikayetdurumu = localStorage.getItem("sikayetdurumu",sikayetdurumu);

    var yeniCardItem = 
    '<div class="col"> <div class="card"> <div class="card-header custom-card-header"> <h5 class="card-title">' + baslik + 
    '</div> <div class="card-body"> <a href="#" class="card-text">' + secilenFirma + '</a> <p class="card-text">' + sizlan + 
    '</p> <h6 class="card-subtitle">' + tarih + ' Sitemkar: <a href="#" >' + kullanici_adi + '</a></h6> </div> <div class="card-footer custom-card-footer">' + 
    '<p class="card-subtitle"> Şikayet Durumu: ' + sikayetdurumu + '</p> </div> </div> </div>';

    $('.sizlan-container .row').append(yeniCardItem);

});