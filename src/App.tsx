import { useState } from "react";
import ChatSection from "./components/ChatSection";
import MessageForm from "./components/MessageForm";
import { Message } from "./types";
import LoadingExplainer from "./components/Loading";

function App() {
	const [messages, setMessages] = useState<Message[]>([]);

	return (
		<div className="flex flex-col mx-10 gap-4">
			<h3 className="text-6xl">Home</h3>

			{messages.length === 0 ? (
				<LoadingExplainer />
			) : (
				<>
					<ChatSection messages={messages} setMessages={setMessages} />
					<MessageForm setMessages={setMessages} />
				</>
			)}
		</div>
	);
}

export default App;
