<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
  use HasFactory;
  /**
   * @var list<string>;
   */
  protected $guarded = ["id"];
  protected function casts(): array
  {
    return [
      'release_date' => 'datetime',
    ];
  }
}
