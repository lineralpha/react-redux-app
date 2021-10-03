import NewCounter from "./components/NewCounter";
import ShowDogs from "./components/ShowDogs";
import LearnButton from "./components/LearnUI/LearnButton";
import LearnContainer from "./components/LearnUI/LearnContainer";
import HomepageLayout from "./website/Home/HomepageLayout";
import { Button, Container, Divider, Grid, Header, Image, Segment } from "semantic-ui-react";

import { MediaContextProvider } from "./website/AppMedia";
import HomePage, { NavBarProps } from "./website/Home/HomePage";
import { Route, Switch } from "react-router";
import LoginForm from "./website/LoginForm";
import HomeContent from "./website/Home/HomeContent";

function App() {
    //
    const navbarProps: NavBarProps = {
        color: "teal",
        logo: {
            size: "mini",
            url: "/logo.png",
        },
        // Follow this pattern to prepare navbar menu navigation.
        // Each item is rendered as react-router Link component and 'to' is the
        // target path.
        leftItems: [
            { to: '/', content: "Home", key: "home" },
            { to: '/users', content: "Users", key: "users" },
        ],
        rightItems: [
            { to: '/signin', content: "Sign In", key: "signin" },
            { to: 'signup', content: "Sign Up", key: "signup" },
        ],
    };

    return (
        // <HomepageLayout />
        <MediaContextProvider>
            <HomePage {...navbarProps}>
                <Switch>
                    <Route
                        exact
                        path="/" component={HomeContent}
                    />
                    <Route path="/signin" component={LoginForm} />
                </Switch>
            </HomePage>
        </MediaContextProvider>

        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //     </header>
        //     <NewCounter />
        //     <ShowDogs />
        //     <p>
        //         Edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //     <footer>
        //         <span>Learn </span>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org/"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             React
        //         </a>
        //         <span>, </span>
        //         <a
        //             className="App-link"
        //             href="https://redux.js.org/"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Redux
        //         </a>
        //         <span>, </span>
        //         <a
        //             className="App-link"
        //             href="https://redux-toolkit.js.org/"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Redux Toolkit
        //         </a>
        //         ,<span> and </span>
        //         <a
        //             className="App-link"
        //             href="https://react-redux.js.org/"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             React Redux
        //         </a>
        //     </footer>
        // </div>
    );
}

export default App;
