<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbConflanguage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_conflanguage')==false) {
            Schema::connection('waaupglobal')->create('tb_conflanguage', function (Blueprint $table) {
                $table->id();
                $table->string('iso')->index()->nullable();
                $table->string('dialcode')->index()->nullable();
                $table->string('name')->nullable();
                $table->string('status')->nullable();
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
        Schema::dropIfExists('tb_conflanguage');
    }
}
