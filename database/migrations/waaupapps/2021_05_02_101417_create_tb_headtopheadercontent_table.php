<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbHeadtopheadercontentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupapps')->hasTable('tb_headtopheadercontent')==false) {
            Schema::connection('waaupapps')->create('tb_headtopheadercontent', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->default(1);
                $table->string('device', 50)->nullable();
                $table->string('name')->nullable();
                $table->integer('scid')->nullable();
                $table->string('maxwidth', 100)->nullable();
                $table->string('padding')->nullable();
                $table->string('bg_img')->nullable();
                $table->string('bg_color', 100)->nullable();
                $table->tinyInteger('fixed')->default(1);
                $table->string('top_height', 100)->nullable();
                $table->string('left_padding')->nullable();
                $table->string('right_padding')->nullable();
                $table->string('left_align', 100)->nullable();
                $table->string('right_align', 100)->nullable();
                $table->string('left_blocks', 100)->nullable();
                $table->string('right_blocks', 100)->nullable();
                $table->string('bottom_height', 100)->nullable();
                $table->string('bottom_padding')->nullable();
                $table->string('bottom_align', 100)->nullable();
                $table->string('bottom_blocks', 100)->nullable();
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
        Schema::dropIfExists('tb_headtopheadercontent');
    }
}
