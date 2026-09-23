<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CitaController;
use App\Http\Controllers\AuthController;

// Ruta pública para autenticación
Route::post('/login', [AuthController::class, 'login']);

// Rutas públicas para el manejo completo de citas (Listar, Crear, Ver, Actualizar y Eliminar)
Route::apiResource('citas', CitaController::class);

// Cerrar sesión (si lo sigues usando)
Route::post('/logout', [AuthController::class, 'logout']);