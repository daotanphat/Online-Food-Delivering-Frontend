import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#e91e63',
                p: 6
            }}
            component="footer"
        >
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" align="center">
                    {"Copyright © "}
                    <Link color="inherit" href="https://www.facebook.com/profile.php?id=100011204918814">
                        Dao Tan Phat
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </Box>
    );
}