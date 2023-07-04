function renderPosts() {
    $.ajax({
        url: 'https://js-post-api.herokuapp.com/api/posts',
        method: "GET",
        success: function (posts) {
            let htmls = posts.map(function (post) {
                return `
                    <div class="col-sm-6 mb-4">
                        <div class="card">
                            <img src="${post.imageUrl}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text description">${post.description}</p>
                                <p class="card-text author fst-italic">${post.author}</p>
                                <p class="card-text created-date fst-italic">${(new Date(post.createdAt)).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                `
            })
            document.querySelector('.post-area').innerHTML = htmls.join('');
        }
    })
}

renderPosts();