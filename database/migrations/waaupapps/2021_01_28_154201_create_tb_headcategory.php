<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbHeadcategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupapps')->hasTable('tb_headcategory')==false) {
            Schema::connection('waaupapps')->create('tb_headcategory', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->nullable();
                $table->text('topheadercategory')->nullable();
                $table->integer('topheadercategory_id')->nullable();
                $table->integer('topheaderbackground')->nullable();
                $table->text('headheadercategory')->nullable();
                $table->integer('headheadercategory_id')->nullable();
                $table->integer('headheaderbackground')->nullable();
                $table->text('subheadercategory')->nullable();
                $table->integer('subheadercategory_id')->nullable();
                $table->integer('subheaderbackground')->nullable();
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
        Schema::dropIfExists('tb_headcategory');
    }
}
