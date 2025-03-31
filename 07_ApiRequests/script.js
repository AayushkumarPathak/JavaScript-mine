const xhr = new XMLHttpRequest();
const url = "https://api.github.com/users/aayushkumarpathak"
xhr.open('GET',url);
const userImg = document.querySelector("#userImg");
const userName = document.querySelector("#userName");
const userBio = document.querySelector("#userBio");


xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data);
    console.log(data.followers);

    userImg.src = data.avatar_url;
    userName.innerHTML = data.name;
    userBio.innerHTML = data.bio;

    }
}
xhr.send();
