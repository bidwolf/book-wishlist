<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Book;

class BookController extends Controller
{
  public function getAll(Request $request): Response
  {
    $page = $request->query('page', 1);
    $all_books = Book::all();
    $total_pages = ceil(sizeof($all_books) / 10);
    $books = array_slice($all_books, ($page - 1) * 10, 10);
    return Inertia::render('books/list', [
      'books' => $books,
      'total_pages' => $total_pages
    ]);
  }
  public function show(Request $request): Response
  {
    $current_book = Book::find($request['book']);
    return Inertia::render('books/details', [
      'book' => $current_book
    ]);
  }
}
