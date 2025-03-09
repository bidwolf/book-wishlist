<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
  public function owner(): BelongsTo
  {
    return $this->belongsTo(User::class)->withDefault();
  }
}
