import './src/scss/style.scss'
import './node_modules/swiper/swiper-bundle.min.css';
import headerTogglerMenu from './src/helpers/headerTogglerMenu';
import * as Popper from "@popperjs/core"

headerTogglerMenu()

//Card toggle position
const cardsComponent = document.querySelector('.cards')
let cols = cardsComponent.querySelectorAll('.card-cols')
const fullPositionBtn = document.querySelector('.full-row')
const blockPositionBtn = document.querySelector('.block-pos')
// cols.forEach(col=>{
// 	col.classList.remove('col-12')
// 	col.classList.add('col-4')
// })
function setBlockPosition(event){
	let target = event.target.parentNode.tagName==="BUTTON" ? event.target.parentNode:event.target
	if( target) {
		if(!target.classList.contains('active')){
			let other = document.querySelectorAll('.toggle-btn')
			other.forEach(function(el){
				el.classList.remove('active')
			})
			target.classList.add('active')
		}
	}
	cardsComponent.classList.remove('full-row-position')
	cardsComponent.classList.add('block-position')
	cols.forEach(col=>{
		col.classList.remove('col-12')
		col.classList.add('col-4')
	})
}
function setFullRowPosition(event){
	let target = event.target.parentNode.tagName==="BUTTON" ? event.target.parentNode:event.target
	if(target){
		if(!target.classList.contains('active')){
			let other = document.querySelectorAll('.toggle-btn')
			other.forEach(function(el){
				el.classList.remove('active')
			})
			target.classList.add('active')
		}
	}
	cardsComponent.classList.remove('block-position')
	cardsComponent.classList.add('full-row-position')
	cols.forEach(col=>{
		col.classList.remove('col-4')
		col.classList.add('col-12')
	})
}
fullPositionBtn.addEventListener('click',function(e){
	setFullRowPosition(e)
})
blockPositionBtn.addEventListener('click',function(e){
	setBlockPosition(e)
})
