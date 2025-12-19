"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        redirect("/v2");
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p>Redirecting to OptionsFi...</p>
        </div>
    );
}
