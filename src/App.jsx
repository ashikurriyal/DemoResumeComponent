import { Provider } from "react-redux";
import NewResume from "./Components/newResume";
import ResumeBuilder from "./Components/ResumeBuilder";
import { store } from "./Components/store";
// import Resume from "./Components/Resume"

function App() {
  return (
    <>
      <div>
        <NewResume></NewResume>
        <Provider store={store}>
          <ResumeBuilder />
        </Provider>
      </div>
    </>
  );
}

export default App;
