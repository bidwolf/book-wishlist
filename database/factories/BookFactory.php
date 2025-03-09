<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
  public function definition(): array
  {
    return [
      'title' => fake()->title(),
      'description' => fake()->randomLetter(),
      'genre' => fake()->randomLetter(),
      'release_date' => fake()->date(),
      'author' => fake()->name(),
      'ISBN' => strval(fake()->randomDigit()),
      'publisher' => fake()->name(),
    ];
  }
}
