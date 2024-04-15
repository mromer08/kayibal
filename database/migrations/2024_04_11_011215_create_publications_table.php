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
        Schema::create('publications', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('category', ['producto', 'servicio', 'voluntariado']);
            $table->enum('type', ['buscando', 'ofreciendo']);
            $table->decimal('price', 10, 2)->default(0);
            $table->string('image')->nullable();
            $table->enum('state', ['en revision', 'activo', 'inactivo', 'bloqueado', 'eliminado'])->default('en revision');
            $table->integer('stock')->default(1);
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('tag_id')->constrained()->cascadeOnDelete(); //check the documentation cascadeOnDelete()
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('publications');
    }
};
