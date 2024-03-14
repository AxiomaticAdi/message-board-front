import { useEffect, useState } from "react";
import ChatSection from "./components/ChatSection";
import MessageForm from "./components/MessageForm";
import { Message } from "./types";
import LoadingExplainer from "./components/Loading";
import { messageService } from "./services/messageService";

function App() {
	const [messages, setMessages] = useState<Message[] | undefined>(undefined);

	useEffect(() => {
		const initFetchMessages = async () => {
			const messagesArray = await messageService.fetchMessages();
			setMessages(messagesArray);
		};

		initFetchMessages();
	}, []);

	return (
		<div className="flex flex-col mx-10 gap-4">
			{messages === undefined ? (
				<LoadingExplainer />
			) : (
				<div>
					<ChatSection messages={messages} />
					<MessageForm setMessages={setMessages} />
				</div>
			)}
		</div>
	);
}

export default App;
