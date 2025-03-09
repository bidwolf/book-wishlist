<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'title' => fake()->title(),
      'description' => fake()->randomLetter(),
      'genre' => fake()->randomLetter(),
      'release_date' => fake()->date(),
      'author' => fake()->name(),
      'ISBN' => strval(fake()->uuid()),
      'publisher' => fake()->name(),
      'user_id' => 1
    ];
  }
}
