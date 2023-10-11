
let viewGoodsAll= document.querySelectorAll('.view-goods')
viewGoodsAll.forEach(viewGoods=>{
	viewGoods.addEventListener('click', function(e){
		viewGoodsAll.forEach(el=>el.classList.remove('active'))
		this.classList.add('active')
	})
})