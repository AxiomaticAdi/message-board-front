import React, { useState } from "react";
import { messageService } from "../services/messageService";

// Assuming the Message type is defined elsewhere, based on the provided structure
export type Message = {
	id: number;
	timestamp: string;
	username: string;
	content: string;
};

interface MessageFormProps {
	setMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
}

const MessageForm = ({ setMessages }: MessageFormProps) => {
	// State for form fields
	const [username, setUsername] = useState("");
	const [content, setContent] = useState("");

	// Handle form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault(); // Prevent default form submission behavior

		if (!username || !content) {
			alert("Missing required field!");
			return;
		}

		// Create the message object
		const message: Message = {
			id: Date.now(), // Simple way to generate a unique id based on timestamp
			timestamp: new Date().toISOString(),
			username: username,
			content: content,
		};

		console.log("Submitting message:", message);

		// TO DO: Send the message to the server
		await fetch("https://message-board-back.onrender.com/api/messages", {
			method: "POST",
			body: JSON.stringify(message),
			headers: { "Content-Type": "application/json" },
		});

		// Clear the form fields
		setUsername("");
		setContent("");

		// Refresh the chat messages
		const messagesArray = await messageService.fetchMessages();
		setMessages(messagesArray);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label
					htmlFor="username"
					className="block text-sm font-medium text-gray-700"
				>
					Username
				</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
					placeholder="Your username"
				/>
			</div>
			<div>
				<label
					htmlFor="content"
					className="block text-sm font-medium text-gray-700"
				>
					Message
				</label>
				<textarea
					id="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
					placeholder="What's on your mind?"
					rows={4}
				></textarea>
			</div>
			<div>
				<button
					type="submit"
					className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default MessageForm;
