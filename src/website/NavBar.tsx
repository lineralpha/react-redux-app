import { useState } from "react";
import { Menu, Image, Sidebar, Container, Icon } from "semantic-ui-react";
import { Media } from "./AppMedia";

export type NavBarProps = {
    visible: boolean;
    children?: any;
    leftItems?: any[];
    rightItems?: any[];
};

const NavBarMobile = ({
    children,
    props,
    onPusherClicked,
    onToggle,
}: {
    children: never[];
    props: NavBarProps;
    onPusherClicked: () => void;
    onToggle: () => void;
}) => {
    return (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                color="teal"
                items={props.leftItems}
                vertical
                visible={props.visible}
            />
            <Sidebar.Pusher
                dimmed={props.visible}
                style={{ minHeight: "100vh" }}
                onClick={onPusherClicked}
            >
                <Menu floated fixed="top" inverted color="teal">
                    <Menu.Item>
                        <Image
                            size="mini"
                            src="https://react.semantic-ui.com/logo.png"
                        />
                    </Menu.Item>
                    <Menu.Item onClick={onToggle}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        {props.rightItems?.map((item) => (
                            <Menu.Item {...item} />
                        ))}
                    </Menu.Menu>
                </Menu>
                {props.children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

const NavBarDesktop = (props: NavBarProps) => {
    return (
        <Menu floated fixed="top" inverted color="teal">
            <Menu.Item>
                <Image
                    size="mini"
                    src="https://react.semantic-ui.com/logo.png"
                />
            </Menu.Item>

            {props.leftItems?.map((item) => (
                <Menu.Item {...item} />
            ))}

            <Menu.Menu position="right">
                {props.rightItems?.map((item) => (
                    <Menu.Item {...item} />
                ))}
            </Menu.Menu>
        </Menu>
    );
};

const NavBarChildren = (props: any) => (
    <Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

const NavBar = (props: NavBarProps) => {
    // Whether the sidebar on mobile devices is visible
    const [visible, setVisible] = useState(props.visible);
    const handlePusher = () => {
        if (visible) {
            setVisible(false);
        }
    };
    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Media at="mobile">
                <NavBarMobile
                    props={{ ...props, visible: visible }}
                    onPusherClicked={handlePusher}
                    onToggle={handleToggle}
                >
                    {/* <NavBarChildren>{props.children}</NavBarChildren> */}
                </NavBarMobile>
            </Media>
            <Media greaterThan="mobile">
                <NavBarDesktop {...props}>
                    {/* <NavBarChildren>{props.children}</NavBarChildren> */}
                </NavBarDesktop>
            </Media>
        </div>
    );
};

export default NavBar;
