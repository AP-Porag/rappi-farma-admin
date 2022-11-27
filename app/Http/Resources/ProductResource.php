<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
//category_id,name,slug,short_description,description,price,SKU,thumbnail
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'slug'=>$this->slug,
            'status'=>$this->status,
            'thumb'=>$this->thumb_url,
            'current_stock'=>$this->current_stock,
            'price'=>$this->price,
            'SKU'=>$this->SKU,
            'category'=>[
                'category_id'=>$this->category->id,
                'category_name'=>$this->category->name,
            ],
            'brand'=>[
                'brand_id'=>$this->category->id,
                'brand_name'=>$this->category->name,
            ],
        ];
    }
}
