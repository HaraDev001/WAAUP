<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbAppearanceHead extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_appearance_head')==false) {
            Schema::connection('waaupglobal')->create('tb_appearance_head', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->nullable();
                $table->string('name')->nullable();
                $table->integer('topheader_id')->nullable();
                $table->integer('topheader_status')->default(0);
                $table->integer('header_id')->nullable();
                $table->integer('header_status')->default(0);
                $table->integer('suheader_id')->nullable();
                $table->integer('subheader_status')->default(0);
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
        Schema::dropIfExists('tb_appearance_head');
    }
}
