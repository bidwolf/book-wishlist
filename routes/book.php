<?php

use App\Http\Controllers\Book\BookController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
  Route::get('books', [BookController::class, 'getAll'])
    ->name('books.get_all');
  Route::get('books/{book}', [BookController::class, 'show'])->name('books.show');
});
