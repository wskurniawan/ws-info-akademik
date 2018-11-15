$(document).ready(function(){
   getData().then(function(result){
      var data = result.data;

      $.each(data, function(index, item){
         console.log(item);
         var html = '<tr><td>'+ item.tanggal +'</td><td>';
         html += '<span class="badge badge-warning" style="color: white;">'+ item.label +'</span>';
         html += '</td><td>';
         html += '<b>'+ item.judul +'</b><br>';
         html += item.body + '</td></tr>';

         $('#list-info').append(html);
      });
   }).catch(function(error){
      console.log(error);
   });
});

function getData(){
   return new Promise(function(resolve, reject){
      $.get('https://ia-jteti.ruangkarya.id/post', function(data){
         resolve(data);
      }).fail(function(error){
         reject(error);
      });
   });
}