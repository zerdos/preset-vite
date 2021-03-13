import { render } from "preact";
import "./index.css";
import { Foo } from "./Foo";
import { ReactComponent } from "./Compat";
import { Bar } from "./Bar.server";

function App() {
	return (
		<div>
			<h1>Hello from Preact</h1>
			<Foo />
			<h2>Compat</h2>
			<ReactComponent />
			<h2>Server Component</h2>
			<Bar />
		</div>
	);
}

render(<App />, document.getElementById("app")!);
