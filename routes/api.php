<?php

use App\Http\Controllers\Api\Admin\User\AuthController;
use App\Http\Controllers\Api\Admin\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/auth/login',[AuthController::class,'login']);
Route::get('/auth/logout',[AuthController::class,'logout']);

//protected routes
Route::middleware('auth:sanctum')->group(function (){
    //user
    Route::resource('user',UserController::class)->except('create','edit');
    Route::get('/user/search-user/{text}',[UserController::class,'datatableSearch']);

});
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
