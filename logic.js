const userInput = document.getElementById('userInput');
const grid = document.getElementById('imgGrid')


function searchImg(){
    let val = userInput.value;
    let url = `https://api.unsplash.com/search/photos?query=${val}&page=10&client_id=So370WQ_Eu2a3C_cFbrL34ipWRMs8UP1Z8Cwa8AIohc`
    fetch(url)
    .then((res)=>{
        if(res.status == 200){
            return res.json().then((data) => showimg(data))
        }
    })
}

function showimg(imgObj){
    console.log(imgObj);
    
    let imgArr = imgObj.results;

   imgArr.forEach((e, i)=>{
       let div = document.createElement('div');
       let img = document.createElement('img');
       img.className = 'img-fluid';
       img.setAttribute('src', `${e.urls.small}`);
       div.appendChild(img)
       div.className = 'PerImg';
      grid.appendChild(div)
   })

}