$(document).ready(function () 
{
  

    var storedBrands = localStorage.getItem('brands');
    var retrievedBrands = JSON.parse(storedBrands);
    var kullanici_adi = localStorage.getItem("kullaniciadi");
    var kullanici_sifre = localStorage.getItem("kullanicisifre");
    
    var a = retrievedBrands[kullanici_adi];

    var storedUsers = localStorage.getItem('users');
    var retrievedUsers = JSON.parse(storedUsers);

    var b = retrievedUsers[kullanici_adi];


    if (b && kullanici_sifre == b.sifre) {
        $('.list-group-item:eq(0)').text('Adı: ' + b.isim);
        $('.list-group-item:eq(1)').text('Soyisim: ' + b.soyad);
        $('.list-group-item:eq(2)').hide();
        $('.list-group-item:eq(3)').hide();
        $('.list-group-item:eq(4)').text('Dogum Tarihi: ' + b.dogumtarihi);
        $('.list-group-item:eq(5)').text('Kullanici adi: '+ b.kullaniciadi);
        $('.list-group-item:eq(6)').hide();
        $('#tip').text(''+ b.kullaniciadi);
      } else if ( a && kullanici_sifre == a.sifre) {
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
      var retrievedBrands = JSON.parse(storedBrands);
      var c = retrievedBrands[kullanici_adi]



});