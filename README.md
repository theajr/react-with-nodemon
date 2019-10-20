## Local setup for developing React library with nodemon

### If you are wondering how to develop a local react library and test it in sample application, this might help you.

### Get Started

```sh
git clone https://github.com/theajr/react-with-nodemon.git my-react-pkg
cd my-react-pkg
npm i
npm start
```

#### Change `name` in `package.json` to your desire package name, example: `my-react-pkg`

Now you can change any js file in `src` folder and it will automatically transpile the code to `dist`.

### Usage

You can keep making changes in this package and test in your sample project at the same time.

```sh
cd mySampleReactApp
npm install ABSOULTE_PATH_OF_CLONED_PACKAGE
```

Now, you can import your package into `mySampleReactApp`, Let's say you have an `App.jsx` in your `mySampleReactApp`

```javascript
import React from "react";
import PropTypes from "prop-types";
import { Button } from "my-react-pkg";

const App = ({ name }) => {
  return (
    <div>
      Hello {name}
      <br />
      <Button text="Counter - " />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
```

### Publish you package!

```sh
cd my-react-pkg
npm run compile
npm login
npm publish
```

✅ Done! You have published your application successfully! 👏💥🎉

## Limitations

- No support for other imports than js/jsx
