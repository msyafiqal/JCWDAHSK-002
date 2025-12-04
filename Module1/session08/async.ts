export async fetchData = async () => {
    try {
        const fetchUsers = await fetch ("https://jsonplaceholder.typicodeclear.com/users");
        const res = await fetchUsers.json()
        console.log("res =>",res)

        const fetchPosts - await fetch ("https://jsonplaceholder.typicodeclear.com/posts");
        const res2 = await fetchPosts.json()
        console.log("post =>", res2 )


        const fetchTodos - await fetch ("https://jsonplaceholder.typicodeclear.com/todos/1");
        const res3 = await fetchTodos.json()
        console.log("post =>", res3 )
    } catch (err){
        console.log(err)
}

