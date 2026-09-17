import React from 'react';
import { useForm, Link } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
            <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
                
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-black tracking-wider text-emerald-400">HACKTRACK // ONBOARDING</h1>
                    <p className="mt-1 text-sm text-slate-400">Register a new SOC operator account.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Operator Codename / Name</label>
                        <input 
                            type="text" 
                            value={data.name} 
                            onChange={e => setData('name', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="Blaze"
                            required
                        />
                        {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Operator Email</label>
                        <input 
                            type="email" 
                            value={data.email} 
                            onChange={e => setData('email', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="operator@hacktrack.local"
                            required
                        />
                        {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Password</label>
                        <input 
                            type="password" 
                            value={data.password} 
                            onChange={e => setData('password', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="••••••••"
                            required
                        />
                        {errors.password && <p className="mt-1 text-xs text-rose-500">{errors.password}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Confirm Password</label>
                        <input 
                            type="password" 
                            value={data.password_confirmation} 
                            onChange={e => setData('password_confirmation', e.target.value)}
                            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={processing}
                        className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50"
                    >
                        {processing ? 'Creating Account...' : 'Register Operator'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link href="/login" className="text-xs text-slate-400 hover:text-emerald-400 transition">
                        Already cleared for access? Log in here.
                    </Link>
                </div>

            </div>
        </div>
    );
}