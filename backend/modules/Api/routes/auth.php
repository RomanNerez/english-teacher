<?php

use Illuminate\Support\Facades\Route;
use Modules\Api\Http\Controllers\Auth\LoginController;
use Modules\Api\Http\Controllers\Auth\LogoutController;
use Modules\Api\Http\Controllers\Auth\RegisterController;
use Modules\Api\Http\Controllers\Auth\UserController;

Route::post('/login', LoginController::class);
Route::post('/register', RegisterController::class);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', UserController::class);
    Route::post('/logout', LogoutController::class);
});
