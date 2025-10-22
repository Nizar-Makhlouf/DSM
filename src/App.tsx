import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/common/GlobalStyles";
import { route } from "./route";
import AuthProvider from "./providers/AuthProvider";

function App() {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <RouterProvider router={route} />
            </AuthProvider>
        </>
    );
}

export default App;
