export const generateAvatar=()=>{
   `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${getRandomInt(6)}-bg.webp`
    return 
}

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
