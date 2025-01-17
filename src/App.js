import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Child1 = () => {
  const [params, setSearchParams] = useSearchParams();
  const handleClick = () => {
    setSearchParams("name", "John");
  };
  console.log("child1 rendered");
  return <button onClick={handleClick}>child1</button>;
};

const Child2 = () => {
  const navigate = useNavigate();
  console.log("child2 rendered");
  return <button>Child2</button>;
};

const Home = () => {
  return (
    <div>
      <Child1 />
      <Child2 />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
