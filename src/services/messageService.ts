import { Message } from "../types";

const fetchMessages = async (): Promise<Message[]> => {
	try {
		const response = await fetch("https://message-board-back.onrender.com");
		const data = await response.json();
		console.log("Received messages:", data);
		const messagesArray = Object.values(data).map((message: any) => ({
			...message,
		}));
		return messagesArray;
	} catch (error) {
		console.error("Failed to fetch messages:", error);
		return [];
	}
};

export const messageService = {
	fetchMessages,
};
