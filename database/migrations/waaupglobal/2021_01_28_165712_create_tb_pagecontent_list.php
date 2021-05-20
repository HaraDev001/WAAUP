<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbPagecontentList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_pagecontent_list')==false) {
            Schema::connection('waaupglobal')->create('tb_pagecontent_list', function (Blueprint $table) {
                $table->id();
                $table->string('trans', 50)->nullable();
                $table->integer('pagetypeId')->index()->default(0);
                $table->string('title')->nullable();
                $table->string('author')->nullable();
                $table->string('url', 512)->nullable();
                $table->integer('priority')->default(0);
                $table->string('shstate', 10)->default('1');
                $table->text('content', 10)->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();
                $table->integer('auth_state')->default(0);
                $table->integer('type_state')->default(0);
                $table->integer('date_state')->default(0);
                $table->integer('is_contentlist')->default(0);
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
        Schema::dropIfExists('tb_pagecontent_list');
    }
}
