import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import "./loading.css";

export default function Loading({ onComplete }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
                onComplete();
            }, 3000);
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
        <div className="loading-overlay" role="presentation">
            <DotLoader color="#ffffff" size={60} speedMultiplier={1.5} />
            <span className="loading-overlay__label">Loading</span>
        </div>
    );
}
