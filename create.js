function createMovie(data)//Creating html code for Showing
 {
   wrapper.innerHTML=' ';
    const elem= document.createElement('div');
    elem.innerHTML=`<h3>${data.Title}</h3>
    <p>${data.Plot}</p>`;
    wrapper.appendChild(elem);
    document.removeEventListener('click',clear);

 } 
 function createlist(data)//Creating html code for autocomplete
 {
    wrapper.innerHTML=' ';
    data=data.Search;
    for(let d of data){
    
      const anchor=document.createElement('div');
    anchor.classList.add('options');
    anchor.innerHTML=`<label>${d.Title}</label>
    <img src="${d.Poster}">`;
    
    anchor.addEventListener('click',()=>{
      input1.value=d.Title;
      createData(d)
      });
    wrapper.appendChild(anchor);
    }
    document.addEventListener('click',clear);
  }
   
  