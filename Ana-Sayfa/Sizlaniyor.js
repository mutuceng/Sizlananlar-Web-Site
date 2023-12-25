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
            $('#profilCarousel').append(yeniCarouselItem);

            $('#sizlanForm')[0].reset();
        })
        


        $('#sikayetgonder').click(function(){
            var sitemkar = $("#kullaniciadi").val();
            var baslik = $("#baslik").val();
            var icerik = $("#sizlan").val();
            var firma =$("#firma").val();
            var tarih =$("#tarih").val();
            var durum = 'Cevap Bekliyor'
        
            var yeni_sikayet = '<div class="col">'+
            '<div class="card">'+
                '<div class="card-header custom-card-header">'+
                    '<h5 class="card-title">'+baslik+'</h5> </div>'+
                '<div class="card-body">'+
                    '<a href="#" class="card-text">'+firma+'</a> <p class="card-text">'
                    +icerik+'</p> <h6 class="card-subtitle">'+tarih+ 'Sitemkar: <a href="#" >'+sitemkar +'</a></h6> </div>'+
                '<div class="card-footer custom-card-footer">'+
                    '<p class="card-subtitle">Durum:'+ durum +'</p></div> </div>';
        
                    
                    $('.row row-cols-1 row-cols-md-3 g-4 py-5').append(yeni_sikayet);
          });
    });
