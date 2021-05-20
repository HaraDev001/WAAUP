<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemsuserregistered extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('systemsuserregistered')==false) {
            Schema::connection('waaupdb')->create('systemsuserregistered', function (Blueprint $table) {
                $table->id();
                $table->string('trans')->nullable();
                $table->string('type')->nullable();
                $table->text('content')->nullable();
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
        Schema::dropIfExists('systemsuserregistered');
    }
}
