import {BookContext} from "./hooks/Context";
import {Books} from "./components/Books";

function App () {
    return <BookContext>
        <Books />
    </BookContext>;
}

export default App