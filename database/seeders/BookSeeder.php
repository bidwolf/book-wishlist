<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;


class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::factory()
            ->count(30) // Isso aqui vai gerar 30 instâncias de livros usando a book factory criada
            ->create(); // Isso manda ele criar, é semelhante ao commit do sqlalchemy do python.
    }
}
