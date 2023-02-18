window.addEventListener('load', function(){
    let logoutButton = document.querySelector('#logout');

    logoutButton.addEventListener('click', function(){
        window.location.replace('login.php');
    })
});