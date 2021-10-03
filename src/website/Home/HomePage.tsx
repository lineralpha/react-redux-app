import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    List,
    Menu,
    MenuItemProps,
    Segment,
    SemanticCOLORS,
    SemanticSIZES,
    Sidebar,
    Visibility,
} from "semantic-ui-react";
import { Media } from "../AppMedia";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

type NavBarProps = {
    logo: { size?: string | undefined; url: string };
    color: string;
    leftItems: { [key: string]: any };
    rightItems?: { [key: string]: any };
};

// NavBarDesktop
const ResponsiveDesktop: React.FC<NavBarProps> = (props) => {
    const { leftItems, rightItems, children } = props;
    const [fixed, setFixed] = useState(false);
    const location = useLocation();

    const showFixedMenu = (fixed: boolean) => {
        setFixed(fixed);
    };

    return (
        <Media greaterThan="mobile">
            <Visibility
                once={false}
                onBottomPassed={() => showFixedMenu(true)}
                onBottomPassedReverse={() => showFixedMenu(false)}
            >
                <Menu
                    style={{ margin: "0em" }}
                    fixed={fixed ? "top" : undefined}
                    inverted
                    color={props.color as SemanticCOLORS}
                >
                    <Menu.Item as={Link} to='/'>
                        <Image size={props.logo.size as SemanticSIZES} src={props.logo.url} />
                    </Menu.Item>
                    {leftItems?.map((item: MenuItemProps) => (
                        <Menu.Item as={Link} {...item} />
                    ))}
                    <Menu.Menu position="right">
                        {rightItems?.map((item: MenuItemProps) => (
                            <Menu.Item as={Link} {...item} />
                        ))}
                    </Menu.Menu>
                </Menu>
                {location.pathname === "/" && <HomeHeader mobile={false} />}
            </Visibility>
            {children}
            <HomeFooter mobile={false} />
        </Media>
    );
};

// NavBarMobile
const ResponsiveMobile: React.FC<NavBarProps> = (props) => {
    // Sidebar visibility state
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    const handlePusherClick = () => {
        console.log(`click on pusher: ${visible}`);
        if (visible) {
            setVisible(false);
        }
    };

    const handleSidebarHide = () => {
        console.log(`onHidden: ${visible}`);
        setVisible(false);
    };

    const handleSidebarToggle = () => {
        console.log(`click on toggle: ${visible}`);
        setVisible(!visible);
    };

    // children is the implicit member
    const { leftItems, rightItems, children } = props;

    return (
        <Media at="mobile">
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    inverted
                    color={props.color}
                    vertical
                    visible={visible}
                    onClick={handlePusherClick}
                    onHide={handleSidebarHide}
                >
                    <Menu.Item as={Link} to='/'>
                        <Image size={props.logo.size as SemanticSIZES} src={props.logo.url} />
                    </Menu.Item>
                    {leftItems.map((item: MenuItemProps) => (
                        <Menu.Item as={Link} {...item} />
                    ))}
                </Sidebar>
                <Sidebar.Pusher dimmed={visible} style={{ minHeight: "100vh" }}>
                    <Menu fixed="top" inverted color={props.color as SemanticCOLORS}>
                        <Menu.Item as={Link} to='/'>
                            <Image size={props.logo.size as SemanticSIZES} src={props.logo.url} />
                        </Menu.Item>
                        <Menu.Item icon="sidebar" onClick={handleSidebarToggle} />
                        <Menu.Menu position="right">
                            {rightItems?.map((item: MenuItemProps) => (
                                <Menu.Item as={Link} {...item} />
                            ))}
                        </Menu.Menu>
                    </Menu>
                    {location.pathname === "/" && <HomeHeader mobile />}
                    {children}
                    <HomeFooter mobile />
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    );
};

// NavBar
const ResponsiveContainer: React.FC<NavBarProps> = (props) => {
    return (
        <>
            <ResponsiveDesktop {...props}>{props.children}</ResponsiveDesktop>
            <ResponsiveMobile {...props}>{props.children}</ResponsiveMobile>
        </>
    );
};

const HomePage: React.FC<NavBarProps> = (props) => (
    <ResponsiveContainer {...props}>{props.children}</ResponsiveContainer>
);

export type { NavBarProps };
export default HomePage;
