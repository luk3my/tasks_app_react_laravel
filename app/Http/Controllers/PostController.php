<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index() {
        $tasks = \DB::table('tasks')->join('users', 'user_id', '=', 'users.id')->select('tasks.*', 'users.name')->orderByRaw('tasks.id ASC')->get();
        foreach($tasks as $task) {
         $task->user = (object) array("name"   => $task->name,);
        }
        return $tasks;
        }

    public function create(Request $request, Task $task) {
        //Create new post in DB
        $createdPost = $request->user()->tasks()->create([
            'task' => $request->task,
            'status' => 'Incomplete'
        ]);
        //Return the response
        return response()->json($task->with('user')->find($createdPost->id));
    }

    public function delete(Request $request, Task $task) {
        $task_id = $request->all()['task_id'];
        $deleted_task = $request->user()->tasks()->where('id', $task_id)->delete();
        return response()->json($task_id);
    }

}
