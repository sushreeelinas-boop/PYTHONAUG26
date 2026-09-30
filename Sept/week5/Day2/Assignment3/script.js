async function getData() {

  let res = await fetch("https://jsonplaceholder.typicode.com/posts");

  let data = await res.json();

  console.log(data);

  let container = document.querySelector("#container");

  data.forEach((post) => {

    let div = document.createElement("div");

    div.classList.add("card");

    div.innerHTML = `
      <h2>${post.id}</h2>
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    container.append(div);

  });
}

getData();





