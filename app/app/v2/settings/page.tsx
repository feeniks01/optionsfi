"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Settings, Palette, Bell, Sliders, Beaker, Monitor, Moon, Sun,
    Check, ChevronRight, RefreshCw, Zap, Eye
} from "lucide-react";

// UI Scale options
const UI_SCALES = [
    { label: "Compact", value: 0.92, description: "Maximize information density" },
    { label: "Default", value: 1.00, description: "Balanced for most displays" },
    { label: "Comfortable", value: 1.08, description: "More spacing between elements" },
    { label: "Large", value: 1.15, description: "Larger text and controls" },
];

// Accent color themes
const ACCENT_COLORS = [
    { label: "Blue", value: "blue", color: "#3B82F6" },
    { label: "Purple", value: "purple", color: "#8B5CF6" },
    { label: "Green", value: "green", color: "#22C55E" },
    { label: "Orange", value: "orange", color: "#F97316" },
    { label: "Pink", value: "pink", color: "#EC4899" },
];

type SettingsSection = "appearance" | "preferences" | "notifications" | "advanced";

export default function SettingsPage() {
    const [activeSection, setActiveSection] = useState<SettingsSection>("appearance");

    // Appearance settings
    const [uiScale, setUiScale] = useState(1.0);
    const [accentColor, setAccentColor] = useState("blue");
    const [theme, setTheme] = useState<"dark" | "light" | "system">("dark");

    // Preferences settings
    const [autoRefresh, setAutoRefresh] = useState(true);
    const [refreshInterval, setRefreshInterval] = useState(10000);
    const [showTestnetWarning, setShowTestnetWarning] = useState(true);
    const [defaultChartMode, setDefaultChartMode] = useState<"performance" | "value">("performance");

    // Notification settings
    const [txNotifications, setTxNotifications] = useState(true);
    const [epochNotifications, setEpochNotifications] = useState(true);

    // Advanced settings
    const [showAdvancedMetrics, setShowAdvancedMetrics] = useState(false);
    const [debugMode, setDebugMode] = useState(false);
    const [experimentalFeatures, setExperimentalFeatures] = useState(false);

    // Load settings from localStorage
    useEffect(() => {
        const savedScale = localStorage.getItem("uiScale");
        if (savedScale) setUiScale(parseFloat(savedScale));

        const savedAccent = localStorage.getItem("accentColor");
        if (savedAccent) setAccentColor(savedAccent);

        const savedAutoRefresh = localStorage.getItem("autoRefresh");
        if (savedAutoRefresh) setAutoRefresh(savedAutoRefresh === "true");

        const savedRefreshInterval = localStorage.getItem("refreshInterval");
        if (savedRefreshInterval) setRefreshInterval(parseInt(savedRefreshInterval));

        const savedAdvanced = localStorage.getItem("showAdvancedMetrics");
        if (savedAdvanced) setShowAdvancedMetrics(savedAdvanced === "true");

        const savedExperimental = localStorage.getItem("experimentalFeatures");
        if (savedExperimental) setExperimentalFeatures(savedExperimental === "true");
    }, []);

    // Save and apply UI scale
    const handleScaleChange = (scale: number) => {
        setUiScale(scale);
        document.documentElement.style.setProperty("--ui-scale", String(scale));
        localStorage.setItem("uiScale", String(scale));
    };

    // Save accent color
    const handleAccentChange = (color: string) => {
        setAccentColor(color);
        localStorage.setItem("accentColor", color);
    };

    // Save preferences
    const handleAutoRefreshChange = (value: boolean) => {
        setAutoRefresh(value);
        localStorage.setItem("autoRefresh", String(value));
    };

    const handleRefreshIntervalChange = (value: number) => {
        setRefreshInterval(value);
        localStorage.setItem("refreshInterval", String(value));
    };

    const handleAdvancedMetricsChange = (value: boolean) => {
        setShowAdvancedMetrics(value);
        localStorage.setItem("showAdvancedMetrics", String(value));
    };

    const handleExperimentalChange = (value: boolean) => {
        setExperimentalFeatures(value);
        localStorage.setItem("experimentalFeatures", String(value));
    };

    const sections: { id: SettingsSection; label: string; icon: typeof Settings }[] = [
        { id: "appearance", label: "Appearance", icon: Palette },
        { id: "preferences", label: "Preferences", icon: Sliders },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "advanced", label: "Advanced", icon: Beaker },
    ];

    return (
        <div className="w-full max-w-[1600px] mx-0 px-2 md:px-6 py-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                <p className="text-gray-400">Manage your appearance, preferences, and notifications.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">

                {/* Settings Navigation Sidebar */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <nav className="space-y-1">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === section.id
                                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                                    }`}
                            >
                                <section.icon className="w-4 h-4" />
                                {section.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 max-w-4xl">
                    <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 md:p-8">

                        {/* Appearance Section */}
                        {activeSection === "appearance" && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-1">Appearance</h2>
                                    <p className="text-sm text-gray-500">Customize the visual experience</p>
                                </div>

                                {/* UI Scale / Density */}
                                <div>
                                    <label className="text-sm font-medium text-gray-300 mb-4 block flex items-center gap-2">
                                        <Eye className="w-4 h-4" />
                                        Interface Density
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {UI_SCALES.map((scale) => (
                                            <button
                                                key={scale.value}
                                                onClick={() => handleScaleChange(scale.value)}
                                                className={`relative p-4 rounded-lg border text-left transition-all ${uiScale === scale.value
                                                    ? "bg-blue-500/10 border-blue-500/50 text-blue-400"
                                                    : "bg-gray-900/40 border-gray-800 text-gray-400 hover:border-gray-700 hover:bg-gray-900"
                                                    }`}
                                            >
                                                <div className="flex justify-between items-start mb-1">
                                                    <p className="font-medium text-sm text-gray-200">{scale.label}</p>
                                                    {uiScale === scale.value && (
                                                        <Check className="w-4 h-4 text-blue-400" />
                                                    )}
                                                </div>
                                                <p className="text-xs text-gray-500">{scale.description}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Theme */}
                                <div>
                                    <label className="text-sm font-medium text-gray-300 mb-4 block flex items-center gap-2">
                                        <Moon className="w-4 h-4" />
                                        Theme Mode
                                    </label>
                                    <div className="flex gap-3">
                                        {[
                                            { id: "dark", label: "Dark", icon: Moon },
                                            { id: "light", label: "Light", icon: Sun },
                                            { id: "system", label: "System", icon: Monitor },
                                        ].map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => setTheme(t.id as typeof theme)}
                                                disabled={t.id !== "dark"}
                                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border text-sm transition-all ${theme === t.id
                                                    ? "bg-blue-500/10 border-blue-500/50 text-blue-400"
                                                    : "bg-gray-900/30 border-gray-800 text-gray-500"
                                                    } ${t.id !== "dark" ? "opacity-50 cursor-not-allowed" : "hover:border-gray-700"}`}
                                            >
                                                <t.icon className="w-4 h-4" />
                                                {t.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Accent Color */}
                                <div>
                                    <label className="text-sm font-medium text-gray-300 mb-4 block flex items-center gap-2">
                                        <Palette className="w-4 h-4" />
                                        Accent Color
                                    </label>
                                    <div className="flex gap-4">
                                        {ACCENT_COLORS.map((color) => (
                                            <button
                                                key={color.value}
                                                onClick={() => handleAccentChange(color.value)}
                                                className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${accentColor === color.value
                                                    ? "border-white scale-110 shadow-lg shadow-white/10"
                                                    : "border-transparent bg-gray-900 hover:scale-105"
                                                    }`}
                                                style={{ backgroundColor: color.color }}
                                                title={color.label}
                                            >
                                                {accentColor === color.value && (
                                                    <Check className="w-6 h-6 text-white" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Preferences Section */}
                        {activeSection === "preferences" && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-1">Preferences</h2>
                                    <p className="text-sm text-gray-500">Configure app behavior</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <RefreshCw className="w-4 h-4" />
                                                Auto-refresh data
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">Automatically update prices and balances</p>
                                        </div>
                                        <button
                                            onClick={() => handleAutoRefreshChange(!autoRefresh)}
                                            className={`w-11 h-6 rounded-full transition-all ${autoRefresh ? "bg-blue-600" : "bg-gray-700"}`}
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${autoRefresh ? "translate-x-5" : "translate-x-0.5"}`} />
                                        </button>
                                    </div>

                                    {autoRefresh && (
                                        <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                            <div>
                                                <p className="text-sm font-medium text-gray-300">Refresh interval</p>
                                                <p className="text-xs text-gray-500 mt-1">How often to fetch new data via RPC</p>
                                            </div>
                                            <select
                                                value={refreshInterval}
                                                onChange={(e) => handleRefreshIntervalChange(Number(e.target.value))}
                                                className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-sm text-gray-300 focus:outline-none focus:border-gray-500"
                                            >
                                                <option value={5000}>5 seconds</option>
                                                <option value={10000}>10 seconds</option>
                                                <option value={30000}>30 seconds</option>
                                                <option value={60000}>1 minute</option>
                                            </select>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-300">Default chart view</p>
                                            <p className="text-xs text-gray-500 mt-1">Initial chart mode in Portfolio</p>
                                        </div>
                                        <select
                                            value={defaultChartMode}
                                            onChange={(e) => setDefaultChartMode(e.target.value as typeof defaultChartMode)}
                                            className="px-3 py-2 bg-gray-900 border border-gray-700 rounded text-sm text-gray-300 focus:outline-none focus:border-gray-500"
                                        >
                                            <option value="performance">Performance (%)</option>
                                            <option value="value">Value ($)</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-300">Show testnet warning</p>
                                            <p className="text-xs text-gray-500 mt-1">Display Devnet banner in header</p>
                                        </div>
                                        <button
                                            onClick={() => setShowTestnetWarning(!showTestnetWarning)}
                                            className={`w-11 h-6 rounded-full transition-all ${showTestnetWarning ? "bg-blue-600" : "bg-gray-700"}`}
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${showTestnetWarning ? "translate-x-5" : "translate-x-0.5"}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notifications Section */}
                        {activeSection === "notifications" && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-1">Notifications</h2>
                                    <p className="text-sm text-gray-500">Manage alerts and updates</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-300">Transaction updates</p>
                                            <p className="text-xs text-gray-500 mt-1">Notify when transactions confirm on-chain</p>
                                        </div>
                                        <button
                                            onClick={() => setTxNotifications(!txNotifications)}
                                            className={`w-11 h-6 rounded-full transition-all ${txNotifications ? "bg-blue-600" : "bg-gray-700"}`}
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${txNotifications ? "translate-x-5" : "translate-x-0.5"}`} />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-300">Epoch roll alerts</p>
                                            <p className="text-xs text-gray-500 mt-1">Notify when vault epochs settle</p>
                                        </div>
                                        <button
                                            onClick={() => setEpochNotifications(!epochNotifications)}
                                            className={`w-11 h-6 rounded-full transition-all ${epochNotifications ? "bg-blue-600" : "bg-gray-700"}`}
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${epochNotifications ? "translate-x-5" : "translate-x-0.5"}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Advanced Section */}
                        {activeSection === "advanced" && (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-1">Advanced</h2>
                                    <p className="text-sm text-gray-500">Power user settings</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <Zap className="w-4 h-4" />
                                                Advanced metrics
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">Show Greeks, IV, and detailed analytics</p>
                                        </div>
                                        <button
                                            onClick={() => handleAdvancedMetricsChange(!showAdvancedMetrics)}
                                            className={`w-11 h-6 rounded-full transition-all ${showAdvancedMetrics ? "bg-blue-600" : "bg-gray-700"}`}
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${showAdvancedMetrics ? "translate-x-5" : "translate-x-0.5"}`} />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-gray-900/20 border border-gray-800 rounded-lg">
                                        <div>
                                            <p className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <Beaker className="w-4 h-4" />
                                                Experimental features
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">Enable beta features</p>
                                        </div>
                                        <button
                                            onClick={() => handleExperimentalChange(!experimentalFeatures)}
                                            className={`w-11 h-6 rounded-full transition-all ${experimentalFeatures ? "bg-orange-600" : "bg-gray-700"}`}
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${experimentalFeatures ? "translate-x-5" : "translate-x-0.5"}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
