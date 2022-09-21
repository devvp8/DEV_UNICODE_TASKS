let newss= document.getElementById('newss');
const xhr= new XMLHttpRequest();
xhr.open('GET',`https://inshorts.deta.dev/news?category=science`, true);
xhr.onload=function(){
    if(this.status===200){
    let json=JSON.parse(this.responseText)
    let data=json.data;
    console.log(data);
    let newsHtml="";
    data.forEach(function(data){
let news=`
<div class="card" id="newss" style="width: 18rem;">
<img class="card-img-top" src="${data["imageUrl"]}" alt="Card image cap">
<div class="card-body" 
  <h5 class="card-title"></h5>
  <p class="card-text">
  <a href="#" class="btn btn-primary"></a>
  <b> ${data["title"]} </b> 
  <br>
  <hr>
  <b> ${data["author"]} </b>
  <br>
  <b> ${data["date"]} </b>
</div>
${data["content"]}. <a href "${data["Url"]}">Read more</a>
<hr>
</div>`

newsHtml=newsHtml+news;
});
newss.innerHTML=newsHtml;
    }    
else{
    console.log("Error")
}
}
xhr.send()