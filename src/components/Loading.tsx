import React from "react";
import { CircleLoader } from "react-spinners";

const LoadingExplainer: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			{/* Spinner */}
			<CircleLoader color="#4A90E2" />
			{/* Explanation Message */}
			<p className="text-center mt-4">
				This message board is running on a free server from{" "}
				<a
					href="https://render.com/"
					className="text-blue-500 underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					Render
				</a>
				. Please allow up to 1 minute for the server to wake up.
			</p>
		</div>
	);
};

export default LoadingExplainer;
