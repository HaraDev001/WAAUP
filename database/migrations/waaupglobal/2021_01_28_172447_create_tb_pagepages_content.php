<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbPagepagesContent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_pagepages_content')==false) {
            Schema::connection('waaupglobal')->create('tb_pagepages_content', function (Blueprint $table) {
                $table->id();
                $table->integer('userid')->nullable();
                $table->string('trans')->default('en-1');
                $table->string('title')->nullable();
                $table->string('url')->nullable();
                $table->string('type')->nullable();
                $table->integer('head_id')->nullable();
                $table->tinyInteger('is_head')->default(0);
                $table->integer('foot_id')->nullable();
                $table->tinyInteger('is_foot')->default(0);
                $table->integer('layout_id')->nullable();
                $table->text('content')->nullable();
                $table->tinyInteger('release')->default(0);
                $table->string('index')->nullable();
                $table->timestamp('i_date')->useCurrent();
                $table->string('i_user')->nullable();
                $table->string('login')->nullable();
                $table->timestamp('l_date')->useCurrent();
                $table->string('l_user')->nullable();
                $table->string('register')->nullable();
                $table->timestamp('r_date')->useCurrent();
                $table->string('r_user')->nullable();
                $table->string('construction')->nullable();
                $table->timestamp('c_date')->useCurrent();
                $table->string('c_user')->nullable();
                $table->string('fourpage')->nullable();
                $table->timestamp('f_date')->useCurrent();
                $table->string('f_user')->nullable();
                $table->string('threepage')->nullable();
                $table->timestamp('t_date')->useCurrent();
                $table->string('t_user')->nullable();
                $table->string('comingback')->nullable();
                $table->timestamp('b_date')->useCurrent();
                $table->string('b_user')->nullable();
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
        Schema::dropIfExists('tb_pagepages_content');
    }
}
