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
        \DB::table('tasks')->where('id', $task_id)->delete();
        return response()->json($task_id);
    }

    public function complete(Request $request, Task $task) {
        $task_id = $request->all()['task_id'];
        \DB::table('tasks')->where('id', $task_id)->update(['status' => 'Complete']);
        return response()->json($task_id);
    }

    public function editTask(Request $request, Task $task) {
        $task_id = $request->all()['taskId'];
        $editedTask = $request->all()['task'];
        $query = \DB::table('tasks')->where('id', $task_id)->update(['task' => $editedTask]);
        if ($query === 1) {
            return response()->json('success');
        } else if ($query === 0) {
            return response()->json('no_change');    
        } else {
             return response()->json('edit_failed');    
        }
    }
}
