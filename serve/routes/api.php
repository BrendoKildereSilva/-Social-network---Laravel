<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', [UserController::class, 'index' ]);
Route::post('/validate-email', [UserController::class, 'ValidateEmail' ]);
Route::post('/validate-phone-number', [UserController::class, 'ValidatePhoneNumber' ]);



