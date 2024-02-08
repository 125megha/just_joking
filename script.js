//'https://ronreiter-meme-generator.p.rapidapi.com/meme'
//https://icanhazdadjoke.com/slack
const jokes=document.querySelector('#joke');
const jokebut=document.querySelector('#jokebutton');
const generatejokes =() =>{
    const setHeader ={
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader).then(res=> res.json())
    .then(data=> jokes.innerHTML=data.joke)
    .catch((error)=>{
        console.log(error);
    })
    
}
generatejokes();
jokebut.addEventListener('click',generatejokes)