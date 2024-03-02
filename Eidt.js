document.addEventListener('DOMContentLoaded',function(){
    let id=document.getElementById("id");
    let title=document.getElementById("title");
    const urlparams=new URLSearchParams(location.search);
    const photoId=urlparams.get('id');
   const url2 = `https://jsonplaceholder.typicode.com/photos/${photoId}`;

let xhr2= new XMLHttpRequest();
xhr2.open('GET', url2)
xhr2.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
xhr2.send();


xhr2.onload = function() {
if (xhr2.status === 200) {
let photo2 = JSON.parse(xhr2.responseText);
console.log('Fetched Photo Data:', photo2);

title.value = photo2.title;
id.value = photo2.albumId;
  }
  else {
   console.log('Error fetching photo details');
}

}})
window.history.back="htm.html";