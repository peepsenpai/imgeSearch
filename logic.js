const userInput = document.getElementById('userInput');
const grid = document.getElementById('imgGrid');

const toggleTheme = document.querySelector('.theme-change-icon');
toggleTheme.addEventListener('click', ()=>{
    let body = document.getElementsByTagName('body')[0];
    let dNText= document.querySelector('.day-night');
    if(body.classList.contains('light')){
        body.classList.replace('light', 'dark');
        dNText.innerHTML = 'Night';
    }
    else{
        body.classList.replace('dark', 'light');
        dNText.innerHTML = 'Day';
    }
    
})

userInput.addEventListener('keyup', (perKey)=>{
    let val = userInput.value;
    // console.log(val);
    // console.log(perKey.key);

    //if user doesnot put any value but press the 'enter key , we stop further executing in this closure;
    if(val === '' && perKey.key === 'Enter') return

    if(perKey.key === 'Enter'){
        searchImg();
    }
    
})

function searchImg(){
    let val = userInput.value;
    let url = `https://api.unsplash.com/search/photos?query=${val}&per_page=20&client_id=So370WQ_Eu2a3C_cFbrL34ipWRMs8UP1Z8Cwa8AIohc`
    fetch(url)
    .then((res)=>{
        if(res.status == 200){
            return res.json().then((data) => showimg(data))
        }
    })
}

function removeAll(){
    grid.innerHTML = '';
    userInput.value = '';
}

function showimg(imgObj){
    // console.log(imgObj);

    removeAll();
    if(imgObj.results.length === 0){
        alert('sorry cant find any image on this keyword')
        return
    }
    
    let imgArr = imgObj.results;

   imgArr.forEach((e, i)=>{
       let div = document.createElement('div');
       let img = document.createElement('img');
       let likes = document.createElement('h4');
       likes.innerHTML = `<i class="fas fa-thumbs-up"></i> : ${e.likes}`
        likes.className = 'likes';
       img.className = 'img-fluid';
       img.setAttribute('src', `${e.urls.small}`);
       div.appendChild(img);
       div.appendChild(likes);
       div.className = 'PerImg';
      grid.appendChild(div)
   })

}