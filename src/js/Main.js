
// Home
const ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/image/imageHome/image 26.png",
        iconTime: "src/image/imageHome/Timer.png",
        nameTime: "30 Minutes",
        iconFood: "src/image/imageHome/ForkKnife.png",
        nameFood: "Snack",
        category: 1
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/image/imageHome/image 26 (1).png",
        iconTime: "src/image/imageHome/Timer.png",
        nameTime: "30 Minutes",
        iconFood: "src/image/imageHome/ForkKnife.png",
        nameFood: "Fish",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/image/imageHome/image 26 (2).png",
        iconTime: "src/image/imageHome/Timer.png",
        nameTime: "30 Minutes",
        iconFood: "src/image/imageHome/ForkKnife.png",
        nameFood: "Snack",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/image/imageHome/image 26 (3).png",
        iconTime: "src/image/imageHome/Timer.png",
        nameTime: "30 Minutes",
        iconFood: "src/image/imageHome/ForkKnife.png",
        nameFood: "Healthy",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/image/imageHome/image 26 (4).png",
        iconTime: "src/image/imageHome/Timer.png",
        nameTime: "30 Minutes",
        iconFood: "src/image/imageHome/ForkKnife.png",
        nameFood: "Noodles",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/image/imageHome/image 26 (5).png",
        iconTime: "src/image/imageHome/Timer.png",
        nameTime: "30 Minutes",
        iconFood: "src/image/imageHome/ForkKnife.png",
        nameFood: "Sweet",
        category: 6
    }
]
const ListCategory = [
    {
        id: 1,
        name: "breakfast",
        image: "src/image/imageHome/image 25.png"
    },
    {
        id: 2,
        name: "vegan",
        image: "src/image/imageHome/image 20.png"
    },
    {
        id: 3,
        name: "meat",
        image: "src/image/imageHome/image 21.png"
    },
    {
        id: 4,
        name: "dessert",
        image: "src/image/imageHome/image 22.png"
    },
    {
        id: 5,
        name: "lunch",
        image: "src/image/imageHome/image 23.png"
    },
    {
        id: 6,
        name: "chocolate",
        image: "src/image/imageHome/image 24.png"
    }
]




function showProduct(data) {
    const popularList = document.querySelector('.product')
    if (popularList) {
        popularList.innerHTML = "";
        for (let item of data) {
            popularList.innerHTML += `
        <div class="col l-4 m-4 c-12 popular">
        <a href="Detail.html?id=${item.id}">
        <img src="${item.image}" alt="" class="img-product">
        </a>
        <div class="title-product"><a href="Detail.html?id=${item.id}">${item.name}</a></div>
    
        <div class="list-food">
            <img src="${item.iconTime}" alt="" class="icon-food">
            <span>${item.nameTime}</span>
        </div>
        <div class="list-food">
            <img src="${item.iconFood}" alt="" class="icon-food">
            <span>${item.nameFood}</span>
        </div>
    </div>
        `
        }
    }
}
showProduct(ListProduct)


// Filter
const filter = document.querySelector("#filter-select");
function filterProduct() {
    const over30 = ListProduct.filter(function (item) {
        return item.price > 30
    })
    const under30 = ListProduct.filter(function (item) {
        return item.price <= 30
    })
    if (filter.value == 'over30') {
        showProduct(over30)
    }
    if (filter.value == 'under30') {
        showProduct(under30)
    }
    if (filter.value == 'all') {
        showProduct(ListProduct)
    }
}

if (filter) {
    filter.addEventListener("change", filterProduct)
}




function detalProduct() {
    const prdID = new URLSearchParams(window.location.search).get('id')
    const product = ListProduct.find(function (item) {
        return item.id == prdID
    })
    // console.log(product);
    const detailProductDiv = document.querySelector('.banner')
    // detailProductDiv.innerHTML = ""
    if (detailProductDiv) {
        detailProductDiv.innerHTML = `
        <div class="col l-6 m-12 c-12  banner-left">
                        <p class="Title-left">${product.name}</p>
                        <p class="price-banner">$ ${product.price}</p>
                        <p class="text-banner">${product.desc} </p>
                        <div class="button-banner">
                            <input type="text" class="input-banner" placeholder="Quantity">
                            <button type="submit" class="submit-banner">Add To Cart</button>
                        </div>
                    </div>
                    <div class="col l-6 m-12 c-12 banner-right">
                        <img src="${product.image}" alt="" class="Banner__img">
                    </div>
        `
    }
}
detalProduct();


function ListLeft(data) {
    const ulCategory = document.querySelector('#ul-Category')
    if (ulCategory)
        ulCategory.innerHTML = ""
    for (let item of data) {
        ulCategory.innerHTML += `
        <li><a href="Product.html?cateId=${item.id}" onclick="reRender(${item.id});event.preventDefault()">${item.name}</a></li>
        `
    }
}
ListLeft(ListCategory);

function listCategoryPage(data) {
    const listProductDiv = document.querySelector('.product-main')
    if (listProductDiv) {
        listProductDiv.innerHTML = "";
        for (let item of data) {
            listProductDiv.innerHTML += `
        <div class="col l-4 m-6 c-12 product">
            <img src="${item.image}" alt="" class="img-product img-product1">
            <div class="title-products title-product1"><a href="">${item.name}</a></div>
            <p class="price-product price-product3">$ ${item.price}</p>
            <button type="submit" id="button-product">Add To Cart</button>
        </div>
        `
        }
    }
}
listCategoryPage(ListProduct)

function reRender(cateId) {
    // const cateId = new URLSearchParams(window.location.search).get('cateId')
    const filterCategory = ListProduct.filter(function (item) {
        return item.category == cateId
    })
    listCategoryPage(filterCategory)
}

// Category mobie-taplet

const filter1 = document.querySelector("#filter-select1");
function filterProduct1() {
    const value1 = ListProduct.filter(function (item) {
        return item.category == 1;
    })
    const value2 = ListProduct.filter(function (item) {
        return item.category == 2
    })
    const value3 = ListProduct.filter(function (item) {
        return item.category == 3
    })
    const value4 = ListProduct.filter(function (item) {
        return item.category == 4
    })
    const value5 = ListProduct.filter(function (item) {
        return item.category == 5
    })
    const value6 = ListProduct.filter(function (item) {
        return item.category == 6
    })

    if (filter1.value == 'all') {
        listCategoryPage(ListProduct)
    }
    if (filter1.value == '1') {
        listCategoryPage(value1)
    }
    if (filter1.value == '2') {
        listCategoryPage(value2)
    }
    if (filter1.value == '3') {
        listCategoryPage(value3)
    }
    if (filter1.value == '4') {
        listCategoryPage(value4)
    }
    if (filter1.value == '5') {
        listCategoryPage(value5)
    }
    if (filter1.value == '6') {
        listCategoryPage(value6)
    }
}

if (filter1) {
    filter1.addEventListener("change", filterProduct1)
}

