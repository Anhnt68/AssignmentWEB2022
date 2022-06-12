const listContact = [
    {
        id: 1,
        name: "CƠM HẾN - HƯƠNG NỒNG VỊ CỒN HẾN",
        desc: "Có một món ăn, chẳng phải cao lương mĩ vị, chẳng sang trọng bề thế, mà khiến bao trái tim hướng. Đó chính là món cơm Hến vùng biển Cồn Hến, một món ăn rất nổi tiếng tại cố đô",
        image: "src/image/contact/sp1.jpg",
        blogCateId: 3
    },
    {
        id: 2,
        name: "DÊ NÚI NINH BÌNH",
        desc: "Được chăn thả bên trên những ngọn núi đá nên thịt dê ở Ninh Bình vô cùng săn chắc và dai nên du khách đến Ninh Bình nhất định phải thử món ăn này một lần. Trong khi thịt dê ở đây còn được chế biến ra nhiều món ăn ngon với những cách chế biến không giống nhau như làm thành nem dê, dê hấp, dê nướng hay nổi tiếng nhất là dê tương gừng - một món ăn cực kỳ giàu dinh dưỡng. Nhiều người cũng bảo rằng thịt dê còn có thể chữa được rất nhiều loại bệnh, nên đến Ninh Bình nếu có cơ hội bạn chớ bỏ lỡ thịt dê núi nức tiếng nơi đây.",
        image: "src/image/contact/sp3.webp",
        blogCateId: 2
    },
    {
        id: 3,
        name: "MẮM TÔM CHUA ĂN VỚI GÌ?",
        desc: "Tôm chua là một món ăn bình dị của người dân xứ Huế. Cái vị chua thanh của tôm, cay nồng của các loại gia vị làm cho ai đã một lần thưởng thức thì không thể quên được hương vị mộc mạc của món ăn. Trong ẩm thực xứ Huế, tôm chua là món ăn nhà quê nhưng được rất nhiều người ưa thích.",
        image: "src/image/contact/sp2.png",
        blogCateId: 1
    },
    {
        id: 4,
        name: "XÔI CHỨNG KIẾN",
        desc: "Nhiều người nhầm tưởng rằng những món ăn làm từ trứng kiến chỉ có ở khu vực vùng núi phía Bắc mà thôi nhưng ở ngay tại Ninh Bình cũng có một món ăn đặc sản làm từ trứng kiến với tên gọi xôi trứng kiến. Trứng kiến Ninh Bình có nguồn gốc từ vùng núi đá vôi Nho Quan. Người dân mang trứng kiến non về, sau đó rửa cho sạch rồi tẩm ướp gia vị, cuối cùng là xào chín. Món ăn này kết hợp với xôi, thêm hành khô thì hương vị phải nói cực kỳ lạ miệng và hấp dẫn vô cùng.",
        image: "src/image/contact/sp4.webp",
        blogCateId: 4
    },
    {
        id: 5,
        name: "GỎI CẢ NHỆCH",
        desc: "Đặc sản Ninh Bình - Gỏi cá Nhệch là món ăn ngon và nổi tiếng đối với người dân bản xứ Kim Sơn - Ninh Bình. Gỏi được chế biến tinh tế và công phu, trải qua nhiều giai đoạn để loại bỏ mùi tanh và có vị ngọt xen lẫn vị thơm của nếp. Món nước chấm gỏi dùng riêng cho gỏi cũng không hề đơn giản khi kết hợp vừa đủ giữa vị cay nồng của ớt, của sả và hạt tiêu. Chính sự cầu kỳ đó sẽ khiến khách du lịch ăn một lần mà nhớ một đời!",
        image: "src/image/contact/sp5.webp",
        blogCateId: 2
    },
    {
        id: 6,
        name: "MIẾN LƯƠN",
        desc: "Miến lươn cũng chính là món ăn tuyệt hảo mà bạn không tài nào bỏ qua được khi khám phá ẩm thực Ninh Bình. Lươn ở đây phải là lươn cốm với phần lưng màu nâu hồng còn bụng thì màu vàng đậm. Loại lươn này nhỏ hơn lươn bình thường nhưng thịt lại săn chắc và vô cùng thơm ngọt. Miến lươn sẽ được dùng kèm với hoa chuối thái sợi để tạo nên vị thanh dịu khó cưỡng lại",
        image: "src/image/contact/sp6.webp",
        blogCateId: 2
    }
]

const listContactUl = [
    {
        id: 1,
        name: "Food Hà Nội",
    },
    {
        id: 2,
        name: "Food Ninh Bình",
    },
    {
        id: 3,
        name: "Food Huế",
    },
    {
        id: 4,
        name: "Food Đà Nẵng",
    },
    {
        id: 5,
        name: "Food TP HCM",
    },
]

// contact

function ListLeft(data) {
    const ulContact = document.querySelector('#ul-contact')
    if (ulContact)
        ulContact.innerHTML = ""
    for (let item of data) {
        ulContact.innerHTML += `
        <li><a href="Contact.html?cateId=${item.id}" onclick="reRender(${item.id});event.preventDefault()">${item.name}</a></li>
        `
    }
}
ListLeft(listContactUl);

function listContactPage(data) {
    // const listProductDiv = document.querySelector('.product-main')
    const listContactdiv = document.querySelector('.contact-main')
    console.log(listContactdiv)
    if (listContactdiv) {
        listContactdiv.innerHTML = "";
        for (let item of data) {
            listContactdiv.innerHTML += `
            <div class="col l-4 m-6 c-12 contact">
            <img src="${item.image}" alt="" class="img-contact">
            <div class="title-contact"><a href="">${item.name}</a></div>
            <p class="price-contact">${item.desc}</p>
        </div>
        `
        }
    }
}
listContactPage(listContact)


function reRender(cateId) {
    // const cateId = new URLSearchParams(window.location.search).get('cateId')
    const filterCategory = listContact.filter(function (item) {
        return item.blogCateId == cateId
    })
    listContactPage(filterCategory)
}


// // Category mobie - taplet

const filter1 = document.querySelector("#filter-select1");
function filterProduct1() {
    const value1 = listContact.filter(function (item) {
        return item.blogCateId == 1;
    })
    const value2 = listContact.filter(function (item) {
        return item.blogCateId == 2
    })
    const value3 = listContact.filter(function (item) {
        return item.blogCateId == 3
    })
    const value4 = listContact.filter(function (item) {
        return item.blogCateId == 4
    })
    const value5 = listContact.filter(function (item) {
        return item.blogCateId == 5
    })
    const value6 = listContact.filter(function (item) {
        return item.blogCateId == 6
    })

    if (filter1.value == 'all') {
        listContactPage(listContact)
    }
    if (filter1.value == '1') {
        listContactPage(value1)
    }
    if (filter1.value == '2') {
        listContactPage(value2)
    }
    if (filter1.value == '3') {
        listContactPage(value3)
    }
    if (filter1.value == '4') {
        listContactPage(value4)
    }
    if (filter1.value == '5') {
        listContactPage(value5)
    }
    if (filter1.value == '6') {
        listContactPage(value6)
    }
}

if (filter1) {
    filter1.addEventListener("change", filterProduct1)
}

