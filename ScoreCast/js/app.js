console.log('working?');

$(() => {
  $('form').on('click', `#enterWeather`, event => {
    event.preventDefault();
    let $inputBox = $('#input-box');
    let $zipCode = $inputBox.val();
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?zip=${$zipCode},us&units=imperial&appid=54358d797d854fe643545e22f50f01c5`;
    $.ajax({ url: endpoint }).then(handleData);

    $inputBox.val('');
    $('h2').remove();
    $('img').remove();
    // console.log(endpoint);
    // console.log('clicked');
    // console.log($zipCode);
  });

  const handleData = data => {
    console.log(data);
    const $townName = $('<h2>').attr('id', 'town');
    $townName.text(data.name);
    $('#left').append($townName);

    const $main = $('<h2>');
    $main.text(`Looks like it's ${data.weather[0].main} today`);
    $('#left').append($main);

    const $temp = $('<h2>');
    $temp.text(`Temperature is ${data.main.temp}°F`);
    $('#left').append($temp);

    if (data.weather[0].main === 'Clear') {
      let $clear = $(
        '<img src="https://cdn.pixabay.com/photo/2014/03/27/23/57/blue-sky-299765_1280.jpg" alt="Sunny clear sky">'
        //https://media1.thehungryjpeg.com/thumbs/800_3549446_ksv2wy8k5t06sv4je2vyjmsbqhaoz2eod9hk5ejg.jpg" alt="Sunny clear sky
      );
      $($main.before($clear));
    } else if (data.weather[0].main === 'Rain') {
      let $rain = $(
        '<img src="https://www.theguardian.pe.ca/media/photologue/photos/cache/34450116_l_large.jpg" alt="Rainy Day"">'
      );
      $($main.before($rain));
    } else if (data.weather[0].main === 'Haze') {
      let $haze = $(
        '<img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/soft-afternoon-light-in-a-silky-hazy-sky-mark-woollacott.jpg">'
      );
      $($main.before($haze));
    } else if (data.weather[0].main === 'Clouds') {
      let $clouds = $(
        '<img src= "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt = "Cloudy Sky">'
      );
      $($main.before($clouds));
    } else if (data.weather[0].main === 'Thunderstorm') {
      let $storm = $(
        '<img src = "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80" alt="Thunderstorm">'
      );
      $($main.before($storm));
    } else if (data.weather[0].main === 'Mist') {
      let $mist = $(
        '<img src="https://images.unsplash.com/photo-1495294926616-f282c4219dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Misty Day">'
      );
      $($main.before($mist));
    } else if (data.weather[0].main === 'Hail') {
      let $mist = $(
        '<img src="https://images.unsplash.com/photo-1554320581-2ca71eab767b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Hail">'
      );
      $($main.before($mist));
    } else if (data.weather[0].main === 'Drizzle') {
      let $clear = $(
        '<img src="https://images.unsplash.com/photo-1417008914239-59b898b49382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80" alt="Drizzle rain">'
        //https://media1.thehungryjpeg.com/thumbs/800_3549446_ksv2wy8k5t06sv4je2vyjmsbqhaoz2eod9hk5ejg.jpg" alt="Sunny clear sky
      );
      $($main.before($clear));
    }

    const endpoint2 = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${
      data.weather[0].main
    }&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
    $.ajax({ url: endpoint2 }).then(handleData2);

    $('h3').remove();
    $('h4').remove();
    $('a').remove();

    // const endpoint3 = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${}&key=AIzaSyCB_CT_KePzmlr-VWqMCuzlb09nDK2x904`
  };

  //   $('form').on('click', `#enterMusic`, event => {
  //     event.preventDefault();
  //     let $inputBox2 = $('#input-box2');
  //     let $tag = $inputBox2.val();
  //     // const endpoint = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${$tag}&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
  //     const endpoint2 = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${$tag}&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
  //     $.ajax({ url: endpoint2 }).then(handleData2);
  //     $inputBox2.val('');
  //     $('h3').remove(); ///make it so it doesn't remove weather h2
  //     console.log(endpoint);
  //     console.log('clicked');
  //     // console.log($tag);
  //   });

  const handleData2 = data => {
    console.log(data);
    // const $name = $('<h3>');
    // $name.text(data.tracks.track[0].name);
    // $('body').append($name);

    // const $trackLink = $('<h3>');
    // $trackLink.text(data.tracks.track[0].url);
    // $('body').append($trackLink);

    const $songToday = $('<h3>');
    $songToday.text("Today's Tune:").attr('id', 'songToday');
    $('#right').append($songToday);

    // const $songName = $('<h3>');
    // $songName.text(data.results.trackmatches.track[0].name);
    // $('body').append($songName);

    const $songObject =
      data.results.trackmatches.track[
        Math.floor(Math.random() * data.results.trackmatches.track.length)
      ];

    const $songName = $('<h3>');
    $songName.text($songObject.name);
    $('#right').append($songName);

    const $artist = $('<h3>');
    $artist.text('by ' + $songObject.artist);
    $('#right').append($artist);

    // const $trackLink = $('<a>');
    // $trackLink.attr('href', $songObject.url);
    // $trackLink.text('Go to track!');
    // // $trackLink.text(data.results.trackmatches.track[0].url);
    // $('body').append($trackLink);

    const endpoint3 = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
      $songObject.name
    }${$songObject.artist}&key=AIzaSyCB_CT_KePzmlr-VWqMCuzlb09nDK2x904`;

    $.ajax({ url: endpoint3 }).then(handleData3);
    console.log(endpoint3);
    console.log($songName);

    $('iframe').remove();

    // const $songName = $('<h3>');
    // $songName.text(
    //   data.results.trackmatches.track[
    //     Math.floor(Math.random() * data.results.trackmatches.track.length)
    //   ].name
    // );
    // $('body').append($songName);

    // const $artist = $('<h3>');
    // $artist.text('by ' + data.results.trackmatches.track[0].artist);
    // $('body').append($artist);

    // const $artist = $('<h3>');
    // $artist.text(
    //   'by ' +
    //     data.results.trackmatches.track[
    //       Math.floor(Math.random() * data.results.trackmatches.track.length)
    //     ].artist
    // );
    // $('body').append($artist);

    // const $trackLink = $('<a>');
    // $trackLink.attr('href', data.results.trackmatches.track[0].url);
    // $trackLink.text('Go to track!');
    // // $trackLink.text(data.results.trackmatches.track[0].url);
    // $('body').append($trackLink);

    // const $trackLink = $('<a>');
    // $trackLink.attr(
    //   'href',
    //   data.results.trackmatches.track[
    //     Math.floor(Math.random() * data.results.trackmatches.track.length)
    //   ].url
    // );
    // $trackLink.text('Go to track!');
    // // $trackLink.text(data.results.trackmatches.track[0].url);
    // $('body').append($trackLink);

    // const $trackEmbed =
  };

  const handleData3 = data => {
    console.log(data);
    console.log(data.items[0].id.videoId);
    const $embedVideo = $('<iframe>', {
      //   width: 80,
      height: 315,
      src: `https://www.youtube.com/embed/${data.items[0].id.videoId}`,
      frameborder: 0,
      allow:
        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    });
    $('#right').append($embedVideo);
  };

  //   $('form').on('click', `#enterVid`, event => {
  //     event.preventDefault();
  //     let $inputBox2 = $('#input-box3');
  //     let $tag = $inputBox3.val();
  //     // const endpoint = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${$tag}&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
  //     const endpoint2 = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${$tag}&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
  //     $.ajax({ url: endpoint2 }).then(handleData2);
  //     $inputBox2.val('');
  //     $('h3').remove(); ///make it so it doesn't remove weather h2
  //     console.log(endpoint);
  //     console.log('clicked');
  //     // console.log($tag);
  //   });

  const $modal = $('#modal');
  const $closeBtn = $('#close');

  const openModal = () => {
    $modal.css('display', 'block');
  };

  const closeModal = () => {
    $modal.css('display', 'none');
  };
  setTimeout(openModal, 2000);
  $closeBtn.on('click', closeModal);
});

//   let $inputBox = $('#input-box');
//   let $zipCode = $inputBox.val();
//   let endpoint = `http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=54358d797d854fe643545e22f50f01c5`;

//   const handleData = data => {
//     console.log(data);
//   };

//   $.ajax({
//     url: endpoint
//   }).then(handleData);

// api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=54358d797d854fe643545e22f50f01c5

// weather.main: Clear, Rain, Haze, Clouds, Thunderstorm

// https://media4.s-nbcnews.com/i/newscms/2018_16/1333661/lightening-stock-today-180420-tease_4aeb5d5a1bdfb4d9b15ba54730fbb086.jpg

// http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json

// try adding:
// const endpoint2 = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${$tag}&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
//     $.ajax({ url: endpoint2 }).then(handleData2);

// const endpoint2 = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
//     $.ajax({ url: endpoint2 }).then(handleData2);

//using disco as place holder right now but can eventually use some sort of variable/array to loop through for tag name, or search song by something else

//maybe randomize the index that it's calling to get a different song every time

// http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json

//plan A: Attempt to embed lastfm link
//plan B: use different Music API where I Can embed the audio
//plan C: link to third API using search term returned from lastfm where I can embed the audio

// yt_search(term = NULL, max_results = 50, channel_id = NULL,
//     channel_type = NULL, type = "video", event_type = NULL,
//     location = NULL, location_radius = NULL, published_after = NULL,
//     published_before = NULL, video_definition = "any",
//     video_caption = "any", video_license = "any", video_syndicated = "any",
//     video_type = "any", simplify = TRUE, get_all = TRUE,
//     page_token = NULL, ...)

//Youtube API key: AIzaSyCB_CT_KePzmlr-VWqMCuzlb09nDK2x904

//https://www.googleapis.com/youtube/v3/search?part=snippet&q=surfing&key=[YOUR_API_KEY]

//https://cdn.pixabay.com/photo/2014/03/27/23/57/blue-sky-299765_1280.jpg

///ADD snow condition
//sleet?
