<?php

namespace App\Http\Controllers;
use JavaScript;

use Illuminate\Http\Request;


class TasksIndexController extends Controller
{
    public function index() {
        return view('home');
    }
    //Must run composer require laracasts/utilities first - see docs https://github.com/laracasts/PHP-Vars-To-Js-Transformer
     public function edit($taskId) {
        JavaScript::put([
            'taskId' => $taskId
        ]);
        return view('/edit');
    }

    //get a single task
    public function getTask ($taskId) {
        $task = \DB::table('tasks')->where('id', '=', $taskId)->get();
        return $task;
    }

}
