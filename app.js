let wrapper=document.querySelector('div');
const input1=document.querySelector('input');

async function getData(Name,m='n')//API call to get data
{
 let url='http://www.omdbapi.com/';
let dataob;
  if (m==='i'){  
   dataob={
        params:{
            apikey: 'd9835cc5',
            i: Name
          }
        }
      }
  else{
     dataob={
      params:{
          apikey: 'd9835cc5',
          s: Name
      }
  }}
    let response =await axios.get(url,dataob);
    if (response.data.Error)return [];
    return response.data;  
}

async function createData(data)//TO show the clicked movie in page
{
  wrapper.innerHTML=' ';
  let res=await getData(data.imdbID,'i');
  createMovie(res);
}
let recieve=async inp=>{
    let data=await getData(inp.target.value);
    createlist(data);    
}

input1.addEventListener('input',delayer(recieve));//take input and call after sometime using delayer function

