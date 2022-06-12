var headerContent = document.querySelector('.header')
headerContent.innerHTML = `
    <div class="col l-2 m-2 c-2">
    <div class="logo"><a href="Home.html"><img src="src/image/imageHome/Logo.png" alt=""></a></div>
</div>
<div class="col l-7 m-7 c-0 menu">
    <ul>
        <li><a href="Home.html">Home</a></li>
        <li><a href="Product.html">Products</a></li>
        <li><a href="Contact.html">About Us</a></li>
        <li><a href="">Contact Us</a></li>
    </ul>
</div>
<div class="col l-3 m-3 c-0 authenticate">
    <img src="src/image/imageHome/Cart.png" alt="" class="authenticate-img">
    <a href="signIn.html"><button class="sign-in">Sign In</button></a>
    <a href="signUp.html"><button class="sign-in">Sign Up </button></a>
</div>  
<div class="col l-0 m-0 c-2 mobie-tablet" id="mobie-tablet">
    <i class="ti-menu"></i>
</div>
    `

// function open_nav() {

//     sub_menu_hide.classList.toggle("hidden");
// }

// icon_nav.addEventListener('click', open_nav);
