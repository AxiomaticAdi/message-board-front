import React, { useState, useEffect } from "react";
import { Message } from "../types";
import MessageBubble from "./MessageBubble";

const ChatSection: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const response = await fetch("http://localhost:3000/");
				const data = await response.json();
				console.log("Received messages:", data);
				setMessages(data);

				const messagesArray = Object.values(data).map((message: any) => ({
					...message,
				}));
				setMessages(messagesArray);
			} catch (error) {
				console.error("Failed to fetch messages:", error);
			}
		};

		fetchMessages();
	}, []);

	return (
		<div>
			<h1 className="text-3xl">Messages</h1>
			<ul>
				{messages.map((message) => (
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
