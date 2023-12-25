$(document).ready(function () 
    {
        var counterValue = 25745;

        function increaseCounter() 
        {
            counterValue++;
            $('.sayac > h2').text("Çözüme Ulaşan Sızlanma Sayısı: " + counterValue);
        }

        setInterval(increaseCounter, 5000);

        
        $('.uyeol-button').click(function(){ window.location.href = 'giris_yap.html'; });
        $('.profile-button').click(function(){ window.location.href = '../profil-bilgisi/profil.html'; });
        
        $('#sizlanForm').submit(function (event) 
        {
            event.preventDefault();

            var baslik = $('#baslik').val();
            var kullanici_adi = $('#kullaniciadi').val();
            var sizlan = $('#sizlan').val();
            var secilenFirma = $('#firma').val();
            var tarih = $('#tarih').val();
            var sikayetdurumu = 'Cevap Bekliyor'

            var yeniCarouselItem =
                '<div class="carousel-item">' +
                '<h1 class="sistem_kutu" style="color: #102317;">' + baslik + '</h1>' +
                '<div class="sitem_kutu">' + '<div class="kime">Kime: ' + secilenFirma + '</div>' + '<p>' + sizlan + '</p>' +
                '<div class="tarih">Tarih: ' + tarih + '</div>' + '</div>' + '<h2 class="sistem_kutu"><b>Sitemkar: </b>' + kullanici_adi + '</h2>' + 
                '<h2 class="sistem_kutu"><b>Durum:</b><i style="color:crimson;"> '+ sikayetdurumu + '</i></h2>' + '</div>';

            var yeniCardItem = '';

            $('.carousel-inner').append(yeniCarouselItem);

            var yeniCardItem = 
            '<div class="col"> <div class="card"> <div class="card-header custom-card-header"> <h5 class="card-title">' + baslik + 
            '</div> <div class="card-body"> <a href="#" class="card-text">' + secilenFirma + '</a> <p class="card-text">' + sizlan + 
            '</p> <h6 class="card-subtitle">' + tarih + ' Sitemkar: <a href="#" >' + kullanici_adi + '</a></h6> </div> <div class="card-footer custom-card-footer">' + 
            '<p class="card-subtitle"> Şikayet Durumu: ' + sikayetdurumu + '</p> </div> </div> </div>';

            $('.sizlan-container .row').append(yeniCardItem);

            $('#sizlanForm')[0].reset();
        });
        


        /*$('.sizlan-container .search-button').click(function(){
            var arananKelime = $('.search-input').val().toLowerCase();

            $('.card').each(function () {
                var kartMetni = $(this).text().toLowerCase();
                       
                if (kartMetni.includes(arananKelime)) {
                    $('.col').show();
                } else {
                    $('.col').hide();
                }
            });
          }) */
        
        /*$(".search-input").on("click",function() {
            var arananKelime = $('.search-input').val().toLowerCase();
            $(".sizlan-container .row *").filter(function() 
            {
              $(this).toggle($(this).text().toLowerCase().indexOf(arananKelime) > -1)
            });
        }); */

        $(".search-button").click(function () {
            var arananKelime = $('.search-input').val().toLowerCase();
            
            $(".sizlan-container .card").filter(function () {
              var kartMetni = $(this).text().toLowerCase();
              return kartMetni.indexOf(arananKelime) > -1;
            }).toggle(true);
      
            $(".sizlan-container .card").not(":visible").toggle(false);
          });
    });
