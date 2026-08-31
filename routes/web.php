<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;

// Guest Routes
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

// Authenticated Routes
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'user' => Auth::user(),
        ]);
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});

// Redirect root to dashboard or login
Route::get('/', function () {
    return Auth::check() ? redirect('/dashboard') : redirect('/login');
});