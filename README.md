# Podcast App

A React-based podcast discovery application that allows users to browse podcasts, search for shows, explore detailed podcast information, and navigate through seasons and episodes using dynamic routing.

The application consumes data from an external Podcast API and demonstrates modern frontend development concepts such as reusable React components, Context API, asynchronous data fetching, React Router, responsive layouts, and clean project architecture.

---

# Table of Contents

- Introduction
- Project Description
- Project Goals
- Features
- Application Workflow
- Technologies Used
- Project Structure
- Application Architecture
- API Integration
- State Management
- Routing
- Error Handling
- Responsive Design
- Installation
- Running the Application
- Available Scripts
- Future Improvements
- Known Limitations
- Author

---

# Introduction

Podcast App is a single-page React application designed to make discovering podcasts simple and enjoyable.

Users can browse available podcast shows, search for specific titles, navigate to dedicated podcast pages, and explore seasons and episodes through an intuitive interface.

The application emphasises clean architecture, reusable components, maintainable code, and an enjoyable user experience.

---

# Project Description

The project retrieves podcast information from a REST API and presents it in a structured and responsive interface.

Instead of loading every piece of information at once, users begin on a homepage displaying podcast previews. Selecting a podcast opens a dedicated detail page where additional information is loaded dynamically.

This approach improves navigation while reducing unnecessary data loading.

---

# Project Goals

The primary objectives of the project were to:

- Build a responsive React application.
- Consume data from an external API.
- Implement dynamic routing using React Router.
- Display detailed podcast information.
- Preserve application state during navigation.
- Organise the application using reusable components.
- Maintain a clean and scalable folder structure.
- Produce maintainable and readable code.

---

# Features

## Browse Podcasts

Users can browse available podcasts displayed as cards.

Each card contains:

- Podcast artwork
- Podcast title
- Genre information
- Last updated date

Selecting a card opens a dedicated page for that podcast.

---

## Search

Users can search podcasts by title.

Search updates the displayed results dynamically, allowing users to quickly locate podcasts without manually browsing every item.

---

## Genre Filtering

Podcasts can be filtered using available genres, making it easier to discover content within specific categories.

---

## Sorting

Users can organise podcast results using available sorting options to improve the browsing experience.

---

## Dynamic Show Pages

Each podcast has its own dedicated page generated through React Router.

Every page displays:

- Podcast title
- Cover artwork
- Description
- Genres
- Seasons
- Episodes
- Last updated information

---

## Season Navigation

Users can move between podcast seasons without excessive scrolling.

Each season displays:

- Season title
- Episode count
- Season artwork

---

## Episode Information

Episodes display:

- Episode number
- Episode title
- Description
- Episode image

This provides users with sufficient information before selecting content.

---

# Application Workflow

The application follows the user journey below.

```
Home Page

↓

Browse Podcasts

↓

Search / Filter / Sort

↓

Select Podcast

↓

Show Detail Page

↓

Browse Seasons

↓

View Episodes
```

This workflow creates a straightforward navigation experience while reducing unnecessary complexity.

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Building reusable user interface components |
| JavaScript (ES6+) | Application logic |
| React Router DOM | Dynamic routing |
| React Context API | Global state management |
| React Hooks | Managing component state |
| Fetch API | Retrieving podcast data |
| CSS Modules | Component-level styling |
| CSS3 | Responsive layouts |
| Vite | Development environment and build tool |
| Git & GitHub | Version control |
| JSDoc | Code documentation |

---

# Project Structure

```
src
│
├── api
│   ├── fetchPodcasts.js
│   └── fetchShow.js
│
├── components
│   ├── EpisodeCard
│   ├── GenreFilter
│   ├── Header
│   ├── Pagination
│   ├── PodcastCard
│   ├── PodcastGrid
│   ├── SearchBar
│   ├── SeasonNavigation
│   └── SortSelect
│
├── context
│   └── PodcastContext.jsx
│
├── pages
│   ├── HomePage.jsx
│   ├── ShowDetailPage.jsx
│   └── NotFoundPage.jsx
│
├── utils
│
├── App.jsx
├── main.jsx
├── data.js
└── index.css
```

---

# Application Architecture

The project follows a modular architecture where responsibilities are separated into different parts of the application.

```
User

↓

React Components

↓

Context API

↓

API Layer

↓

Podcast API
```

Separating presentation, application state and API communication improves maintainability and makes future enhancements easier to implement.

---

# API Integration

Podcast information is retrieved from an external REST API.

Endpoints used include:

### Podcast List

Returns podcast previews displayed on the homepage.

```
https://podcast-api.netlify.app
```

---

### Podcast Details

Returns detailed information for a selected podcast.

```
https://podcast-api.netlify.app/id/:id
```

---

### Genres

Returns podcast genre information.

```
https://podcast-api.netlify.app/genre/:id
```

---

# State Management

Global application state is managed using the React Context API.

Shared state includes:

- Podcast collection
- Search query
- Selected filters
- Selected podcast
- Current season
- Loading state
- Error state

Using Context API reduces unnecessary prop drilling and improves communication between components.

---

# Routing

React Router enables navigation between pages.

Routes include:

```
/
```

Home page.

```
/show/:id
```

Podcast detail page.

```
*
```

Custom Not Found page.

Dynamic routing allows every podcast to have its own unique page.

---

# Error Handling

The application gracefully handles situations such as:

- Invalid podcast IDs
- API request failures
- Empty responses
- Missing podcast information

Rather than crashing, the application provides clear feedback to users.

---

# Responsive Design

Podcast App has been designed using responsive layouts that adapt to different screen sizes.

The interface has been optimised for:

- Mobile devices
- Tablets
- Desktop computers

Responsive behaviour is achieved through flexible layouts and CSS Modules.

---

# Installation

Clone the repository.

```bash
git clone <repository-url>
```

Navigate into the project folder.

```bash
cd podcast-app
```

Install dependencies.

```bash
npm install
```

---

# Running the Application

Start the development server.

```bash
npm run dev
```

Vite will start the local development server and display a local URL in the terminal.

Open the application in your browser using:

```
http://localhost:5173/
```

If the port changes, use the URL displayed in your terminal.

---

# Available Scripts

Start the development server.

```bash
npm run dev
```

Create a production build.

```bash
npm run build
```

Preview the production build locally.

```bash
npm run preview
```

---

# Future Improvements

Possible enhancements include:

- User authentication
- Favourite podcasts
- Audio playback
- Playlist functionality
- Dark mode
- Infinite scrolling
- Podcast recommendations
- Offline support
- Recently viewed podcasts
- User profiles

---

# Known Limitations

Current limitations include:

- No user authentication
- No podcast playback
- Dependence on external API availability
- No backend database
- No persistent user preferences

These limitations were accepted to maintain focus on the application's primary functionality.

---

# Author

**Developer:** Sijabulile Ncube

**Project:** Podcast App

**Created:** July 2026

---

> *"Good frontend applications do more than display information—they guide users through a seamless experience while remaining maintainable, scalable, and easy to extend."*