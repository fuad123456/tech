export const searchByCategory=function(target){
const svgElements=document.querySelectorAll('.category-card')
svgElements.forEach(el=>{
	//FOR ALL
	el.classList.remove('active')
	const objectEl=el.querySelector('object')
	const svgEl=objectEl.contentDocument
	const picture=svgEl.getElementById('Vector')
	picture.setAttribute('style', 'fill: #000')
	//FOR TARGET
	target.classList.add('active')
	const targetEl=target.querySelector('object')
	const targetSvgEl=targetEl.contentDocument
	const targetPicture=targetSvgEl.getElementById('Vector')
	if(!target.classList.contains('active')){
		targetPicture.removeAttribute('style')
		targetPicture.setAttribute('style', 'fill:rgb(0, 0, 0)')
	} else{
		targetPicture.removeAttribute('style')
		targetPicture.setAttribute('style', 'fill:rgb(255, 255, 255)')
	}
})
}