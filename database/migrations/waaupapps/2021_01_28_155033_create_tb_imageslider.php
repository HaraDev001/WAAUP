<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbImageslider extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupapps')->hasTable('tb_imageslider')==false) {
            Schema::connection('waaupapps')->create('tb_imageslider', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->nullable();
                $table->string('name')->nullable();
                $table->string('size')->nullable();
                $table->integer('imgid')->nullable();
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
        Schema::dropIfExists('tb_imageslider');
    }
}
