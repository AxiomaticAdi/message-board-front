import { Message } from "../types";

const fetchMessages = async (): Promise<Message[]> => {
	try {
		console.log("Fetching messages...");
		const response = await fetch("https://message-board-back.onrender.com");
		const data = await response.json();
		console.log("Received messages:", data);
		const messagesArray = Object.values(data).map((message: any) => ({
			...message,
		}));

		// Return only the last 10 messages
		// If there are fewer than 10 messages, it returns all of them
		return messagesArray.slice(-10);
	} catch (error) {
		console.error("Failed to fetch messages:", error);
		return [];
	}
};

export const messageService = {
	fetchMessages,
};
