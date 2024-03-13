import ChatSection from "./components/ChatSection";
import MessageForm from "./components/MessageForm";

function App() {
	return (
		<div className="flex flex-col mx-10 gap-4">
			<h3 className="text-6xl">Home</h3>
			<ChatSection />
			<MessageForm />
		</div>
	);
}

export default App;
