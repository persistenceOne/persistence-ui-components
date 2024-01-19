# persistence-ui-components

[![npm (tag)](https://img.shields.io/npm/v/@persistenceone/persistence-ui-components)](https://www.npmjs.com/package/@persistenceone/persistence-ui-components)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/persistenceOne/persistence-ui-components)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

UI Components and utility library for pSTAKE App.

#### npm

```shell
npm i @persistenceone/persistence-ui-components
```

### Available Components

```ts
import {
    Button, 
    ButtonLink, // to redirct from button
    Dropdown,
    Input, 
    Modal, 
    Switch,
    Tabs,
    Spinner,
    Radio
} from "@persistenceone/persistence-ui-components";
```

### Available Hooks

```ts
import {
    useLocalStorage, 
    useWindowSize,
    useOnClickOutside,
    useOnlineStatus,
    useSortableTable
} from "@persistenceone/persistence-ui-components";
```

### Available helper functions

```ts
import {
    formatNumber,
    stringTruncate,
    truncateToFixedDecimalPlaces,
    numberFormat,
    getTokenImgFromDenom,
    minifiyTxnHash,
    getActiveSideBarItem,
    getChainSpecificAssets,
    getPercentChange
} from "@persistenceone/persistence-ui-components";
```
### TailwindCSS Config

```tsconst tailwindConf = require("@persistenceone/persistence-ui-components");
module.exports = {
    content: [
    ...
    "./node_modules/@persistenceone/persistence-ui-components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
}
```
