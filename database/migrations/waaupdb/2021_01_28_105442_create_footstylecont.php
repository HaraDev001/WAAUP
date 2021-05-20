<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFootstylecont extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('footstylecont')==false) {
            Schema::connection('waaupdb')->create('footstylecont', function (Blueprint $table) {
                $table->id();
                $table->string('leftcont', 1024)->nullable();
                $table->string('leftclr')->nullable();
                $table->string('leftsize')->nullable();
                $table->integer('leftmaxtext')->default(30);
                $table->string('centcont', 1024)->nullable();
                $table->string('centclr')->nullable();
                $table->string('centsize')->nullable();
                $table->integer('centmaxtext')->default(30);
                $table->string('rightcont', 1024)->nullable();
                $table->string('rightclr')->nullable();
                $table->string('rightsize')->nullable();
                $table->integer('rightmaxtext')->default(30);
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
        Schema::dropIfExists('footstylecont');
    }
}
