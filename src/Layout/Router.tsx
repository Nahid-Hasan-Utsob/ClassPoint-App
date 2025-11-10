import { createBrowserRouter } from "react-router";
import Main_Layout from "./Main_Layout";


const router = createBrowserRouter (
      [
            {
                  path: '/',
                  element: <Main_Layout></Main_Layout>
            }
      ]
)

export default router;