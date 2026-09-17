import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    resolve: name => {
        // Scans all .jsx files recursively inside the Pages directory
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        
        let page = pages[`./Pages/${name}.jsx`];
        
        if (!page) {
            throw new Error(`Page not found: ${name}. Ensure it exists in Pages/.`);
        }
        
        return page.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});