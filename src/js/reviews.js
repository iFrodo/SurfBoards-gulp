const findBlockByAlias = alias =>{
  return $('.reviews__item').filter((ndx,item)=>{
    return $(item).attr('data-linked-with') === alias
  })
}
$('.reviews__link').on('click',e=>{
  e.preventDefault()

  const $this = $(e.currentTarget)
  const target = $this.attr('data-open')
  const itemToShow = findBlockByAlias(target)
  const curItem = $this.closest('.reviews__link')
  itemToShow.addClass('reviews__item--active').siblings().removeClass('reviews__item--active')
  curItem.addClass('reviews__link--active').siblings().removeClass('reviews__link--active')
})