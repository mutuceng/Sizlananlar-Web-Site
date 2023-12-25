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