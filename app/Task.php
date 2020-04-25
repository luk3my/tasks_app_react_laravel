<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['task', 'status'];

    public function User() {
        return $this->belongsTo(User::class);
    }
}
