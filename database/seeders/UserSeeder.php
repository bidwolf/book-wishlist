<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  public function run(): void
  {
    User::factory()->create([
      'name' => 'Test User',
      'password' => '12345678'
    ]);
  }
}
