const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postsList = document.querySelector('.posts-list');

for(let i=0; i<posts.length; i++)	{
    const src = posts[i];

    const post = document.createElement('div');
    postsList.append(post);
	post.classList.add("post");

    const postHeader = document.createElement('div');
    post.append(postHeader);
	postHeader.classList.add("post__header");

    const postMeta = document.createElement('div');
    postHeader.append(postMeta);
	postMeta.classList.add("post__meta");

    const postMetaIcon = document.createElement('div');
    postMeta.append(postMetaIcon);
	postMetaIcon.classList.add("post-meta__icon");

    const profilePic = document.createElement('img');
    postMetaIcon.append(profilePic);
    profilePic.src = src.author.image;
	profilePic.classList.add("profile-pic");

    const postMetaData = document.createElement('div');
    postMeta.append(postMetaData);
	postMetaData.classList.add("post-meta__data");

    const postMetaAuthor = document.createElement('div');
    postMetaData.append(postMetaAuthor);
    postMetaAuthor.innerHTML = src.author.name;
	postMetaAuthor.classList.add("post-meta__author");

    const postMetaTime = document.createElement('div');
    postMetaData.append(postMetaTime);
    postMetaTime.innerHTML = src.created;
	postMetaTime.classList.add("post-meta__time");

    const postText = document.createElement('div');
    post.append(postText);
    postText.innerHTML = src.content;
	postText.classList.add("post__text");

    const postImage = document.createElement('div');
    post.append(postImage);
	postImage.classList.add("post__image");

    const postPic = document.createElement('img');
    postImage.append(postPic);
    postPic.src = src.media;
	//postPic.classList.add("");

    const postFooter = document.createElement('div');
    post.append(postFooter);
	postFooter.classList.add("post__footer");

    const likes = document.createElement('div');
    postFooter.append(likes);
	likes.classList.add("likes");
    likes.classList.add("js-likes");

    const likesCta = document.createElement('div');
    likes.append(likesCta);
	likesCta.classList.add("likes__cta");

    const likeButton = document.createElement('a');
    likesCta.append(likeButton);
	likeButton.classList.add("like-button");
    likeButton.classList.add("js-like-button");

    const likeButtonIcon = document.createElement('i');
    likeButton.append(likeButtonIcon);
	likeButtonIcon.classList.add("like-button__icon");
    likeButtonIcon.classList.add("fas");
    likeButtonIcon.classList.add("fa-thumbs-up");

    const likeButtonLabel = document.createElement('span');
    likeButton.append(likeButtonLabel);
    likeButtonLabel.innerHTML = "Mi Piace";
	likeButtonLabel.classList.add("like-button__label");

    const likesCounter = document.createElement('div');
    likes.append(likesCounter);
	likesCounter.classList.add("likes__counter");

    const likeCounter = document.createElement('b');
    likesCounter.append(likeCounter);
    likeCounter.innerHTML = `Piace a  
     ${likeCounter.innerHTML = src.likes} Persone`;
    //likeCounter.setAttribute("id", `like-counter-${i}`);
	likeCounter.classList.add("js-likes-counter");
}