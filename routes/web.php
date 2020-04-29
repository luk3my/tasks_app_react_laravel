<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

//Create a group of routes that are protected by the auth middleware - must be authenticated to view
Route::group(['middleware' => ['auth']], function() {
     Route::get('/', 'TasksIndexController@index'); 
     Route::get('/posts', 'PostController@index');  
     Route::post('/posts', 'PostController@create');
     Route::post('/posts/delete', 'PostController@delete');
     Route::post('/posts/complete', 'PostController@complete');
});
Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
