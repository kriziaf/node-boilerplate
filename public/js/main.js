// CUSTOM JS FILE //
window.addEventListener('load', init);

function init() {
        $.ajax({
        url: './data/data.json',
        type: 'GET',
        failure: function(err){
            console.log('something went wrong :(');
        },
        success: function(data){
            console.log(data);
            renderCards(data);
            renderVideos(data);
            //

            $( ".videoFrame" ).hover(function(){
              console.log(this);
              var currentVid = $(this).attr("data-day");
              console.log(currentVid);
              filterCard(currentVid);
              //write a function that passes the currentVid value and renders the correct card based on it
              });
        }
    })
}

function renderCards(data) {
    console.log('render cards works');
    for (i = 0; i < data.length; i++) {

        extractColor(data[i]);
        // var card = buildCard(data[i]);
        // $("#cardHolder").append(card);
    }
}

function filterCard(currentVid){
    console.log(currentVid)

    $('.card').hide();
    $('#card-'+currentVid).show();
    // console.log($('#card-0'))
      // var vidCard = buildCard(cardData, currentVid);



    }

function renderVideos(data) {
    // console.log('render video works');
    for (i = 0; i < data.length; i++) {
        var video = buildVideo(data[i], i);
        $("#videoHolder").append(video);
    }
}

function buildVideo(data, index){
  var imageGif = data.imageURL;
  return '<img src="'+imageGif+'" class="videoFrame" data-day="'+index+'" />'
}

function extractColor(cardData) {
  // console.log(cardData)
  let primaryColor = '';
  // console.log(cardData.imageURL);
    Vibrant.from(cardData.imageURL).getPalette().then(function(palette) {
        let LMrgb = palette.LightMuted._rgb
        primaryColor = "rgba("+LMrgb[0]+","+ LMrgb[1]+"," +LMrgb[2]+", 1)";
      var k = Object.keys(palette);
      for(key of k){
        var rgb = palette[key]._rgb;
      }
      // console.log(primaryColor)
      var card = buildCard(cardData, primaryColor);
      $("#cardHolder").append(card);

    });
}

function buildCard(cardData, colorValue){
  // console.log(cardData)
    var maxMood = 5;
    var maxSteps = 10000;
    // var colorValue = ['rgb(255,0,0)'];
    //cards
    var htmlToReturn =
    '<div class="card" id="card-'+cardData.id+'"">'+
      '<div class="header border">'+
          '<img src="'+cardData.imageURL+'">'+
          '<h1>'+cardData.name+'</h1>'+
          //'<div class="color-holder" style="background-color:'+colorValue+'"></div>'+
      '</div>'+
      '<div class="stats border">'+

        '<div class="statsHolder">'+
          '<div class="subtext">In search of</div>'+
          '<div class="regularFont">'+cardData.search+'</div>'+

        '</div>'+
        '<div class="statsHolder">'+
          '<div class="subtext">I found</div>'+
          '<div class="regularFont">'+cardData.found+'</div>'+

        '</div>'+
      '</div>'+
      '<div class="stats border">'+
          '<div class="ratingViz">'+
            // '<div class="largeFont">'+cardData.moodRating+'</div>'+
            '<div class="subtext">main color</div>'+
          '</div>'+
          //'<div class="barChart">'+
            '<div class="color-holder" style="background-color:'+colorValue+'"></div>'+
            //'<div class="bar" style="width:'+((cardData.moodRating/maxMood)*100)+'%">'+
            //'</div>'+
            '</div>'+

      '<div class="tagList">'+
        '<div class="heading">people or things seen</div>'+
        '<div class="tagHolder">'+
            cardData.objectSeen.map(tag => '<div class="tag">'+tag+'</div>');
            //currentDay.fruits.join(" ")
        '</div>'+
      '</div>'+
    '</div>';

    // console.log(htmlToReturn);
    return htmlToReturn;
}
