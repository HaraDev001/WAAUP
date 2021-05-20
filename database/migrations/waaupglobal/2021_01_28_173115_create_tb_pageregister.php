<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbPageregister extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupglobal')->hasTable('tb_pageregister')==false) {
            Schema::connection('waaupglobal')->create('tb_pageregister', function (Blueprint $table) {
                $table->id();
                $table->string('trans', 50)->index()->nullable();
                $table->string('type', 50)->nullable();
                $table->text('content')->nullable();
                $table->integer('is_register')->default(0);
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
        Schema::dropIfExists('tb_pageregister');
    }
}
