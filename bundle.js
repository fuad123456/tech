'use strict';

var version = "1.0.0";

// // Import our custom CSS
// import './src/scss/style.scss'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import './node_modules/swiper/swiper-bundle.min.css';
// import headerTogglerMenu from './src/helpers/headerTogglerMenu';
// // Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
// import Swiper from 'swiper';
// import { Autoplay, Pagination} from 'swiper/modules'
// import { Navigation} from 'swiper/modules';
// //UTILS
// import {searchByCategory} from './src/helpers/utils'
// // import pug from 'pug'///ТАКАЯ БАГА ХРЕН НАЙДЕШЬ!!
// // Регистрируем модули Navigation и Pagination
// Swiper.use([ Autoplay,Navigation, Pagination]);

// // Create an example popover

// // init Swiper:
// const swiper1 = new Swiper('.swiper1', {
// 	// Optional parameters
// 	speed:2500,
// 	// effect: 'fade',
// 	direction: 'horizontal',
// 	// disableOnInteraction:false,
// 	autoplay: {
// 		delay: 1500,
// 	},
// 	loop:true,
// 	autoHeight:true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 	    type: 'bullets',
// 	    clickable: true, // Добавьте эту строку
// 	  },
// }
// )
// headerTogglerMenu()

// const daysEl=document.querySelector('.days')
// const hoursEl=document.querySelector('.hours')
// const minEl=document.querySelector('.min')
// const secEl=document.querySelector('.sec')
// setInterval(()=>{
// let diff=(new Date('20 October 2023 00:28:25') -Date.now())
// let days= Math.trunc(diff/(1000*24*3600))//days
// let hours=Math.trunc((diff/(1000*24*3600)-days)*24)
// let min= Math.trunc((((diff/(1000*24*3600)-days)*24)-hours)*60)
// let sec =Math.trunc((((((diff/(1000*24*3600)-days)*24)-hours)*60)-min)*60)
// daysEl.innerHTML=Math.trunc(days)
// hoursEl.innerHTML=Math.trunc(hours)
// minEl.innerHTML=Math.trunc(min)
// secEl.innerHTML=Math.trunc(sec)
// },1000)
// window.addEventListener('click',function(e){
// 	if(e.target.classList.contains('category-card')){
// 		searchByCategory(e.target)
// 	}
// })

// //Toggle close menu
function main () {
	console.log('version ' + version);
}

module.exports = main;
