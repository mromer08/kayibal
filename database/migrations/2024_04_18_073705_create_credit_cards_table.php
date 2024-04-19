<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('credit_cards', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('holderName');
            $table->string('lastDigits');
            $table->string('number');
            $table->date('expirationDate');
            $table->string('cvcCode');
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Referencia a la tabla de usuarios
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('credit_cards');
    }
};
