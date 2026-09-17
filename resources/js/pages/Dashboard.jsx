import React from 'react';
import { router } from '@inertiajs/react';

const Dashboard = ({ user, events, stats }) => {
    const handleLogout = (e) => {
        e.preventDefault();
        router.post('/logout');
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* Top Navigation */}
            <nav className="border-b border-slate-800 bg-slate-900 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
                    <h1 className="text-lg font-black tracking-wider text-emerald-400">HACKTRACK // SEC-OPS</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-slate-400">Operator: <strong className="text-slate-200">{user.name}</strong></span>
                    <button 
                        onClick={handleLogout}
                        className="rounded-lg bg-rose-600/20 border border-rose-500/30 px-3 py-1.5 text-xs font-semibold text-rose-400 hover:bg-rose-600/30 transition"
                    >
                        Terminate Session
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="p-6 max-w-7xl mx-auto space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-slate-200">Threat Intelligence Overview</h2>
                    <p className="text-sm text-slate-400">Real-time system telemetry and anomaly detection node.</p>
                </div>

                {/* Metric Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Security Events</p>
                        <p className="mt-2 text-3xl font-black text-slate-100">{stats.total}</p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Threats</p>
                        <p className="mt-2 text-3xl font-black text-amber-400">{stats.active}</p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Critical Alerts</p>
                        <p className="mt-2 text-3xl font-black text-rose-500">{stats.critical}</p>
                    </div>
                </div>

                {/* Live Events Table */}
                <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
                    <div className="p-5 border-b border-slate-800">
                        <h3 className="font-bold text-slate-200">Recent Security Telemetry Log</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-300">
                            <thead className="bg-slate-950 text-xs uppercase text-slate-400 border-b border-slate-800">
                                <tr>
                                    <th className="px-6 py-3">Event Type</th>
                                    <th className="px-6 py-3">Source IP</th>
                                    <th className="px-6 py-3">Payload Details</th>
                                    <th className="px-6 py-3">Severity</th>
                                    <th className="px-6 py-3">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {events.map((event) => (
                                    <tr key={event.id} className="hover:bg-slate-800/50">
                                        <td className="px-6 py-4 font-mono text-emerald-400">{event.event_type}</td>
                                        <td className="px-6 py-4 font-mono text-slate-300">{event.source_ip}</td>
                                        <td className="px-6 py-4 text-slate-400">{event.payload}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                                                event.severity === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' :
                                                event.severity === 'HIGH' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                                                event.severity === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                                'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                            }`}>
                                                {event.severity}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-slate-500">{new Date(event.created_at).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;