import React from "react";
import {
    Button,
    Checkbox,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
} from "semantic-ui-react";

const LoginForm = () => {

    const onSubmit = () => {
        console.log('login form: submitted');

    };

    return (
        <Grid
            columns={1}
            textAlign="center"
            style={{ height: "100vh", marginTop: '5em' }}
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                    <Image src="/logo.png" /> Log-in to your account
                </Header>
                <Form size="large" onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="E-mail address"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />

                        <Segment>
                        <Button type='submit' color="teal" size="large">
                            Login
                        </Button>
                        <Button negative size='large'>Cancel</Button>
                        </Segment>
                        {/* <Checkbox  */}
                    </Segment>
                </Form>
                <Message >
                    New to us? <a href="#">Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default LoginForm;
