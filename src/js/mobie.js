var navNavigator = document.querySelector('#navigator');

navNavigator.innerHTML = `
<div class="nav-menu">
    <ul>
    <li><a href="Home.html">Home</a></li>
    <li><a href="Product.html">Products</a></li>
    <li><a href="Contact.html">About Us</a></li>
    <li><a href="">Contact Us</a></li>
    <li><a href="signIn.html">Sign In</a></li>
    <li><a href="signUp.html">Sign Up</a></li>
    </ul>
</div>
`

var iconMobie = document.querySelector('#mobie-tablet')
iconMobie.addEventListener('click', function () {
    navNavigator.classList.add('hidden');
})

navNavigator.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
        navNavigator.classList.remove('hidden');
    }
})


