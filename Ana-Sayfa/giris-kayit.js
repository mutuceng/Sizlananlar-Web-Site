var users = {
    "mutu": { isim: "Umut", soyad:"Tanrıverdi", kimlikno: "12547859623", dogumtarihi: "08-11-2002", adres:"Menemen Seyrek", sifre: "umut123D" },
    "ulasucan": { isim: "Ulaş",soyad:"Uçan", kimlikno: "12547859624", dogumtarihi: "08-11-2004", adres:"Menemen Egekent",sifre: "ulas123D" },
    "mataberk": { isim: "Ataberk",soyad:"Öge", kimlikno: "12547859625", dogumtarihi: "08-11-2001", adres:"Menemen Seyrek",sifre: "ataberk123D" }
  };
  
  $(document).ready(function() {
      $('#register-form').submit(function(event) {
        event.preventDefault(); // Formun submit işlemini engellemek için
  
        var firmaadi = $('#firmaadi').val();
        var firmaadres = $('#firmaadres').val();
        var firmaemail = $('#firmaemail').val();
        var firmatelefonno = $('#firmatelefonno').val();
        var firmasifre = $('#sifre').val();
  
        // buraya devam edicem
  
        var kullaniciadi = $('#kullaniciadi').val();
        var kullanicisoyadi = $('#kullanicisoyad').val();
        var tckimlikno = $('#kullanicitckimlikno').val();
        var dogumtarihi = $('#kullanicidogumtarihi').val();
        var username = $('#kullaniciusername').val();
        var kullanicisifre = $('#sifre').val();
          
        localStorage.setItem("kullanicibilgi", users[kullanici3] );
        // buraya devam edicem
  
      });
  
      $('.login-form').submit(function(event) 
      {
          event.preventDefault();
          var kullaniciadi = $('#kullaniciadi').val();
          var kullanicisifre = $('#sifre').val();
  
          var username = kullaniciadi;
          var user = users[username];
          if (( kullanicisifre == user.sifre))
          {
              alert("Giriş başarılı. Anasayfaya yönlendiriliyorsunuz.");
              window.location.href = 'Sizlaniyor.html';
          }
          else
          {
              alert("Kullanıcı adı veya şifre yanlış.");
          }
  
      });
  });