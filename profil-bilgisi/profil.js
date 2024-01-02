$(document).ready(function () {
  var storedBrands = localStorage.getItem('brands');
  var retrievedBrands = JSON.parse(storedBrands);
  var kullanici_adi = localStorage.getItem("kullaniciadi");
  var kullanici_sifre = localStorage.getItem("kullanicisifre");

  var a = retrievedBrands ? retrievedBrands[kullanici_adi] : null;

  var storedUsers = localStorage.getItem('users');
  var retrievedUsers = JSON.parse(storedUsers);

  var b = retrievedUsers ? retrievedUsers[kullanici_adi] : null;

  if (b && kullanici_sifre == b.sifre) {
    $('.list-group-item:eq(0)').text('Adı: ' + b.isim);
    $('.list-group-item:eq(1)').text('Soyisim: ' + b.soyad);
    $('.list-group-item:eq(2)').hide();
    $('.list-group-item:eq(3)').hide();
    $('.list-group-item:eq(4)').text('Dogum Tarihi: ' + b.dogumtarihi);   // firma veya kullanıcı girişine göre profildeki bilgi kutularına değer atanıyor
    $('.list-group-item:eq(5)').text('Kullanici adi: '+ b.kullaniciadi);
    $('.list-group-item:eq(6)').hide();
    $('#tip').text(''+ b.kullaniciadi);
  } else if (a && kullanici_sifre == a.sifre) {
    $('.list-group-item:eq(0)').text('Firma Adı: ' + a.ad);
    $('.list-group-item:eq(1)').hide();
    $('.list-group-item:eq(2)').html('<i class="fas fa-phone-alt"></i> Telefon Numarası: ' + a.telefonno);
    $('.list-group-item:eq(3)').text('Email: ' + a.email);
    $('.list-group-item:eq(4)').hide();
    $('.list-group-item:eq(5)').hide();
    $('.list-group-item:eq(6)').text('Adres: ' + a.adres);
    $('#tip').text(''+ a.ad);
  } else {
    alert("Giriş Başarısız.");
  }

  

  var storedSizlanmalar = localStorage.getItem('sizlanmalar');
  var retrievedSizlanmalar = JSON.parse(storedSizlanmalar);

  var sizSayi = localStorage.getItem("sizSayi");

  var i = 0;

  while (i <= sizSayi) {  
    var sizno = "siz" + i;
    var c = retrievedSizlanmalar ? retrievedSizlanmalar[sizno] : null;

    if (c && c.kullaniciadi == kullanici_adi) {
      console.log(c.kullaniciadi);

      var cardItem = '<div class="col"> <div class="card"> <div class="card-header custom-card-header"> <h5 class="card-title">' + c.baslik + 
      '</div> <div class="card-body"> <a href="#" class="card-text">' + c.firma + '</a> <p class="card-text">' + c.sizlanma + 
      '</p> <h6 class="card-subtitle">' + c.sizlanmatarihi + ' Sitemkar: <a href="#" >' + c.kullaniciadi + '</a></h6> </div> <div class="card-footer custom-card-footer">' + 
      '<p class="card-subtitle"> Şikayet Durumu: ' + c.sizlandurumu + '</p> </div> <div class="card-button">' +
      '<button class="btn btn-secondary" onclick="siltusu(this)" >Sil</button> </div> </div> </div>';

      $('.sizlan-container .row').append(cardItem);
    } else {
      console.log("Hata");
    }

    i++;
  }
});