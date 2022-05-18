import * as React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import CssBaseline from "@mui/material/CssBaseline";
import store, { persistor } from "../../store/store";
import HomePage from "../HomePage/HomePage";
import {
  COMPLETED_TODOS_ROUTE,
  HOME_ROUTE,
  TODOS_ROUTE,
  TODO_ROUTE,
} from "../utils/consts";
import TodosPage from "../TodosPage/TodosPage";
import TodoPage from "../TodoPage/TodoPage";
import CompletedTodo from "../CompletedTodo/CompletedTodo";
import NavigationComponent from "../../components/NavigationComponent/NavigationComponent";

const AppRoutes: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavigationComponent />
          <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={TODOS_ROUTE} element={<TodosPage />} />
            <Route path={TODO_ROUTE} element={<TodoPage />} />
            <Route path={COMPLETED_TODOS_ROUTE} element={<CompletedTodo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default AppRoutes;
