// const html = items.results
//   .map(item => {
//     return `
//   <div class="product">
//      <img src="${unescape(items.Images[0].url_fullxfull)}">
//      <h3>${item.title}</h3>
//      <div class="desc">
//          <p>${item.shop.shop_name}</P>
//          <p>Views: ${item.views}</p>
//          <p class="price">$${item.price}</p>
//      </div>
//   </div>
//   `
//   })
//   .join("")
// document.querySelector("#product").innerHTML = html
const html = items.results
  .map(item => {
    return `
<div class="product">
   <img src="${item.Images[0].url_fullxfull}">
   <h3>${item.title}</h3>
   <div class="desc">
       <p>Views: ${item.views}</p>
       <p class="price">$${item.price}</p>
   </div>
</div>
`
  })
  .join("")
document.querySelector("#Products").innerHTML = html
