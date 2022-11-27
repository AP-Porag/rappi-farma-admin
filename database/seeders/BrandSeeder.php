<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = [
            ['category_id'=>'5','name'=>'Genfar','thumbnail'=>''],
            ['category_id'=>'5','name'=>'Sanofi','thumbnail'=>''],
            ['category_id'=>'1','name'=>'Loreal','thumbnail'=>''],
            ['category_id'=>'1','name'=>'Vogue','thumbnail'=>''],
            ['category_id'=>'1','name'=>'Garnier','thumbnail'=>''],
            ['category_id'=>'1','name'=>'Nivea','thumbnail'=>''],
            ['category_id'=>'1','name'=>'P&G','thumbnail'=>''],
            ['category_id'=>'1','name'=>'Johnsons','thumbnail'=>''],
        ];
        foreach ($brands as $brand){
            $items = [
                [
                    'name'        => $brand['name'],
                    'slug'        => Str::slug($brand['name']),
                    'status'      => 'active',
                ],
            ];
            foreach ($items as $item) {
                Brand:: create($item);
            }
        }
    }
}
