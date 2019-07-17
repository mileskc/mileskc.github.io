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
    const $townName = $('<h2>');
    $townName.text(data.name);
    $('body').append($townName);

    const $main = $('<h2>');
    $main.text(data.weather[0].main);
    $('body').append($main);

    const $temp = $('<h2>');
    $temp.text(`${data.main.temp}°F`);
    $('body').append($temp);

    if (data.weather[0].main === 'Clear') {
      let $clear = $(
        '<img src="https://media1.thehungryjpeg.com/thumbs/800_3549446_ksv2wy8k5t06sv4je2vyjmsbqhaoz2eod9hk5ejg.jpg" alt="Sunny clear sky">'
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
        '<https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80" alt="Thunderstorm">'
      );
      $($main.before($storm));
    } else if (data.weather[0].main === 'Mist') {
      let $mist = $(
        '<img src="https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" alt="Misty Day">'
      );
      $($main.before($mist));
    }

    const endpoint2 = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${
      data.weather[0].main
    }&api_key=241e400dcad5f275ae171eefc9ad9b3d&format=json`;
    $.ajax({ url: endpoint2 }).then(handleData2);

    $('h3').remove();
    $('h4').remove();
    $('a').remove();
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

    const $songToday = $('<h4>');
    $songToday.text("Today's Tune:");
    $('body').append($songToday);

    // const $songName = $('<h3>');
    // $songName.text(data.results.trackmatches.track[0].name);
    // $('body').append($songName);

    const $songName = $('<h3>');
    $songName.text(
      data.results.trackmatches.track[
        Math.floor(Math.random() * data.results.trackmatches.track.length)
      ].name
    );
    $('body').append($songName);

    // const $artist = $('<h3>');
    // $artist.text('by ' + data.results.trackmatches.track[0].artist);
    // $('body').append($artist);

    const $artist = $('<h3>');
    $artist.text(
      'by ' +
        data.results.trackmatches.track[
          Math.floor(Math.random() * data.results.trackmatches.track.length)
        ].artist
    );
    $('body').append($artist);

    // const $trackLink = $('<a>');
    // $trackLink.attr('href', data.results.trackmatches.track[0].url);
    // $trackLink.text('Go to track!');
    // // $trackLink.text(data.results.trackmatches.track[0].url);
    // $('body').append($trackLink);

    const $trackLink = $('<a>');
    $trackLink.attr(
      'href',
      data.results.trackmatches.track[
        Math.floor(Math.random() * data.results.trackmatches.track.length)
      ].url
    );
    $trackLink.text('Go to track!');
    // $trackLink.text(data.results.trackmatches.track[0].url);
    $('body').append($trackLink);

    // const $trackEmbed =
  };
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
