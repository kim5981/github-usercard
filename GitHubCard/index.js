import axios from "axios";


const cards = document.querySelector(".cards");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

    axios.get("https://api.github.com/users/kim5981")
   .then(res => {
    cards.appendChild(cardCreator(res.data))
  })
   .catch(error => console.error(error))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/




/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "justsml",
  "crharding",
  "brityhemming",
  "keirankozlowski",
  "melodylayne",
 "tetondan",
    "dustinmyers",
    "bigknell"
];


followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    cards.appendChild(cardCreator(res.data))
  })
   .catch(error => console.error(error))
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

// {login, userPic, userName, userLocation, userLink, followers, following, userBio}

function cardCreator (userData) {
  
  //wrapper div
  const cardWrapper = document.createElement("div")
  cardWrapper.classList.add("card")

  //pfp
  const profilePic = document.createElement("img");
  profilePic.src = userData.avatar_url;
  profilePic.alt = "a profile picture of the github user"

  //user info div
  const userInfo = document.createElement("div");
  userInfo.classList.add("card-info");

  //name
  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = userData.name;

  //username
const username = document.createElement("p");
username.classList.add("username");
username.textContent = userData.login;

//location
const location = document.createElement("p");
location.textContent = userData.location;

//profile link
const profileWrap = document.createElement("p");
profileWrap.textContent = "Profile: "

const profileLink = document.createElement("a");
profileLink.href = userData.html_url //?  
profileLink.textContent = "GitHub Link"

//follow count
const followerCount = document.createElement("p");
followerCount.textContent = `Followers: ${userData.followers}`
const followingCount = document.createElement("p");
followingCount.textContent = `Following: ${userData.following}`

//bio
const bio = document.createElement("p");
bio.textContent = `Bio: ${userData.bio}`;

//Appendages  ༽(  ⊙﹇⊙)༼  
cardWrapper.appendChild(profilePic);
cardWrapper.appendChild(userInfo);

userInfo.appendChild(name);
userInfo.appendChild(username);
userInfo.appendChild(location);
userInfo.appendChild(profileWrap);
profileWrap.appendChild(profileLink);
userInfo.appendChild(followerCount);
userInfo.appendChild(followingCount);
userInfo.appendChild(bio);

return cardWrapper;

}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

