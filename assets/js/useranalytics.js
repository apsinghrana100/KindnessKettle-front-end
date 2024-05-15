
console.log("useranalytics.js is loaded");

document.addEventListener("DOMContentLoaded", function() {
    fetchUserData();
});

function fetchUserData() {
    // Assuming you have the user ID stored in localStorage
    const userDetailsString = localStorage.getItem('user_details');
    
    // Parse the user details JSON string into an object
    const userDetails = JSON.parse(userDetailsString);
    //console.log(userDetails);

    let jwttoken = localStorage.getItem('jwttoken');
    let userId = userDetails.userId;

    // console.log(jwttoken)
    // Fetch user data from the provided API
    fetch(`http://52.16.194.174:8085/kindnesskettle/useranalytics/${userId}`, {
        headers: {
            'Authorization': `Bearer ${jwttoken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("user data:",data)
        displayUserDetails(data.userAccount);
        displayDonationPosts(data.donationPosts);
        displayLikes(data.likes);
    })
    .catch(error => console.error("Error fetching user data:", error));
}


function displayUserDetails(user) {
    const userDetailsContainer = document.getElementById("user-details");
    userDetailsContainer.innerHTML = `
        <div class="user-details">
            <img src="${user.imageUrl ? user.imageUrl : 'placeholder.jpg'}" alt="User Image">
            <div>
                <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.emailAddress}</p>
                <p><strong>Profile Description:</strong> ${user.profileDescription}</p>
            </div>
        </div>
    `;
}

function displayDonationPosts(posts) {
    const donationPostsContainer = document.getElementById("donation-posts");
    donationPostsContainer.innerHTML = "";
    posts.forEach(post => {
        donationPostsContainer.innerHTML += `
            <div class="post">
                <img src="${post.foodImageUrl}" alt="Food Image">
                <p><strong>Food Type:</strong> ${post.foodType.foodType}</p>
                <p><strong>Address:</strong> ${post.address.addressLine}, ${post.address.pincode}</p>
                <p><strong>Time Available:</strong> ${new Date(post.timeAvailable).toLocaleString()}</p>
            </div>
        `;
    });
}

function displayLikes(likes) {
    const likesContainer = document.getElementById("likes");
    likesContainer.innerHTML = "";
    likes.forEach(like => {
        likesContainer.innerHTML += `
            <div class="like">
                <img src="${like.user.imageUrl ? like.user.imageUrl : 'placeholder.jpg'}" alt="User Image">
                <p><strong>User:</strong> ${like.user.firstName} ${like.user.lastName}</p>
                <p><strong>Liked Post:</strong> Post ID ${like.post.postId}</p>
                <p><strong>Liked Date:</strong> ${new Date(like.likeDateTime).toLocaleString()}</p>
            </div>
        `;
    });
}
