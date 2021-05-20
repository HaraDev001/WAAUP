<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWeslangs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('weslangs')==false) {
            Schema::connection('waaupdb')->create('weslangs', function (Blueprint $table) {
                $table->id();
                $table->string('status', 50)->nullable();
                $table->string('iso', 10)->nullable();
                $table->string('dialcode', 10)->nullable();
                $table->string('name', 150)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();
                $table->string('g_path', 50)->default('remote');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weslangs');
    }
}
