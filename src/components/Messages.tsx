import React, { useState, useEffect } from "react";

type Message = {
	id: number;
	content: string;
};

const MessagesPage: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const response = await fetch("http://localhost:3000/");
				const data = await response.json();
				setMessages(data);
			} catch (error) {
				console.error("Failed to fetch messages:", error);
			}
		};

		fetchMessages();
	}, []);

	return (
		<div>
			<h1>Messages</h1>
			<ul>
				{messages.map((message) => (
					<li key={message.id}>{message.content}</li>
				))}
			</ul>
		</div>
	);
};

export default MessagesPage;
