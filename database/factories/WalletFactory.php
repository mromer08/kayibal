<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Wallet>
 */
class WalletFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nonRetirableBalance' => $this->faker->randomFloat(0, 100, 5000),
            'retirableBalance' => $this->faker->randomFloat(0, 10, 5000),
        ];
    }
}
