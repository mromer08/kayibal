<?php

namespace Database\Seeders;

use App\Models\Publication;
use App\Models\Tag;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@kayibal.com',
        ]);
        User::factory(5)->create();

        // Crear los tags adicionales
        DB::table('tags')->insert([
            ['name' => 'Tecnología'],
            ['name' => 'Hogar'],
            ['name' => 'Académico'],
            ['name' => 'Literatura'],
            ['name' => 'Decoración'],
            ['name' => 'Otros'],
        ]);

         // Crear publicaciones
         Publication::factory(50)->create();
    }
}
