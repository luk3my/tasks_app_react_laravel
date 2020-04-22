<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create(Request $request, Task $task) {
        //Create new post in DB
        $createdPost = $request->user()->tasks()->create([
            'task' => $request->task,
            'status' => 'Incomplete'
        ]);
        //Return the response
        return response()->json($task->with('user')->find($createdPost->id));
    }
}
