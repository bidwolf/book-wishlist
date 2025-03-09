<?php

use App\Http\Controllers\Book\BookController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
  Route::get('books', [BookController::class, 'index'])
    ->name('books.get_all');
  Route::get('books/{book}', [BookController::class, 'show'])->name('books.show');
  Route::post('books/create', [BookController::class, 'create'])
    ->middleware([HandlePrecognitiveRequests::class])
    ->name('books.create');
});
