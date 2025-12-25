"use client";

import { useState, useEffect, useCallback } from "react";
import { RefreshCw, Loader2, CheckCircle, AlertCircle, Radio, Server, Activity } from "lucide-react";

interface ServiceStatus {
    name: string;
    url: string;
    status: "online" | "offline" | "loading";
    data: Record<string, unknown> | null;
    lastChecked: Date | null;
}

interface RfqEvent {
    id: string;
    type: "rfq_created" | "quote_received" | "rfq_filled" | "rfq_expired";
    timestamp: Date;
    data: Record<string, unknown>;
}

export default function LogsPage() {
    const [services, setServices] = useState<ServiceStatus[]>([
        { name: "RFQ Router", url: process.env.NEXT_PUBLIC_RFQ_ROUTER_URL || "", status: "loading", data: null, lastChecked: null },
        { name: "Keeper", url: process.env.NEXT_PUBLIC_KEEPER_URL || "", status: "loading", data: null, lastChecked: null },
    ]);
    const [rfqEvents, setRfqEvents] = useState<RfqEvent[]>([]);
    const [autoRefresh, setAutoRefresh] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const checkService = useCallback(async (service: ServiceStatus): Promise<ServiceStatus> => {
        if (!service.url) {
            return { ...service, status: "offline", data: { error: "URL not configured" }, lastChecked: new Date() };
        }
        try {
            const response = await fetch(`${service.url}/health`, {
                method: "GET",
                cache: "no-store",
            });
            if (response.ok) {
                const data = await response.json();
                return { ...service, status: "online", data, lastChecked: new Date() };
            }
            return { ...service, status: "offline", data: { error: `HTTP ${response.status}` }, lastChecked: new Date() };
        } catch (error: unknown) {
            return { ...service, status: "offline", data: { error: (error as Error).message }, lastChecked: new Date() };
        }
    }, []);

    const refreshAll = useCallback(async () => {
        setIsRefreshing(true);
        const updated = await Promise.all(services.map(checkService));
        setServices(updated);
        setIsRefreshing(false);
    }, [services, checkService]);

    // Initial load and auto-refresh
    useEffect(() => {
        refreshAll();
        if (autoRefresh) {
            const interval = setInterval(refreshAll, 5000);
            return () => clearInterval(interval);
        }
    }, [autoRefresh]); // eslint-disable-line react-hooks/exhaustive-deps

    const formatTime = (date: Date | null) => {
        if (!date) return "—";
        return date.toLocaleTimeString();
    };

    const StatusBadge = ({ status }: { status: "online" | "offline" | "loading" }) => {
        if (status === "loading") {
            return <span className="flex items-center gap-1.5 text-xs text-gray-400"><Loader2 className="w-3 h-3 animate-spin" /> Checking</span>;
        }
        if (status === "online") {
            return <span className="flex items-center gap-1.5 text-xs text-green-400"><CheckCircle className="w-3 h-3" /> Online</span>;
        }
        return <span className="flex items-center gap-1.5 text-xs text-red-400"><AlertCircle className="w-3 h-3" /> Offline</span>;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Service Logs</h1>
                    <p className="text-sm text-gray-400">Real-time status of RFQ infrastructure</p>
                </div>
                <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={autoRefresh}
                            onChange={(e) => setAutoRefresh(e.target.checked)}
                            className="rounded"
                        />
                        Auto-refresh (5s)
                    </label>
                    <button
                        onClick={refreshAll}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300"
                    >
                        <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
                        Refresh
                    </button>
                </div>
            </div>

            {/* Service Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                    <div key={service.name} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${service.status === "online" ? "bg-green-500/20" : "bg-gray-700"}`}>
                                    <Server className={`w-5 h-5 ${service.status === "online" ? "text-green-400" : "text-gray-400"}`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{service.name}</h3>
                                    <p className="text-xs text-gray-500 font-mono truncate max-w-[200px]">{service.url || "Not configured"}</p>
                                </div>
                            </div>
                            <StatusBadge status={service.status} />
                        </div>

                        {service.data && (
                            <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                                <pre className="text-gray-300 whitespace-pre-wrap">
                                    {JSON.stringify(service.data, null, 2)}
                                </pre>
                            </div>
                        )}

                        <div className="mt-3 text-xs text-gray-500">
                            Last checked: {formatTime(service.lastChecked)}
                        </div>
                    </div>
                ))}
            </div>

            {/* RFQ Activity Feed */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold text-white">RFQ Activity</h3>
                    {autoRefresh && (
                        <span className="flex items-center gap-1.5 text-xs text-green-400">
                            <Radio className="w-3 h-3 animate-pulse" />
                            Live
                        </span>
                    )}
                </div>

                {services.find(s => s.name === "RFQ Router")?.data && (
                    <div className="space-y-2">
                        {/* Show connected makers count */}
                        {(() => {
                            const routerData = services.find(s => s.name === "RFQ Router")?.data as Record<string, unknown> | null;
                            const connectedMakers = routerData?.connectedMakers as number | undefined;
                            const activeRfqs = routerData?.activeRfqs as number | undefined;
                            return (
                                <div className="flex gap-6 text-sm">
                                    <div>
                                        <span className="text-gray-400">Connected MMs: </span>
                                        <span className="text-white font-medium">{connectedMakers ?? 0}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Active RFQs: </span>
                                        <span className="text-white font-medium">{activeRfqs ?? 0}</span>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}

                {rfqEvents.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>No recent RFQ activity</p>
                        <p className="text-xs mt-1">Events will appear here when RFQs are created</p>
                    </div>
                )}
            </div>

            {/* Environment Info */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
                    <div>
                        <span className="text-gray-500">NEXT_PUBLIC_RFQ_ROUTER_URL: </span>
                        <span className="text-gray-300">{process.env.NEXT_PUBLIC_RFQ_ROUTER_URL || "(not set)"}</span>
                    </div>
                    <div>
                        <span className="text-gray-500">NEXT_PUBLIC_KEEPER_URL: </span>
                        <span className="text-gray-300">{process.env.NEXT_PUBLIC_KEEPER_URL || "(not set)"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
