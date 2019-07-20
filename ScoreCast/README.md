# Project Summary

ScoreCast is a service that takes a zipcode and returns the current weather and a meteorologically related song for the day. It uses 3 APIs - OpenWeather, last.fm, and YouTube.

# Coding Approach

I started out coding with creating my basic HTML and some CSS to get an idea for the structure of the page. I had drawn a loose wireframe but was open to styling around the functionality of the app. The original MVP goal was just to have to OpenWeather API linked and functioning so then when one enters a zipcode, it should return the current temperature and general weather for that location. I created a conditional so that depending on the key word to describe the weather, a corresponding photo would appear. 

Once that was functioning, I added a second search bar so and linked the last.fm API so that the user was able to search for a song title and have it appear on the page. I then linked the two APIs so that the weather key word result served as the search query in the endpoint for the last.fm API. Because I was unable to directly embed the audio from last.fm into the page, I linked to YouTube's API and used the returned result for song title and artist from last.fm as the query for the YouTube video, which I was able to then embed directly on the page. I added a modal about the page that appears when you visit the link and made the site responsive.

# Unsolved Problems

I was able to solve the majority of the problems I encountered. Initially I had thought it would be fun to create a playlist for the day based on the weather but this would be a little more complicated, and ultimately decided that there would be more daily variety to have one randomized song each day.

# Site Photos



# Link to Site

Visit ScoreCast at https://mileskc.github.io/ScoreCast/html/
