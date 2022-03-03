function solve() {
   let allButtonsElements = Array.from(document.getElementsByClassName("add-product"))
   let textareaElement = document.getElementsByTagName("textarea")[0]
   let totalSum = 0
   let productsBought = []
   for (let button of allButtonsElements){
      button.addEventListener("click", function(e){
      let item = e.currentTarget.parentNode.parentNode.getElementsByClassName("product-title")[0].textContent
      let price = Number(e.currentTarget.parentNode.parentNode.getElementsByClassName("product-line-price")[0].textContent)
      totalSum += price
      if (!productsBought.includes(item)){
         productsBought.push(item)
      }
      textareaElement.textContent += `Added ${item} for ${price.toFixed(2)} to the cart.\n`
         
      })
   }
   let buttonCheckoutElement = document.getElementsByClassName("checkout")[0]
   buttonCheckoutElement.addEventListener("click", function(e){
      e.currentTarget.disabled = true
      for (let button of allButtonsElements){
         button.disabled = true
      }
      textareaElement.textContent += `You bought ${productsBought.join(", ")} for ${totalSum.toFixed(2)}.`
   })
}