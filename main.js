//Alterando informações da rede social
const linksSocialMedia = {
    github: "gabrieljezewski",
    youtube: "RocketSeat",
    instagram: "gabrieljezewski",
    linkedin: "in/gabrieljezewski",
    twitter: "rocketseat"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
      
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

//Buscando informações no gitHub
function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()