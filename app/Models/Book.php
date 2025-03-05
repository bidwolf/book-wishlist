<?php

namespace App\Models;

use Illuminate\Support\Arr;

// use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book
{
  // use HasFactory;
  // /**
  //  * @var list<string>;
  //  */
  // protected $fillable = [
  //   'title',
  //   'description',
  //   'genre',
  //   'release_date',
  //   'author',
  //   'ISBN',
  //   'publisher'
  // ];
  // protected function casts(): array
  // {
  //   return [
  //     'release_date' => 'datetime',
  //   ];
  // }
  public static function all(): array
  {
    return [
      [
        'title' => 'any title1',
        'description' => 'any title1',
        'genre' => 'any title1',
        'release_date' => '2000',
        'author' => 'any title1',
        'ISBN' => '8550819840',
        'publisher' => 'any title1',
      ],
      [
        'title' => 'Learning tensor flow',
        'description' => 'any title2',
        'genre' => 'any title2',
        'release_date' => '2000',
        'author' => 'any title2',
        'ISBN' => '9781492090793',
        'publisher' => 'any title2',
      ],
      [
        'title' => 'any title3',
        'description' => 'any title3',
        'genre' => 'any title3',
        'release_date' => '2000',
        'author' => 'any title3',
        'ISBN' => '1119482089',
        'publisher' => 'any title3',
      ],
      [
        'title' => 'any title4',
        'description' => 'any title4',
        'genre' => 'any title4',
        'release_date' => '2000',
        'author' => 'any title4',
        'ISBN' => '1492024333',
        'publisher' => 'any title4',
      ],
      [
        'title' => 'any title5',
        'description' => 'any title5',
        'genre' => 'any title5',
        'release_date' => '2000',
        'author' => 'any title5',
        'ISBN' => '18032431982',
        'publisher' => 'any title5',
      ],
      [
        'title' => 'any title6',
        'description' => 'any title6',
        'genre' => 'any title6',
        'release_date' => '2000',
        'author' => 'any title6',
        'ISBN' => '1835084702',
        'publisher' => 'any title6',
      ],
      [
        'title' => 'any title7',
        'description' => 'any title7',
        'genre' => 'any title7',
        'release_date' => '2000',
        'author' => 'any title7',
        'ISBN' => '1803243198',
        'publisher' => 'any title7',
      ],
    ];
  }
  public static function find($ISBN): array
  {
    $current_book =  Arr::first(
      static::all(),
      fn($book) =>
      $book['ISBN'] == $ISBN
    );
    if (!$current_book) {
      abort(404);
    }
    return $current_book;
  }
}
