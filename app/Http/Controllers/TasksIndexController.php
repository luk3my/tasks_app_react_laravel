<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TasksIndexController extends Controller
{
    public function index() {
        return view('home');
    }

     public function edit() {
        return view('/edit');
    }
}
