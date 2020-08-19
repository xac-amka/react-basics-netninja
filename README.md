## React and Redux tutorial

[React cdn](https://reactjs.org/docs/cdn-links.html)

## What is React Component?
 - Virtual DOM

## What is React State?
 - JS object
 - Describes current state of the component
   > data, UI-state
 - The state a component can be updated over time
   - a modal could close
   - the data we output could change
 - Real world examples
   - Shopping card component
   - Popup component
 - Read more about [this keyword](https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/)

## Create React App?
 > Command line tool to create React apps
 - Developer server
 - Use ES6 features which are not normally supported
 - Keep our code modular
 - Use build tools to create optimized code

## Single Page Apps
 - React apps are typically SPA's
 - Only ever one HTML page served to the browser
 - React then controls what a user sees on that page

## Nesting Components
  > It helps us to maintain our code more clean and structured way.

## What Is Props?
 - The way to pass data between components

## Container vs UI Components
 |Container|UI Components|
 |---|---|
 |Contain state|Don't contain|
 |Contain lifecycle hooks|Receive data from props|
 |Not concerned with UI|Only concerned with UI|
 |Use class to create|Use functions to create|

## React CSS
 >[preference](https://blog.pusher.com/css-modules-react/)

## Lifecycle methods
 > [Link for more](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
 - Mounting
 - Updating
 - Unmounting


## React Router
 - React router serves client side.
 - Difference between **NavLink** and **Link**
   - NavLink -> has an active class when click
   - Link -> has not an active class when click
 - **withRouter** is a higher order component
 > It takes normal component and make it to _Supercharged Component_.

## Route Parameters
 - Part of a URL that can change
 - Usually see them on URLs for individual records
 User Profile Route:
 - _mysite.com/users/12wqdsa2_
 - _mysite.com/users/a3ead3g9_

## Redux
 - Central data store for all app data
 - Any component can access data from it
 - Makes state managament easy
