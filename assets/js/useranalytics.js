
function useranalytics(){
    const profileData = {
        "username": "imkrsnna",
        "realName": "krishna singh",
        "bio": "Young and hungry",
        "donations": 164,
        "likes": 188,
        "profileImage": "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
        "galleryImages": [
            "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
        ]
    };
 
    // Function to toggle edit form visibility
    function toggleEditForm() {
        const editFormOverlay = document.querySelector('.edit-form-overlay');
        editFormOverlay.classList.toggle('show');
    }
 
    // Create edit form overlay
    const editFormOverlay = document.createElement('div');
    editFormOverlay.className = 'edit-form-overlay';
    editFormOverlay.addEventListener('click', (event) => {
        if (event.target === editFormOverlay) {
            toggleEditForm();
        }
    });

    const ParentElement = document.querySelector('.container');
    ParentElement.innerHTML="";
 
    
    // Create edit form content
    const editFormContent = document.createElement('div');
    editFormContent.className = 'edit-form-content';
    const closeButton = document.createElement('span');
    closeButton.className = 'close-btn';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', toggleEditForm);
    editFormContent.appendChild(closeButton);
 
    // Form fields
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.value = profileData.username;
    usernameInput.className = 'input-field';
    const realNameInput = document.createElement('input');
    realNameInput.type = 'text';
    realNameInput.value = profileData.realName;
    realNameInput.className = 'input-field';
    const bioInput = document.createElement('textarea');
    bioInput.value = profileData.bio;
    bioInput.className = 'input-field textarea-field';
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'btn save-btn';
    saveButton.addEventListener('click', () => {
        // Update profile data with new values
        profileData.username = usernameInput.value;
        profileData.realName = realNameInput.value;
        profileData.bio = bioInput.value;
        // Hide the edit form after saving
        toggleEditForm();
    });
    editFormContent.appendChild(usernameInput);
    editFormContent.appendChild(realNameInput);
    editFormContent.appendChild(bioInput);
    editFormContent.appendChild(saveButton);
 
    // Append edit form content to edit form overlay
    editFormOverlay.appendChild(editFormContent);
 
    // Append edit form overlay to the document body
    document.body.appendChild(editFormOverlay);
 
    // Create header content
    // const header = document.getElementById('header');
    const container = document.createElement('div');
    container.className = 'container';
    const profile = document.createElement('div');
    profile.className = 'profile';
    const profileImageDiv = document.createElement('div');
    profileImageDiv.className = 'profile-image';
    const profileImage = document.createElement('img');
    profileImage.src = profileData.profileImage;
    profileImage.alt = profileData.username;
    profileImageDiv.appendChild(profileImage);
    const profileUserSettings = document.createElement('div');
    profileUserSettings.className = 'profile-user-settings';
    const profileUserName = document.createElement('h1');
    profileUserName.className = 'profile-user-name';
    profileUserName.textContent = profileData.username;
    const editButton = document.createElement('button');
    editButton.className = 'btn profile-edit-btn';
    editButton.textContent = 'Edit Profile';
    editButton.onclick = toggleEditForm; // Add onclick event to toggle edit form
 
    const settingsButton = document.createElement('button');
    settingsButton.className = 'btn profile-settings-btn';
    settingsButton.setAttribute('aria-label', 'profile settings');
    settingsButton.innerHTML = '<i class="fas fa-cog" aria-hidden="true"></i>';
    profileUserSettings.appendChild(profileUserName);
    profileUserSettings.appendChild(editButton);
    profileUserSettings.appendChild(settingsButton);
    const profileStats = document.createElement('div');
    profileStats.className = 'profile-stats';
    const statsList = document.createElement('ul');
    const donations = document.createElement('li');
    donations.innerHTML = `<span class="profile-stat-count">${profileData.donations}</span> Donation`;
    const likes = document.createElement('li');
    likes.innerHTML = `<span class="profile-stat-count">${profileData.likes}</span> Likes`;
    statsList.appendChild(donations);
    statsList.appendChild(likes);
    profileStats.appendChild(statsList);
    const profileBio = document.createElement('div');
    profileBio.className = 'profile-bio';
    profileBio.innerHTML = `<p><span class="profile-real-name">${profileData.realName}</span> ${profileData.bio}</p>`;
    profile.appendChild(profileImageDiv);
    profile.appendChild(profileUserSettings);
    profile.appendChild(profileStats);
    profile.appendChild(profileBio);
    container.appendChild(profile);
    ParentElement.appendChild(container);
 
    // Create main content (gallery)
    // const mainContent = document.getElementById('main-content');


  
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'container';
    const gallery = document.createElement('div');
    gallery.className = 'gallery';
    profileData.galleryImages.forEach(src => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        const galleryImage = document.createElement('img');
        galleryImage.className = 'gallery-image';
        galleryImage.src = src;
        galleryImage.alt = '';
        galleryItem.appendChild(galleryImage);
        gallery.appendChild(galleryItem);
    });
    galleryContainer.appendChild(gallery);
    ParentElement.appendChild(galleryContainer);
};