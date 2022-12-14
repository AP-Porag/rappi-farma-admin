<?php

use App\Http\Controllers\Api\Admin\Brand\BrandController;
use App\Http\Controllers\Api\Admin\Category\CategoryController;
use App\Http\Controllers\Api\Admin\Product\ProductController;
use App\Http\Controllers\Api\Admin\Product\StockController;
use App\Http\Controllers\Api\Admin\User\AuthController;
use App\Http\Controllers\Api\Admin\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/auth/login',[AuthController::class,'login']);
Route::post('/auth/logout',[AuthController::class,'logout']);

//protected routes
Route::middleware('auth:sanctum')->group(function (){
    //user
    Route::resource('user',UserController::class)->except('create','edit');
    Route::get('/user/search-user/{text}',[UserController::class,'datatableSearch']);

    //category
    Route::resource('category',CategoryController::class)->except('create','edit');
    Route::get('/category/search-category/{text}',[CategoryController::class,'datatableSearch']);

    //brand
    Route::resource('brand',BrandController::class)->except('create','edit');
    Route::get('/brand/search-brand/{text}',[BrandController::class,'datatableSearch']);
    Route::get('/brand/all/categories',[BrandController::class,'AllCategories']);

    //product
    Route::resource('product',ProductController::class)->except('create','edit');
    Route::get('/product/search-product/{text}',[ProductController::class,'datatableSearch']);
    Route::get('/product/search-product-for-stock-add/{text}',[ProductController::class,'searchProductForAddStock']);
    Route::get('/product/all/category-brand/{category_id}',[ProductController::class,'allBrandForCategory']);
    Route::get('/product/stock-history/{product_id}',[ProductController::class,'getProductHistory']);

    //stock
    Route::post('/stock/stock-add',[StockController::class,'stockAdd'])->name('stock.add');

});
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
