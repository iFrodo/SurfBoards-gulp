const openItem = item =>{
const container = item.closest('.team__item')
const contentBlock = container.find('.team__about')
const textBlock = contentBlock.find('.team__about-block')
const reqHeight = textBlock.height()
const descPolygon = container.find('.team__desc')
container.addClass('active')
contentBlock.height(reqHeight)
descPolygon.css('transform','rotate(60deg)')


}
const closeEveryItem = container =>{
  const items = container.find('.team__about')
  const itemContainer = container.find('.team__item')
  const descPolygon = container.find('.team__desc')
  descPolygon.css('transform','rotate(0deg)')
  itemContainer.removeClass('active')
  items.height(0)
}
$('.team__name').on('click',e=>{
  $this = $(e.currentTarget)
  // $('.team__name').css({'color':'#fff934'})
  const container = $this.closest('.team')
  const elemContainer = $this.closest('.team__item')
  if (elemContainer.hasClass('active')){
    closeEveryItem(container)
  }else{
    closeEveryItem(container)
    openItem($this)
  
  }


})