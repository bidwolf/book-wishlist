<?php

namespace App\Http\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreBookRequest extends FormRequest
{
  public function authorize(): bool
  {
    return Auth::check();
  }
  /**
   * @return array<string,\Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'title' => ['required', 'max:255'],
      'description' => ['required'],
      'genre' => ['required', 'max:255'],
      'release_date' => ['required', Rule::date()->format('Y-m-d')->todayOrBefore()],
      'author' => ['required', 'max:255'],
      'publisher' => ['required'],
      'ISBN' => ['required', 'unique:books', 'max:32'],
    ];
  }
  /**
   * @return array<string,string>
   */
  public function messages(): array
  {
    return [
      'title.required' => 'O título do livro é obrigatório',
      'title.max' => 'O título não pode possuir mais que 255 caracteres',
      'description.required' => 'A descrição do livro é obrigatória',
      'author.required' => 'O autor da obra é obrigatório',
      'genre.required' => 'O gênero do livro é obrigatório',
      'release_date.required' => 'A data de lançamento do livro é obrigatória',
      'release_date.date' => 'A data de lançamento do livro deve ser uma data válida',
      'release_date.date_format' => 'A data de lançamento do livro deve estar no formato yyyy-mm-dd',
      'release_date.before_or_equal' => 'O livro já deve ter sido publicado para registrar na sua lista',
      'publisher.required' => 'A editora do livro é obrigatória',
      'ISBN.required' => 'O código ISBN do livro é obrigatório',
      'ISBN.unique' => 'Esse ISBN já foi registrado anteriormente',
      'ISBN.max' => 'O código ISBN não pode possuir mais do que 32 caracteres'
    ];
  }
}
