import { Button, Container, Header, Label, Segment } from "semantic-ui-react";
import { FaSignInAlt } from "react-icons/fa";
import { useHistory } from "react-router";
import { MouseEvent } from "react";

const HomeHeader = ({ mobile = false }: { mobile: boolean }) => {
    const history = useHistory();
    const handleSignin = (e: MouseEvent) => {
        e.preventDefault();

        history.push("/signin");
    };
    return (
        <Segment inverted vertical color="teal" style={{ minHeight: "45vh", padding: "1em 0em" }}>
            <Container fluid textAlign="center">
                <Header
                    as="h1"
                    inverted
                    style={{
                        fontSize: mobile ? "2em" : "4em",
                        fontWeight: "normal",
                        marginBottom: 0,
                        marginTop: mobile ? "1.5em" : "2em",
                    }}
                >
                    Imagine-a-Company
                </Header>
                <Header
                    as="h2"
                    inverted
                    style={{
                        fontSize: mobile ? "1.5em" : "1.7em",
                        fontWeight: "normal",
                        marginTop: mobile ? "0.5em" : "1.5em",
                    }}
                >
                    Do whatever you want whenever you want to.
                </Header>
                <Button
                    primary
                    size="huge"
                    style={{ marginTop: "1em" }}
                    content="Sign In"
                    onClick={handleSignin}
                ></Button>
            </Container>
        </Segment>
    );
};

export default HomeHeader;
