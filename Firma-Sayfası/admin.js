$(document).ready(function () 
    {
        $('.profile-button').click(function(){ window.location.href = '../profil-bilgisi/profil.html'; });

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