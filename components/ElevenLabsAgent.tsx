"use client";

import { useEffect } from "react";

export default function ElevenLabsAgent() {
    useEffect(() => {
        // Create the ElevenLabs widget element
        const agent = document.createElement("elevenlabs-convai");
        agent.setAttribute("agent-id", "agent_6101k897f6m6ew0849wthk3k8r4b");
        document.body.appendChild(agent);

        // Load the widget script
        const script = document.createElement("script");
        script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        // Cleanup when unmounting
        return () => {
            document.body.removeChild(agent);
            document.body.removeChild(script);
        };
    }, []);

    return null; // nothing to render on the page itself
}
