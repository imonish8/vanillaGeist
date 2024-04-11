# Vanilla Geist

Vanilla Geist is an open-source project that leverages the Plain Geist UI library in React applications. With Vanilla Geist, you can quickly and easily integrate sleek and minimalist UI components into your React projects, enhancing the user experience without sacrificing performance or simplicity.

## Features

- **Minimalist Design**: Vanilla Geist provides a collection of UI components with a clean and minimalist design, following the principles of the Plain Geist UI library.
- **React Integration**: Designed specifically for React applications, Vanilla Geist components are easy to install, configure, and use within your project.
- **Customizable**: While Vanilla Geist offers a default set of UI components, you can easily customize the styles and behavior to suit your project's specific needs.
- **Lightweight**: Built with performance in mind, Vanilla Geist prioritizes lightweight and optimized components, ensuring a smooth user experience.

## Getting Started

To get started with Vanilla Geist in your React project, follow these simple steps:

1. **Install Vanilla Geist**:

or


2. **Import Components**:

Import the desired components from Vanilla Geist into your React components:

```javascript
import { Button, Input } from 'vanilla-geist';
import React from 'react';
import { Button, Input } from 'vanilla-geist';

function MyComponent() {
    return (
        <div>
            <Input placeholder="Enter your name" />
            <Button type="primary">Submit</Button>
        </div>
    );
}

export default MyComponent;
```

Feel free to adjust and expand upon this readme to better suit your project's specific needs!

## Contributing

Contributions to Vanilla Geist are welcome! If you find a bug, have a feature request, or want to contribute code, please submit an issue or pull request on the GitHub repository.

## License

Vanilla Geist is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Vanilla Geist is built upon the Plain Geist UI library developed by [Geist UI](https://geist-ui.dev/). Special thanks to the Geist UI team for their excellent work in creating a minimalist and elegant UI library for React.

### Clone this, Happy Coding !

`git clone https://github.com/imonish8/vanillageist.git`


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
