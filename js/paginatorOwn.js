const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
let userOwn;

async function getUsers() {
  try {
    const usersArr = await fetch("https://api.github.com/users?since=0}");
    const users = await usersArr.json();
    userOwn = users.slice(0, 10);
    renderNewUsers(userOwn);
    const userDescFirst = document.querySelectorAll(".user-desc")[0];
    userDescFirst.classList.add("visible");
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

getUsers();

function renderNewUsers(userOwn) {
  userOwn.forEach((user) => {
    const newUser = document.createElement("div");

    newUser.classList.add("slider-user");
    const userImg = document.createElement("div");
    userImg.classList.add("user-img");
    userImg.innerHTML = `<img src="${user.avatar_url}" alt="${user.login}"> `;
    const userDesc = document.createElement("p");
    userDesc.classList.add("user-desc");
    userDesc.innerHTML = `<p>${user.login}</p>`;
    newUser.appendChild(userImg);
    newUser.appendChild(userDesc);

    userImg.addEventListener("click", () => {
      userDesc.classList.toggle("visible");
    });
    if (userOwn.indexOf(user) < 5) {
      slide1.appendChild(newUser);
    } else {
      slide2.appendChild(newUser);
    }
  });
}
