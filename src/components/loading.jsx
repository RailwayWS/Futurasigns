import { useEffect, useState } from "react";

export default function Loading({ onComplete }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for window load event (all assets loaded)
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
                onComplete();
            }, 2000); // Small buffer
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, [onComplete]);

    if (!isLoading) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#101b24",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >
            {/*add a spinner*/}
            <h2>Loading...</h2>
        </div>
    );
}
