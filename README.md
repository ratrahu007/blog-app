🚀 Rahul Blog App – Learning Showcase

A React Blog App demonstrating core React concepts, hooks, routing, state management, context, and Bootstrap styling.
Focus is on learning by building and applying concepts in a real-world project.

🔹 Concepts & Their Implementation

📝 JSX & Functional Components
All components are functional (Navbar.jsx, PostCard.jsx, Home.jsx). JSX is used to render HTML-like syntax dynamically with React state and props.

📦 Props
PostCard.jsx accepts title and body as props to render post content.
Props are passed from Posts.jsx where API data or localStorage posts are mapped.

⚡ State (useState)
PostForm.jsx manages form inputs (title, body) using useState.
PostCard.jsx uses state for Like button or show/hide post body.

🎯 Events

Form submission (onSubmit) in PostForm.jsx

Button clicks for Like or Read More in PostCard.jsx

📋 Lists & Conditional Rendering

Posts rendered using .map() in Posts.jsx

Conditional rendering for:

Loading... message when fetching posts

Error message when fetch fails

🖊️ Forms & Controlled Components

PostForm.jsx demonstrates controlled inputs with value and onChange

Validates input and saves new posts to localStorage

💻 Side Effects (useEffect)

useFetch.js custom hook uses useEffect to fetch posts from JSONPlaceholder API

Handles loading and error states

🛠️ Custom Hooks

useFetch.js abstracts API fetching logic

Returns { data, loading, error } for reuse in multiple components (Posts.jsx)

🌐 Routing (React Router v6)

App.jsx sets up Routes:

/ → Home

/posts → Posts

/about → About

/posts/:id → PostDetails

Navbar.jsx uses Link for navigation

🌈 Context API

ThemeContext.jsx provides dark/light theme globally

ThemeToggle.jsx toggles theme anywhere in the app

Solves prop drilling problem

❌ Error Boundaries & Lazy Loading

ErrorBoundary.jsx wraps the app to catch runtime errors

About.jsx is lazy-loaded using React.lazy + Suspense

💾 LocalStorage

Posts added via PostForm.jsx are saved in localStorage

Posts.jsx reads localStorage and displays new posts alongside API posts

🎨 Bootstrap / Styling

Navbar: responsive, collapsible, sticky

Cards: PostCard.jsx uses card, shadow, mb-4, rounded

Containers / Grids: container, row, col-md-*

Buttons: btn, btn-primary, btn-light

Ensures the app is responsive and visually appealing






src/
├── assets/               # images
├── components/           # Navbar, PostCard, PostForm, ThemeToggle
├── pages/                # Home, Posts, PostDetails, About
├── hooks/                # useFetch.js
├── context/              # ThemeContext.jsx
├── utils/                # ErrorBoundary.jsx
├── styles/               # custom.css
├── App.jsx
└── main.jsx




🏆 Summary of Learning

Applied core React concepts in a single project

Used state, props, events, lists, conditional rendering

Practiced forms, controlled components, side effects, API fetching

Implemented custom hooks for reusable logic

Learned routing, lazy loading, error boundaries

Managed global state with Context API

Styled with Bootstrap for responsive, modern design

Learned localStorage integration for persisting user data

⚡ Next Steps

Add authentication for users

Enable edit/delete posts

Improve UI/UX with animations & icons

Deploy to GitHub Pages / Vercel / Netlify
