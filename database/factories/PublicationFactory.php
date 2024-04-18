<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Publication>
 */
class PublicationFactory extends Factory
{


    /**
     * Variable to track the image number.
     *
     * @var int
     */
    protected $imageNumber = 1;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $image = '/storage/images/' . $this->imageNumber . '.png';
        $this->imageNumber++; // Increment image number for next publication

        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph,
            'category' => $this->faker->randomElement(['producto', 'servicio', 'voluntariado']),
            'type' => $this->faker->randomElement(['buscando', 'ofreciendo']),
            'price' => $this->faker->randomFloat(0, 25, 1000),
            'image' => $image,
            'state' => $this->faker->randomElement(['en revision', 'activo', 'bloqueado']),
            'stock' => $this->faker->numberBetween(1, 100),
            'user_id' => \App\Models\User::inRandomOrder()->first()->id,
            'tag_id' => \App\Models\Tag::inRandomOrder()->first()->id,
        ];
    }
}
