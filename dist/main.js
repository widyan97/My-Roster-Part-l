
const renderer = new Renderer()

const getTeam= function () {
    let input = $("#team-input").val()

    $.get(`teams/${input}`, function (players) {

        renderer.render(players.teamPlayers)
    })
}

const onImageError = function(object){
    $(object).attr("src","https://thewhitonline.com/wp-content/uploads/2018/10/silhouette-3272331_1280.png")
}
  

