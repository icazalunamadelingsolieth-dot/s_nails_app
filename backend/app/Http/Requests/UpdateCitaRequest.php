<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCitaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'cliente'  => ['required', 'string', 'max:150'],
            'telefono' => ['required', 'string', 'max:20'],
            'servicio' => ['required', 'string'],
            'fecha'    => ['required', 'date'],
        ];
    }
}