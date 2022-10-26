import '@styles/globals.css';
import React from "react";

const RootLayout: React.FC<{
    children: React.ReactNode
}> = ({
    children
}) => {
    return (
        <html lang="en">
            <head>
                <title>heaton</title>
                <meta name="description" content="heaton"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
