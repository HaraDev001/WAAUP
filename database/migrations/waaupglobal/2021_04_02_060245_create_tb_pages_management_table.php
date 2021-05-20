<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbPagesManagementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_pages_management')==false) {
            Schema::connection('waaupglobal')->create('tb_pages_management', function (Blueprint $table) {
                $table->id();
                $table->string('trans')->default('en-1');
                $table->string('page_name')->nullable();
                $table->string('page_type')->nullable();
                $table->string('language')->nullable();
                $table->string('title')->nullable();
                $table->string('author')->nullable();
                $table->tinyInteger('is_author')->default(1);
                $table->timestamp('created_at')->useCurrent();
                $table->tinyInteger('is_time')->default(1);
                $table->string('url')->nullable();
                $table->integer('layout')->nullable();
                $table->integer('head')->nullable();
                $table->tinyInteger('is_head')->default(0);
                $table->integer('foot')->nullable();
                $table->tinyInteger('is_foot')->default(0);
                $table->text('content')->nullable();
                $table->tinyInteger('active')->default(1);
                $table->tinyInteger('status')->default(1);
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
        Schema::dropIfExists('tb_pages_management');
    }
}
