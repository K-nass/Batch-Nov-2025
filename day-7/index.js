let isLoading = false;
async function fetchPosts() {
    isLoading = true;
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json()
        if (!res.ok) {
            throw new Error(`${res.status}`);
        }
    } catch (error) {
        console.log(error);
    } finally {
        isLoading = false;
    }
}

fetchPosts()


let searchController;
let searchValue = "";
const search = document.getElementById("search");
const results = document.getElementById("searchResults");
const todoResults = document.getElementById("todoResults");


search.addEventListener("input", () => {
    searchValue = search.value.trim();
    searchPosts(searchValue)
})
let isLoadingPosts = false;
const loading = document.getElementById("loading");

//abort controller solve race conditions 
// A race condition happens when multiple asynchronous operations (like fetch) are running at the same time, 
// and you don’t know which one will finish first.
async function searchPosts(searchValue) {
    if (searchController) {
        searchController.abort();
    }
    isLoadingPosts = true
    loading.classList.remove("hidden")
    searchController = new AbortController();
    const signal = searchController.signal;
    try {
        const res = await fetch(`https://dummyjson.com/posts/search?q=${searchValue}`, { signal });
        const data = await res.json()

        if (!res.ok) {
            throw new Error("posts not found");
        }
        results.innerHTML = data.posts.map(post => `
            <div>
            <p>${post.title}</p>
            <p>${post.body}</p>
            </div>`)
    } catch (error) {
        console.log(error);
    } finally {
        isLoadingPosts = false;
        loading.classList.add('hidden');
    }
}

let todoController;
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
let todo = {
    title: "",
    body: "",
    userId: Date.now()
};


titleInput.addEventListener("input", () => {
    todo.title = titleInput.value;
});

bodyInput.addEventListener("input", () => {
    todo.body = bodyInput.value;
});

async function addTodo(e) {
    e.preventDefault()
    if (todoController) {
        todoController.abort();
    }

    todoController = new AbortController();
    const signal = todoController.signal;
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({ todo }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            signal
        })
        if (!res.ok) {
            throw new Error(`try again the status is ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        
         todoResults.innerHTML =`
            <div>
            <p>${data.todo.userId}</p>
            <p>${data.todo.title}</p>
            <p>${data.todo.body}</p>
            </div>`
    } catch (error) {
        console.log(error);
    }
}




document.getElementById("submitButton").addEventListener("click", addTodo);
