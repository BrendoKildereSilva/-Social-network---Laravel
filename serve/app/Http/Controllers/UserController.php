<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function index(){
        echo 'Hello, world!';
    }

    public function ValidateEmail(Request $request){
        $request->validate([
            'email' => 'required|email',
        ]);

        $email = htmlentities($request->input('email'));
        $consultation = User::where('email', $email)->get();

        if($consultation->count() > 0){
            return response()->json([
                'status' => 'success',
                'mensagem' => 'Email is already in use'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 'success',
                'mensagem' => 'Email available'
            ]);
        }
        
    }
}
