//  var p=fetch("https://urlhaus-api.abuse.ch/v1/urls/recent")
//  .then((data)=>data.json())
//  .then((data1)=>console.log(data1))
//  console.log(p)
var div = document.createElement("div")
async function bar() {
   var p1 = await fetch("https://api.artic.edu/api/v1/artworks");
   p1 = await p1.json()
   let res = p1.data
   console.log(p1);
   const artistNames = []
   for (let i = 0; i < res.length; i++) {
      artistNames.push(res[i].artist_titles)
   }
   console.log(artistNames)
   var div1 = document.createElement("div")
   div1.setAttribute("class", 'welcome')
   div1.innerHTML = "Welcome"
   document.body.append(div1)

   h1 = document.createElement("h1")
   h1.innerHTML = "Artists and Their Art Details"

var div3=document.createElement("div")
div3.setAttribute("class","mixed")

   var container = document.createElement("div")
   container.setAttribute("class", "container")

   var row = document.createElement("div")
   row.setAttribute('class', "row")

   container.append(row)

   for (let i = 0; i < artistNames.length; i++) {

      row.innerHTML += `<div class="col-md-3">
<ul>
<li><a href="#${artistNames[i]}">${artistNames[i]}</a></li>
</ul>
 </div>`

 div3.append(h1,container)

 document.body.append(div3);

   }

 for (let i = 0; i < res.length; i++) {

   console.log(res[i].artist_titles)

 let main=document.createElement("main")

 let section=document.createElement("section")
 
 section.setAttribute("id",res[i].artist_titles)
 section.innerHTML =`<div>
 
 <div>Name: ${res[i].artist_titles}!!<div>
 <div>Category: ${res[i].category_titles }</div>
 <div>Title: ${res[i].title }</div>
 <div>Material: ${res[i].material_titles }</div>
 <div>Origin: ${res[i].place_of_origin}</div>
 
 `
 
      main.append(section)
      document.body.append(main);
     
 }
 
}bar()


