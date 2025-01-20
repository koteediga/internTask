In this project, 
# User Details App

This is a React.js application that fetches and displays a list of users from an API. The application includes features for searching, filtering, viewing detailed information about each user, and toggling between light and dark modes.

## Features

- **User List**: Displays a list of users fetched from an API.
- **User Details**: View detailed information about a selected user.
- **Search & Filter**: Filter the users based on their name or username.
- **Dark/Light Mode**: Toggle between dark and light modes for a better user experience.

## Technologies Used

- React.js
- React Router
- Context API (for managing dark/light mode)
- Fetch API (to retrieve data from the user API)
- CSS for styling

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/user-details-app.git

### Refer to the videos below:

**Success View** <br/>

<div style="text-align: center;">
     <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-output-v0.mp4" type="video/mp4">
  </video>
</div>
<br/>

**Failure View** <br/>

<div style="text-align: center;">
    <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-failure-output-v0.mp4" type="video/mp4">
  </video>
</div>
<br/>

### Design Files



<details>
<summary>Home Route</summary>

## Home Route

The **Home Route** (`/`) is the main entry point of the application. When you visit this route, it will display a list of users fetched from the **JSONPlaceholder API**. This route is responsible for:

- Fetching and displaying a list of users.
- Providing a link to view the details of each user.
- Enabling the dark mode and light mode toggle functionality.

### Features:
- Displays a paginated list of users.
- Each user can be clicked to view more detailed information.
- Supports both light and dark themes, which can be toggled by the user.</details>

<details>
<summary>UserrDetails Route</summary>

## UserDetails Page

The **UserDetails Page** (`/user/:id`) is responsible for displaying detailed information about a specific user. When a user clicks on a specific user from the Home Route, they are navigated to this page, where more detailed information about the user is shown. The page fetches user data from the **JSONPlaceholder API** using the `id` parameter passed in the URL.

### Features:
- Displays detailed information such as:
  - Name
  - Username
  - Email
  - Phone number
  - Address
  - Company information
  - Website link
- Supports dark and light themes, which adjust the text color, background color, and button styles.
- Provides a **Back Button** to navigate back to the Home Route.

### URL Structure:
- **Route:** `/user/:id`
  - The `:id` is a dynamic parameter representing the unique ID of the user.

Example of user URL:
- `/user/1`

</details>


</details>

<details>
<summary>Not Found Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-page-not-found-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-page-not-found-light-theme-lg-output-v0.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the app should be in **Light** theme

- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the Login Route
  - When an _authenticated_ user tries to open the Home, Trending, Gaming, Saved Videos, and Video Details Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to open the Login Route, then the page should be navigated to the Home Route
  - When the **Show Password** checkbox is checked, then the password should be shown
  - When the **Show Password** checkbox is unchecked, then the password should be masked

- **Home Route**

  - When an _authenticated_ user opens the Home Route,
    - An HTTP GET request should be made to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with the initial value as an empty string
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-light-theme-lg-output-v0.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Home Videos API URL**
    - When a non-empty value is provided in the search input and the search icon button is clicked
      - Make an HTTP GET request to the **Home Videos API URL** with `jwt_token` in the Cookies and query parameter `search` with value as the text provided in the search input
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the list of videos should be displayed
    - When the HTTP GET request made to the **Home Videos API URL** returns an empty list, then the [No Videos View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-light-theme-lg-output-v0.png) should be displayed
  - When a **Video** is clicked, then the page should be navigated to the Video Item Details Route
  - When the **Trending** link in the Sidebar is clicked, then the page should be navigated to the Trending Route
  - When the **Gaming** link in the Sidebar is clicked, then the page should be navigated to the Gaming Route
  - When the **Saved Videos** link in the Sidebar is clicked, then the page should be navigated to the Saved Videos Route


<details>

<summary>API Requests & Responses</summary>
<br/>

**Home  API**

#### URL: `[https://apis.ccbp.in/videos/all?search=](https://jsonplaceholder.typicode.com/users)`

#### Method: `GET`

#### Description:

Returns a response containing the list of all user

#### Request

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]
```


```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```



### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- To build this project, take a look at the <a href='https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=b01fca1c-aa5c-4d79-b81e-0220e7649bd0&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467' target="_blank">React Popup</a> and <a href='https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=b6392b63-25f6-4215-be09-9f23ad91d789&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467' target="_blank">React Video Player</a> reading materials

- To style popup content use `.popup-content` class

```jsx
<Popup
  modal
  trigger={
    //write code here
  }
  className="popup-content"
>
  //write code here
</Popup>
```

- Use `formatDistanceToNow` function to find the difference between the given date and now in words

```jsx
import {formatDistanceToNow} from 'date-fns'
console.log(formatDistanceToNow(new Date(2021, 8, 20)))
// Return the distance between the given date and now in words.
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Render `Home` Route component when the path in URL matches `/`
- Render `Login` Route component when the path in URL matches `/login`
- Render `Trending` Route component when the path in URL matches `/trending`
- Render `Gaming` Route component when the path in URL matches `/gaming`
- Render `Saved Videos` Route component when the path in URL matches `/saved-videos`
- Render `Video Item Details` Route component when the path in URL matches `/videos/:id`
- Render `Not Found` Route component when the path in URL matches `/not-found`
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`
- User credentials

  ```text
   username: rahul
   password: rahul@2021

  ```

- Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as **loader** to it

  ```jsx
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  </div>
  ```

- The HTML button element with search icon in Home Route should have the `data-testid` attribute value as **searchButton** to it

- **Styled Components** should be used for styling purposes
- The theme icon button should have the `data-testid` as **theme**
- The video thumbnail images in the Routes should have the alt as **video thumbnail**
- The channel logos in Home Route should have the alt as **channel logo**

- **Home Route**

  - The Route should consist of an HTML container element with `data-testid` as **home**
  - The Route should consist of a banner and it contains a close button with `data-testid` as **close**
  - The Route should consist of a banner as shown in the design files with `data-testid` as **banner**
  - The Route should consist of an HTML image element with alt as **nxt watch logo** and src as the given Nxt Watch logo URL in the banner
  - The HTML container element with `data-testid` as **home** should have the background color,
    - If the Light theme is applied, then the **#f9f9f9** color should be applied as a background color
    - If the Dark theme is applied, then the **#181818** color should be applied as a background color

- **Trending Route**

  - The Route should consist of an HTML container element with `data-testid` as **trending**
  - The HTML container element with `data-testid` as **trending** should persist the background color,
    - If the Light theme is applied, then the **#f9f9f9** color should be applied as a background color
    - If the Dark theme is applied, then the **#0f0f0f** color should be applied as a background color

- **Gaming Route**

  - The Route should consist of an HTML container element with `data-testid` as **gaming**
  - The HTML container element with `data-testid` as **gaming** should persist the background color,
    - If the Light theme is applied, then the **#f9f9f9** color should be applied as a background color
    - If the Dark theme is applied, then the **#0f0f0f** color should be applied as a background color

- **Saved Videos Route**

  - The Route should consist of an HTML container element with `data-testid` as **savedVideos**
  - The HTML container element with `data-testid` as **savedVideos** should persist the background color,
    - If the Light theme is applied, then the **#f9f9f9** color should be applied as a background color
    - If the Dark theme is applied, then the **#0f0f0f** color should be applied as a background color

- **Video Item Details Route**

  - The **Video Item Details** Route should consist of an HTML container element with `data-testid` as **videoItemDetails**
  - The HTML container element with `data-testid` as **videoItemDetails** should persist the background color,
    - If the Light theme is applied, then the **#f9f9f9** color should be applied as a background color
    - If the Dark theme is applied, then the **#0f0f0f** color should be applied as a background color

- The **Website logos** for Light theme and Dark theme should have the alt as **website logo**
- The **Failure** images for Light theme and Dark theme should have the alt as **failure view**
- In the Video Item Details Route, the **#2563eb** color should be applied as `color` for any active button i.e (Like, Dislike, Save)
- In the Video Item Details Route, the **#64748b** color should be applied as `color` for any inactive button i.e (Like, Dislike, Save)

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png) alt should be **profile**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png)
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png) alt should be **no videos**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png) alt should be **no saved videos**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png) alt as **not found**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png) **banner background image**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png) alt should be **facebook logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png) alt should be **twitter logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png) alt should be **linkedin logo**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0f0f0f; width: 150px; padding: 10px; color: white">Hex: #0f0f0f</div>
<div style="background-color: #f9f9f9; width: 150px; padding: 10px; color: black">Hex: #f9f9f9</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #f1f1f1; width: 150px; padding: 10px; color: black">Hex: #f1f1f1</div>
<div style="background-color: #181818; width: 150px; padding: 10px; color: white">Hex: #181818</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: black">Hex: #94a3b8</div>
<div style="background-color: #4f46e5; width: 150px; padding: 10px; color: white">Hex: #4f46e5</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #231f20; width: 150px; padding: 10px; color: white">Hex: #231f20</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #212121; width: 150px; padding: 10px; color: white">Hex: #212121</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #00306e; width: 150px; padding: 10px; color: white">Hex: #00306e</div>
<div style="background-color: #ebebeb; width: 150px; padding: 10px; color: black">Hex: #ebebeb</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: black">Hex: #7e858e</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>
<div style="background-color: #ff0000; width: 150px; padding: 10px; color: white">Hex: #ff0000</div>
<div style="background-color: #383838; width: 150px; padding: 10px; color: white">Hex: #383838</div>
<div style="background-color: #606060; width: 150px; padding: 10px; color: white">Hex: #606060</div>
<div style="background-color: #909090; width: 150px; padding: 10px; color: black">Hex: #909090</div>
<div style="background-color: #cccccc; width: 150px; padding: 10px; color: black">Hex: #cccccc</div>
<div style="background-color: #424242; width: 150px; padding: 10px; color: black">Hex: #424242</div>
<div style="background-color: #313131; width: 150px; padding: 10px; color: black">Hex: #313131</div>
<div style="background-color: #f4f4f4; width: 150px; padding: 10px; color: black">Hex: #f4f4f4</div>
<div style="background-color: #424242; width: 150px; padding: 10px; color: black">Hex: #424242</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
# internTask
# internTask
