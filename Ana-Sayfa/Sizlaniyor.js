$(document).ready(
    function(){
  $('.uyeol-button').click(function(){
    window.location.href = 'giris_yap.html';
  });
});

$(document).ready(function () {
    var counterValue = 25745;
    function increaseCounter() {
        counterValue++;
        $('.sayac > h2').text("Çözüme Ulaşan Sızlanma Sayısı: " + counterValue);
    }

    setInterval(increaseCounter, 5000);
});

$(document).ready(function () {
    $('#sizlanForm').submit(function (event) {
        event.preventDefault();

        var baslik = $('#baslik').val();
        var kullanici_adi = $('#kullaniciadi').val();
        var sizlan = $('#sizlan').val();
        var secilenFirma = $('#firma').val();
        var tarih = $('#tarih').val();

        var yeniCarouselItem = 
        '<div class="carousel-item">' +
        '<h1 class="sistem_kutu" style="color: #102317;">' + baslik + '</h1>' +
        '<div class="sitem_kutu">' + '<div class="kime">' + secilenFirma + '</div>' + '<p>' sizlan + '</p>'+ 
        '<div class="tarih">' + tarih + '</div' + '</div>';


        $('.carousel-inner').append(yeniCarouselItem);


        $('#sizlanForm')[0].reset();
    });
});