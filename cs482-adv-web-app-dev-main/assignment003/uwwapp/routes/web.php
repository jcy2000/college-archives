<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ScheduleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {return view('home');});
Route::get("/courses/{subject}", [CourseController::class, 'getCourses']);
Route::get("/schedules/{subject}", [ScheduleController::class, 'getSchedules']);
