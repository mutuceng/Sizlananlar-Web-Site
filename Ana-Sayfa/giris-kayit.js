var users = {
    "mutu": { isim: "Umut", soyad:"Tanrıverdi", kimlikno: "12547859623", dogumtarihi: "08-11-2002", kullaniciadi:"mutu", sifre: "umut123D" },
    "ulasucan": { isim: "Ulaş",soyad:"Uçan", kimlikno: "12547859624", dogumtarihi: "08-11-2004", kullaniciadi:"ulasucan",sifre: "ulas123D" },
    "mataberk": { isim: "Ataberk",soyad:"Öge", kimlikno: "12547859625", dogumtarihi: "08-11-2001", kullaniciadi:"mataberk",sifre: "ataberk123D" }
  };
// kullanıcılar ve firmalar tutuluyor
var brands = {
    "hepsiburada": {ad: "Hepsiburada", adres: "İstanbul Kadıköy", email: "hepsiburada@gmail.com", telefonno: "03123001212", sifre: "hepsiburada123D"},
    "trendyol": {ad: "Trendyol", adres: "Menemen", email: "trendyol@gmail.com", telefonno: "03123001313", sifre: "trendyol123D"},
    "Şikayet Var": {ad: "Şikayetvar", adres: "Ankara Çankaya", email: "sikayetvar@gmail.com", telefonno: "03123001414", sifre: "şikayetvar123D"},
    "Aras Kargo": {ad: "ArasKargo", adres: "Menemen Seyrek", email: "aras@gmail.com", telefonno: "03123001515", sifre: "aras123D"}
};
  
  $(document).ready(function() 
  {
    $('#register-form').submit(function(event) {
      event.preventDefault(); // Formun submit işlemini engellemek için

      var firmaadi = $('#firmaadi').val();
      var firmaadres = $('#firmaadres').val();
      var firmaemail = $('#firmaemail').val();
      var firmatelefonno = $('#firmatelefonno').val();  //firma bilgileri alınıyor
      var firmasifre = $('#sifre').val();
      
      var newBrand = {
        ad: firmaadi,
        adres: firmaadres, //alınan bilgiler yeni firma objesine kaydediliyor 
        email: firmaemail,
        telefonno: firmatelefonno,
        sifre: firmasifre
      };

      brands[firmaadi.toLowerCase()] = newBrand; //yeni firma brands'e ekleniyor

      localStorage.setItem('brands', JSON.stringify(brands));  //localstorage'a kaydediliyor 
      alert("Bilgiler Kaydedildi.");

      var kullaniciadi = $('#kullaniciadi').val();
      var kullanicisoyadi = $('#kullanicisoyad').val();
      var tckimlikno = $('#kullanicitckimlikno').val();
      var dogumtarihi = $('#kullanicidogumtarihi').val(); //kullanici bilgileri alınıyor
      var username = $('#kullaniciusername').val();
      var kullanicisifre = $('#sifre').val();

      var newUser = {
        isim: kullaniciadi,
        soyad: kullanicisoyadi,
        kimlikno: tckimlikno,        //alınan bilgiler yeni kullanıcı objesine kaydediliyor 
        dogumtarihi: dogumtarihi,
        kullaniciadi: username,
        sifre: kullanicisifre
      };

      users[username.toLowerCase()] = newUser; //yeni kullanici users'a ekleniyor

        
      localStorage.setItem('users', JSON.stringify(users));  //localstorage'a kaydediliyor 
      
      window.location.href = 'giris_yap.html'; 
      

    });

    $('.login-form').submit(function(event) 
    {
        event.preventDefault();
        var kullaniciadi = $('#kullaniciadi').val();  // giris bilgileri alınıyor
        var kullanicisifre = $('#sifre').val();

        var storedBrands = localStorage.getItem('brands');
        var retrievedBrands = JSON.parse(storedBrands);

        var a = retrievedBrands[kullaniciadi];

        var storedUsers = localStorage.getItem('users');  //firma ve kullanıcı için oluşturulan objeler çekilip parse ediliyor
        var retrievedUsers = JSON.parse(storedUsers);
    
        var b = retrievedUsers[kullaniciadi];

        localStorage.setItem('kullanicisifre',kullanicisifre); // girilen sifre bilgisi alınıyor


        if (b && kullanicisifre == b.sifre) {
          alert("Giriş başarılı. Anasayfaya yönlendiriliyorsunuz.");
          localStorage.setItem('kullaniciadi',kullaniciadi)
          window.location.href = 'Sizlaniyor.html';
        } else if ( a && kullanicisifre == a.sifre) {
          alert("Giriş başarılı. Admin Safyasına yönlendiriliyorsunuz.");
          localStorage.setItem('kullaniciadi',kullaniciadi)
          window.location.href = '../Firma-Sayfası/admin.html';
        } else {
          alert("Kullanıcı adı veya şifre yanlış.");
        }

    });
  });