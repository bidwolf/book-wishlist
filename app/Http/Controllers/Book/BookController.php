<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use App\Http\Requests\Book\StoreBookRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Book;
use Illuminate\Http\RedirectResponse;

class BookController extends Controller
{
  public function index(Request $request): Response
  {
    $query = Book::query()
      ->when(
        $request->search,
        function ($search) use ($request) {
          return $search
            ->where('title', 'like', "%{$request['search']}%")
            ->orWhere('description', 'like', "%{$request['search']}%")
            ->orWhere('author', 'like', "%{$request['search']}%")
            ->orderByDesc('created_at');
        },
        function ($search) {
          return $search->orderByDesc('created_at');
        }
      );
    $books = $query->paginate(10);
    return Inertia::render('books/list', [
      'books' => $books
    ]);
  }
  public function show(Request $request): Response
  {
    $current_book = Book::find($request['book']);
    return Inertia::render('books/details', [
      'book' => $current_book
    ]);
  }
  public function create(StoreBookRequest $request): RedirectResponse
  {
    $validated = $request->validated();
    $created_book = Book::create($validated);
    return Inertia::location('/books/' . $created_book->id);
  }
}
