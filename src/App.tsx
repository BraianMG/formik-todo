import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import Todos from "./components/Todos";
import { TodosProvider } from "./context/todos";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TodosProvider>
                <Todos />
              </TodosProvider>
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
