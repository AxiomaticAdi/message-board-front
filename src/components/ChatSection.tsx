import React, { useEffect } from "react";
import { Message } from "../types";
import MessageBubble from "./MessageBubble";
import { messageService } from "../services/messageService";

interface ChatSectionProps {
	messages: Message[];
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatSection = ({ messages, setMessages }: ChatSectionProps) => {
	useEffect(() => {
		const initFetchMessages = async () => {
			const messagesArray = await messageService.fetchMessages();
			setMessages(messagesArray);
		};

		initFetchMessages();
	}, []);

	return (
		<div>
			<h1 className="text-3xl">Messages</h1>
			<ul>
				{messages.map((message: Message) => (
					<li key={message.id}>
						<MessageBubble
							timestamp={message.timestamp}
							username={message.username}
							content={message.content}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChatSection;
