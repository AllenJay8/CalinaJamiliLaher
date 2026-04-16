<?php

use App\Http\Controllers\Api\GenderController;
use App\Http\Controllers\Api\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(GenderController::class)->prefix('/gender')->group(function (){
    Route::post('/storeGender', 'storeGender'); // /gender/storeGender
});

Route::controller(TransactionController::class)->prefix('/transaction')->group(function (){
    Route::post('/store', 'store'); // /transaction/store
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
