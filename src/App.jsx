import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import ThemeSwitcher from "./Components/ThemeSwitcher";

const App = () => {
    return (
        <div style={{ margin: 22 }}>
            <h1 style={{ marginBottom: 22 }}>Mui DarkMode Playground</h1>
            <ThemeContextProvider>
                <Container maxWidth="lg">
                    <Paper>
                        <Box height={600} p={4}>
                            <ThemeSwitcher />
                            <Typography variant="h1">Heading</Typography>
                            <Card>
                                <CardHeader title="Card title" />
                                <CardContent>
                                    <Typography variant="body1">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eaque ad quod saepe
                                        aperiam eos autem sapiente nostrum odit
                                        iure sequi suscipit, recusandae, animi
                                        rem blanditiis beatae ipsam earum et
                                        dicta!
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Divider sx={{ my: 5 }} />
                            <Stack direction="row" spacing={2} alignItems={"center"} mb={4}>
                              <Avatar>PG</Avatar>
                              <Chip color="info" label="chip" />
                              <Button>Click Me</Button>
                               <Button variant="contained">Click me</Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Container>
            </ThemeContextProvider>
        </div>
    );
};

export default App;
