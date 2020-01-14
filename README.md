# React-Webpack-Starter-2020

to install, please run 'npm install'.
to run in development mode, please run 'npm run'.

My approach was first to build a React/webpack config to build out the platform in. Maybe overkill, but I hope that the distinction between reaching for a create-react-app or similar starter kit vs actually building my own from scratch shows that I have some knowledge of what's going on under the hood.

With my basic React environment set up, I began working on the app - I quickly built out a mock navbar and splash section to hold the data/visualisations. To show the current time and whether the market was currently open or closed, I built out some vanilla JS logic in marketLogic/getCurrentTime.js. I manually set the time zone to NYC. The output is the first piece of data displayed in the splash section of the landing page.

To show today's Market Trading Volume, I attempted to use IEX cloud API, as this seemed to be the only API I could find which provided this metric. However, after a few rounds of duking it out with their interface,I unfortunately reached the conclusion that I could not reach this endpoint with a free-tier account (repeatedly got back 402 errors - payment required). To mitigate this, I instead used the same JSON I should have expected to get back, instead just stored as dummy data in marketVolume.js. I wasn't sure how to visually display this data, so I picked out what I guessed to be the relevant bits and displayed them in a sequential list.

The next challenge proved even more difficult - no matter where I looked, I could not find today's favorited stocks available for free through any API. Had I been able to find and query this data, I would have displayed it in another sequential list - a similar side-scrolling view where each stock would be displayed by its symbol on top, and underneath each, the current price in green and its % change today in either green or red depending on whether it had a negative or positive change.

Next, I implemented a form field for a user to look up any stock of their choice. The user can input the symbol as text, and my app will query worldtradingdata.com (which is very limited in its available functionality but at least allows usage with a free account), receiving back and object of key-value pairs with corresponding data for that stock. In the time available I couldn't easily find historical pricing data without sending multiple requests, so instead I opted to display the stock's symbol, name, current price in green, and daily change in either green or red. Additionally, the user can opt to "add to favorites", which will store this stock in state and display a list of all favorites at the bottom of the page. In the interest of time, I originally opted to display all of this information on the same page as the search bar, hoping to move it to a separate page - using React Router and either passing the results data as a prop to the child page and displaying it on a generic 'results' page, or dynamically rendering a new page for each new symbol query. Ultimately I didn't have time to complete either of these.

I believe that the things which tripped me up the most in this challenge was unfamiliarity with working with financial API's and data - it's something I haven't done before and I often found myself a little bit lost trying to understand what I should be looking for in the API references/docs, what to display after fetching, and how best to display it. I also was not sure what the prompt meant as far as 'We are going to evaluate your submission in three areas: UX / look & feel, testing and
functionality.' - Should I have written my own tests? I'm comfortable with unit/integration testing but didn't have time.

If I had two weeks to work on this, I would ask a lot of questions beforehand and become more familiar with financial data and visualizations. In two weeks, I would build out a full stack app - storing and caching relevant API data in a database, implementing user authorization/authentication, dynamic page creation with React Router, and eventually Dockerize and deploy. 

Overall I enjoyed this challenge and would be eager to hear any feedback you folks think would be beneficial!

-Chris