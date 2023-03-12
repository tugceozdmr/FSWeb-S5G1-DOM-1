const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')

const navigationItems=document.querySelectorAll("nav a");
var i=1;
navigationItems.forEach((a)=>{
  a.textContent=siteContent["nav"]["nav-item-"+i];
  a.setAttribute("class","italic");
i++;
})

const logoImage=document.getElementById("logo-img");
logoImage.src=siteContent["images"]["logo-img"];

var mainText=document.querySelector(".cta-text");
mainText.querySelector("h1").textContent=siteContent["cta"]["h1"];
mainText.querySelector("button").textContent=siteContent["cta"]["button"];

document.getElementById('cta-img').src=siteContent.images['cta-img'];
document.getElementById('cta-img').alt="Image of a code snippet";


document.querySelectorAll(".top-content .text-content h4")[0].textContent=siteContent["ana-içerik"]["özellikler-h4"];
document.querySelectorAll(".top-content .text-content h4")[1].textContent=siteContent["ana-içerik"]["hakkımızda-h4"];

document.querySelectorAll(".top-content .text-content p")[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"];
document.querySelectorAll(" .top-content .text-content p")[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];

const image2=document.querySelector("#middle-img");
image2.setAttribute("src",siteContent.images["accent-img"]);
image2.setAttribute("alt","Bir kod parçası resmi")

document.querySelectorAll(" .bottom-content .text-content h4")[0].textContent=siteContent["ana-içerik"]["servisler-h4"];
document.querySelectorAll(" .bottom-content .text-content p")[0].textContent=siteContent["ana-içerik"]["servisler-içeriği"];

document.querySelectorAll(" .bottom-content .text-content h4")[1].textContent=siteContent["ana-içerik"]["ürünler-h4"];
document.querySelectorAll(" .bottom-content .text-content p")[1].textContent=siteContent["ana-içerik"]["ürünler-içeriği"];

document.querySelectorAll(" .bottom-content .text-content h4")[2].textContent=siteContent["ana-içerik"]["vizyon-h4"];
document.querySelectorAll(" .bottom-content .text-content p")[2].textContent=siteContent["ana-içerik"]["vizyon-içeriği"];

const iletisimText = document.querySelectorAll("h4");
iletisimText[5].textContent = siteContent.iletisim["iletişim-h4"];

const iletisimBilgileri =document.querySelectorAll("p");
iletisimBilgileri[5].textContent = siteContent.iletisim.adres;
iletisimBilgileri[6].textContent = siteContent.iletisim.telefon;
iletisimBilgileri[7].textContent = siteContent.iletisim.email;

const footerText=document.querySelector("footer a");
footerText.setAttribute("class","bold");
footerText.textContent=siteContent["footer"]["copyright"];


/* Kodlar Buradan aşağıya
document.getElementById('cta-img').setAttribute('src',siteContent.images['cta-img']); */