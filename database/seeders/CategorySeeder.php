<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name'=>'Todos','thumbnail'=>'https://laravel.com/'],
            ['name'=>'OFERTAS HASTA DICIEMBRE','thumbnail'=>'https://expressjs.com/'],
            ['name'=>'OCTUBRE ROSA','thumbnail'=>'https://nodejs.org'],
            ['name'=>'OFERTAS DEL MES','thumbnail'=>'https://reactjs.org/'],
            ['name'=>'Health & Medicine','thumbnail'=>'https://reactjs.org/'],
        ];
        foreach ($categories as $category){
            $items = [
                [
                    'name'        => $category['name'],
                    'slug'        => Str::slug($category['name']),
                    'status'      => 'active',
                ],
            ];
            foreach ($items as $item) {
                Category:: create($item);
            }
        }

    }
}
