import { Message } from "../types";
import MessageBubble from "./MessageBubble";

interface ChatSectionProps {
	messages: Message[];
}

const ChatSection = ({ messages }: ChatSectionProps) => {
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
