function getArticleGenerator(articles) {

    function showArticle(){
        let currentArticle = articles.shift()
        if (currentArticle != undefined){
            let getDivContainerElement = document.getElementById("content")
            let newArticle = document.createElement("article")
            newArticle.textContent = currentArticle
            console.log(newArticle)
            getDivContainerElement.appendChild(newArticle)
        }
    }

    return showArticle

}
