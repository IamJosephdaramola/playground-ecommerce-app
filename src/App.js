import categories from "./categories.json";

import Directory from "./components/directory/Directory";

const App = () => {
  return <Directory categories={categories} />;
};
export default App;
