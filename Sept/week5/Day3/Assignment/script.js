async function getData(){
    let res= await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await res.json()
    console.log(data)
}

getData()

async function createUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 23,
        title: "Aim of your life",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error is ", error);
  }
}
// createUser()




async function getUserById(id) {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "GET",
    });
    let user = await res.json();

    console.log(user);
  } catch (error) {
    console.log("error block", error);
  }
}

// getUserById(101);


async function updateUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
      method: "Put",
      body: JSON.stringify({
        userId: 6,
        title:"Weekly Schedule",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error is ", error);
  }
}

// updateUser()

async function updateUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
      method: "PATCH",
      body: JSON.stringify({
        userId: 6,
        title:"Weekly Schedule",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error is ", error);
  }
}

// updateUser()


async function deleteUser(id) {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
      method: "DELETE",
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error ", error);
  }
}

deleteUser()




