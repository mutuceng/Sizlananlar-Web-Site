$(document).ready(function () 
    {
        $('.profile-button').click(function(){ window.location.href = '../profil-bilgisi/profil.html'; });

        var kullanici_adi = localStorage.getItem("kullaniciadi");

        var storedSizlanmalar = localStorage.getItem('sizlanmalar');
        var retrievedSizlanmalar = JSON.parse(storedSizlanmalar);
      
        var sizSayi = localStorage.getItem("sizSayi");
      
        var i = 0;
      
        while (i < sizSayi) 
        {
          var sizno = "siz" + i;
          var c = retrievedSizlanmalar ? retrievedSizlanmalar[sizno] : null;
      
          if (c && c.firma.toLowerCase() == kullanici_adi) {
            console.log(c.firma);
      
            // CardItem değişkeni var olarak tanımlansın
            var cardItem = '<div class="col"> <div class="card"> <div class="card-header custom-card-header"> <h5 class="card-title">' + c.baslik + 
            '</div> <div class="card-body"> <a href="#" class="card-text">' + c.firma + '</a> <p class="card-text">' + c.sizlanma + 
            '</p> <h6 class="card-subtitle">' + c.sizlanmatarihi + ' Sitemkar: <a href="#" >' + c.kullaniciadi + '</a></h6> </div> <div class="card-footer custom-card-footer">' + 
            '<p class="card-subtitle"> Şikayet Durumu: ' + c.sizlandurumu + '</p> </div> <div class="card-button">' +
            '<button class="btn btn-primary" onclick="cevapGoster(this)" >Cevapla</button> <button class="btn btn-secondary" onclick="siltusu(this)">Sil</button> </div> </div> </div>';
      
            $('.sizlan-container .row').append(cardItem);
          } else {
            console.log("Hata");
          }
      
          i++;
        }
        
        function search() 
        {
            var arananKelime = document.getElementById("aranan").value.toLowerCase();
            var basliklar = document.getElementsByClassName("card-title");
            for (var i = 0; i < basliklar.length; i++) 
            {
                var baslik = basliklar[i].innerText.toLowerCase();
            
                function control(a, b) {
                return a.includes(b);
                }            
            
                var colParent = basliklar[i].parentNode.parentNode.parentNode;
            
                if (!control(baslik, arananKelime)) {
                colParent.style.display = "none";
                } else {
                colParent.style.display = "flex";
                }
            }
        };
        
        document.getElementById("arama").addEventListener("click", search);

        function filtre(status)
        {
            var sikayetdurumlari = document.querySelectorAll('.card-footer .card-subtitle');
            for (var i = 0; i < sikayetdurumlari.length; i++)
            {
                var durum = sikayetdurumlari[i].innerText.toLowerCase();
                function control(a, b) 
                {
                    return a.includes(b);
                }
                
                var colParent = sikayetdurumlari[i].parentNode.parentNode.parentNode;

                if (status == 'all')
                {
                    colParent.style.display="flex";
        
                }
                else if (status = 'open')
                {
                    if(!control(durum,'cevap bekliyor'))
                    {
                        colParent.style.display = "none";
                    }
                    else { colParent.style.display = "flex"; }

                }
                else { alert("basarisiz");}
            }        
        }
        document.getElementById("link1").addEventListener("click", function () {
            filtre('all');
        });

        document.getElementById("link2").addEventListener("click", function () {
            filtre('open');
        });
    });