<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbAppearanceLayout extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_appearance_layout')==false) {
            Schema::connection('waaupglobal')->create('tb_appearance_layout', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->nullable();
                $table->string('name')->nullable();
                $table->string('style')->nullable();
                $table->string('boxed_id')->default('0');
                $table->string('left_occupied')->default('');
                $table->string('left_padding')->default('');
                $table->integer('is_left')->default(0);
                $table->string('right_occupied')->default('');
                $table->string('right_padding')->default('');
                $table->integer('is_right')->default(0);
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
        Schema::dropIfExists('tb_appearance_layout');
    }
}
