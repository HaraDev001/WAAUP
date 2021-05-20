<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemsusersecurity extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('systemsusersecurity')==false) {
            Schema::connection('waaupdb')->create('systemsusersecurity', function (Blueprint $table) {
                $table->id();
                $table->text('strong')->nullable();
                $table->text('medium')->nullable();
                $table->text('low')->nullable();
                $table->text('password')->nullable();
                $table->text('email')->nullable();
                $table->text('mobile')->nullable();
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
        Schema::dropIfExists('systemsusersecurity');
    }
}
