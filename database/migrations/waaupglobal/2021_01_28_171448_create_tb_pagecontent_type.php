<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbPagecontentType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_pagecontent_type')==false) {
            Schema::connection('waaupglobal')->create('tb_pagecontent_type', function (Blueprint $table) {
                $table->id();
                $table->string('trans', 50)->nullable();
                $table->string('name')->nullable();
                $table->integer('item_cnt')->default(1);
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();
                $table->integer('is_contenttype')->default(0);
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
        Schema::dropIfExists('tb_pagecontent_type');
    }
}
