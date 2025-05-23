<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'  => 'Brendo',
            'email' => 'Brendo@gmail.com',
            'password' => bcsqrt('123'),
            'role' => 'admin',
            'phone_number' => "+5592996059860"
        ]);
    }
}
