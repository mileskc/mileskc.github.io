$(() => {
  //Click event when you press enter button
  $('form').on('click', `#enterWeather`, event => {
    event.preventDefault();
    let $inputBox = $('#input-box');
    let $zipCode = $inputBox.val();

    //Endpoint for OpenWeather API
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${$zipCode},us&units=imperial&appid=54358d797d854fe643545e22f50f01c5`;
    $.ajax({ url: endpoint }).then(handleData);

    $inputBox.val('');
    $('h2').remove();
    $('img').remove();
  });

  //Handle Data function for OpenWeather API
  const handleData = data => {
    const $townName = $('<h2>').attr('id', 'town');
    $townName.text(data.name);
    $('#left').append($townName);

    const $main = $('<h2>');
    $main.text(`Current climate: ${data.weather[0].main}`);
    $('#left').append($main);

    const $temp = $('<h2>');
    $temp.text(`Temperature is ${data.main.temp}°F`);
    $('#left').append($temp);

    //Conditional for photos corresponding to weather keyword
    if (data.weather[0].main === 'Clear') {
      let $clear = $(
        '<img src="https://cdn.pixabay.com/photo/2014/03/27/23/57/blue-sky-299765_1280.jpg" alt="Sunny clear sky">'
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
      let $hail = $(
        '<img src="https://images.unsplash.com/photo-1554320581-2ca71eab767b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Hail">'
      );
      $($main.before($hail));
    } else if (data.weather[0].main === 'Drizzle') {
      let $drizzle = $(
        '<img src="https://images.unsplash.com/photo-1417008914239-59b898b49382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80" alt="Drizzle rain">'
      );
      $($main.before($drizzle));
    } else if (data.weather[0].main === 'Smoke') {
      let $smoke = $(
        '<img src="https://images.unsplash.com/photo-1503217195339-397eb18024e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Smoky Day">'
      );
      $($main.before($smoke));
    } else {
      let $defaultPhoto = $(
        '<img src="https://i.imgur.com/aO6wwTx.jpg" alt="Welcome!">'
      );
      $($main.before($defaultPhoto));
    }

    //Endpoint for last.fm API
    const endpoint2 = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${
      data.weather[0].main
    }&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
    $.ajax({ url: endpoint2 }).then(handleData2);

    //reset screen when typing in a new zip code
    $('h3').remove();
    $('h4').remove();
  };

  //Handle Data function for last.fm API
  const handleData2 = data => {
    //Append data to screen
    const $songToday = $('<h3>');
    $songToday.text("Today's Tune:").attr('id', 'songToday');
    $('#right').append($songToday);

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

    //Endpoint for YouTube API
    const endpoint3 = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
      $songObject.name
    }${$songObject.artist}&key=AIzaSyCB_CT_KePzmlr-VWqMCuzlb09nDK2x904`;

    $.ajax({ url: endpoint3 }).then(handleData3);

    //Reset video when new zip code is entered
    $('iframe').remove();
  };

  //Handle Data function for YouTube API
  const handleData3 = data => {
    const $embedVideo = $('<iframe>', {
      height: 315,
      src: `https://www.youtube.com/embed/${data.items[0].id.videoId}`,
      frameborder: 0,
      allow:
        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    });
    $('#right').append($embedVideo);
  };

  //"About" modal for the page
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  const openModal = () => {
    $modal.css('display', 'block');
  };

  const closeModal = () => {
    $modal.css('display', 'none');
  };
  setTimeout(openModal, 1000);
  $closeBtn.on('click', closeModal);
});
