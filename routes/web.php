<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicationController;
use App\Http\Controllers\TagController;
use App\Models\Publication;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Publications/Index', [
        'publications' => Publication::with('tag:id,name')->latest()->get(),
    ]);
})->name('home');

Route::resource('tags', TagController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('publications', PublicationController::class)
    ->except(['index', 'show'])
    ->middleware(['auth']);

Route::resource('publications', PublicationController::class)
    ->only(['index', 'show']);

// JUST FOR DEV ENVIROMENT [DELETE]
Route::get('/token', function () {
    return csrf_token();
});

Route::resource('tags', TagController::class)
    ->only(['index']);

Route::get('/search', [PublicationController::class, 'search'])->name('search');

Route::get('/packs', function () {
    return Inertia::render('Packs/Index');
})->middleware(['auth'])->name('packs');

require __DIR__ . '/auth.php';
