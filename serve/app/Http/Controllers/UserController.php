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
                'status' => 'error',
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

    public function ValidatePhoneNumber(Request $request){
        $request->validate([
            'phone' => 'required|string',
        ]);

        $phone = htmlentities($request->input('phone'));
        $consultation = User::where('phone_number', $phone)->get();

        if($consultation->count() > 0){
            return response()->json([
                'status' => 'error',
                'mensagem' => 'Phone is already in use'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 'success',
                'mensagem' => 'Phone available'
            ]);
        }
        
    }
}
