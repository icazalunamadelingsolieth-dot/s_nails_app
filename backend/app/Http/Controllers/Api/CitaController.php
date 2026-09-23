<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cita;
use Illuminate\Http\Request;

class CitaController extends Controller
{
public function index(Request $request)
{
    try {
        $query = Cita::query();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where('cliente', 'like', "%{$search}%")
                  ->orWhere('telefono', 'like', "%{$search}%");
        }

        $citas = $query->orderByDesc('id')->get();

        return response()->json($citas, 200);
    } catch (\Throwable $e) {
        return response()->json([
            'message' => 'Error en la base de datos',
            'error'   => $e->getMessage()
        ], 500);
    }
}

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cliente'  => 'required|string|max:150',
            'telefono' => 'required|string|max:20',
            'servicio' => 'required|string|max:150',
            'fecha'    => 'required|date',
        ]);

        $cita = Cita::create($validated);

        return response()->json($cita, 201);
    }

    public function show($id)
    {
        $cita = Cita::find($id);

        if (!$cita) {
            return response()->json(['message' => 'Cita no encontrada.'], 404);
        }

        return response()->json($cita, 200);
    }

    public function update(Request $request, $id)
    {
        $cita = Cita::find($id);

        if (!$cita) {
            return response()->json(['message' => 'Cita no encontrada.'], 404);
        }

        $validated = $request->validate([
            'cliente'  => 'required|string|max:150',
            'telefono' => 'required|string|max:20',
            'servicio' => 'required|string|max:150',
            'fecha'    => 'required|date',
        ]);

        $cita->update($validated);

        return response()->json($cita, 200);
    }

    public function destroy($id)
    {
        $cita = Cita::find($id);

        if (!$cita) {
            return response()->json(['message' => 'Cita no encontrada.'], 404);
        }

        $cita->delete();

        return response()->json(null, 204);
    }
}