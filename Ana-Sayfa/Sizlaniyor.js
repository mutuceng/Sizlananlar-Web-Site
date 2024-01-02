// sizlanmalar adında json tipinde şikayetleri kaydettik
var sizlanmalar = {
  "siz1": { sizlanmaNo: "siz1", kullaniciadi: "mutu", baslik:"Hepsiburada keyfi sipariş iptali", sizlanma: "Anlamsız bir şekilde bu akşam yaptığım sipariş iptal edildi müşteri hizmetlerini aradığım zaman suistimal kelimesini kullandı paket ürün için nasıl bir suistimal olabilir açıklama yapmadılar. ", firma: "Hepsiburada", sizlanmatarihi: "01-01-2024", sizlandurumu: "Cevap Bekliyor"},
  "siz2": { sizlanmaNo: "siz2", kullaniciadi: "mutu", baslik:"Ürünü Defolu Elime Ulaştı", sizlanma: "Adidas Kramponlarım yırtık geldi. İade Talebi oluşturdum ancak ellerinde ürün olmadığı için geç bir gönderim tarihi verdiler", firma: "Hepsiburada", sizlanmatarihi: "30-11-2023", sizlandurumu: "Çözüldü"},
  "siz3": { sizlanmaNo: "siz3", kullaniciadi: "mutu", baslik:"Siparişim Evime Uğramadan Geri Döndü", sizlanma: "Siparişim evime uğramadan şubeye geri gönderildi. Dağıtıma çıkarıldı mesajı atıp teslimat başarısız diye mesaj atmadan kargonun şubeye geri döndüğünü mesaj olarak atmadan, siparişimi mağazaya iadesini yaptı.", firma: "Aras Kargo", sizlanmatarihi: "24-11-2023", sizlandurumu: "Çözüldü" },
  "siz4": { sizlanmaNo: "siz4", kullaniciadi: "ulasucan", baslik:"Kargom Parçalara Ayrılmış", sizlanma: "Kız arkadaşıma yılbaşı hediyesi olarak kar küresi sipariş vermiştim. Kargom kız arkadaşıma ulaştığında ezilmiş haldeydi. Kar küresi de paramparça olmuş.", firma: "Aras Kargo", sizlanmatarihi: "08-11-2023" , sizlandurumu: "Cevap Bekliyor"},
  "siz5": { sizlanmaNo: "siz5", kullaniciadi: "ulasucan", baslik:"Aras Kargo Başkasına Teslim Etmiş Kargomu", sizlanma: "Aras Kargo, kargomu teslim etmiş fakat başka birime teslimat yapmış, kim olduğu belli değil, kargom nerede bilmiyorum. Benden başkasına nasıl teslimat yapılıyor, haber verilmiyor. 'Adresteyim' diye uygulamadan belirtmiştim.", firma: "Aras Kargo", sizlanmatarihi: "13-10-2022", sizlandurumu: "Çözüldü" },
  "siz6": { sizlanmaNo: "siz6", kullaniciadi: "ulasucan", baslik:"Hepsiburada Yarın Kapında Büyük Yalan", sizlanma: "Hepsiburada'ya güvenerek '1 günde kargo' seçeneği olan satıcıdan dört gün önce yeni yıl hediyesi aldım. Ancak kargoya vermedikleri gibi, aradığımda veya mesaj yazdığımda hiçbir geri dönüş yapmadılar.", firma: "Hepsiburada", sizlanmatarihi: "20-09-2024", sizlandurumu: "Çözüldü" },
  "siz7": { sizlanmaNo: "siz7", kullaniciadi: "mataberk", baslik:"Trendyol Müşteri Hizmetleri Gereken Desteği Sağlamıyor", sizlanma: "16 Kasım'da Lenovo Ideapad Gaming 3 aldım. Çok hızlı şarj tüketiyor, Trendyol'u aradım ve iade etmek istediğimi söyledim, onlar da servis raporu ve 15 gün süre şartlarını söylediler geri almak için. Lenovo 'yi aradım, kimse benimle ilgilenmedi", firma: "Trendyol", sizlanmatarihi: "18-07-2024" ,sizlandurumu: "Çözüldü"},
  "siz8": { sizlanmaNo: "siz8", kullaniciadi: "mataberk", baslik:"Trendyol Sipariş 1 Aydır Hazırlanıyor", sizlanma: "Eşimin Trendyol'dan 03.12.2023 tarihinde vermiş olduğu sipariş hala 'hazırlanıyor' olarak gözükmekte. Konuyla ilgili ne satıcıdan cevap alabiliyoruz ne de Trendyol bu konuda bir işlem yapıyor", firma: "Trendyol", sizlanmatarihi: "08-11-2024" ,sizlandurumu: "Cevap Bekliyor"},
  "siz9": { sizlanmaNo: "siz9", kullaniciadi: "mataberk", baslik:"Trendyol SMS Onayı Olmadan Para Kesti", sizlanma: "Trendyol'dan ürün aldım ancak kredi kartıma onay SMS gelmeden para çekildi. Güvenlik zaafiyeti oluşturduğundan şüpheleniyorum. Her zaman telefonuma gelen SMS güvenlik kodu ile alışveriş yaptım son alışverişimde kod gelmedi", firma: "Trendyol", sizlanmatarihi: "08-11-2024" ,sizlandurumu: "Çözüldü"},
  "siz10": { sizlanmaNo: "siz10", kullaniciadi: "mutu", baslik:"Şikayetlere cevap gelmiyor!", sizlanma: "Bazen o kadar geç geliyor ki cevap geldiğinde şikayetimin ne olduğunu hatırlamakta zorlanıyorum.", firma: "Şikayetvar", sizlanmatarihi: "08-11-2024" ,sizlandurumu: "Çözüldü." }
};

$(document).ready(function () 
  {
    var counterValue = 25745;

    function increaseCounter() 
    {
        counterValue++;
        $('.sayac > h2').text("Tamamlanan Sızlanma Sayısı: " + counterValue); //navbarın üstündeki sayacı 5 saniyede bir 1 arttırıyor
    }

    setInterval(increaseCounter, 5000);

    
    $('.uyeol-button').click(function(){ window.location.href = 'giris_yap.html'; });
    $('.profile-button').click(function(){ window.location.href = '../profil-bilgisi/profil.html'; });

    
    $('#sizlanForm').submit(function (event) 
    {
      event.preventDefault();

      var kullanici_adi = localStorage.getItem("kullaniciadi");
      var kullanici_sifre = localStorage.getItem("kullanicisifre");
      var storedUsers = localStorage.getItem('users');   //local storage'dan users'ı çekip parse ediyor tekrar json formatına
      var retrievedUsers = JSON.parse(storedUsers);
      var a = retrievedUsers[kullanici_adi];

      if (a && kullanici_sifre == a.sifre) {

        var storedSizlanmalar = localStorage.getItem('sizlanmalar');
        var sizlanmalar = storedSizlanmalar ? JSON.parse(storedSizlanmalar) : {};
    
        var baslik = $('#baslik').val();
        var kullanici_adi = $('#kullaniciadi').val();
        var sizlan = $('#sizlan').val();
        var secilenFirma = $('#firma').val();  
        var tarih = $('#tarih').val();
        var sikayetdurumu = 'Cevap Bekliyor';
  
        
        var siz = "siz";
        var i=11;  //hali hazırda 10 şikayet oldugundan 11den başladı
      
        var sizSayi = i;
        var sizno = siz + sizSayi;
  
        var newSizlanma = {
          sizlanmaNo: sizno,
          kullaniciadi: kullanici_adi,
          baslik: baslik,
          sizlanma: sizlan,
          firma: secilenFirma,
          sizlanmatarihi: tarih,
          sizlandurumu: sikayetdurumu
        };
  
        sizlanmalar[sizno.toLowerCase()] = newSizlanma;
        i++;
        
    
        localStorage.setItem('sizlanmalar', JSON.stringify(sizlanmalar));
  
        localStorage.setItem("baslik",baslik);
        localStorage.setItem("kullanici_adi",kullanici_adi);  //daha ilkel sizlan yazdirma 
        localStorage.setItem("sizlan",sizlan);
        localStorage.setItem("secilenFirma",secilenFirma);
        localStorage.setItem("tarih",tarih);
        localStorage.setItem("sikayetdurumu",sikayetdurumu);

        localStorage.setItem("sizSayi",sizSayi);  //sizSayiyi locale kaydediyoruz profil ve adminde sizlanmaları yazdırabilmek için while döngsünün sınırını belirliyor
  
        alert("Sizlanma bilgileri kaydedildi.");
  
        var yeniCarouselItem =
          '<div class="carousel-item">' +
          '<h1 class="sistem_kutu" style="color: #102317;">' + baslik + '</h1>' +
          '<div class="sitem_kutu">' + '<div class="kime">Kime: ' + secilenFirma + '</div>' + '<p>' + sizlan + '</p>' +
          '<div class="tarih">Tarih: ' + tarih + '</div>' + '</div>' + '<h2 class="sistem_kutu"><b>Sitemkar: </b>' + kullanici_adi + '</h2>' + 
          '<h2 class="sistem_kutu"><b>Durum:</b><i style="color:crimson;"> '+ sikayetdurumu + '</i></h2>' + '</div>';
  
        
  
        $('.carousel-inner').append(yeniCarouselItem);
  
        var yeniCardItem = 
          '<div class="col"> <div class="card"> <div class="card-header custom-card-header"> <h5 class="card-title">' + baslik + 
          '</div> <div class="card-body"> <a href="#" class="card-text">' + secilenFirma + '</a> <p class="card-text">' + sizlan + 
          '</p> <h6 class="card-subtitle">' + tarih + ' Sitemkar: <a href="#" >' + kullanici_adi + '</a></h6> </div> <div class="card-footer custom-card-footer">' + 
          '<p class="card-subtitle"> Şikayet Durumu: ' + sikayetdurumu + '</p> </div> </div> </div>';
  
        $('.sizlan-container .row').append(yeniCardItem);
  
        $('#sizlanForm')[0].reset();
      } else {
        alert("Önce üye girişi yapın lütfen.");
      }
   
    });
    
    function search() {
      var arananKelime = document.getElementById("aranan").value.toLowerCase();
      var basliklar = document.getElementsByClassName("card-title");
      for (var i = 0; i < basliklar.length; i++) {
        var baslik = basliklar[i].innerText.toLowerCase();
    
        function control(a, b) {
          return a.includes(b);   //aranan kelime başlıklarda varsa displayini flex yoksa none yap
        }            
    
        var colParent = basliklar[i].parentNode.parentNode.parentNode;
    
        if (!control(baslik, arananKelime)) {
          colParent.style.display = "none";
        } else {
          colParent.style.display = "flex";
        }
      }
    }
    
    document.getElementById("arama").addEventListener("click", search);
  });
