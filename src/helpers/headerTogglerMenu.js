export default function headerTogglerMenu(){
let menuBtn=document.querySelector('.menu-button')
menuBtn.addEventListener('click',toggleHeight)
function toggleHeight() {
	const block = document.querySelector('.menu');
	if (block.clientHeight ==0 ){
		block.style.height = `${block.scrollHeight}px`
	} else {
		block.style.height = '0'
	}
	// const logo =document.querySelector('.logo')
	// let positionMenuBtn = menuBtn.getBoundingClientRect()
	// closeBtn.style.top= positionMenuBtn.top+'px'
	// closeBtn.style.left= positionMenuBtn.left+'px'
	// console.log(block.clientHeight);
	// console.log(block.scrollHeight);
  }

}