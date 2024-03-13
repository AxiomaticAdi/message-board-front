import React from "react";

// Step 1: Define the props interface
interface MessageBubbleProps {
	timestamp: string;
	username: string;
	content: string;
}

// Step 2: Create the MessageBubble component
const MessageBubble: React.FC<MessageBubbleProps> = ({
	timestamp,
	username,
	content,
}) => {
	return (
		<div className="flex flex-col mb-4">
			<div className="flex items-baseline">
				{/* Username in bold */}
				<span className="font-bold text-black mr-2">{username}</span>
				{/* Timestamp in gray and italics */}
				<span className="text-gray-500 italic text-sm">{timestamp}</span>
			</div>
			{/* Light blue rounded bubble with black content */}
			<div className="bg-blue-100 text-black rounded-lg p-2 mt-1">
				{content}
			</div>
		</div>
	);
};

export default MessageBubble;
