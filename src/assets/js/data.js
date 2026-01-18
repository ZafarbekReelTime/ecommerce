// =========================
// ALL IMAGE IMPORTS
// =========================

import logo from '../img/Logo/Logo.png'

// Home swiper img
import mainoffer from '../img/mainoffer.png'

// Trending images
import frame1437 from '../img/Frame1437.png'
import frame1438 from '../img/Frame1438.png'
import frame1439 from '../img/Frame1439.png'
import frame1444 from '../img/Frame1444.png'
import frame1445 from '../img/Frame1445.png'

// Reklame images
import image4 from '../img/image4.png'
import image5 from '../img/image5.png'

// Product images
import cardimg1 from '../img/cardimg1.png'
import cardimg2 from '../img/cardimg2.png'
import cardimg3 from '../img/cardimg3.png'
import cardimg4 from '../img/cardimg4.png'

// Icons
import qidiruv from '../img/icons/search.png'
import yurak from '../img/icons/heart.png'
import savat from '../img/icons/basket.png'
import email from '../img/icons/email.png'
import leave from '../img/icons/leave.png'
import menu from '../img/icons/menu.png'
import yopish from '../img/icons/close.png'
import group from '../img/icons/gr.png'
import soroq from '../img/icons/soroq.png'
import chap from '../img/icons/left.png'
import ong from '../img/icons/right.png'
import top from '../img/icons/top.png'

// Social media icons
import facebook from '../img/icons/facebook.png'
import xd from '../img/icons/xd.png'
import insta from '../img/icons/insta.png'
import youtube from '../img/icons/youtube.png'

// =========================
// DATACODE
// =========================
export const datacode = {
  container: 'w-full max-w-[1543px] px-5 mx-auto'
}

// =========================
// BASE PRODUCT TEMPLATE
// =========================
const baseProduct = {
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magnam aliquid placeat optio tenetur explicabo odit eligendi nostrum ipsum.",
  badge: "Just in",
  ageLimit: "12+",
  discountText: "Extra 20% Off SPRING",
  price: 145,
  currency: "$",
  soldInfo: "140 purchased in the last 7 days",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  category: "Men's clothing",
  value: "$199",
  text: "New",
  prise: "$149",
  lastday: "Last chance today",
  clothesType: "T-Shirts",
  cardnameSize: ["XS", "S", "M", "L", "XL", "XXL"]
}

// =========================
// PRODUCT LIST
// =========================
const productImages = [cardimg1, cardimg2, cardimg3, cardimg4]

export const ProductAPI = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  cardImage: productImages[index % productImages.length], // main image
  cardimageType: [cardimg1, cardimg2, cardimg3, cardimg4],  // gallery / thumbnails
  cardName: `Air Jordan ${index + 1}`,
  ...baseProduct
}))

// =========================
// DATA IMAGE EXPORT
// =========================
export const dataImage = {
  logo, qidiruv, yurak, savat, mainoffer, frame1437, frame1438, frame1439, frame1444, frame1445,
  image4, image5, cardimg1, cardimg2, cardimg3, cardimg4,
  email, leave, facebook, xd, insta, youtube,
  menu, yopish, group, soroq, chap, ong, top
}
