<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbFrontpages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_frontpages')==false) {
            Schema::connection('waaupglobal')->create('tb_frontpages', function (Blueprint $table) {
                $table->id();
                $table->string('trans', 50)->default('');
                $table->text('head')->nullable();
                $table->integer('is_head')->default(0);
                $table->text('foot')->nullable();
                $table->integer('is_foot')->default(0);
                $table->text('mainmenu')->nullable();
                $table->integer('is_mainmenu')->default(0);
                $table->text('footmenu')->nullable();
                $table->integer('is_footmenu')->default(0);
                $table->text('pageslider')->nullable();
                $table->integer('is_pageslider')->default(0);
                $table->string('sliderstatus')->nullable();
                $table->text('teacher')->nullable();
                $table->integer('is_teacher')->default(0);
                $table->text('student')->nullable();
                $table->integer('is_student')->default(0);
                $table->string('background', 1024)->nullable();
                $table->integer('is_background')->default(0);
                $table->text('lang')->nullable();
                $table->text('socialsetting')->nullable();
                $table->integer('is_socialsetting')->default(0);
                $table->text('configgenereal')->nullable();
                $table->integer('is_configgenereal')->default(0);
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
        Schema::dropIfExists('tb_frontpages');
    }
}
