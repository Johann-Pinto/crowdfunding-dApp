
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Mumbai } from "@thirdweb-dev/chains";

import { StateContextProvider } from './context';
import App from './App';
import './index.css';


//import { createRoot } from "react-dom/client";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";

// const container = document.getElementById("root");
// const root = createRoot(container);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThirdwebProvider activeChain={Mumbai} clientId='72ed53c7225dbd4ee9e199382df1ef37'>
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
);

