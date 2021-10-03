import { useRef } from "react";
import { Button, Icon, Label, Ref, Segment } from "semantic-ui-react";

const LearnButton = () => {
    const ref = useRef<HTMLElement>(null);

    const handleClick = () => {
        ref?.current?.focus();
    };

    return (
        <>
            <div>
                {/* use ref in semantic ui
                    useful when the control's appearance/properties need to be dynamically changed.
                */}
                <Ref innerRef={ref}>
                    <Button primary>Focusable Button</Button>
                </Ref>
                <Button onClick={handleClick}>Click Me</Button>
            </div>
            <div>
                {/* animated button - the toggle hidden/visible content
                    on mouse-hover in animation
                */}
                <Button animated>
                    <Button.Content visible>Next</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow right" />
                    </Button.Content>
                </Button>
                <Button animated="vertical">
                    <Button.Content hidden>Shop</Button.Content>
                    <Button.Content visible>
                        <Icon name="shop" />
                    </Button.Content>
                </Button>
                <Button animated="fade">
                    <Button.Content visible>
                        Sign-up for a Pro account
                    </Button.Content>
                    <Button.Content hidden>$12.99 a month</Button.Content>
                </Button>
            </div>
            <div>
                {/* button with label */}
                <Button
                    color="red"
                    content="Like"
                    icon="heart"
                    label={{
                        as: "a",
                        basic: true,
                        color: "red",
                        content: "2,048",
                    }}
                    labelPosition="right"
                />
                <Button
                    content="Like"
                    icon="heart"
                    label={{
                        as: "a",
                        basic: true,
                        pointing: "right",
                        content: "2,048",
                    }}
                    labelPosition="left"
                />
                <Button
                    icon="fork"
                    label={{ as: "a", basic: true, content: "2,048" }}
                    labelPosition="left"
                />
            </div>
            <div>
                {/* labelPosition can also be used to adjust text/icon relative position */}
                <Button content="Pause" icon="pause" labelPosition="left" />
                <Button
                    content="Next"
                    icon="right arrow"
                    labelPosition="right"
                />
            </div>
            <div>
                <Button.Group
                    buttons={[
                        { key: "align left", icon: "align left" },
                        { key: "align center", icon: "align center" },
                        { key: "align right", icon: "align right" },
                        { key: "align justify", icon: "align justify" },
                    ]}
                />{" "}
                {/* vertical separation - seam space */}
                <Button.Group
                    buttons={[
                        { key: "bold", icon: "bold" },
                        { key: "underline", icon: "underline" },
                        { key: "text width", icon: "text width" },
                    ]}
                />
            </div>
            <div>
                {/* button states */}
                <Button active={true}>Active</Button>
                <Button active={false}>Inactive</Button>
                <Button disabled secondary>
                    Disabled
                </Button>
                <Button loading={false}>Loading</Button>
            </div>
            <div>
                <Button floated="right">Right Floated</Button>
                text between two floated buttons
                <Button floated="left">Left Floated</Button>
            </div>
            <div>
                <Button fluid>Fits to Container</Button>
                <Button positive content="Positive" icon="check"></Button>
                <Button negative content="Nagative" icon="times"></Button>
                <Button color="red">Red</Button>
                <Button color="orange">Orange</Button>
                <Button color="yellow">Yellow</Button>
                <Button color="olive">Olive</Button>
                <Button color="green">Green</Button>
                <Button color="teal">Teal</Button>
                <Button color="blue">Blue</Button>
                <Button color="violet">Violet</Button>
                <Button color="purple">Purple</Button>
                <Button color="pink">Pink</Button>
                <Button color="brown">Brown</Button>
                <Button color="grey">Grey</Button>
                <Button color="black">Black</Button>
            </div>
            <div>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
            </div>

            <Segment inverted>
                <Button inverted>Standard</Button>
                <Button inverted color="red">
                    Red
                </Button>
                <Button inverted color="orange">
                    Orange
                </Button>
                <Button inverted color="yellow">
                    Yellow
                </Button>
                <Button inverted color="olive">
                    Olive
                </Button>
                <Button inverted color="green">
                    Green
                </Button>
                <Button inverted color="teal">
                    Teal
                </Button>
                <Button inverted color="blue">
                    Blue
                </Button>
                <Button inverted color="violet">
                    Violet
                </Button>
                <Button inverted color="purple">
                    Purple
                </Button>
                <Button inverted color="pink">
                    Pink
                </Button>
                <Button inverted color="brown">
                    Brown
                </Button>
                <Button inverted color="grey">
                    Grey
                </Button>
                <Button inverted color="black">
                    Black
                </Button>
            </Segment>
            <Segment inverted>
                <Button basic inverted>
                    Standard
                </Button>
                <Button basic inverted color="red">
                    Red
                </Button>
                <Button basic inverted color="orange">
                    Orange
                </Button>
                <Button basic inverted color="yellow">
                    Yellow
                </Button>
                <Button basic inverted color="olive">
                    Olive
                </Button>
                <Button basic inverted color="green">
                    Green
                </Button>
                <Button basic inverted color="teal">
                    Teal
                </Button>
                <Button basic inverted color="blue">
                    Blue
                </Button>
                <Button basic inverted color="violet">
                    Violet
                </Button>
                <Button basic inverted color="purple">
                    Purple
                </Button>
                <Button basic inverted color="pink">
                    Pink
                </Button>
                <Button basic inverted color="brown">
                    Brown
                </Button>
                <Button basic inverted color="grey">
                    Grey
                </Button>
                <Button basic inverted color="black">
                    Black
                </Button>
            </Segment>
        </>
    );
};

export default LearnButton;
