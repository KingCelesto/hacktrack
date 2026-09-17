<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use App\Models\SecurityEvent;

// Guest Routes
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

// Registration Routes
Route::get('/register', [AuthController::class, 'showRegister']);
Route::post('/register', [AuthController::class, 'register']);

// Authenticated Routes
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'user' => Auth::user(),
            // Fetch all security events from the database
            'events' => SecurityEvent::latest()->get(),
            // Calculate quick counts for our metric cards
            'stats' => [
                'total' => SecurityEvent::count(),
                'active' => SecurityEvent::whereIn('severity', ['MEDIUM', 'HIGH', 'CRITICAL'])->count(),
                'critical' => SecurityEvent::where('severity', 'CRITICAL')->count(),
            ]
        ]);
    });
});

// Redirect root to dashboard or login
Route::get('/', function () {
    return Auth::check() ? redirect('/dashboard') : redirect('/login');
});